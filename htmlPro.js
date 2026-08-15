const fs = require("fs");

// Dedicated Pro upgrade page (/pro). Server-rendered marketing surface listing
// every Pro benefit + price + subscribe/login CTAs. The Settings sidebar keeps
// the compact account widget (#proBox); this page is the canonical destination
// the footer link and upsell cues point to. Member state on this page is applied
// client-side by initPro() (htmlJS_actual.js) via the #proHero container.
const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  const escAttr = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/'/g, "&#39;").replace(/</g, "&lt;");

  // Per-language pages are served from language subdomains (en = apex).
  const website = lang === "en" ? "https://periodic-table.io" : `https://${lang}.periodic-table.io`;
  const ret = encodeURIComponent(`${website}/pro`);
  const GUMROAD_PRO = "https://periodictabio.gumroad.com/l/pro";
  const LOGIN_URL = `https://pro.periodic-table.io/login?return=${ret}`;

  const title = langValues.proTitle || "Periodic Table Pro";
  const tools =
    `${langValues.empiricalFormula || "Empirical Formula"}, ` +
    `${langValues.halfLifeCalc || "Half-Life Calculator"}, ` +
    `${langValues.equationBalancer || "Equation Balancer"}`;

  defaultHead.forEach((heads) => writeStream.write(heads));
  metaTags.forEach((tags) => writeStream.write(tags));
  defaultNav.forEach((navs) => writeStream.write(navs));

  writeStream.write(`<h1 class='truncate'>${title}</h1>`);

  nav4.forEach((navs) => writeStream.write(navs));

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='proCard'>");

  writeStream.write("<span class='proPill'>PRO</span>");
  writeStream.write(`<h2 class='proHeading'>${title}</h2>`);
  writeStream.write(`<p class='proTagline grayText'>${langValues.proTagline || "Support the site and unlock everything."}</p>`);

  writeStream.write("<ul class='proBenefits'>");
  writeStream.write(`<li><span class='proCheck'>&#10003;</span><span>${langValues.proBenefitAds || "Ad-free browsing"}</span></li>`);
  writeStream.write(`<li><span class='proCheck'>&#10003;</span><span>${langValues.proBenefitQuiz || "Element Quiz"}</span></li>`);
  writeStream.write(`<li><span class='proCheck'>&#10003;</span><span>${langValues.proBenefitTools || "Pro calculators"}<span class='grayText'> &mdash; ${tools}</span></span></li>`);
  writeStream.write(`<li><span class='proCheck'>&#10003;</span><span>${langValues.proSupport || "Support the site's development"}</span></li>`);
  writeStream.write("</ul>");

  writeStream.write(`<div class='proPrice'>${langValues.price || "$1/month"}</div>`);

  // Default (non-member) CTAs are server-rendered so the page works without JS;
  // initPro() swaps this for the "Pro active / Log out" state for members and
  // surfaces any login outcome (data-* strings below).
  writeStream.write(
    `<div id='proHero' class='proHero' data-pro-active='${escAttr(langValues.proActive)}' data-logout='${escAttr(langValues.logout)}'` +
      ` data-no-subscription='${escAttr(langValues.noSubscription)}' data-login-failed='${escAttr(langValues.loginFailed)}'>`
  );
  writeStream.write(
    `<a class='proCta' target='_blank' rel='noopener noreferrer' href='${GUMROAD_PRO}'>${langValues.proSubscribe || "Subscribe"}</a>`
  );
  writeStream.write(`<a class='underlineLink' href='${LOGIN_URL}'>${langValues.login || "Already a member? Log in with Gumroad"}</a>`);
  writeStream.write("</div>");

  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</section>");

  defaultFooter.forEach((footers) => writeStream.write(footers));

  writeStream.on("finish", () => {
    console.log(`Created ${lang}-${page}`);
  });

  writeStream.end();
};

exports.writeFile = writeFile;
