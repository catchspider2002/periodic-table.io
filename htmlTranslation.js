const fs = require("fs");
const dotenv = require("dotenv");
const onesky = require("@brainly/onesky-utils");
dotenv.config();

function returnItem(code) {
  for (let j = 0; j < languageList.length; j++) {
    if (languageList[j].code === code) return languageList[j].id;
  }
}

let languageList = [
  { id: 1, code: "en" },
  { id: 45, code: "en-GB" },
  { id: 576, code: "bg" },
  { id: 23, code: "ca" },
  { id: 3, code: "zh-CN" },
  { id: 2, code: "zh-TW" },
  { id: 22, code: "hr" },
  { id: 13, code: "cs" },
  { id: 27, code: "da" },
  { id: 12, code: "nl" },
  { id: 18, code: "fi" },
  { id: 5, code: "fr" },
  { id: 6, code: "de" },
  { id: 20, code: "el" },
  { id: 587, code: "hi" },
  { id: 21, code: "hu" },
  { id: 62, code: "hy" },
  { id: 54, code: "id" },
  { id: 10, code: "it" },
  { id: 4, code: "ja" },
  { id: 9, code: "ko" },
  { id: 55, code: "ms" },
  { id: 77, code: "nb" },
  { id: 15, code: "nn" },
  { id: 16, code: "pl" },
  { id: 563, code: "pt" },
  { id: 19, code: "ro" },
  { id: 11, code: "ru" },
  { id: 462, code: "sr" },
  { id: 34, code: "sk" },
  { id: 659, code: "sl" },
  { id: 79, code: "es" },
  { id: 17, code: "sv" },
  { id: 56, code: "th" },
  { id: 14, code: "tr" },
  { id: 36, code: "uk" },
  { id: 50, code: "vi" },
  { id: 28, code: "ar" },
  { id: 42, code: "he" },
  { id: 29, code: "fa" },
  { id: 159, code: "kk" },
  { id: 213, code: "uz" },
  { id: 24, code: "eo" },
  { id: 249, code: "az" },
  { id: 31, code: "fil" },
  { id: 38, code: "lv-LV" },
  { id: 43, code: "is-IS" },
  { id: 494, code: "sw" },
  { id: 55, code: "ms" },
  { id: 60, code: "af" },
  { id: 624, code: "et" },
  { id: 63, code: "sq" },
  { id: 641, code: "lt" },
  { id: 644, code: "mk" },
  { id: 66, code: "be-BY" },
];

let unavailable = [
  "Albanian",
  "Azerbaijani",
  "Belarusian",
  "Esperanto",
  "Estonian",
  "Filipino",
  "Icelandic",
  "Kazakh",
  "Latvian",
  "Lithuanian",
  "Swahili",
  "Uzbek",
];
let color;

let today = new Date();
let date = today.toLocaleString("default", { month: "long" }) + " " + today.getDate() + ", " + today.getFullYear();

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let available1Markup = "";
  let unavailable1Markup = "";
  let unavailable1HTML = "";
  let available1HTML = "";
  let available2Markup = "";
  let unavailable2Markup = "";
  let unavailable2HTML = "";
  let available2HTML = "";
  let project_id = 190138;

  let options = {
    secret: process.env.ONESKY_SECRET,
    apiKey: process.env.ONESKY_APIKEY,
    projectId: project_id,
  };

  onesky
    .getLanguages(options)
    .then(function (content) {
      let result = JSON.parse(content);

      let mappedResult = result.data
        .map((language) => {
          return {
            english_name: language.english_name
              .replace(" (Latvia)", "")
              .replace(" (Belarus)", "")
              .replace(" (Iceland)", "")
              .replace(" / Tagalog", ""),
            translation_progress: parseFloat(language.translation_progress.replace("%", "")),
            code: returnItem(language.code),
          };
        })
        .filter((lang) => {
          return lang.english_name !== "English" && lang.english_name !== "English (United Kingdom)";
        })
        .sort(function (x, y) {
          let a = x.english_name.toUpperCase(),
            b = y.english_name.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });

      mappedResult.forEach(function (item) {
        let percent = item.translation_progress;
        let englishName = item.english_name;

        if (percent === 100) color = "brightgreen";
        else if (percent > 80) color = "green";
        else if (percent > 65) color = "yellow";
        else if (percent > 50) color = "orange";
        else color = "red";

        let newName = englishName.replace(/ /g, "%20");
        let newLink = "https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/" + project_id + "/language/" + item.code;
        let badgeLink = "https://img.shields.io/badge/" + newName + "-" + percent + "%25-" + color;

        if (unavailable.indexOf(englishName) > -1) {
          unavailable1Markup = unavailable1Markup + "[![" + newName + "](" + badgeLink + ")](" + newLink + ")\n";
          unavailable1HTML = unavailable1HTML + "<a href='" + newLink + "'><img src='" + badgeLink + "' alt='" + newName + "'></a>";
        } else {
          available1Markup = available1Markup + "[![" + newName + "](" + badgeLink + ")](" + newLink + ")\n";
          available1HTML = available1HTML + "<a href='" + newLink + "'><img src='" + badgeLink + "' alt='" + newName + "'></a>";
        }
      });
    })
    .then(function () {
      project_id = 197066;

      options = {
        secret: process.env.ONESKY_SECRET,
        apiKey: process.env.ONESKY_APIKEY,
        projectId: project_id,
      };

      onesky
        .getLanguages(options)
        .then(function (content) {
          let result = JSON.parse(content);

          let mappedResult = result.data
            .map((language) => {
              return {
                english_name: language.english_name
                  .replace(" (Latvia)", "")
                  .replace(" (Belarus)", "")
                  .replace(" (Iceland)", "")
                  .replace(" / Tagalog", ""),
                translation_progress: parseFloat(language.translation_progress.replace("%", "")),
                code: returnItem(language.code),
              };
            })
            .filter((lang) => {
              return lang.english_name !== "English" && lang.english_name !== "English (United Kingdom)";
            })
            .sort(function (x, y) {
              let a = x.english_name.toUpperCase(),
                b = y.english_name.toUpperCase();
              return a == b ? 0 : a > b ? 1 : -1;
            });

          mappedResult.forEach(function (item) {
            let percent = item.translation_progress;
            let englishName = item.english_name;

            if (percent === 100) color = "brightgreen";
            else if (percent > 80) color = "green";
            else if (percent > 65) color = "yellow";
            else if (percent > 50) color = "orange";
            else color = "red";

            let newName = englishName.replace(/ /g, "%20");
            let newLink = "https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/" + project_id + "/language/" + item.code;
            let badgeLink = "https://img.shields.io/badge/" + newName + "-" + percent + "%25-" + color;

            if (unavailable.indexOf(englishName) > -1) {
              unavailable2Markup = unavailable2Markup + "[![" + newName + "](" + badgeLink + ")](" + newLink + ")\n";
              unavailable2HTML = unavailable2HTML + "<a href='" + newLink + "'><img src='" + badgeLink + "' alt='" + newName + "'></a>";
            } else {
              available2Markup = available2Markup + "[![" + newName + "](" + badgeLink + ")](" + newLink + ")\n";
              available2HTML = available2HTML + "<a href='" + newLink + "'><img src='" + badgeLink + "' alt='" + newName + "'></a>";
            }
          });
        })
        .then(function () {
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

          writeStream.write("<h1 class='truncate'>" + langValues.translation + "</h1>");

          nav4.forEach((navs) => {
            writeStream.write(navs);
          });

          writeStream.write("<div class='content-wrapper'>");
          writeStream.write("<div class='container'>");
          writeStream.write("<div id='translationHeader' class='row text-upper aboutHeader text-center heavyFont'></div>");
          writeStream.write("<div id='translationContent'>");

          writeStream.write("<h1>Translations (As of " + date + ")</h1>");
          writeStream.write(
            "<p>Contributions are welcome for the translations. <strong>Click on the translation status badge below to go directly to that language translation page.</strong> There are 2 files available for translation: General Terms and Element Details.</p>"
          );
          writeStream.write("<h2>General Terms</h2>");
          writeStream.write(
            "<p>This contains the text for the labels used in all the pages except for the element details mentioned below. The current status of the translation is below:</p>"
          );
          writeStream.write("<h4>Available in the website</h4>");

          writeStream.write("<p>");
          writeStream.write(available1HTML);
          writeStream.write("</p>");

          writeStream.write("<h4>Below are not yet added to the website. I&#39;ll be adding new languages when it is crosses 80% translation.</h4>");

          writeStream.write("<p>");
          writeStream.write(unavailable1HTML);
          writeStream.write("</p>");

          writeStream.write("<h2>Element Details</h2>");
          writeStream.write(
            "<p>This contains the text for individual element details like name reason, history, facts, applications and hazards. Below is a sample from Hydrogen element:</p>"
          );
          writeStream.write("<p><strong>Name Reason</strong></p>");
          writeStream.write("<blockquote>");
          writeStream.write("<p>From the Greek word <em>hydro</em> (water), and <em>genes</em> (forming)</p>");
          writeStream.write("</blockquote>");
          writeStream.write("<p><strong>History</strong></p>");
          writeStream.write("<blockquote>");
          writeStream.write(
            "<p>Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.<br><br>In 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.<br><br>French scientist Antoine Lavoisier later named the element hydrogen in 1783.</p>"
          );
          writeStream.write("</blockquote>");
          writeStream.write("<p><strong>Facts</strong></p>");
          writeStream.write("<blockquote>");
          writeStream.write("<p>Hydrogen is the primary component of Jupiter and the other gas giant planets</p>");
          writeStream.write("</blockquote>");
          writeStream.write("<p><strong>Applications</strong></p>");
          writeStream.write("<blockquote>");
          writeStream.write(
            "<p>Liquid hydrogen is used as a rocket fuel.<br><br>Hydrogen is commonly used in power stations as a coolant in generators.<br><br>Hydrogen&#39;s two heavier isotopes (deuterium and tritium) are used in nuclear fusion. Used as a shielding gas in welding methods such as atomic hydrogen welding.</p>"
          );
          writeStream.write("</blockquote>");
          writeStream.write("<p><strong>Hazards</strong></p>");
          writeStream.write("<blockquote>");
          writeStream.write(
            "<p>Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form</p>"
          );
          writeStream.write("</blockquote>");
          writeStream.write("<h4>Available in the website</h4>");

          writeStream.write("<p>");
          writeStream.write(available2HTML);
          writeStream.write("</p>");

          writeStream.write("<h4>Below are not yet added to the website since the General Terms is not 80% translated</h4>");
          writeStream.write("<p>");
          writeStream.write(unavailable2HTML);
          writeStream.write("</p>");

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
        })
        .then(function () {
          let readmeStream = fs.createWriteStream("README.md");
          readmeStream.write("# periodic-table.io\n\n");

          readmeStream.write("![GitHub repo size](https://img.shields.io/github/repo-size/catchspider2002/periodic-table.io)\n");
          readmeStream.write("[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n");
          readmeStream.write("![GitHub last commit](https://img.shields.io/github/last-commit/catchspider2002/periodic-table.io)\n");
          readmeStream.write("![Website](https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fperiodic-table.io%2F)\n\n");

          readmeStream.write("<div align='center'>\n");
          readmeStream.write("<img src='images/icons/android-chrome-192x192.png' alt='periodic-table.io' />\n");
          readmeStream.write("</div>\n\n");

          readmeStream.write(
            "[periodic-table.io](https://periodic-table.io) provides comprehensive and useful information about the chemical elements all in one place. Click on an element to know more about the properties, history, name origin, images, applications, hazards and electron shell diagram of each element.\n\n"
          );

          readmeStream.write("- Visually pleasing colour coded table\n");
          readmeStream.write("- Simple fluid design and has lots of details\n");
          readmeStream.write("- Detailed description for each element\n");
          readmeStream.write("- View the list of all elements in the alphabetical order\n");
          readmeStream.write("- Electron shell diagram and image for each element\n");
          readmeStream.write("- Compare the properties of 2 elements\n");
          readmeStream.write("- Search for the elements using their symbol, atomic number or name\n");
          readmeStream.write("- Links to informative websites for further study\n\n");

          readmeStream.write("# Translations (As of " + date + ")\n\n");

          readmeStream.write(
            "Contributions are welcome for the translations. **Click on the translation status badge below to go directly to that language translation page.** There are 2 files available for translation: General Terms and Element Details.\n\n"
          );

          readmeStream.write("## General Terms\n");
          readmeStream.write(
            "This contains the text for the labels used in all the pages except for the element details mentioned below. The current status of the translation is below:\n\n"
          );

          readmeStream.write("#### Available in the website\n\n");
          readmeStream.write(available1Markup);

          readmeStream.write("\n");
          readmeStream.write("#### Below are not yet added to the website. I'll be adding new languages when it is crosses 80% translation.\n\n");

          readmeStream.write(unavailable1Markup);

          readmeStream.write("\n");
          readmeStream.write("## Element Details\n");
          readmeStream.write(
            "This contains the text for individual element details like name reason, history, facts, applications and hazards. Below is a sample from Hydrogen element:\n\n"
          );

          readmeStream.write("**Name Reason**\n");
          readmeStream.write("> From the Greek word *hydro* (water), and *genes* (forming)\n\n");

          readmeStream.write("**History**\n");
          readmeStream.write(
            "> Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.<br><br>In 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.<br><br>French scientist Antoine Lavoisier later named the element hydrogen in 1783.\n\n"
          );

          readmeStream.write("**Facts**\n");
          readmeStream.write("> Hydrogen is the primary component of Jupiter and the other gas giant planets\n\n");

          readmeStream.write("**Applications**\n");
          readmeStream.write(
            "> Liquid hydrogen is used as a rocket fuel.<br><br>Hydrogen is commonly used in power stations as a coolant in generators.<br><br>Hydrogen's two heavier isotopes (deuterium and tritium) are used in nuclear fusion. Used as a shielding gas in welding methods such as atomic hydrogen welding.\n\n"
          );

          readmeStream.write("**Hazards**\n");
          readmeStream.write(
            "> Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form\n\n"
          );

          readmeStream.write("#### Available in the website\n\n");

          readmeStream.write(available2Markup);

          readmeStream.write("\n");
          readmeStream.write("#### Below are not yet added to the website since the General Terms is not 80% translated\n\n");

          readmeStream.write(unavailable2Markup);

          readmeStream.write("\n\n");
          readmeStream.write("# License\n\n");

          readmeStream.write("MIT License\n\n");

          readmeStream.write("Copyright (c) 2018-2021 periodic-table.io\n\n");

          readmeStream.write(
            "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n"
          );

          readmeStream.write(
            "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n"
          );

          readmeStream.write(
            "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"
          );

          // the finish event is emitted when all data has been flushed from the stream
          readmeStream.on("finish", () => {
            console.log("Created README");
          });

          // close the stream
          readmeStream.end();
        });
    });
};

exports.writeFile = writeFile;
