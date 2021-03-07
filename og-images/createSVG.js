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
    // { lang: "hy", name: "Հայերեն", col: 42, punc: "comma", regular: "NotoSansArmenian-Regular", bcp: "hy-AM", code: "62" },
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

    let pages = [
      { page: "about", keywords: langValues.about, title: langValues.about },
      // { page: "index", keywords: langValues.homeHeader, title: langValues.homeHeader },
      { page: "privacy-policy", keywords: langValues.privacy, title: langValues.privacy },
      { page: "store", keywords: langValues.store + ", tees", title: langValues.store },
      { page: "printables", keywords: langValues.printables + ", poster, flash cards", title: langValues.printables },
      { page: "list", keywords: langValues.list, title: langValues.list },
      { page: "compare", keywords: langValues.compare + ", comparison", title: langValues.compare },
      { page: "credits", keywords: langValues.credits + ", translators, " + langValues.translation, title: langValues.credits },
      { page: "translation", keywords: langValues.translation + ", translators", title: langValues.translation },
    ];

    pages.forEach((pageValue) => {
      let writeStream = fs.createWriteStream(lang + "/" + pageValue.page + ".svg");

      if (pageValue.page === "index") {
        writeStream.write("<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='627'>");
        writeStream.write("<path fill='#0078d7' d='M0 0h1200v626.99H0z'/>");
        writeStream.write("<rect x='32.5' y='32.5' rx='20' ry='20' width='1135' height='562' stroke='#fff' stroke-width='5' fill='none'/>");
        writeStream.write(
          "<text font-weight='600' font-family='Montserrat' font-size='32' x='90' y='150' fill='#fff' letter-spacing='" +
            (spacing === 0 ? 0 : 4.81) +
            "' fill-opacity='.64'>"
        );
        if (lang === "en") writeStream.write("PERIODIC-TABLE.IO");
        else writeStream.write(lang.toUpperCase() + ".PERIODIC-TABLE.IO");
        +writeStream.write("</text>");
        writeStream.write("<text font-weight='500' font-family='" + font + "' font-size='64' x='90' y='250' fill='#fff'>");
        writeStream.write(langValues.line1);
        writeStream.write("</text>");
        writeStream.write("<g fill='#fff'>");
        writeStream.write(
          "<path d='M1047.67 476.2a18.92 18.92 0 00-18.91 18.92 18.92 18.92 0 0014.67 18.4 23.2 23.2 0 0122.58-22.98 18.92 18.92 0 00-18.34-14.34zm70.39 22.99a21.93 21.93 0 00-21.37 17.13l-11.99-1.46a1.83 1.83 0 00-2.03 1.6 1.83 1.83 0 001.6 2.04l11.94 1.45a21.93 21.93 0 00-.06 1.18 21.93 21.93 0 0021.92 21.93 21.93 21.93 0 0021.93-21.93 21.93 21.93 0 00-21.93-21.93zm-62.97 24.57a1.83 1.83 0 00-1.14.41l-12.25 9.93a18.92 18.92 0 00-12.71-4.94 18.92 18.92 0 00-18.92 18.91A18.92 18.92 0 001029 567a18.92 18.92 0 0018.91-18.92 18.92 18.92 0 00-3.73-11.25l12.1-9.8a1.83 1.83 0 00.27-2.57 1.83 1.83 0 00-1.44-.69z'/>"
        );
        writeStream.write(
          "<path d='M1066.63 491.8a21.93 21.93 0 00-21.92 21.93 21.93 21.93 0 004.31 13.01l4.25-3.44a2.92 2.92 0 014.11.43 2.92 2.92 0 01-.43 4.12l-3.86 3.12a21.93 21.93 0 0013.54 4.69 21.93 21.93 0 0021-15.66l-3.5-.42a2.92 2.92 0 01-2.55-3.26 2.92 2.92 0 013.26-2.55l3.7.45a21.93 21.93 0 00.03-.49 21.93 21.93 0 00-21.92-21.93z' opacity='.7'/>"
        );
        writeStream.write("</g>");
      } else {
        writeStream.write("<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='627' font-family='" + font + "' font-weight='400'>");
        writeStream.write("<path fill='#0078d7' d='M0 0h1200v626.99H0z'/>");
        writeStream.write(
          "<path d='M35 472.37v101.3c0 10.64 7.12 18.36 18.2 18.36h1093.6c11.08 0 18.2-7.72 18.2-18.35V472.37z' fill='rgba(0, 0, 0, 0.3)'/>"
        );
        writeStream.write(
          "<rect x='32.5' y='32.5' rx='20' ry='20' width='1135' height='562' stroke='rgba(255, 255, 255, 0.75)' stroke-width='5' fill='none'/>"
        );
        writeStream.write(
          "<text x='600' y='551.29' font-weight='700' font-size='56' letter-spacing='" +
            (spacing === 0 ? 0 : 1.98) +
            "' fill='rgba(255, 255, 255, 0.8)' text-anchor='middle'>"
        );
        writeStream.write(pageValue.title.toUpperCase());
        writeStream.write("</text>");
        writeStream.write("<g fill='#fff'>");
        writeStream.write(
          "<path d='M557.78 135.53a29.19 29.19 0 00-29.2 29.19 29.19 29.19 0 0022.64 28.4 35.8 35.8 0 0134.85-35.47 29.19 29.19 0 00-28.3-22.12zM666.38 171a33.83 33.83 0 00-32.97 26.43l-18.49-2.24a2.83 2.83 0 00-3.14 2.46 2.83 2.83 0 002.47 3.15l18.42 2.24a33.83 33.83 0 00-.1 1.82 33.83 33.83 0 0033.84 33.83 33.83 33.83 0 0033.83-33.83 33.83 33.83 0 00-33.83-33.84zm-97.16 37.92a2.83 2.83 0 00-1.75.63l-18.92 15.32a29.19 29.19 0 00-19.6-7.63 29.19 29.19 0 00-29.2 29.19 29.19 29.19 0 0029.2 29.19 29.19 29.19 0 0029.18-29.2 29.19 29.19 0 00-5.76-17.36l18.67-15.12a2.83 2.83 0 00.42-3.97 2.83 2.83 0 00-2.22-1.05z'/>"
        );
        writeStream.write(
          "<path d='M587.03 159.6a33.83 33.83 0 00-33.83 33.84 33.83 33.83 0 006.66 20.08l6.55-5.32a4.51 4.51 0 016.35.67 4.51 4.51 0 01-.67 6.35l-5.95 4.83a33.83 33.83 0 0020.9 7.22 33.83 33.83 0 0032.39-24.16l-5.4-.65a4.51 4.51 0 01-3.93-5.03 4.51 4.51 0 015.02-3.93l5.72.7a33.83 33.83 0 00.05-.76 33.83 33.83 0 00-33.84-33.84z' opacity='.7'/>"
        );
        writeStream.write("</g>");
        writeStream.write(
          "<text font-weight='600' font-family='Montserrat' text-anchor='middle' font-size='43.53' x='598.91' y='369.4' fill='#fff' letter-spacing='" +
            (spacing === 0 ? 0 : 6.54) +
            "' fill-opacity='.64' stroke-width='1.63'>"
        );
        if (lang === "en") writeStream.write("PERIODIC-TABLE.IO");
        else writeStream.write(lang.toUpperCase() + ".PERIODIC-TABLE.IO");
        writeStream.write("</text>");
      }
      writeStream.write("</svg>");
      // the finish event is emitted when all data has been flushed from the stream
      writeStream.on("finish", () => {
        console.log("Created " + lang + "-" + pageValue.page);
      });

      // close the stream
      writeStream.end();
    });

    // for (let i = 1; i <= 118; i++) {
    //   let eleNum = i;
    //   let element = newRawDataElement[eleNum - 1];

    //   let num = element.num;
    //   let sym = element.sym;

    //   let eleYear = getNum(element.yr) + "";

    //   let bc = langValues.BC;

    //   if (eleYear.indexOf(" ") > 0) {
    //     if (lang === "zs") eleYear = "公元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    //     else if (lang === "ko") eleYear = "기원전 " + eleYear.substring(0, eleYear.indexOf(" ")) + "년";
    //     else if (lang === "ja") eleYear = "紀元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    //     else if (lang === "kk") eleYear = "б.з.д" + eleYear.substring(0, eleYear.indexOf(" ")) + "ж.";
    //     else if (lang === "hu" || lang === "tr" || lang === "ms" || lang === "th") eleYear = bc + " " + eleYear.substring(0, eleYear.indexOf(" "));
    //     else eleYear = eleYear.substring(0, eleYear.indexOf(" ")) + " " + bc;
    //   } else {
    //     if (lang === "ko") eleYear = eleYear + "년";
    //   }

    //   let colorList = [
    //     { id: "cat3", value: "253, 58, 74", title: "Red" },
    //     { id: "cat6", value: "245, 128, 37", title: "Orange" },
    //     { id: "lanthanides", value: "255, 167, 0", title: "Yellow" },
    //     { id: "actinides", value: "123, 113, 81", title: "Brown" },
    //     { id: "cat8", value: "91, 170, 9", title: "Lime" },
    //     { id: "cat5", value: "26, 152, 90", title: "Green" },
    //     { id: "cat7", value: "59, 168, 221", title: "Cyan" },
    //     { id: "cat2", value: "0, 120, 215", title: "Blue" },
    //     { id: "cat4", value: "139, 102, 204", title: "Purple" },
    //     { id: "cat1", value: "228, 27, 144", title: "Pink" },
    //   ];

    //   function getColor(category) {
    //     let colorExists = colorList.find((x) => x.id === category);
    //     if (colorExists) return colorExists.value;
    //     else return "0, 120, 215";
    //   }

    //   let themeColor = getColor(element.ctg);

    //   let writeStream = fs.createWriteStream(lang + "/element-" + num + ".svg");

    //   writeStream.write("<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='627' font-family='" + font + "' font-weight='400'>");
    //   writeStream.write("<path fill='rgb(" + themeColor + ")' d='M0 0h1200v626.99H0z'/>");
    //   writeStream.write(
    //     "<path d='M35 472.37v101.3c0 10.64 7.12 18.36 18.2 18.36h1093.6c11.08 0 18.2-7.72 18.2-18.35V472.37z' fill='rgba(0, 0, 0, 0.3)'/>"
    //   );

    //   writeStream.write("<rect x='130.02' y='130.02' rx='20' ry='20' width='940' height='247.37' fill='rgba(255, 255, 255, 0.75)'/>");
    //   writeStream.write("<rect x='767.66' y='146.75' rx='10' ry='10' width='15' height='213.83' fill='rgb(" + themeColor + ")'/>");
    //   writeStream.write(
    //     "<rect x='32.5' y='32.5' rx='20' ry='20' width='1135' height='562' stroke='rgba(255, 255, 255, 0.75)' stroke-width='4.9974' fill='none'/>"
    //   );

    //   writeStream.write(
    //     "<text x='600' y='551.29' font-weight='700' font-size='56' letter-spacing='" +
    //       (spacing === 0 ? 0 : 1.98) +
    //       "' fill='rgba(255, 255, 255, 0.8)' text-anchor='middle'>" +
    //       langValues[element.nme].toUpperCase() +
    //       "</text>"
    //   );

    //   writeStream.write(
    //     "<text x='842.25' y='174.9' font-size='36' fill='rgba(0, 0, 0, 0.6)' font-family='" + numberFont + "'>" + getNum(num) + "</text>"
    //   );
    //   writeStream.write(
    //     "<text x='943.28' y='275.34' font-size='95.7' fill='rgb(" +
    //       themeColor +
    //       ")' font-weight='700' font-family='" +
    //       letterFont +
    //       "' text-anchor='middle'>" +
    //       sym +
    //       "</text>"
    //   );

    //   let newaWt = getNum(element.aWt);

    //   writeStream.write(
    //     "<text x='1051.12' y='357.07' text-anchor='end' font-size='32' fill='rgba(0, 0, 0, 0.6)' font-family='" +
    //       numberFont +
    //       "'>" +
    //       newaWt +
    //       "</text>"
    //   );

    //   writeStream.write(
    //     "<text font-size='24' letter-spacing='" +
    //       (spacing === 0 ? 0 : 1.98) +
    //       "' x='178' y='186.61' fill='rgba(0, 0, 0, 0.6)'>" +
    //       langValues.labelCategoryMain.toUpperCase() +
    //       "</text>"
    //   );
    //   writeStream.write(
    //     "<text font-weight='700' font-size='27.99' x='178' y='223.58' fill='rgb(" +
    //       themeColor +
    //       ")'>" +
    //       langValues[element.ctg].toUpperCase() +
    //       "</text>"
    //   );
    //   writeStream.write(
    //     "<text font-size='24' letter-spacing='" +
    //       (spacing === 0 ? 0 : 1.98) +
    //       "' x='178' y='300.92' fill='rgba(0, 0, 0, 0.6)'>" +
    //       langValues.discovered.toUpperCase() +
    //       "</text>"
    //   );
    //   writeStream.write("<text font-weight='700' font-size='27.99' x='178' y='337.08' fill='rgb(" + themeColor + ")'>" + eleYear + "</text>");
    //   writeStream.write("</svg>");
    //   // the finish event is emitted when all data has been flushed from the stream
    //   writeStream.on("finish", () => {
    //     console.log("Created " + lang + "-" + eleNum);
    //   });

    //   // close the stream
    //   writeStream.end();
    // }

    function printObject(col) {
      let o = {};
      for (let j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
  });
});
