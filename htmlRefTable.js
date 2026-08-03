const fs = require("fs");
const flameColors = require("./flame-colors.js");

// One generator for all static reference tables in the "Tables" dropdown.
// To add a table: drop a new entry in TABLES (title/intro/columns/rows), add
// its slug to the `pages` array + a `case` in htmlGenerator.js, and a link in
// the nav "Tables" dropdown.
//
// Formulas, charges and colour swatches are language-neutral. Translatable
// text (ion/acid names, colour words, categories) uses a `lv.key || "English"`
// fallback so the page works before the strings are translated. Element names
// reuse the existing element-name keys already in the translation sheet.

const TABLES = {
  "polyatomic-ions": {
    title: (lv) => lv.polyatomicIons || "Polyatomic Ions",
    intro: (lv) => lv.polyatomicIonsIntro || "Common polyatomic ions with their formulas and charges.",
    columns: (lv) => [lv.ionName || "Name", lv.ionFormula || "Formula", lv.ionCharge || "Charge"],
    rows: (lv) => [
      [lv.ionAmmonium || "Ammonium", "NH<sub>4</sub><sup>+</sup>", "+1"],
      [lv.ionHydronium || "Hydronium", "H<sub>3</sub>O<sup>+</sup>", "+1"],
      [lv.ionHydroxide || "Hydroxide", "OH<sup>-</sup>", "-1"],
      [lv.ionNitrate || "Nitrate", "NO<sub>3</sub><sup>-</sup>", "-1"],
      [lv.ionNitrite || "Nitrite", "NO<sub>2</sub><sup>-</sup>", "-1"],
      [lv.ionBicarbonate || "Hydrogen carbonate (bicarbonate)", "HCO<sub>3</sub><sup>-</sup>", "-1"],
      [lv.ionAcetate || "Acetate", "CH<sub>3</sub>COO<sup>-</sup>", "-1"],
      [lv.ionCyanide || "Cyanide", "CN<sup>-</sup>", "-1"],
      [lv.ionPermanganate || "Permanganate", "MnO<sub>4</sub><sup>-</sup>", "-1"],
      [lv.ionHypochlorite || "Hypochlorite", "ClO<sup>-</sup>", "-1"],
      [lv.ionChlorite || "Chlorite", "ClO<sub>2</sub><sup>-</sup>", "-1"],
      [lv.ionChlorate || "Chlorate", "ClO<sub>3</sub><sup>-</sup>", "-1"],
      [lv.ionPerchlorate || "Perchlorate", "ClO<sub>4</sub><sup>-</sup>", "-1"],
      [lv.ionCarbonate || "Carbonate", "CO<sub>3</sub><sup>2-</sup>", "-2"],
      [lv.ionSulfate || "Sulfate", "SO<sub>4</sub><sup>2-</sup>", "-2"],
      [lv.ionSulfite || "Sulfite", "SO<sub>3</sub><sup>2-</sup>", "-2"],
      [lv.ionChromate || "Chromate", "CrO<sub>4</sub><sup>2-</sup>", "-2"],
      [lv.ionDichromate || "Dichromate", "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>", "-2"],
      [lv.ionOxalate || "Oxalate", "C<sub>2</sub>O<sub>4</sub><sup>2-</sup>", "-2"],
      [lv.ionThiosulfate || "Thiosulfate", "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>", "-2"],
      [lv.ionPeroxide || "Peroxide", "O<sub>2</sub><sup>2-</sup>", "-2"],
      [lv.ionSilicate || "Silicate", "SiO<sub>3</sub><sup>2-</sup>", "-2"],
      [lv.ionPhosphate || "Phosphate", "PO<sub>4</sub><sup>3-</sup>", "-3"],
      [lv.ionPhosphite || "Phosphite", "PO<sub>3</sub><sup>3-</sup>", "-3"],
      [lv.ionBorate || "Borate", "BO<sub>3</sub><sup>3-</sup>", "-3"],
    ],
  },

  "acids-and-bases": {
    title: (lv) => lv.acidsBases || "Common Acids & Bases",
    intro: (lv) => lv.acidsBasesIntro || "Common acids and bases with their formulas and strength.",
    columns: (lv) => [lv.abName || "Name", lv.abFormula || "Formula", lv.abType || "Type"],
    rows: (lv) => {
      var SA = lv.abStrongAcid || "Strong acid", WA = lv.abWeakAcid || "Weak acid",
        SB = lv.abStrongBase || "Strong base", WB = lv.abWeakBase || "Weak base";
      return [
        [lv.abHydrochloric || "Hydrochloric acid", "HCl", SA],
        [lv.abSulfuric || "Sulfuric acid", "H<sub>2</sub>SO<sub>4</sub>", SA],
        [lv.abNitric || "Nitric acid", "HNO<sub>3</sub>", SA],
        [lv.abHydrobromic || "Hydrobromic acid", "HBr", SA],
        [lv.abHydroiodic || "Hydroiodic acid", "HI", SA],
        [lv.abPerchloric || "Perchloric acid", "HClO<sub>4</sub>", SA],
        [lv.abPhosphoric || "Phosphoric acid", "H<sub>3</sub>PO<sub>4</sub>", WA],
        [lv.abAcetic || "Acetic acid", "CH<sub>3</sub>COOH", WA],
        [lv.abCarbonic || "Carbonic acid", "H<sub>2</sub>CO<sub>3</sub>", WA],
        [lv.abHydrofluoric || "Hydrofluoric acid", "HF", WA],
        [lv.abCitric || "Citric acid", "C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>", WA],
        [lv.abSodiumHydroxide || "Sodium hydroxide", "NaOH", SB],
        [lv.abPotassiumHydroxide || "Potassium hydroxide", "KOH", SB],
        [lv.abLithiumHydroxide || "Lithium hydroxide", "LiOH", SB],
        [lv.abCalciumHydroxide || "Calcium hydroxide", "Ca(OH)<sub>2</sub>", SB],
        [lv.abBariumHydroxide || "Barium hydroxide", "Ba(OH)<sub>2</sub>", SB],
        [lv.abAmmonia || "Ammonia", "NH<sub>3</sub>", WB],
        [lv.abSodiumBicarbonate || "Sodium bicarbonate", "NaHCO<sub>3</sub>", WB],
      ];
    },
  },

  "flame-test-colors": {
    title: (lv) => lv.flameTest || "Flame Test Colours",
    intro: (lv) => lv.flameTestIntro || "Characteristic flame colours used to identify metal ions.",
    columns: (lv) => [lv.ftElement || "Element", lv.ftColor || "Flame colour"],
    rows: (lv) =>
      flameColors.FLAME_COLORS.map(function (f) {
        var name = lv[f.nme] || (f.nme.charAt(0).toUpperCase() + f.nme.slice(1));
        var color = lv[f.colorKey] || f.colorEn;
        return [name, "<span class='flameSwatch' style='background:" + f.hex + "'></span>" + color];
      }),
  },

};

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  const table = TABLES[page];
  if (!table) throw new Error("Unknown reference table page: " + page);
  const writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  defaultHead.forEach((h) => writeStream.write(h));
  metaTags.forEach((t) => writeStream.write(t));
  defaultNav.forEach((n) => writeStream.write(n));

  writeStream.write(`<h1 class='truncate'>${table.title(langValues)}</h1>`);

  nav4.forEach((n) => writeStream.write(n));

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write(`<div class='toolIntro grayText'>${table.intro(langValues)}</div>`);

  const cols = table.columns(langValues);
  const rows = table.rows(langValues);
  writeStream.write("<div class='refTableWrap'>");
  writeStream.write("<table class='refTable'>");
  writeStream.write("<thead><tr>");
  cols.forEach((c) => writeStream.write(`<th>${c}</th>`));
  writeStream.write("</tr></thead>");
  writeStream.write("<tbody>");
  rows.forEach((r) => {
    writeStream.write("<tr>");
    r.forEach((cell) => writeStream.write(`<td>${cell}</td>`));
    writeStream.write("</tr>");
  });
  writeStream.write("</tbody>");
  writeStream.write("</table>");
  writeStream.write("</div>");

  writeStream.write("</div>");
  writeStream.write("</section>");

  defaultFooter.forEach((f) => writeStream.write(f));

  writeStream.on("finish", () => console.log(`Created ${lang}-${page}`));
  writeStream.end();
};

exports.writeFile = writeFile;
exports.TABLE_PAGES = Object.keys(TABLES);
