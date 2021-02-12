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

  writeStream.write("<span class='truncate'>" + langValues.privacy + "</span>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div id='translationHeader' class='row text-upper aboutHeader text-center heavyFont'></div>");
  writeStream.write("<div id='translationContent'>");
  // writeStream.write("<div class='container'>");
  // writeStream.write("<div class='text-upper aboutHeader text-center grayText'>");
  // writeStream.write(langValues.privacy + "</div>");
  // writeStream.write("<div class='pt-4'>" + langValues.privacyFull + "</div>");
  // writeStream.write("</div>");
  // writeStream.write("</div>");

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
