# Pro (ad-free) auth worker

"Log in with Gumroad" → verify an active **pro** subscription → set the
`ptio_pro=1` cookie on `.periodic-table.io` so the site stops loading ads.

Pro product: https://periodictabio.gumroad.com/l/pro (set price to **$1 / month, recurring**).

## One-time setup

### 1. Gumroad
1. **Product** → set the `pro` product to a **$1/month** membership (recurring).
2. **OAuth application** - Gumroad → *Settings → Advanced → Applications → Create application*:
   - Redirect URI: `https://pro.periodic-table.io/callback`
   - Copy the **Application ID** → `GUMROAD_CLIENT_ID` (var) and **Application Secret** → `GUMROAD_CLIENT_SECRET` (secret).
   - Confirm the OAuth **scope** needed for `GET /v2/user` to return the email (worker currently requests `view_sales`; adjust if Gumroad docs differ).
3. **API token** - *Settings → Advanced → generate an access token* → `GUMROAD_SELLER_TOKEN` (secret). Used to backfill existing subscribers before their first webhook.
4. **Ping/webhook** - point Gumroad's *Ping* (and the resource-subscription webhooks: cancellation, subscription_ended, subscription_updated, refund) at `https://pro.periodic-table.io/ping?key=<PING_KEY>` - the same random string you set as the `PING_KEY` secret. Gumroad can't sign webhooks, so this shared secret in the URL is what stops anyone else from POSTing fake membership updates.

### 2. Cloudflare
```sh
cd pro-worker
# Uses the latest Wrangler so the command syntax is current. On Wrangler < 3.60
# the KV command is the colon form instead: `wrangler kv:namespace create PRO_MEMBERS`
npx wrangler@latest kv namespace create PRO_MEMBERS   # paste id into wrangler.toml
npx wrangler@latest secret put GUMROAD_CLIENT_SECRET
npx wrangler@latest secret put GUMROAD_SELLER_TOKEN
npx wrangler@latest secret put STATE_SECRET           # any long random string
npx wrangler@latest secret put PING_KEY               # any long random string; also goes in the webhook URL (step 4 above)
# add the `pro` DNS record (proxied) in the dashboard, then:
npx wrangler@latest deploy
```
Fill the `REPLACE_WITH_*` placeholders in `wrangler.toml` first.
(Check your version with `npx wrangler --version`.)

## How it fits the site
- The site's ad loader (in `htmlGenerator.js`) only injects AdSense when the
  `ptio_pro` cookie is **absent**. The worker sets that cookie (domain-wide) on
  a successful login, so every language subdomain goes ad-free at once.
- Settings shows Pro status and the login / subscribe / logout links, which point
  at this worker (`/login`, `/logout`) and the Gumroad product URL.

## Verify against real data
The Gumroad **sale/ping field names** for cancellations vary by plan. After a
test subscribe + cancel, log the `/ping` body and the `/v2/sales` payload and
adjust `isActivePro()` / `ping()` field checks in `worker.js` if needed.

## Endpoints
`/login?return=<url>` · `/callback` · `/status` · `/logout?return=<url>` · `/ping`
