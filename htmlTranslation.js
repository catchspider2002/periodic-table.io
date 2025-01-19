const fs = require("fs");
const dotenv = require("dotenv");
const onesky = require("@brainly/onesky-utils");
dotenv.config();

// Rate limiting configuration
const RATE_LIMIT_DELAY = 1100; // 1.1 seconds between requests
const MAX_RETRIES = 3;

// Utility function for delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Rate limiter queue
class RateLimiter {
  constructor(delayMs) {
    this.delayMs = delayMs;
    this.lastRequest = 0;
  }

  async acquire() {
    const now = Date.now();
    const timeToWait = Math.max(0, this.lastRequest + this.delayMs - now);
    
    if (timeToWait > 0) {
      await delay(timeToWait);
    }
    
    this.lastRequest = Date.now();
  }
}

const rateLimiter = new RateLimiter(RATE_LIMIT_DELAY);

function returnItem(code) {
  return languageList.find(item => item.code === code)?.id;
}

const languageList = [
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
  { id: 505, code: "ta" },
  { id: 662, code: "te" },
  { id: 73, code: "la-VA" },
  { id: 70, code: "cy-GB" },
];

const unavailable = [
  "Albanian",
  "Azerbaijani",
  "Belarusian",
  "Estonian",
  "Filipino",
  "Icelandic",
  "Kazakh",
  "Latvian",
  "Lithuanian",
  "Swahili",
  "Telugu",
  "Latin",
  "Welsh",
];

function getColorForPercent(percent) {
  if (percent === 100) return "brightgreen";
  if (percent > 80) return "green";
  if (percent > 65) return "yellow";
  if (percent > 50) return "orange";
  return "red";
}

function formatLanguageData(language) {
  return {
    english_name: language.english_name
      .replace(" (Latvia)", "")
      .replace(" (Belarus)", "")
      .replace(" (Iceland)", "")
      .replace(" (United Kingdom)", "")
      .replace(" / Tagalog", ""),
    translation_progress: parseFloat(language.translation_progress.replace("%", "")),
    code: returnItem(language.code),
  };
}

function processLanguages(data, projectId) {
  const availableMarkup = [];
  const unavailableMarkup = [];
  const availableHTML = [];
  const unavailableHTML = [];

  data.forEach(item => {
    const percent = item.translation_progress;
    const englishName = item.english_name;
    const color = getColorForPercent(percent);

    const newName = englishName.replace(/ /g, "%20");
    const newLink = `https://windows-uwp.oneskyapp.com/collaboration/translate/project/project/${projectId}/language/${item.code}`;
    const badgeLink = `https://img.shields.io/badge/${newName}-${percent}%25-${color}`;

    const markup = `[!["${newName}"](${badgeLink})](${newLink})\n`;
    const html = `<a class='langOuter' target='_blank' href='${newLink}'><span>${englishName}</span><span class='${color}'>${percent}%</span></a>`;

    if (unavailable.includes(englishName)) {
      unavailableMarkup.push(markup);
      unavailableHTML.push(html);
    } else {
      availableMarkup.push(markup);
      availableHTML.push(html);
    }
  });

  return {
    availableMarkup: availableMarkup.join(''),
    unavailableMarkup: unavailableMarkup.join(''),
    availableHTML: availableHTML.join(''),
    unavailableHTML: unavailableHTML.join('')
  };
}

async function getLanguageData(projectId, retryCount = 0) {
  const options = {
    secret: process.env.ONESKY_SECRET,
    apiKey: process.env.ONESKY_APIKEY,
    projectId,
  };

  try {
    await rateLimiter.acquire();
    const content = await onesky.getLanguages(options);
    const result = JSON.parse(content);

    const mappedResult = result.data
      .map(formatLanguageData)
      .filter(lang => 
        lang.english_name !== "English" && 
        lang.english_name !== "English (United Kingdom)"
      )
      .sort((x, y) => 
        x.english_name.toUpperCase().localeCompare(y.english_name.toUpperCase())
      );

    return processLanguages(mappedResult, projectId);
  } catch (error) {
    if (error.code === 429 && retryCount < MAX_RETRIES) {
      console.log(`Rate limit hit for project ${projectId}, retry ${retryCount + 1}/${MAX_RETRIES}`);
      await delay(RATE_LIMIT_DELAY * (retryCount + 1)); // Exponential backoff
      return getLanguageData(projectId, retryCount + 1);
    }
    
    console.error(`Error fetching language data for project ${projectId}:`, error);
    throw error;
  }
}

async function writeFile(
  lang,
  langValues,
  page,
  defaultHead,
  metaTags,
  defaultNav,
  nav4,
  defaultFooter
) {
  try {
    console.log(`Writing file for ${lang}-${page}`);

    // Fetch language datasets sequentially to avoid rate limits
    const generalTerms = await getLanguageData(190138);
    const elementDetails = await getLanguageData(197066);

    // Generate HTML content
    const htmlContent = await generateHTMLContent(
      lang,
      langValues,
      defaultHead,
      metaTags,
      defaultNav,
      nav4,
      defaultFooter,
      generalTerms,
      elementDetails
    );

    // Write the HTML file
    const filePath = `${lang}/${page}.html`;
    await fs.promises.writeFile(filePath, htmlContent);
    console.log(`Created ${lang}-${page}`);

    // Generate and write README
    const date = new Date().toLocaleString("default", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    });
    await writeReadme(date, generalTerms, elementDetails);

  } catch (error) {
    console.error(`Error in writeFile for ${lang}-${page}:`, error);
    throw error;
  }
}

async function writeReadme(date, generalTerms, elementDetails) {
  const readmeContent = [
    "# periodic-table.io\n\n",
    "![GitHub repo size](https://img.shields.io/github/repo-size/catchspider2002/periodic-table.io)\n",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n",
    "![GitHub last commit](https://img.shields.io/github/last-commit/catchspider2002/periodic-table.io)\n",
    "![Website](https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fperiodic-table.io%2F)\n\n",
    "<div align='center'>\n",
    "<img src='images2/icons/android-chrome-192x192.png' alt='periodic-table.io' />\n",
    "</div>\n\n",
    "[periodic-table.io](https://periodic-table.io) provides comprehensive and useful information about the chemical elements all in one place. Click on an element to know more about the properties, history, name origin, images, applications, hazards and electron shell diagram of each element.\n\n",
    "- Visually pleasing colour coded table\n",
    "- Simple fluid design and has lots of details\n",
    "- Detailed description for each element\n",
    "- View the list of all elements in the alphabetical order\n",
    "- Electron shell diagram and image for each element\n",
    "- Compare the properties of 2 elements\n",
    "- Search for the elements using their symbol, atomic number or name\n",
    "- Links to informative websites for further study\n\n",
    `# Translations (As of ${date})\n\n`,
    "Contributions are welcome for the translations. **Click on the translation status badge below to go directly to that language translation page.** There are 2 files available for translation: General Terms and Element Details.\n\n",
    "## General Terms\n",
    "This contains the text for the labels used in all the pages except for the element details mentioned below. The current status of the translation is below:\n\n",
    "#### Available in the website\n\n",
    generalTerms.availableMarkup,
    "\n#### Below are not yet added to the website. I'll be adding new languages when it is crosses 70% translation.\n\n",
    generalTerms.unavailableMarkup,
    "\n## Element Details\n",
    "This contains the text for individual element details like name reason, history, facts, applications and hazards. Below is a sample from Hydrogen element:\n\n",
    "**Name Reason**\n",
    "> From the Greek word *hydro* (water), and *genes* (forming)\n\n",
    "**History**\n",
    "> Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.<br><br>In 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.<br><br>French scientist Antoine Lavoisier later named the element hydrogen in 1783.\n\n",
    "**Facts**\n",
    "> Hydrogen is the primary component of Jupiter and the other gas giant planets\n\n",
    "**Applications**\n",
    "> Liquid hydrogen is used as a rocket fuel.<br><br>Hydrogen is commonly used in power stations as a coolant in generators.<br><br>Hydrogen's two heavier isotopes (deuterium and tritium) are used in nuclear fusion. Used as a shielding gas in welding methods such as atomic hydrogen welding.\n\n",
    "**Hazards**\n",
    "> Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form\n\n",
    "#### Available in the website\n\n",
    elementDetails.availableMarkup,
    "\n#### Below are not yet added to the website since the General Terms is not 70% translated\n\n",
    elementDetails.unavailableMarkup,
    "\n\n# License\n\n",
    "MIT License\n\n",
    `Copyright (c) 2018-${new Date().getFullYear()} periodic-table.io\n\n`,
    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n",
    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n",
    "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"
  ].join('');

  try {
    await fs.promises.writeFile("README.md", readmeContent);
    console.log("Created README");
  } catch (error) {
    console.error("Error writing README:", error);
    throw error;
  }
}

async function generateHTMLContent(lang, langValues, defaultHead, metaTags, defaultNav, nav4, defaultFooter, generalTerms, elementDetails) {
  const date = new Date().toLocaleString("default", { 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  });

  return [
    ...defaultHead,
    ...metaTags,
    ...defaultNav,
    `<h1 class='truncate'>${langValues.translation}</h1>`,
    ...nav4,
    "<div class='content-wrapper'>",
    "<div class='container'>",
    "<div id='translationHeader' class='row text-upper aboutHeader text-center heavyFont'></div>",
    "<div id='translationContent'>",
    `<h1>Translations (As of ${date})</h1>`,
    "<p>Contributions are welcome for the translations. <strong>Click on the translation status badge below to go directly to that language translation page.</strong> There are 2 files available for translation: General Terms and Element Details.</p>",
    "<h2>General Terms</h2>",
    "<p>This contains the text for the labels used in all the pages except for the element details mentioned below. The current status of the translation is below:</p>",
    "<h4>Available in the website</h4>",
    `<p>${generalTerms.availableHTML}</p>`,
    "<h4>Below are not yet added to the website. I&#39;ll be adding new languages when it is crosses 70% translation.</h4>",
    `<p>${generalTerms.unavailableHTML}</p>`,
    "<h2>Element Details</h2>",
    "<p>This contains the text for individual element details like name reason, history, facts, applications and hazards. Below is a sample from Hydrogen element:</p>",
    "<p><strong>Name Reason</strong></p>",
    "<blockquote><p>From the Greek word <em>hydro</em> (water), and <em>genes</em> (forming)</p></blockquote>",
    "<p><strong>History</strong></p>",
    "<blockquote><p>Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.<br><br>In 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.<br><br>French scientist Antoine Lavoisier later named the element hydrogen in 1783.</p></blockquote>",
    "<p><strong>Facts</strong></p>",
    "<blockquote><p>Hydrogen is the primary component of Jupiter and the other gas giant planets</p></blockquote>",
    "<p><strong>Applications</strong></p>",
    "<blockquote><p>Liquid hydrogen is used as a rocket fuel.<br><br>Hydrogen is commonly used in power stations as a coolant in generators.<br><br>Hydrogen&#39;s two heavier isotopes (deuterium and tritium) are used in nuclear fusion. Used as a shielding gas in welding methods such as atomic hydrogen welding.</p></blockquote>",
    "<p><strong>Hazards</strong></p>",
    "<blockquote><p>Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form</p></blockquote>",
    "<h4>Available in the website</h4>",
    `<p>${elementDetails.availableHTML}</p>`,
    "<h4>Below are not yet added to the website since the General Terms is not 70% translated</h4>",
    `<p>${elementDetails.unavailableHTML}</p>`,
    "</div>",
    "</div>",
    "</div>",
    ...defaultFooter
  ].join('');
}

exports.writeFile = writeFile;