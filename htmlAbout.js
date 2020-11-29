const fs = require("fs");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultFooter) => {

  let writeStream = fs.createWriteStream("htmlGenerator/" + lang + "/" + page + ".html");

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='row text-upper aboutHeader text-center heavyFont'>");
  writeStream.write(langValues.privacy + "</div>");
  writeStream.write("<div><span>" + langValues.privacyFull + "</span></div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("wrote all data to file " + lang);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
