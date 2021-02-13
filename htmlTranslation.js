const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
  

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  console.log(`Your port is ${process.env.ONESKY_SECRET}`);
  console.log(`Your port is ${process.env.ONESKY_APIKEY}`);

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<span class='truncate'>" + langValues.privacy + "</span>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div id='translationHeader' class='row text-upper aboutHeader text-center heavyFont'></div>");
  writeStream.write("<div id='translationContent'>");

  writeStream.write("<h1>Translations (As of November 26, 2020)</h1>");
  writeStream.write(
    "<p>Contributions are welcome for the translations. <strong>Click on the translation status badge below to go directly to that language translation page.</strong> There are 2 files available for translation: General Terms and Element Details.</p>"
  );
  writeStream.write("<h2>General Terms</h2>");
  writeStream.write(
    "<p>This contains the text for the labels used in all the pages except for the element details mentioned below. The current status of the translation is below:</p>"
  );
  writeStream.write("<h4>Available in the website</h4>");
  writeStream.write("<p>");

  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/190138/language/28'><img src='https://img.shields.io/badge/Arabic-98.7%25-green' alt='Arabic'></a>"
  );
  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/190138/language/62'><img src='https://img.shields.io/badge/Armenian-100%25-brightgreen' alt='Armenian'></a>"
  );

  writeStream.write("</p>");

  writeStream.write(
    "<h4>Below are not yet added to the website. I&#39;ll be adding new languages when it is crosses 80% translation.</h4>"
  );
  writeStream.write("<p>");

  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/190138/language/60'><img src='https://img.shields.io/badge/Afrikaans-38.1%25-red' alt='Afrikaans'></a>"
  );
  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/190138/language/213'><img src='https://img.shields.io/badge/Uzbek-57.4%25-orange' alt='Uzbek'></a>"
  );
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
  writeStream.write("<p>Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form</p>");
  writeStream.write("</blockquote>");
  writeStream.write("<h4>Available in the website</h4>");

  writeStream.write("<p>");

  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/197066/language/28'><img src='https://img.shields.io/badge/Arabic-1.9%25-red' alt='Arabic'></a>"
  );
  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/197066/language/50'><img src='https://img.shields.io/badge/Vietnamese-23.7%25-red' alt='Vietnamese'></a>"
  );

  writeStream.write("</p>");

  writeStream.write(
    "<h4>Below are not yet added to the website since the General Terms is not 80% translated</h4>"
  );
  writeStream.write("<p>");

  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/197066/language/60'><img src='https://img.shields.io/badge/Afrikaans-0%25-red' alt='Afrikaans'></a>"
  );
  writeStream.write(
    "<a href='https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/197066/language/213'><img src='https://img.shields.io/badge/Uzbek-0%25-red' alt='Uzbek'></a>"
  );

  writeStream.write("</p>");

  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  // writeStream.write("<div class='container'>");
  // writeStream.write("<div class='text-upper aboutHeader text-center grayText'>");
  // writeStream.write(langValues.privacy + "</div>");
  // writeStream.write("<div class='pt-4'>" + langValues.privacyFull + "</div>");
  // writeStream.write("</div>");
  // writeStream.write("</div>");

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
