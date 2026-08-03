const fs = require("fs");
const Constants = require("./htmlConstants.js");

// One generator for all single-tool pages. To add a tool: drop a new entry in
// TOOLS (title/intro/engines/init/strings), add its slug to the `pages` array
// + a `case` in htmlGenerator.js, and a link in the nav "Tools" dropdown.
//
// Client engines are inlined (they only run on their tool page). MOLAR_WEIGHTS
// is baked from htmlConstants so the tools need no runtime element-data file.

const engineCache = {};
function engine(file) {
  if (!engineCache[file]) engineCache[file] = fs.readFileSync(__dirname + "/" + file, "utf8");
  return engineCache[file];
}

const TOOLS = {
  "molar-mass-calculator": {
    title: (lv) => lv.molarMass || "Molar Mass Calculator",
    intro: (lv) => lv.molarIntro || "Type a chemical formula to get its molar mass.",
    engines: ["molar-client.js"],
    strings: (lv) => ({
      label: lv.molarLabel || "Enter a chemical formula",
      placeholder: lv.molarPlaceholder || "e.g. Ca(OH)2, CuSO4·5H2O",
      unit: lv.molarUnit || "g/mol",
    }),
    init: (t) =>
      `window.Molar.initMolar(document.getElementById('toolApp'),{weights:window.MOLAR_WEIGHTS,t:${t}});`,
  },
  "equation-balancer": {
    title: (lv) => lv.equationBalancer || "Equation Balancer",
    intro: (lv) => lv.balancerIntro || "Type an unbalanced equation to balance it. A Pro feature.",
    engines: ["molar-client.js", "balancer-client.js"], // balancer reuses the molar parser
    strings: (lv) => ({
      label: lv.balancerLabel || "Enter an unbalanced equation",
      placeholder: lv.balancerPlaceholder || "e.g. C3H8 + O2 -> CO2 + H2O",
      proTitle: lv.balancerProTitle || "Equation balancer is a Pro feature",
      proText: lv.balancerProText || "Balance any equation instantly, ad-free.",
      proCta: lv.removeAds || "Remove ads - $1/month",
    }),
    init: (t) =>
      `window.Balancer.initBalancer(document.getElementById('toolApp'),{weights:window.MOLAR_WEIGHTS,t:${t},` +
      `onSubscribe:function(){if(window.sideBar){window.sideBar();}else{location.href='https://periodictabio.gumroad.com/l/pro';}}});`,
  },
  "percent-composition-calculator": {
    title: (lv) => lv.percentComposition || "Percent Composition",
    intro: (lv) => lv.percentIntro || "Type a formula to get each element's percent by mass.",
    engines: ["molar-client.js"],
    strings: (lv) => ({
      label: lv.percentLabel || "Enter a chemical formula",
      placeholder: lv.percentPlaceholder || "e.g. C6H12O6",
    }),
    init: (t) =>
      `window.Molar.initPercent(document.getElementById('toolApp'),{weights:window.MOLAR_WEIGHTS,t:${t}});`,
  },
  "ideal-gas-law-calculator": {
    title: (lv) => lv.idealGas || "Ideal Gas Law Calculator",
    intro: (lv) => lv.idealGasIntro || "Fill any three of PV = nRT to solve for the fourth.",
    engines: ["idealgas-client.js"],
    strings: (lv) => ({
      p: lv.idealGasP || "Pressure (atm)",
      v: lv.idealGasV || "Volume (L)",
      n: lv.idealGasN || "Moles (mol)",
      t: lv.idealGasT || "Temperature (K)",
      note: lv.idealGasNote || "Leave one field blank. R = 0.082057 L·atm·mol⁻¹·K⁻¹ (use atm, L, mol, K).",
    }),
    init: (t) => `window.IdealGas.initIdealGas(document.getElementById('toolApp'),{t:${t}});`,
  },
  "molarity-calculator": {
    title: (lv) => lv.molarity || "Molarity Calculator",
    intro: (lv) => lv.molarityIntro || "Enter a formula, then two of mass / volume / molarity to solve the third.",
    engines: ["molar-client.js", "molarity-client.js"],
    strings: (lv) => ({
      formula: lv.molarityFormula || "Formula or molar mass (g/mol)",
      formulaPh: lv.molarityFormulaPh || "e.g. NaCl or 58.44",
      mass: lv.molarityMass || "Mass (g)",
      volume: lv.molarityVolume || "Volume (L)",
      molarity: lv.molarityMolarity || "Molarity (mol/L)",
      molarMassLabel: lv.molarMass2 || "Molar mass",
      note: lv.molarityNote || "Then leave one of the three blank to solve for it.",
    }),
    init: (t) => `window.Molarity.initMolarity(document.getElementById('toolApp'),{weights:window.MOLAR_WEIGHTS,t:${t}});`,
  },
  "dilution-calculator": {
    title: (lv) => lv.dilution || "Dilution Calculator",
    intro: (lv) => lv.dilutionIntro || "Fill any three of C₁V₁ = C₂V₂ to solve for the fourth.",
    engines: ["dilution-client.js"],
    strings: (lv) => ({
      note: lv.dilutionNote || "Leave one field blank. Keep concentration units the same, and volume units the same.",
    }),
    init: (t) => `window.Dilution.initDilution(document.getElementById('toolApp'),{t:${t}});`,
  },
  "percent-yield-calculator": {
    title: (lv) => lv.percentYield || "Percent Yield Calculator",
    intro: (lv) => lv.percentYieldIntro || "Fill any two of actual / theoretical / percent yield to solve the third.",
    engines: ["yield-client.js"],
    strings: (lv) => ({
      actual: lv.yieldActual || "Actual yield (g)",
      theoretical: lv.yieldTheoretical || "Theoretical yield (g)",
      percent: lv.yieldPercent || "Percent yield (%)",
      note: lv.yieldNote || "Leave one field blank to solve for it.",
    }),
    init: (t) => `window.PercentYield.initYield(document.getElementById('toolApp'),{t:${t}});`,
  },
  "half-life-calculator": {
    title: (lv) => lv.halfLifeCalc || "Half-Life Calculator",
    intro: (lv) => lv.halfLifeIntro || "Radioactive decay N = N₀ · (½)^(t / t½). Fill any three to solve the fourth. A Pro feature.",
    engines: ["halflife-client.js"],
    strings: (lv) => ({
      n0: lv.halfLifeN0 || "Initial amount (N₀)",
      n: lv.halfLifeN || "Remaining amount (N)",
      t: lv.halfLifeT || "Elapsed time",
      half: lv.halfLifeHalf || "Half-life (same time unit)",
      note: lv.halfLifeNote || "Leave one field blank. Use the same time unit for elapsed time and half-life.",
      proTitle: lv.halfLifeProTitle || "Half-life calculator is a Pro feature",
      proText: lv.halfLifeProText || "Solve decay problems instantly, ad-free.",
      proCta: lv.removeAds || "Remove ads - $1/month",
    }),
    init: (t) =>
      `window.HalfLife.initHalfLife(document.getElementById('toolApp'),{t:${t},` +
      `onSubscribe:function(){if(window.sideBar){window.sideBar();}else{location.href='https://periodictabio.gumroad.com/l/pro';}}});`,
  },
  "ph-calculator": {
    title: (lv) => lv.phCalc || "pH Calculator",
    intro: (lv) => lv.phCalcIntro || "Enter any one of pH, pOH, [H⁺] or [OH⁻] to get the rest.",
    engines: ["ph-client.js"],
    strings: (lv) => ({
      ph: lv.phCalcPh || "pH",
      poh: lv.phCalcPoh || "pOH",
      h: lv.phCalcH || "[H⁺] (mol/L)",
      oh: lv.phCalcOh || "[OH⁻] (mol/L)",
      note: lv.phCalcNote || "Enter any one value to get the rest. Assumes 25 °C (Kw = 1.0×10⁻¹⁴).",
    }),
    init: (t) => `window.PH.initPH(document.getElementById('toolApp'),{t:${t}});`,
  },
  "empirical-formula-calculator": {
    title: (lv) => lv.empiricalFormula || "Empirical Formula",
    intro: (lv) => lv.empiricalIntro || "Enter element percentages to find the simplest formula. A Pro feature.",
    engines: ["empirical-client.js"],
    strings: (lv) => ({
      label: lv.empiricalLabel || "Enter element percentages or masses",
      placeholder: lv.empiricalPlaceholder || "e.g. C 40, H 6.7, O 53.3",
      proTitle: lv.empiricalProTitle || "Empirical formula is a Pro feature",
      proText: lv.empiricalProText || "Find formulas from composition, ad-free.",
      proCta: lv.removeAds || "Remove ads - $1/month",
      approx: lv.empiricalApprox || "Approximate - check your inputs.",
    }),
    init: (t) =>
      `window.Empirical.initEmpirical(document.getElementById('toolApp'),{weights:window.MOLAR_WEIGHTS,t:${t},` +
      `onSubscribe:function(){if(window.sideBar){window.sideBar();}else{location.href='https://periodictabio.gumroad.com/l/pro';}}});`,
  },
};

// Atomic weights keyed by symbol, parsed from htmlConstants `aWt`
// ("1,008" / "[227]"). Built once and shared across tool pages.
let WEIGHTS = null;
function weights() {
  if (WEIGHTS) return WEIGHTS;
  WEIGHTS = {};
  const seen = new Set();
  Constants.rawData.forEach((e) => {
    if (seen.has(e.sym)) return;
    seen.add(e.sym);
    const w = parseFloat(String(e.aWt).replace(/[\[\]]/g, "").replace(",", "."));
    if (isFinite(w)) WEIGHTS[e.sym] = w;
  });
  return WEIGHTS;
}

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  const tool = TOOLS[page];
  if (!tool) throw new Error("Unknown tool page: " + page);
  const writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  defaultHead.forEach((h) => writeStream.write(h));
  metaTags.forEach((t) => writeStream.write(t));
  defaultNav.forEach((n) => writeStream.write(n));

  writeStream.write(`<h1 class='truncate'>${tool.title(langValues)}</h1>`);

  nav4.forEach((n) => writeStream.write(n));

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write(`<div class='toolIntro grayText'>${tool.intro(langValues)}</div>`);
  writeStream.write("<div id='toolApp' class='toolApp'></div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  writeStream.write(`<script>window.MOLAR_WEIGHTS=${JSON.stringify(weights())};</script>`);
  tool.engines.forEach((f) => writeStream.write(`<script>${engine(f)}</script>`));
  writeStream.write(`<script>${tool.init(JSON.stringify(tool.strings(langValues)))}</script>`);

  defaultFooter.forEach((f) => writeStream.write(f));

  writeStream.on("finish", () => console.log(`Created ${lang}-${page}`));
  writeStream.end();
};

exports.writeFile = writeFile;
exports.TOOL_PAGES = Object.keys(TOOLS);
