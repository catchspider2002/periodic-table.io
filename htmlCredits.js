const fs = require("fs");
const xlsxFile = require("read-excel-file/node");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  xlsxFile("../Translation/Periodic Table others.xlsm", { sheet: "Translators" }).then((rows) => {
    let translators = [];

    for (let j = 0; j < 20; j++) {
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
    let groupedTranslators = groupedLang(translators);

    console.log(groupedTranslators);
  });

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
  writeStream.write("<div class='text-upper aboutHeader text-center pb-8'>" + langValues.about + "</div>");
  writeStream.write("<div>");
  writeStream.write(langValues.line1 + " ");
  writeStream.write(langValues.line2);
  writeStream.write("<ul id='features'>");
  writeStream.write("<li>" + langValues.feature1 + "</li>");
  writeStream.write("<li>" + langValues.feature2 + "</li>");
  writeStream.write("<li>" + langValues.feature3 + "</li>");
  writeStream.write("<li>" + langValues.feature4 + "</li>");
  writeStream.write("<li>" + langValues.feature5 + "</li>");
  writeStream.write("<li>" + langValues.feature6 + "</li>");
  writeStream.write("<li>" + langValues.feature7 + "</li>");
  writeStream.write("<li>" + langValues.feature9 + "</li>");
  writeStream.write("</ul>");
  writeStream.write("<span class='grayText'>" + langValues.contact + ": </span>");
  writeStream.write("<a class='underlineLink' href='mailto:naveen@periodic-table.io?subject=Periodic-Table.io'>naveen@periodic-table.io</a>");
  writeStream.write("<br />");
  writeStream.write("<span class='grayText'>Github: </span>");
  writeStream.write(
    "<a class='underlineLink' href='https://github.com/catchspider2002/periodic-table.io'>https://github.com/catchspider2002/periodic-table.io</a>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='text-upper aboutHeader text-center pt-16'>" + langValues.changelog + "</div>");
  writeStream.write("<div>");
  writeStream.write("<ul id='logs'>");
  writeStream.write("<li class='versionHeader'>November 26, 2020</li>");
  writeStream.write("<li>Added Crystal Structure image to the element page</li>");
  writeStream.write("<li>Added Macedonian translation</li>");
  writeStream.write(
    "<li>Updated Armenian, Greek, Spanish, Italian, Portuguese, Slovenian, Thai, Vietnamese and Chinese(Simplified) translations</li>"
  );
  writeStream.write("<li class='versionHeader'>October 2020</li>");
  writeStream.write("<li>Added Armenian and Malay translations</li>");
  writeStream.write("<li>Added a new printable - Flash Cards in <a class='underlineLink' href='printables.html'>Printables</a> page</li>");
  writeStream.write("<li>Updated Croatian, Greek, Hebrew, Hindi, Norwegian Bokmal, Polish, Romanian, Vietnamese and Dutch translations</li>");
  writeStream.write("<li>Fixed the top navbar so that the navbar does not overlap the scrollbar</li>");
  writeStream.write("<li class='versionHeader'>August 2020</li>");
  writeStream.write("<li>Updated the icons in the navbar to outline icons</li>");
  writeStream.write("<li>Simplified localisation and individual languages will now be included in the url</li>");
  writeStream.write("<li>Added a new printable in <a class='underlineLink' href='printables.html'>Printables</a> page</li>");
  writeStream.write("<li>Added CAS Number and PubChem CID Number</li>");
  writeStream.write("<li>Fixed electron configuration rendering issues in Edge and Chrome</li>");
  writeStream.write(
    "<li>Updated Arabic, Persian, Hindi, Italian, Indonesian, Vietnamese, German, Greek, Polish, Dutch, Slovak, Chinese (Simplified) and Chinese (Traditional) translations</li>"
  );
  writeStream.write("<li class='versionHeader'>July 2020</li>");
  writeStream.write("<li>Added a new printable in <a class='underlineLink' href='printables.html'>Printables</a> page</li>");
  writeStream.write(
    "<li>Added a new page - <a class='underlineLink' href='translation.html'>Translation</a> where you can check the status of each language and contribute translations</li>"
  );
  writeStream.write("<li>Added mass number, number of protons, electrons and neutrons</li>");
  writeStream.write("<li>The line height for the Elements page is increased and the text is easily readable</li>");
  writeStream.write("<li>Updated Polish, Croatian, Chinese Simplified, Croatian and Korean translation</li>");
  writeStream.write("<li>Added an option in Settings to change the style of the periodic table from 3 options</li>");
  writeStream.write("<li>Replaced the dropdown for temperature in Settings with a radio select</li>");
  writeStream.write("<li>Updated the navbar header from a gradient to solid color which now matches with the window color when opened as PWA</li>");
  writeStream.write("<li class='versionHeader'>June 2020</li>");
  writeStream.write("<li>Modified the style of the element page to use more shadows and less color</li>");
  writeStream.write("<li>Modified the colors of the Settings popup for both light and dark themes</li>");
  writeStream.write("<li>Added Instagram page link to the footer</li>");
  writeStream.write("<li>Added a new printable in <a class='underlineLink' href='printables.html'>Printables</a> page</li>");
  writeStream.write(
    "<li>Added <a class='underlineLink' target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer'>Suggestions</a> where new suggestions or feature requests can be provided</li>"
  );
  writeStream.write("<li>Fonts for Thai and Hebrew are updated</li>");
  writeStream.write("<li>Reduced extra spacing on top and bottom sides of the electronic configuration</li>");
  writeStream.write("<li>Updated Chinese Simplified, Croatian, Portuguese and Danish translations</li>");
  writeStream.write("<li class='versionHeader'>May 2020</li>");
  writeStream.write("<li>Updated Polish, Russian, Vietnamese, Slovenian, Chinese Simplified translations</li>");
  writeStream.write(
    "<li>Added a new page - <a class='underlineLink' href='printables.html'>Printables</a> which provides a printable version of the periodic table which will be updated regularly</li>"
  );
  writeStream.write(
    "<li>Added a new page - <a class='underlineLink' href='credits.html'>Credits</a> for translations which was earlier appearing in About page</li>"
  );
  writeStream.write("<li>Added icons to the navigation bar at the top</li>");
  writeStream.write("<li>Added footer component on all pages which includes quick links not available in the top navigation bar</li>");
  writeStream.write("<li>Updated link colors to match the theme color</li>");
  writeStream.write("<li>Reduced the number of colors in Settings from 25 to 10 which matches with the periodic table colors</li>");
  writeStream.write("<li>Fixed the layout bug where the 2nd and 3rd row were appearing with a huge space on iOS devices</li>");
  writeStream.write("<li>Fixed scrollbar styles for all browsers</li>");
  writeStream.write("<li>Added an open-source license on Github</li>");
  writeStream.write(
    "<li>Removed theme switching to enable light or dark mode from Settings and a dedicated button is available in the top navigation bar</li>"
  );
  writeStream.write("<li>Replaced the existing static image of electronic configuration with an animated version</li>");
  writeStream.write("<li>Please contact me at naveen@periodic-table.io if you have any suggestions or issues with the website</li>");
  writeStream.write("<li class='versionHeader'>Feb 2020</li>");
  writeStream.write("<li>Modified colors at the navigation bar for better accessibility</li>");
  writeStream.write(
    "<li>Updated Persian, Croatian, Hungarian, Polish, Greek, Hebrew, Portuguese, German, Spanish, Chinese (Traditional), Russian, Thai, French, Italian, Chinese (Simplified) and Turkish translations</li>"
  );
  writeStream.write("<li class='versionHeader'>May 2019</li>");
  writeStream.write("<li>Added Store page for t-shirts and other merchandise</li>");
  writeStream.write("<li>Added English (UK) translation</li>");
  writeStream.write("<li>Updated Chinese (Simplified), Portuguese, Spanish, Indonesian, Vietnamese and Chinese (Traditional) translations</li>");
  writeStream.write("<li class='versionHeader'>Apr 2019</li>");
  writeStream.write("<li>Updated Arabic, Italian and Croatian translations</li>");
  writeStream.write("<li class='versionHeader'>Dec 2018</li>");
  writeStream.write("<li>Added Slovenian, Norwegian (Nynorsk) and Croatian translations</li>");
  writeStream.write("<li>Updated Danish, Japanese and Italian translations</li>");
  writeStream.write("<li class='versionHeader'>Nov 2018</li>");
  writeStream.write("<li>Added Danish, Greek, Thai and Hebrew translations</li>");
  writeStream.write("<li>Updated Arabic, Chinese (Traditional), Chinese (Simplified), Portuguese, Catalan, German and Japanese translations</li>");
  writeStream.write("<li class='versionHeader'>Jun 2018</li>");
  writeStream.write("<li>Updated Russian, French and Arabic translations</li>");
  writeStream.write("<li class='versionHeader'>May 2018</li>");
  writeStream.write("<li>Updated Persian, Czech, Italian, Dutch, Catalan, Vietnamese, Hungarian, Indonesian and Japanese translations</li>");
  writeStream.write("<li class='versionHeader'>Apr 2018</li>");
  writeStream.write("<li>Updated Dutch and Korean translations</li>");
  writeStream.write("<li class='versionHeader'>Mar 2018</li>");
  writeStream.write("<li>Released the first version of the website with Progressive Web App (PWA) features</li>");
  writeStream.write("<li>Updated the colors of the periodic table</li>");
  writeStream.write("<li>Added options for wide and large tiles when website is pinned to Start on Windows 10</li>");
  writeStream.write("<li>Added Hindi, Chinese (Traditional), Arabic, Polish and Swedish translations</li>");
  writeStream.write("<li>Updated Japanese and Dutch translations</li>");
  writeStream.write("</ul>");
  writeStream.write("</div>");
  writeStream.write("<div class='text-upper aboutHeader text-center pt-16 pb-8'>" + langValues.languages + "</div>");
  writeStream.write("<div>");
  writeStream.write("<div class='pb-8'>");
  writeStream.write(langValues.enTrans + "; " + langValues.arTrans + "; " + langValues.bgTrans + "; " + langValues.caTrans + "; ");
  writeStream.write(langValues.csTrans + "; " + langValues.daTrans + "; " + langValues.deTrans + "; " + langValues.elTrans + "; ");
  writeStream.write(langValues.esTrans + ";" + langValues.faTrans + "; " + langValues.fiTrans + "; " + langValues.frTrans + "; ");
  writeStream.write(langValues.heTrans + "; " + langValues.hiTrans + "; " + langValues.hrTrans + "; " + langValues.huTrans + "; ");
  writeStream.write(langValues.hyTrans + "; " + langValues.idTrans + "; " + langValues.itTrans + ";" + langValues.jaTrans + "; ");
  writeStream.write(langValues.koTrans + "; " + langValues.mkTrans + "; " + langValues.msTrans + "; " + langValues.nlTrans + "; ");
  writeStream.write(langValues.nnTrans + "; " + langValues.plTrans + "; " + langValues.ptTrans + "; " + langValues.roTrans + "; ");
  writeStream.write(langValues.ruTrans + ";" + langValues.skTrans + "; " + langValues.slTrans + "; " + langValues.srTrans + "; ");
  writeStream.write(langValues.svTrans + "; " + langValues.thTrans + "; " + langValues.trTrans + "; " + langValues.ukTrans + "; ");
  writeStream.write(langValues.viTrans + "; " + langValues.zhTrans + ";" + langValues.chTrans + ";");
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
