const fs = require("fs");

const writeFile = (lang, page) => {
  let writeStream = fs.createWriteStream(lang + "/robots.txt");

  let site = "https://" + lang + ".periodic-table.io/";

  if (lang === "en") site = "https://periodic-table.io/";

  writeStream.write("Sitemap: " + site + "sitemap.xml\n");
  writeStream.write("User-agent: * \n");
  writeStream.write("Crawl-Delay: 20\n");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
