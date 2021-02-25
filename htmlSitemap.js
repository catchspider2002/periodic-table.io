const fs = require("fs");

const writeFile = (lang, langValues, page, pages) => {
  let writeStream = fs.createWriteStream(lang + "/sitemap.xml");

  let site = "https://" + lang + ".periodic-table.io/";

  if (lang === "en") site = "https://periodic-table.io/";

  // const yesterday = new Date();
  // yesterday.setDate(yesterday.getDate() - 1);
  // yesterday.toDateString();

  // let date = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate() + "T01:01:01+01:00";
  let date = new Date().toISOString();

  writeStream.write("<?xml version='1.0' encoding='UTF-8'?>\n");
  writeStream.write("<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>\n");
  writeStream.write("    <url>\n");
  writeStream.write("        <loc>" + site + "</loc>\n");
  writeStream.write("        <lastmod>" + date + "</lastmod>\n");
  writeStream.write("        <priority>1.0</priority>\n");
  writeStream.write("    </url>\n");

  pages.forEach((pageValue) => {
    if (pageValue.page !== "sitemap" && pageValue.page !== "manifest" && pageValue.page !== "robots" && pageValue.page !== "404" && pageValue.page !== "index" && pageValue.page !== "element") {
      writeStream.write("    <url>\n");
      writeStream.write("        <loc>" + site + pageValue.page + "</loc>\n");
      writeStream.write("        <lastmod>" + date + "</lastmod>\n");
      writeStream.write("        <priority>0.8</priority>\n");
      writeStream.write("    </url>\n");
    }
  });

  for (let i = 1; i <= 118; i++) {
    writeStream.write("    <url>\n");
    writeStream.write("        <loc>" + site + "element-" + i + "</loc>\n");
    writeStream.write("        <lastmod>" + date + "</lastmod>\n");
    writeStream.write("        <priority>0.8</priority>\n");
    writeStream.write("    </url>\n");
  }
  writeStream.write("</urlset>");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
