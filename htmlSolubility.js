const fs = require("fs");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<h1 class='truncate'>" + langValues.solubilityChart + "</h1>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<h1 class='py-8 text-upper text-center grayText'>");
  writeStream.write(langValues.solubilityChart + "</h1>");
  writeStream.write("<div id='solubilityHeader' class='row text-upper aboutHeader text-center heavyFont'></div>");
  writeStream.write("<div>");
  writeStream.write("<div class='grid-container'>");
  writeStream.write("<div class='solubility-grid'>");
  writeStream.write("<div class='grid-col grid-col--fixed-left'>");
  writeStream.write("<div id='gridTopLeft' class='grid-item grid-item--header'><p></p></div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.fluoride + "</span> <span class='solSym' title='" + langValues.fluoride + "'>F<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.chloride + "</span> <span class='solSym' title='" + langValues.chloride + "'>Cl<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.bromide + "</span> <span class='solSym' title='" + langValues.bromide + "'>Br<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.iodide + "</span> <span class='solSym' title='" + langValues.iodide + "'>I<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.chlorate +
      "</span> <span class='solSym' title='" +
      langValues.chlorate +
      "'>ClO<sub>3</sub><sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.hydroxide + "</span> <span class='solSym' title='" + langValues.hydroxide + "'>OH<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.sulfite +
      "</span> <span class='solSym' title='" +
      langValues.sulfite +
      "'>SO<sub>3</sub><sup>2-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.sulfate +
      "</span> <span class='solSym' title='" +
      langValues.sulfate +
      "'>SO<sub>4</sub><sup>2-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.carbonate +
      "</span> <span class='solSym' title='" +
      langValues.carbonate +
      "'>CO<sub>3</sub><sup>2-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.nitrite +
      "</span> <span class='solSym' title='" +
      langValues.nitrite +
      "'>NO<sub>2</sub><sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.nitrate +
      "</span> <span class='solSym' title='" +
      langValues.nitrate +
      "'>NO<sub>3</sub><sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.phosphate +
      "</span> <span class='solSym' title='" +
      langValues.phosphate +
      "'>PO<sub>4</sub><sup>3-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.cyanide + "</span> <span class='solSym' title='" + langValues.cyanide + "'>CN<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.cyanate + "</span> <span class='solSym' title='" + langValues.cyanate + "'>OCN<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.thiocyanate + "</span> <span class='solSym' title='" + langValues.thiocyanate + "'>SCN<sup>-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.dichromate +
      "</span> <span class='solSym' title='" +
      langValues.dichromate +
      "'>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-item'>");
  writeStream.write(
    "<span class='solName'>" + langValues.oxide + "</span> <span class='solSym' title='" + langValues.oxide + "'>O<sup>2-</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.ammonium +
      "</span> <span class='solSym' title='" +
      langValues.ammonium +
      "'>NH<sub>4</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.lithium + "</span> <span class='solSym' title='" + langValues.lithium + "'>Li<sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item reactsWater'><span class='solubleName'>" + langValues.reactsWater + "</span><span class='solShort'>R</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.sodium + "</span> <span class='solSym' title='" + langValues.sodium + "'>Na<sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item reactsWater'><span class='solubleName'>" + langValues.reactsWater + "</span><span class='solShort'>R</span></div>"
  );
  writeStream.write("</div>");

  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.potassium + "</span> <span class='solSym' title='" + langValues.potassium + "'>K<sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item reactsWater'><span class='solubleName'>" + langValues.reactsWater + "</span><span class='solShort'>R</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.magnesium +
      "</span> <span class='solSym' title='" +
      langValues.magnesium +
      "'>Mg<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.calcium +
      "</span> <span class='solSym' title='" +
      langValues.calcium +
      "'>Ca<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item reactsWater'><span class='solubleName'>" + langValues.reactsWater + "</span><span class='solShort'>R</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.barium + "</span> <span class='solSym' title='" + langValues.barium + "'>Ba<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item reactsWater'><span class='solubleName'>" + langValues.reactsWater + "</span><span class='solShort'>R</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.iron +
      " (II)</span> <span class='solSym' title='" +
      langValues.iron +
      " (II)'>Fe<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.iron +
      " (III)</span> <span class='solSym' title='" +
      langValues.iron +
      " (III)'>Fe<sub>3</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.copper +
      " (II)</span> <span class='solSym' title='" +
      langValues.copper +
      " (II)'>Cu<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.silver + "</span> <span class='solSym' title='" + langValues.silver + "'>Ag<sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" + langValues.zinc + "</span> <span class='solSym' title='" + langValues.zinc + "'>Zn<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.lead +
      " (II)</span> <span class='solSym' title='" +
      langValues.lead +
      " (II)'>Pb<sub>2</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item slightlySol'><span class='slightlySolName'>" + langValues.slightlySoluble + "</span><span class='solShort'>SS</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>");
  writeStream.write(
    "<span class='solName'>" +
      langValues.aluminium +
      "</span> <span class='solSym' title='" +
      langValues.aluminium +
      "'>Al<sub>3</sub><sup>+</sup></span>"
  );
  writeStream.write("</div>");
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item unavailable'><span class='unavailableName'>" + langValues.unavailable + "</span><span class='solShort'>-</span></div>"
  );
  writeStream.write(
    "<div class='grid-item soluble'><span class='solubleName'>" + langValues.soluble + "</span><span class='solShort'>S</span></div>"
  );
  writeStream.write(
    "<div class='grid-item insoluble'><span class='insolubleName'>" + langValues.insoluble + "</span><span class='solShort'>I</span></div>"
  );
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  writeStream.write("<div class='keyGrid py-8'>");

  writeStream.write("<div class='soluble'>S</div>");
  writeStream.write("<div>" + langValues.soluble + "</div>");
  writeStream.write("<div class='slightlySol'>SS</div>");
  writeStream.write("<div>" + langValues.slightlySoluble + "</div>");
  writeStream.write("<div class='insoluble'>I</div>");
  writeStream.write("<div>" + langValues.insoluble + "</div>");
  writeStream.write("<div class='unavailable'>-</div>");
  writeStream.write("<div>" + langValues.unavailable + "</div>");
  writeStream.write("<div class='reactsWater'>R</div>");
  writeStream.write("<div>" + langValues.reactsWater + "</div>");

  writeStream.write("</div>");

  writeStream.write("</div>");
  writeStream.write("</section>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
