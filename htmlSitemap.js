const fs = require("fs");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/sitemap.xml");

  writeStream.write("<?xml version='1.0' encoding='UTF-8'?>");
  writeStream.write("<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>");
  writeStream.write("<url>");
  writeStream.write("<loc>https://pattern.monster</loc>");
  writeStream.write("<lastmod>2021-2-8T01:01:01+01:00</lastmod>");
  writeStream.write("<priority>1.0</priority>");
  writeStream.write("</url>");
  writeStream.write("<url>");
  writeStream.write("<loc>https://pattern.monster/features/</loc>");
  writeStream.write("<lastmod>2021-2-8T01:01:01+01:00</lastmod>");
  writeStream.write("<priority>0.8</priority>");
  writeStream.write("</url>");
  writeStream.write("</urlset>");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
