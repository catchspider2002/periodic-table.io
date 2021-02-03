const fs = require("fs");

let lightLinks = [
  { name: "Amazon (US)", link: "https://www.amazon.com/dp/B07RNSV37Z" },
  { name: "Amazon (UK)", link: "https://www.amazon.co.uk/dp/B07RNF8Q39" },
  { name: "Redbubble", link: "https://www.redbubble.com/people/catchspider2002/works/32731062-periodic-table-t-shirt-light?asc=u&p=classic-tee" },
  { name: "Spreadshirt", link: "https://shop.spreadshirt.com/fashion-crimson/periodic+table+t-shirt+light-A5b4cece5f937643a40d63334" },
  { name: "Threadless", link: "https://fashioncrimson.threadless.com/designs/periodic-table-t-shirt-light/mens/t-shirt?color=white" },
  { name: "Teespring", link: "https://teespring.com/periodic-table-t-shirt-light" },
];

let darkLinks = [
  { name: "Amazon (US)", link: "https://www.amazon.com/dp/B07RTCVS2Q" },
  { name: "Amazon (UK)", link: "https://www.amazon.co.uk/dp/B07RP922V4" },
  { name: "Redbubble", link: "https://www.redbubble.com/people/catchspider2002/works/32731629-periodic-table-t-shirt-dark?asc=u&p=classic-tee" },
  { name: "Spreadshirt", link: "https://shop.spreadshirt.com/fashion-crimson/periodic+table+t-shirt+dark-A5b4cf4c92051760fec6d9ccc" },
  { name: "Threadless", link: "https://fashioncrimson.threadless.com/designs/periodic-table-t-shirt-dark/mens/t-shirt?color=black" },
  { name: "Teespring", link: "https://teespring.com/periodic-table-t-shirt-dark" },
];

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter) => {
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

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='flex flex-wrap'>");
  writeStream.write("<div class='margin-bottom-20'>");
  writeStream.write("<div id='lightTeeHeader' class='text-upper text-center heavyFont aboutHeader'>T-shirt (" + langValues.themeLight + ")</div>");
  writeStream.write("<div class='padding-10'>");
  writeStream.write("<img class='table teeImage' alt='Periodic table t-shirt in light background' src='images/store/LightTee.png' /></div>");
  writeStream.write("<div class='text-center'>");

  lightLinks.forEach((lightLink) => {
    writeStream.write("<div class='teeLink'><a class='underlineLink' href='" + lightLink.link + "'>" + lightLink.name + "</a></div>");
  });

  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div class='margin-bottom-20'>");
  writeStream.write("<div id='darkTeeHeader' class='text-upper text-center heavyFont aboutHeader'>T-shirt (" + langValues.themeDark + ")</div>");
  writeStream.write("<div class='padding-10'>");
  writeStream.write("<img class='table teeImage' alt='Periodic table t-shirt in dark background' src='images/store/DarkTee.png' /></div>");
  writeStream.write("<div class='text-center'>");

  darkLinks.forEach((darkLink) => {
    writeStream.write("<div class='teeLink'><a class='underlineLink' href='" + darkLink.link + "'>" + darkLink.name + "</a></div>");
  });

  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

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
