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

  writeStream.write("<h1 class='truncate'>" + langValues.reactivitySeries + "</h1>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<h1 class='py-8 text-upper text-center grayText'>");
  writeStream.write(langValues.reactivitySeries + "</h1>");
  writeStream.write("<div id='solubilityHeader' class='row text-upper aboutHeader text-center heavyFont'></div>");
  writeStream.write("<div>");
  writeStream.write("<div class='grid-container'>");
  writeStream.write("<div class='reactivity-grid'>");
  writeStream.write("<div class='grid-col grid-col--fixed-left'>");
  writeStream.write("<div id='gridTopLeft' class='grid-item grid-item--header'><p></p></div>");
  writeStream.write("<div class='grid-item'>" + langValues.caesium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.francium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.rubidium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.potassium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.sodium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.lithium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.barium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.radium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.strontium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.calcium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.magnesium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.aluminium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.titanium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.manganese + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.zinc + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.chromium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.iron + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.cadmium + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.cobalt + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.nickel + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.tin + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.lead + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.hydrogen + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.antimony + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.bismuth + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.copper + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.tungsten + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.mercury + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.silver + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.gold + "</div>");
  writeStream.write("<div class='grid-item'>" + langValues.platinum + "</div>");
  writeStream.write("</div>");

  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>" + langValues.coldWater + "</div>");
  writeStream.write("<div class='grid-item violentReaction'>" + langValues.violentReaction + "</div>");
  writeStream.write("<div class='grid-item violentReaction'>" + langValues.violentReaction + "</div>");
  writeStream.write("<div class='grid-item violentReaction'>" + langValues.violentReaction + "</div>");
  writeStream.write("<div class='grid-item violentReaction'>" + langValues.violentReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item verySlowReaction'>" + langValues.verySlowReaction + "</div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item nonMetal'>" + langValues.nonMetal + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");

  writeStream.write("</div>");
  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>" + langValues.hotWater + "</div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item strongReaction'>" + langValues.strongReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item nonMetal'>" + langValues.forComparison + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("</div>");

  writeStream.write("<div class='grid-col'>");
  writeStream.write("<div class='grid-item grid-item--header'>" + langValues.diluteAcids + "</div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item moderateReaction'>" + langValues.moderateReaction + "</div>");
  writeStream.write("<div class='grid-item slowReaction'>" + langValues.slowReaction + "</div>");
  writeStream.write("<div class='grid-item slowReaction'>" + langValues.slowReaction + "</div>");
  writeStream.write("<div class='grid-item slowReaction'>" + langValues.slowReaction + "</div>");
  writeStream.write("<div class='grid-item'></div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("<div class='grid-item noReaction'>" + langValues.noReaction + "</div>");
  writeStream.write("</div>");

  writeStream.write("</div>");
  writeStream.write("</div>");
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
