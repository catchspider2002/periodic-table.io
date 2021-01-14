const fs = require("fs");
const Constants = require("./htmlConstants.js");
let newRawData = Constants.rawData;

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
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'><input class='search' id='searchText' aria-label='Search' /></div>");
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write(
    "<button class='sort' data-sort='listNum' onclick='sortByNumber()'><span>" + langValues.sortNumber + "</span><span id='sortNum' /></button>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write(
    "<button class='sort' data-sort='listName' onclick='sortByName()'><span>" + langValues.sortName + "</span><span id='sortNm' /></button>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='m-b-30 flex-auto m-x-15'>");
  writeStream.write(
    "<button class='sort' data-sort='listSym' onclick='sortBySymbol()'><span>" + langValues.sortSymbol + "</span><span id='sortSym' /></button>"
  );
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div class='list text-center listGrid m-x-15'>");
  // writeStream.write("{#each Constants as ele}");

  newRawData.forEach((element) => {
    writeStream.write("<a class='elementList' href='" + element.num + '-' + langValues[element.nme].toLowerCase() + "'>");
    writeStream.write("<div class='list-content flex'>");
    writeStream.write("<div class='listSym heavyFont'>" + element.sym + "</div>");
    writeStream.write("<div class='listName'>" + langValues[element.nme] + "</div>");
    writeStream.write("<div class='listNum heavyFont'><span>" + getNum(element.num) + "</span></div>");
    writeStream.write("</div>");
    writeStream.write("</a>");
  });

  // writeStream.write("{/each}");
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