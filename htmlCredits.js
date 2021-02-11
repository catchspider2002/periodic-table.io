const fs = require("fs");
const xlsxFile = require("read-excel-file/node");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  xlsxFile("../Translation/Periodic Table others.xlsm", { sheet: "Translators" }).then((rows) => {
    let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

    let groupedTranslators;
    let translators = [];

    for (let j = 0; j < rows.length; j++) {
      let listing = {
        id: rows[j][0],
        name: rows[j][1],
        language: rows[j][4],
      };
      translators.push(listing);
    }
    function groupBy(key) {
      return function group(array) {
        return array.reduce((acc, obj) => {
          const property = obj[key];
          acc[property] = acc[property] || [];
          acc[property].push(obj.name);
          return acc;
        }, {});
      };
    }
    let groupedLang = groupBy("language");
    groupedTranslators = groupedLang(translators);

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

    writeStream.write("<div class='content-wrapper'>");
    writeStream.write("<div class='container'>");
    writeStream.write(
      "<div class='row text-upper aboutHeader text-center py-8'><span>" +
        langValues.credits +
        "</span> - <span>" +
        langValues.translation +
        "</span></div>"
    );
    writeStream.write("<div class='masonry'>");

    let i = 0;

    for (const prop in groupedTranslators) {
      i++;
      let translator = `${groupedTranslators[prop]}`;
      var translatorArr = translator.split(",");

      writeStream.write("<div class='box-content masonry-col'" + (i === 1 ? " id='zhTrans'>" : ">"));
      writeStream.write("<p class='headerOutline heavyFont'>" + langValues[prop] + "</p>");

      translatorArr.forEach((navs) => {
        writeStream.write("<p>" + navs + "</p>");
      });

      writeStream.write("</div>");
    }

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
  });
};

exports.writeFile = writeFile;
