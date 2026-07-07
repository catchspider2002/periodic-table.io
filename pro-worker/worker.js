/**
 * periodic-table.io "Pro" (ad-free) auth worker.
 *
 * Flow: user clicks "Log in with Gumroad" -> Gumroad OAuth -> we read their
 * verified Gumroad email -> check if that email is an active subscriber of the
 * "pro" product -> set a cookie `ptio_pro=1` on `.periodic-table.io` so every
 * language subdomain hides ads (see the ad-gate inline script in htmlGenerator.js).
 *
 * The active-subscriber list lives in KV (`PRO_MEMBERS`, key = lowercased email),
 * kept up to date by Gumroad "Ping"/resource-subscription webhooks hitting /ping.
 *
 * Endpoints:
 *   GET  /login?return=<url>   -> redirect to Gumroad OAuth
 *   GET  /callback             -> OAuth callback; sets/rejects the Pro cookie
 *   GET  /status               -> { pro: bool } for the current cookie
 *   GET  /logout?return=<url>  -> clears the Pro cookie
 *   POST /ping                 -> Gumroad webhook; updates KV
 *
 * Required env (wrangler.toml [vars] + `wrangler secret put`):
 *   GUMROAD_CLIENT_ID, GUMROAD_CLIENT_SECRET  (OAuth application)
 *   GUMROAD_SELLER_TOKEN                       (your API access token, for backfill checks)
 *   GUMROAD_PRODUCT_PERMALINK                  (e.g. "pro")
 *   GUMROAD_PRODUCT_ID                         (product id from GET /v2/products)
 *   REDIRECT_URI          (e.g. https://pro.periodic-table.io/callback)
 *   COOKIE_DOMAIN         (.periodic-table.io)
 *   ALLOWED_RETURN_SUFFIX (periodic-table.io) -- open-redirect guard
 *   STATE_SECRET          (random string; signs the OAuth state cookie)
 *   PING_KEY              (random string; register the webhook URL as /ping?key=<PING_KEY>)
 * Required binding: KV namespace `PRO_MEMBERS`.
 */

const COOKIE = "ptio_pro";
const STATE_COOKIE = "ptio_oauth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days; re-login refreshes it

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      switch (url.pathname) {
        case "/login":
          return login(url, env);
        case "/callback":
          return callback(url, request, env);
        case "/status":
          return status(request, env);
        case "/logout":
          return logout(url, env);
        default:
          // /ping?key=<PING_KEY> or /ping/<PING_KEY> - the path form exists
          // because some webhook senders drop query strings from the post URL.
          if (url.pathname === "/ping" || url.pathname.startsWith("/ping/")) return ping(url, request, env);
          return json({ ok: true, service: "ptio-pro" });
      }
    } catch (err) {
      return json({ error: String(err && err.message || err) }, 500);
    }
  },
};

/* ------------------------------------------------------------------ login --- */

async function login(url, env) {
  const ret = safeReturn(url.searchParams.get("return"), env);
  // Signed state carries the return URL + a nonce, echoed back on /callback.
  const nonce = crypto.randomUUID();
  const state = await sign(`${nonce}|${ret}`, env.STATE_SECRET);
  const auth = new URL("https://gumroad.com/oauth/authorize");
  auth.searchParams.set("client_id", env.GUMROAD_CLIENT_ID);
  auth.searchParams.set("redirect_uri", env.REDIRECT_URI);
  auth.searchParams.set("scope", "view_sales"); // NOTE: confirm scope in Gumroad docs
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("state", state);
  return new Response(null, {
    status: 302,
    headers: {
      Location: auth.toString(),
      "Set-Cookie": cookie(STATE_COOKIE, state, { maxAge: 600, httpOnly: true, domain: env.COOKIE_DOMAIN }),
    },
  });
}

/* --------------------------------------------------------------- callback --- */

async function callback(url, request, env) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const stateCookie = getCookie(request, STATE_COOKIE);
  const payload = await verify(state || "", env.STATE_SECRET);
  if (!code || !state || state !== stateCookie || !payload) {
    return json({ error: "invalid_oauth_state" }, 400);
  }
  const ret = safeReturn(payload.split("|").slice(1).join("|"), env);

  // Exchange the code for an access token.
  const tokenRes = await fetch("https://api.gumroad.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: env.GUMROAD_CLIENT_ID,
      client_secret: env.GUMROAD_CLIENT_SECRET,
      redirect_uri: env.REDIRECT_URI,
      code,
    }),
  });
  const token = (await tokenRes.json()).access_token;
  if (!token) return redirect(ret, env, "login_failed");

  // Read the authorizing user's email.
  const userRes = await fetch(`https://api.gumroad.com/v2/user?access_token=${encodeURIComponent(token)}`);
  const user = await userRes.json();
  const email = user && user.user && (user.user.email || "").toLowerCase();
  if (!email) return redirect(ret, env, "no_email");

  const active = await isActivePro(email, env);
  if (!active) return redirect(ret, env, "not_subscribed");

  // Grant: set the ad-free cookie (JS-readable so the ad gate can check it).
  return new Response(null, {
    status: 302,
    headers: [
      ["Location", withParam(ret, "pro", "on")],
      ["Set-Cookie", cookie(COOKIE, "1", { maxAge: COOKIE_MAX_AGE, domain: env.COOKIE_DOMAIN })],
      ["Set-Cookie", cookie(STATE_COOKIE, "", { maxAge: 0, httpOnly: true, domain: env.COOKIE_DOMAIN })],
    ],
  });
}

/* ---------------------------------------------------- subscription check --- */

// Source of truth is KV (kept fresh by /ping). Falls back to the Gumroad sales
// API once, so existing subscribers work before their first webhook event.
async function isActivePro(email, env) {
  const key = email.toLowerCase();
  const cached = await env.PRO_MEMBERS.get(key);
  if (cached === "active") return true;
  if (cached === "inactive") return false;

  // Backfill via the seller API (verify against your real payload; field names
  // for cancellation differ by Gumroad plan -- adjust as needed).
  const api = new URL("https://api.gumroad.com/v2/sales");
  api.searchParams.set("access_token", env.GUMROAD_SELLER_TOKEN);
  api.searchParams.set("email", email);
  const res = await fetch(api.toString());
  const data = await res.json();
  const sales = (data && data.sales) || [];
  // Match on product_id: the sales API's `product_permalink` is Gumroad's short
  // random ID (e.g. "RsUKZ"), NOT the custom permalink, so matching "pro"
  // against it never hits. NB: seller test purchases don't appear in /v2/sales
  // at all -- test the success path via a KV override, not a test purchase.
  // Live-status fields verified against a real sale payload (2026-07): they are
  // the booleans `ended` / `cancelled`, not `subscription_ended_at` etc.
  const active = sales.some(
    (s) =>
      s.product_id === env.GUMROAD_PRODUCT_ID &&
      s.subscription_id &&
      !s.refunded &&
      !s.chargedback &&
      !s.ended &&
      !s.cancelled
  );
  // Cache "active" generously; "inactive" only briefly. A long negative cache
  // breaks the subscribe-then-log-in flow: the pre-purchase login attempt would
  // pin the new subscriber to "inactive" long after they've paid.
  await env.PRO_MEMBERS.put(key, active ? "active" : "inactive", {
    expirationTtl: active ? 60 * 60 * 24 * 35 : 60 * 5,
  });
  return active;
}

/* ------------------------------------------------------------------- ping --- */

// Gumroad webhook (form-encoded). Marks the email active on sale/restart,
// inactive on cancellation/refund/subscription end -- only for the pro product.
//
// Gumroad can't sign webhooks, so the registered URL carries a shared secret
// (`/ping?key=<PING_KEY>`); requests without it are rejected. Fails closed if
// the secret isn't set.
//
// Field names differ by event type: sale pings send `email` and a bare
// `product_permalink`, while resource-subscription events (cancellation etc.)
// may send `user_email` and a full product URL. Active grants carry a TTL as a
// safety net, so a missed cancellation event degrades to a re-check via the
// sales API (isActivePro) instead of lifetime-free Pro.
async function ping(url, request, env) {
  const pathKey = url.pathname.startsWith("/ping/") ? decodeURIComponent(url.pathname.slice("/ping/".length)) : null;
  const key = url.searchParams.get("key") || pathKey;
  if (!env.PING_KEY || key !== env.PING_KEY) return json({ error: "forbidden" }, 403);

  const form = new URLSearchParams(await request.text());
  const email = (form.get("email") || form.get("user_email") || "").toLowerCase();
  const permalink = form.get("product_permalink") || form.get("permalink") || "";
  const isPro = form.get("product_id") === env.GUMROAD_PRODUCT_ID || matchesProduct(permalink, env);
  if (!email || !isPro) return json({ ignored: true });

  const ended =
    form.get("subscription_ended_at") ||
    form.get("subscription_cancelled_at") ||
    form.get("ended_at") ||
    form.get("cancelled_at") ||
    form.get("refunded") === "true" ||
    form.get("ended") === "true" ||
    form.get("cancelled") === "true";

  if (ended) {
    await env.PRO_MEMBERS.put(email, "inactive");
  } else {
    await env.PRO_MEMBERS.put(email, "active", { expirationTtl: 60 * 60 * 24 * 35 });
  }
  return json({ ok: true });
}

// Accepts both the bare permalink ("pro") and a full product URL
// (".../l/pro", possibly with a query string), depending on the event type.
function matchesProduct(permalink, env) {
  const want = env.GUMROAD_PRODUCT_PERMALINK;
  if (!permalink || !want) return false;
  const p = permalink.split("?")[0].replace(/\/+$/, "");
  return p === want || p.endsWith(`/${want}`);
}

/* ----------------------------------------------------------- status/logout --- */

function status(request, env) {
  return json({ pro: getCookie(request, COOKIE) === "1" });
}

function logout(url, env) {
  const ret = safeReturn(url.searchParams.get("return"), env);
  return new Response(null, {
    status: 302,
    headers: {
      Location: withParam(ret, "pro", "off"),
      "Set-Cookie": cookie(COOKIE, "", { maxAge: 0, domain: env.COOKIE_DOMAIN }),
    },
  });
}

/* ---------------------------------------------------------------- helpers --- */

function json(obj, code = 200) {
  return new Response(JSON.stringify(obj), {
    status: code,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function redirect(ret, env, reason) {
  return new Response(null, { status: 302, headers: { Location: withParam(ret, "pro", reason) } });
}

function withParam(u, k, v) {
  const url = new URL(u);
  url.searchParams.set(k, v);
  return url.toString();
}

// Only allow redirects back to your own domain (prevents open-redirect abuse).
// Exact match or dot-boundary subdomain match -- a bare endsWith() would also
// accept lookalike registrations like "evilperiodic-table.io".
function safeReturn(ret, env) {
  try {
    const u = new URL(ret);
    const suffix = env.ALLOWED_RETURN_SUFFIX;
    if (u.protocol === "https:" && (u.hostname === suffix || u.hostname.endsWith(`.${suffix}`))) return u.toString();
  } catch (e) {}
  return `https://periodic-table.io/`;
}

function cookie(name, value, { maxAge, httpOnly, domain }) {
  let c = `${name}=${value}; Path=/; Max-Age=${maxAge}; Domain=${domain}; Secure; SameSite=Lax`;
  if (httpOnly) c += "; HttpOnly";
  return c;
}

function getCookie(request, name) {
  const m = (request.headers.get("Cookie") || "").match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return m ? m[1] : null;
}

// HMAC-signed state: "<base64url(payload)>.<sig>" so the return URL can't be
// tampered with. base64url-encoding the payload keeps the '.' separator
// unambiguous (raw URLs contain dots). verify() returns the payload or null.
async function sign(payload, secret) {
  const p = b64url(payload);
  return `${p}.${await hmac(p, secret)}`;
}
async function verify(signed, secret) {
  const i = signed.lastIndexOf(".");
  if (i < 0) return null;
  const p = signed.slice(0, i);
  if (signed.slice(i + 1) !== (await hmac(p, secret))) return null;
  try {
    return b64urlDecode(p);
  } catch (e) {
    return null;
  }
}
function b64url(str) {
  return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlDecode(s) {
  return decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
}
async function hmac(data, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const buf = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
