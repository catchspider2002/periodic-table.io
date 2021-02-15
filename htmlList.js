const fs = require("fs");
const Constants = require("./htmlConstants.js");
let newRawData = Constants.rawData;

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

  writeStream.write("<span class='truncate'>" + langValues[page] + "</span>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  function getNum(value) {
    if (lang === "ar") {
      // Arabic
      value = value.toString().replace(/\./g, "٫");
      var id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      return value.toString().replace(/[0-9]/g, function (w) {
        return id[+w];
      });
    } else if (lang === "fa") {
      // Persian
      value = value.toString().replace(/\./g, "٫");
      var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return value.toString().replace(/[0-9]/g, function (w) {
        return id[+w];
      });
    } else return value;
  }

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='row'>");
  writeStream.write("<div id='mainList'>");
  writeStream.write("<div class='flex flex-wrap'>");
  writeStream.write(
    "<div class='m-b-30 flex-auto m-x-15'><input class='search' id='searchText' placeholder='" +
      langValues.search +
      "' aria-label='" +
      langValues.search +
      "' /></div>"
  );
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write("<button class='sort' data-sort='listNum' onclick='sortByNumber()'>" + langValues.sortNumber + "<span id='sortNum' /></button>");
  writeStream.write("</div>");
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write("<button class='sort' data-sort='listName' onclick='sortByName()'>" + langValues.sortName + "<span id='sortNm' /></button>");
  writeStream.write("</div>");
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write("<button class='sort' data-sort='listSym' onclick='sortBySymbol()'>" + langValues.sortSymbol + "<span id='sortSym' /></button>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div class='list text-center listGrid m-x-15'>");

  newRawData.forEach((element) => {
    writeStream.write("<a class='elementList list-content flex' href='element-" + element.num + "'>");
    writeStream.write("<div class='listSym'>" + element.sym + "</div>");
    writeStream.write("<div class='listName'>" + langValues[element.nme] + "</div>");
    writeStream.write("<div class='listNum'><span>" + getNum(element.num) + "</span></div>");
    writeStream.write("</a>");
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
