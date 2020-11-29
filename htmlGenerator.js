// const fs = require("fs");
const xlsxFile = require("read-excel-file/node");
const htmlPrivacy = require("./htmlPrivacy.js");
const htmlAbout = require("./htmlAbout.js");

xlsxFile("../Translation/Periodic Table others.xlsm").then((rows) => {
  let languages = [
    // { lang: "en", col: 3 },
    // { lang: "en-gb", col: 40 },
    // { lang: "bg", col: 20 },
    // { lang: "ca", col: 25 },
    // { lang: "zh-cn", col: 6 },
    // { lang: "zh-tw", col: 28 },
    // { lang: "hr", col: 39 },
    // { lang: "cs", col: 24 },
    // { lang: "da", col: 33 },
    // { lang: "nl", col: 7 },
    // { lang: "fi", col: 19 },
    { lang: "fr", col: 5 },
    // { lang: "de", col: 12 },
    // { lang: "el", col: 35 },
    // { lang: "hi", col: 29 },
    // { lang: "hu", col: 11 },
    // { lang: "id", col: 21 },
    // { lang: "it", col: 8 },
    // { lang: "ja", col: 23 },
    // { lang: "ko", col: 10 },
    // { lang: "ms", col: 41 },
    // { lang: "nb-no", col: 27 },
    // { lang: "nn-no", col: 38 },
    // { lang: "pl", col: 30 },
    // { lang: "pt", col: 18 },
    // { lang: "ro", col: 17 },
    // { lang: "ru", col: 9 },
    // { lang: "sr", col: 26 },
    // { lang: "sk", col: 13 },
    // { lang: "sl", col: 37 },
    { lang: "es", col: 4 },
    // { lang: "sv", col: 32 },
    // { lang: "th", col: 34 },
    // { lang: "tr", col: 22 },
    // { lang: "uk", col: 14 },
    // { lang: "vi", col: 15 },
    // { lang: "ar", col: 31 },
    // { lang: "he", col: 36 },
    // { lang: "fa", col: 16 },
    // { lang: "hy", col: 42 },
    // { lang: "mk", col: 43 },
  ];

  languages.forEach((language) => {
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    function printObject(col) {
      let o = {};
      for (var j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }

    let defaultHead = [
      "<!DOCTYPE html>",
      "<html lang='en' class='normalFont' data-direction='ltr' data-theme='dark' data-style='1'>",
      "<head>",
      "<meta charset='utf-8'/>",
      "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>",
      "<meta name='viewport' content='width=device-width,initial-scale=1'/>",
      "<link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-touch-icon.png'/>",
      "<link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png'/>",
      "<link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png'/>",
      "<link rel='manifest' href='manifest.json'/>",
      "<link rel='mask-icon' href='safari-pinned-tab.svg' color='#0078d7'/>",

      "<meta name='msapplication-TileColor' content='#0078d7'/>",
      "<meta name='msapplication-TileImage' content='/images/icons/mstile-144x144.png'/>",
      "<meta name='msapplication-square70x70logo' content='/images/icons/mstile-70x70.png'/>",
      "<meta name='msapplication-square150x150logo' content='/images/icons/mstile-150x150.png'/>",
      "<meta name='msapplication-wide310x150logo' content='/images/icons/mstile-310x150.png'/>",
      "<meta name='msapplication-square310x310logo' content='/images/icons/mstile-310x310.png'/>",
      "<meta name='theme-color' content='#003c6c'/>",
      "<meta name='google' content='notranslate'/>",
      "<meta name='robots' content='index,follow'/>",
      "<meta name='format-detection' content='telephone=no'/>",
      "<meta name='mobile-web-app-capable' content='yes'/>",
      "<meta name='apple-mobile-web-app-capable' content='yes'/>",
      "<meta name='author' content='Naveen CS'/>",
      "<meta name='twitter:card' content='summary_large_image'/>",
      "<meta name='twitter:site' content='@periodictableio'/>",
      "<meta property='og:site_name' content='Periodic-Table.io'/>",
      "<meta property='og:type' content='website'/>",
    ];

    let defaultFooter = [
      "<div class='footer'>",
      "<div class='flex flex-wrap justify-center pt-2'>",
      "<a target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer' class='m-1 p-2'>",
      "<span id='suggestionLink' class='linkText'>" + langValues.suggestions + "</span></a>",
      "<a id='translationFooter' href='translation' class='m-1 p-2 flex'>",
      "<span id='translate2Link' class='linkText'>" + langValues.translation + "</span></a>",
      "<a id='aboutFooter' href='about' class='m-1 p-2'>",
      "<span id='aboutLink' class='linkText'>" + langValues.about + "</span></a>",
      "<a id='creditsFooter' href='credits' class='m-1 p-2'>",
      "<span id='creditsLink' class='linkText'>" + langValues.credits + "</span>",
      "</a>",
      "<a id='privacyFooter' href='privacy-policy' class='m-1 p-2'> ",
      "<span id='privacyLink' class='linkText'>" + langValues.privacy + "</span>",
      "</a>",
      "</div>",
    ];

    let keywords =
      "Periodic Table, chemical, elements, interactive, PWA, properties, history, name origin, images, applications, hazards, electron shell, diagram, chemistry, electron configuration, isotopes, information";
    let description =
      "Interactive periodic table of the chemical elements in 39 languages - Includes properties, history, name origin, facts, applications, hazards, isotopes and more.";
    let website = "https://periodic-table.io";
    let image = website + "/images/icons/android-chrome-256x256.png";
    let title = langValues.privacy + " - Periodic Table";
    let page = "privacy-policy";
    let link = website + "/" + lang + "/" + page + "/";

    let metaTags = [
      "<meta name='keywords' content='" + keywords + "' />",
      "<meta name='description' content='" + description + "' />",
      "<meta property='og:description' content='" + description + "' />",
      "<meta name='twitter:description' content='" + description + "' />",
      "<meta property='og:title' content='" + title + "' />",
      "<meta name='twitter:title' content='" + title + "' />",
      "<title id='homeTitle'>" + title + "</title>",
      "<meta property='og:image' content='" + image + "' />",
      "<meta name='twitter:image' content='" + image + "' />",
      "<meta name='twitter:image:src' content='" + image + "' />",
      "<meta property='og:url' content='" + link + "' />",
      "<link rel='canonical' href='" + link + "' />",
      "<link rel='stylesheet' href='../../style.min.css' />",
      "</head>",
    ];

    htmlPrivacy.writeFile(lang, langValues, page, defaultHead, metaTags, defaultFooter);
    htmlAbout.writeFile(lang, langValues, page, defaultHead, metaTags, defaultFooter);
  });
});
