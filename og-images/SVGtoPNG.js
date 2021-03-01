const { convertFile } = require("convert-svg-to-png");
const fs = require("fs");
// const sharp = require("sharp");
const util = require("util");
var svg2img = require("svg2img");
// var btoa = require("btoa");

let languages = [
  // { lang: "en", name: "English", col: 3, punc: "dot", regular: "NotoSans", bcp: "en-US", code: "1" },
  // { lang: "en-gb", name: "English (UK)", col: 40, punc: "dot", regular: "NotoSans", bcp: "en-GB", code: "45" },
  // { lang: "af", name: "Afrikaans", col: 44, punc: "comma", regular: "NotoSans", bcp: "af-ZA", code: "60" },
  // { lang: "id", name: "Bahasa Indonesia", col: 21, punc: "comma", regular: "NotoSans", bcp: "id-ID", code: "54" },
  // { lang: "ms", name: "Bahasa Melayu", col: 41, punc: "dot", regular: "NotoSans", bcp: "ms-MY", code: "55" },
  // { lang: "ca", name: "Català", col: 25, punc: "comma", regular: "NotoSans", bcp: "ca-ES", code: "23" },
  // { lang: "cs", name: "Čeština", col: 24, punc: "comma", regular: "NotoSans", bcp: "cs-CZ", code: "13" },
  // { lang: "da", name: "Dansk", col: 33, punc: "comma", regular: "NotoSans", bcp: "da-DK", code: "27" },
  // { lang: "de", name: "Deutsch", col: 12, punc: "comma", regular: "NotoSans", bcp: "de-DE", code: "6" },
  // { lang: "es", name: "Español", col: 4, punc: "comma", regular: "NotoSans", bcp: "es-ES", code: "79" },
  // { lang: "fr", name: "Français", col: 5, punc: "comma", regular: "NotoSans", bcp: "fr-FR", code: "5" },
  // { lang: "hr", name: "Hrvatski", col: 39, punc: "comma", regular: "NotoSans", bcp: "hr-HR", code: "22" },
  // { lang: "it", name: "Italiano", col: 8, punc: "comma", regular: "NotoSans", bcp: "it-IT", code: "10" },
  // { lang: "hu", name: "Magyar", col: 11, punc: "comma", regular: "NotoSans", bcp: "hu-HU", code: "21" },
  // { lang: "nl", name: "Nederlands", col: 7, punc: "comma", regular: "NotoSans", bcp: "nl-NL", code: "12" },
  // { lang: "nb-no", name: "Norsk Bokmål", col: 27, punc: "comma", regular: "NotoSans", bcp: "nb-NO", code: "77" },
  // { lang: "nn-no", name: "Norsk Nynorsk", col: 38, punc: "comma", regular: "NotoSans", bcp: "nn-NO", code: "15" },
  // { lang: "pl", name: "Polski", col: 30, punc: "comma", regular: "NotoSans", bcp: "pl-PL", code: "16" },
  // { lang: "pt", name: "Português", col: 18, punc: "comma", regular: "NotoSans", bcp: "pt-PT", code: "563" },
  // { lang: "ro", name: "Română", col: 17, punc: "comma", regular: "NotoSans", bcp: "ro-RO", code: "19" },
  // { lang: "sk", name: "Slovenčina", col: 13, punc: "comma", regular: "NotoSans", bcp: "sk-SK", code: "34" },
  // { lang: "sl", name: "Slovenščina", col: 37, punc: "comma", regular: "NotoSans", bcp: "sl-SI", code: "659" },
  // { lang: "fi", name: "Suomi", col: 19, punc: "comma", regular: "NotoSans", bcp: "fi-FI", code: "18" },
  // { lang: "sv", name: "Svenska", col: 32, punc: "comma", regular: "NotoSans", bcp: "sv-SE", code: "17" },
  // { lang: "vi", name: "Tiếng Việt", col: 15, punc: "comma", regular: "NotoSans", bcp: "vi-VN", code: "50" },
  // { lang: "tr", name: "Türkçe", col: 22, punc: "comma", regular: "NotoSans", bcp: "tr-TR", code: "14" },
  // { lang: "el", name: "Ελληνικά", col: 35, punc: "comma", regular: "NotoSans", bcp: "el-GR", code: "20" },
  // { lang: "bg", name: "Български", col: 20, punc: "comma", regular: "NotoSans", bcp: "bg-BG", code: "576" },
  // { lang: "mk", name: "Македонски", col: 43, punc: "comma", regular: "NotoSans", bcp: "mk-MK", code: "644" },
  // { lang: "ru", name: "Русский", col: 9, punc: "comma", regular: "NotoSans", bcp: "ru-RU", code: "11" },
  // { lang: "sr", name: "Српски", col: 26, punc: "comma", regular: "NotoSans", bcp: "sr-Cyrl-CS", code: "462" },
  // { lang: "uk", name: "Українська", col: 14, punc: "comma", regular: "NotoSans", bcp: "uk-UA", code: "36" },
  { lang: "hy", name: "Հայերեն", col: 42, punc: "comma", regular: "NotoSansArmenian-Regular", bcp: "hy-AM", code: "62" },
  // { lang: "he", name: "עברית", col: 36, punc: "dot", regular: "NotoSansHebrew-Regular", bcp: "he-IL", code: "42" },
  // { lang: "ar", name: "العربية", col: 31, punc: "dot", regular: "NotoSansKufiArabic-Regular", bcp: "ar-SA", code: "28" },
  // { lang: "fa", name: "فارسی", col: 16, punc: "dot", regular: "NotoSansKufiArabic-Regular", bcp: "fa-IR", code: "29" },
  // { lang: "hi", name: "हिंदी", col: 29, punc: "dot", regular: "NotoSansDevanagari-Regular", bcp: "hi-IN", code: "587" },
  // { lang: "th", name: "ไทย", col: 34, punc: "dot", regular: "NotoSansThai-Regular", bcp: "th-TH", code: "56" },
  // { lang: "ja", name: "日本語", col: 23, punc: "dot", regular: "NotoSansJP-Regular", bcp: "ja-JP", code: "4" },
  // { lang: "ko", name: "한국어", col: 10, punc: "dot", regular: "NotoSansKR-Regular", bcp: "ko-KR", code: "9" },
  // { lang: "zh-cn", name: "中文(简体)", col: 6, punc: "dot", regular: "NotoSansSC-Regular", bcp: "zh-CN", code: "3" },
  // { lang: "zh-tw", name: "中文(繁體)", col: 28, punc: "dot", regular: "NotoSansTC-Regular", bcp: "zh-TW", code: "2" },
];

languages.forEach((language) => {
  let inputFilePath = language.lang + "/";

  fs.readdirSync(inputFilePath).forEach((file) => {
    if (file.endsWith(".svg")) {
      fs.access(inputFilePath + file.replace(".svg", ".png"), (err) => {
        if (err) {
          // svg2img(inputFilePath + file, { width: 1200, height: 627 }, function (error, buffer) {
          //   fs.writeFileSync(inputFilePath + file.replace(".svg", ".png"), buffer);
          // });

          (async () => {
            const outputFilePath = await convertFile(inputFilePath + file, { width: "1200px", height: "627px" });
            console.log(outputFilePath);
          })();
        }
      });
    }
  });
});
