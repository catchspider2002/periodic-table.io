const fs = require("fs");
const fsextra = require("fs-extra");

const xlsxFile = require("read-excel-file/node");
const Constants = require("../htmlConstants.js");

let newRawDataElement = Constants.rawData;

xlsxFile("../../Translation/Periodic Table others.xlsm", { sheet: 1 }).then((rows) => {
  // xlsxFile("../../Translation/Periodic Table others.xlsm", { getSheets: true }).then((sheets) => {
  // sheets === [{ name: "Sheet1" }, { name: "Sheet2" }];
  // let rows = sheets[1];
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
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    function getNum(value) {
      if (lang === "ar") {
        // Arabic
        value = value.toString().replace(/\./g, "٫");
        let id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
        return value.toString().replace(/[0-9]/g, function (w) {
          return id[+w];
        });
      } else if (lang === "fa") {
        // Persian
        value = value.toString().replace(/\./g, "٫");
        let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return value.toString().replace(/[0-9]/g, function (w) {
          return id[+w];
        });
      } else {
        if (language.punc === "comma") return value.toString().replace(/\./g, ",");
        else return value;
      }
    }

    if (!fs.existsSync(lang)) fs.mkdirSync(lang);

    for (let i = 1; i <= 118; i++) {
      let eleNum = i;
      let element = newRawDataElement[eleNum - 1];

      let num = element.num;
      let sym = element.sym;

      let eleYear = getNum(element.yr) + "";

      let bc = langValues.BC;

      if (eleYear.indexOf(" ") > 0) {
        if (lang === "zs") eleYear = "公元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
        else if (lang === "ko") eleYear = "기원전 " + eleYear.substring(0, eleYear.indexOf(" ")) + "년";
        else if (lang === "ja") eleYear = "紀元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
        else if (lang === "kk") eleYear = "б.з.д" + eleYear.substring(0, eleYear.indexOf(" ")) + "ж.";
        else if (lang === "hu" || lang === "tr" || lang === "ms" || lang === "th") eleYear = bc + " " + eleYear.substring(0, eleYear.indexOf(" "));
        else eleYear = eleYear.substring(0, eleYear.indexOf(" ")) + " " + bc;
      } else {
        if (lang === "ko") eleYear = eleYear + "년";
      }

      let colorList = [
        { id: "cat3", value: "253, 58, 74", title: "Red" },
        { id: "cat6", value: "245, 128, 37", title: "Orange" },
        { id: "lanthanides", value: "255, 167, 0", title: "Yellow" },
        { id: "actinides", value: "123, 113, 81", title: "Brown" },
        { id: "cat8", value: "91, 170, 9", title: "Lime" },
        { id: "cat5", value: "26, 152, 90", title: "Green" },
        { id: "cat7", value: "59, 168, 221", title: "Cyan" },
        { id: "cat2", value: "0, 120, 215", title: "Blue" },
        { id: "cat4", value: "139, 102, 204", title: "Purple" },
        { id: "cat1", value: "228, 27, 144", title: "Pink" },
      ];

      function getColor(category) {
        let colorExists = colorList.find((x) => x.id === category);
        if (colorExists) return colorExists.value;
        else return "0, 120, 215";
      }

      let themeColor = getColor(element.ctg);

      let writeStream = fs.createWriteStream(lang + "/element-" + num + ".svg");

      let font = "Gill Sans MT";
      let letterFont = "Gill Sans MT";
      let numberFont = "Gill Sans MT";

      let montserratLanguages = ["ro", "ru", "uk", "bg", "mk", "sr", "tr", "uk", "vi", "af"];

      if (montserratLanguages.indexOf(lang) > 0) font = "Montserrat";

      if (lang == "ja") font = "Noto Sans JP Regular";
      else if (lang == "ko") font = "Noto Sans KR";
      else if (lang == "hi") font = "Noto Sans Devanagari";
      else if (lang == "th") font = "Sarabun";
      else if (lang == "zh-cn") font = "Noto Sans SC";
      else if (lang == "zh-tw") font = "Noto Sans TC Regular";
      else if (lang == "ar" || lang == "fa") font = "Noto Sans Kufi Arabic";
      else if (lang == "he") font = "Noto Sans Hebrew";
      else if (lang == "hy") font = "Noto Sans Armenian";
      else if (lang == "el") font = "Arimo";

      let spacing = 1;
      if (lang == "ar" || lang == "fa" || lang == "he" || lang == "hi") spacing = 0;

      writeStream.write("<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='627' font-family='" + font + "' font-weight='400'>");
      writeStream.write("<path fill='rgb(" + themeColor + ")' d='M0 0h1200v626.99H0z'/>");
      writeStream.write(
        "<path d='M35 472.37v101.3c0 10.64 7.12 18.36 18.2 18.36h1093.6c11.08 0 18.2-7.72 18.2-18.35V472.37z' fill='rgba(0, 0, 0, 0.3)'/>"
      );

      writeStream.write("<rect x='130.02' y='130.02' rx='20' ry='20' width='940' height='247.37' fill='rgba(255, 255, 255, 0.75)'/>");
      writeStream.write("<rect x='767.66' y='146.75' rx='10' ry='10' width='15' height='213.83' fill='rgb(" + themeColor + ")'/>");
      writeStream.write(
        "<rect x='32.5' y='32.5' rx='20' ry='20' width='1135' height='562' stroke='rgba(255, 255, 255, 0.75)' stroke-width='4.9974' fill='none'/>"
      );

      writeStream.write(
        "<text x='600' y='551.29' font-weight='700' font-size='56' letter-spacing='" +
          (spacing === 0 ? 0 : 1.98) +
          "' fill='rgba(255, 255, 255, 0.8)' text-anchor='middle'>" +
          langValues[element.nme].toUpperCase() +
          "</text>"
      );

      writeStream.write(
        "<text x='842.25' y='174.9' font-size='36' fill='rgba(0, 0, 0, 0.6)' font-family='" + numberFont + "'>" + getNum(num) + "</text>"
      );
      writeStream.write(
        "<text x='943.28' y='275.34' font-size='95.7' fill='rgb(" +
          themeColor +
          ")' font-weight='700' font-family='" +
          letterFont +
          "' text-anchor='middle'>" +
          sym +
          "</text>"
      );

      let newaWt = getNum(element.aWt);

      writeStream.write(
        "<text x='1051.12' y='357.07' text-anchor='end' font-size='32' fill='rgba(0, 0, 0, 0.6)' font-family='" +
          numberFont +
          "'>" +
          newaWt +
          "</text>"
      );

      writeStream.write(
        "<text font-size='24' letter-spacing='" +
          (spacing === 0 ? 0 : 1.98) +
          "' x='178' y='186.61' fill='rgba(0, 0, 0, 0.6)'>" +
          langValues.labelCategoryMain.toUpperCase() +
          "</text>"
      );
      writeStream.write(
        "<text font-weight='700' font-size='27.99' x='178' y='223.58' fill='rgb(" +
          themeColor +
          ")'>" +
          langValues[element.ctg].toUpperCase() +
          "</text>"
      );
      writeStream.write(
        "<text font-size='24' letter-spacing='" +
          (spacing === 0 ? 0 : 1.98) +
          "' x='178' y='300.92' fill='rgba(0, 0, 0, 0.6)'>" +
          langValues.discovered.toUpperCase() +
          "</text>"
      );
      writeStream.write("<text font-weight='700' font-size='27.99' x='178' y='337.08' fill='rgb(" + themeColor + ")'>" + eleYear + "</text>");
      writeStream.write("</svg>");
      // the finish event is emitted when all data has been flushed from the stream
      writeStream.on("finish", () => {
        console.log("Created " + lang + "-" + eleNum);
      });

      // close the stream
      writeStream.end();
    }

    // fs.copyFile("pwabuilder-sw.js", lang + "/pwabuilder-sw.js", (err) => {
    //   if (err) throw err;
    // });

    // fs.copyFile("favicon-32x32.png", lang + "/favicon-32x32.png", (err) => {
    //   if (err) throw err;
    // });

    // fs.copyFile("favicon-16x16.png", lang + "/favicon-16x16.png", (err) => {
    //   if (err) throw err;
    // });

    // fsextra
    //   .copy("images2", lang + "/images")
    //   .then(() => console.log("Files copied successfully!"))
    //   .catch((err) => console.error(err));

    function printObject(col) {
      let o = {};
      for (let j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
  });
});
