const fs = require("fs");
const Constants = require("./htmlConstants.js");
const extraData = require("./element-extra-data.js");

// "Property Rankings" page: an interactive ranked heat-bar view of numeric
// element properties (the electronegativity chart, generalised). Data is baked
// from htmlConstants + element-extra-data; trends-client.js does the ranking.

// Parse an htmlConstants value ("1,008" / "[227]" / "-" / "na") to a number.
function toNum(v) {
  if (v == null) return null;
  var s = String(v).replace(/\[|\]/g, "").replace(",", ".").trim();
  if (s === "" || s === "-" || s.toLowerCase() === "na") return null;
  var n = parseFloat(s);
  return isFinite(n) ? n : null;
}

// Properties to offer, with how to read each element's value. Labels use a
// translation key with an English fallback; units are shown literally.
const PROPS = [
  { key: "eNg", labelKey: "propElectronegativity", label: "Electronegativity", unit: "Pauling", read: (e) => toNum(e.eNg) },
  { key: "aWt", labelKey: "propAtomicWeight", label: "Atomic Weight", unit: "u", read: (e) => toNum(e.aWt) },
  { key: "dns", labelKey: "propDensity", label: "Density", unit: "g/cm³", read: (e) => toNum(e.dns) },
  { key: "mlt", labelKey: "propMelting", label: "Melting Point", unit: "°C", read: (e) => toNum(e.mlt) },
  { key: "bln", labelKey: "propBoiling", label: "Boiling Point", unit: "°C", read: (e) => toNum(e.bln) },
  { key: "aRd", labelKey: "propAtomicRadius", label: "Atomic Radius", unit: "pm", read: (e) => toNum(e.aRd) },
  { key: "ion", labelKey: "propIonization", label: "First Ionization Energy", unit: "eV", read: (e) => toNum(e.ion) },
  { key: "ea", labelKey: "propElectronAffinity", label: "Electron Affinity", unit: "kJ/mol", read: (e) => { var x = extraData[e.num]; return x && x.ea != null ? x.ea : null; } },
  { key: "trm", labelKey: "propThermal", label: "Thermal Conductivity", unit: "W/(m·K)", read: (e) => toNum(e.trm) },
];

function elName(lv, nme) {
  return lv[nme] || (nme.charAt(0).toUpperCase() + nme.slice(1));
}

function buildData(lv) {
  const props = PROPS.map((p) => ({ key: p.key, label: lv[p.labelKey] || p.label, unit: p.unit }));
  const elements = Constants.rawData.map((e) => {
    const v = {};
    PROPS.forEach((p) => { v[p.key] = p.read(e); });
    return { s: e.sym, n: elName(lv, e.nme), z: e.num, v: v };
  });
  return { props, elements };
}

const engineSrc = (() => {
  let cache = null;
  return () => (cache = cache || fs.readFileSync(__dirname + "/trends-client.js", "utf8"));
})();

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  const writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  defaultHead.forEach((h) => writeStream.write(h));
  metaTags.forEach((t) => writeStream.write(t));
  defaultNav.forEach((n) => writeStream.write(n));

  const title = langValues.propertyRankings || "Property Rankings";
  writeStream.write(`<h1 class='truncate'>${title}</h1>`);

  nav4.forEach((n) => writeStream.write(n));

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write(
    `<div class='toolIntro grayText'>${langValues.propertyRankingsIntro ||
      "Rank every element by a property, from highest to lowest."}</div>`
  );
  writeStream.write("<div id='trendApp' class='toolApp trendApp'></div>");
  writeStream.write("</div>");
  writeStream.write("</section>");

  const strings = {
    rankBy: langValues.trendRankBy || "Rank by",
    toggleOrder: langValues.trendToggleOrder || "Toggle order",
    element: langValues.trendElement || "Element",
    symbol: langValues.trendSymbol || "Symbol",
  };

  writeStream.write(`<script>window.TRENDS_DATA=${JSON.stringify(buildData(langValues))};</script>`);
  writeStream.write(`<script>${engineSrc()}</script>`);
  writeStream.write(
    `<script>window.Trends.initTrends(document.getElementById('trendApp'),` +
      `{data:window.TRENDS_DATA,t:${JSON.stringify(strings)}});</script>`
  );

  defaultFooter.forEach((f) => writeStream.write(f));

  writeStream.on("finish", () => console.log(`Created ${lang}-${page}`));
  writeStream.end();
};

exports.writeFile = writeFile;
exports.PROPS = PROPS;
