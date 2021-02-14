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

  writeStream.write("<span class='truncate'>404</span>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<section class='content-wrapper'>");
  writeStream.write("<div class='container text-center'>");
  writeStream.write("<h1 class='text-upper grayText'>404</h1>");
  writeStream.write("<h2 class='py-8'>Page Not Found</h2>");
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
