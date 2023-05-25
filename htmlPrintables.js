const fs = require("fs");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");
  let imagePath = "C:/Users/Naveen/Downloads/Git Projects/periodic-table.io/en/images/printables/";
  imagePath = "https://periodic-table.io/images/printables/";

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  let lang35 =
    ` ${langValues.enTrans}; ${langValues.bgTrans}; ${langValues.caTrans}; ${langValues.csTrans}; ${langValues.daTrans}; ${langValues.deTrans}; ${langValues.elTrans};` +
    ` ${langValues.esTrans}; ${langValues.fiTrans}; ${langValues.frTrans}; ${langValues.hiTrans}; ${langValues.hrTrans}; ${langValues.huTrans}; ${langValues.idTrans};` +
    ` ${langValues.itTrans}; ${langValues.jaTrans}; ${langValues.koTrans}; ${langValues.nlTrans}; ${langValues.nnTrans}; ${langValues.plTrans}; ${langValues.ptTrans};` +
    ` ${langValues.roTrans}; ${langValues.ruTrans}; ${langValues.skTrans}; ${langValues.slTrans}; ${langValues.srTrans}; ${langValues.svTrans}; ${langValues.thTrans};` +
    ` ${langValues.trTrans}; ${langValues.ukTrans}; ${langValues.viTrans}; ${langValues.zhTrans}; ${langValues.chTrans};`;

  let lang42 =
    ` ${langValues.enTrans}; ${langValues.afTrans}; ${langValues.arTrans}; ${langValues.bgTrans}; ${langValues.caTrans}; ${langValues.csTrans}; ${langValues.daTrans};` +
    ` ${langValues.deTrans}; ${langValues.elTrans}; ${langValues.esTrans}; ${langValues.faTrans}; ${langValues.fiTrans}; ${langValues.frTrans}; ${langValues.heTrans};` +
    ` ${langValues.hiTrans}; ${langValues.hrTrans}; ${langValues.huTrans}; ${langValues.hyTrans}; ${langValues.idTrans}; ${langValues.itTrans}; ${langValues.jaTrans};` +
    ` ${langValues.koTrans}; ${langValues.mkTrans}; ${langValues.msTrans}; ${langValues.nlTrans}; ${langValues.nnTrans}; ${langValues.plTrans}; ${langValues.ptTrans};` +
    ` ${langValues.roTrans}; ${langValues.ruTrans}; ${langValues.skTrans}; ${langValues.slTrans}; ${langValues.srTrans}; ${langValues.svTrans}; ${langValues.thTrans};` +
    ` ${langValues.trTrans}; ${langValues.ukTrans}; ${langValues.viTrans}; ${langValues.zhTrans}; ${langValues.chTrans};`;

  let langReason =
    ` ${langValues.enTrans}; ${langValues.esTrans}; ${langValues.frTrans}; ${langValues.hrTrans}; ${langValues.huTrans}; ${langValues.itTrans}; ${langValues.koTrans};` +
    ` ${langValues.ptTrans}; ${langValues.roTrans}; ${langValues.ruTrans}; ${langValues.viTrans}; ${langValues.zhTrans};`;

  writeStream.write("<h1 class='truncate'>" + langValues[page] + "</h1>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  let printableLinks = [
    {
      title: "Periodic Table poster #1 - Available in 35 languages",
      description:
        "Periodic Table of the elements poster which shows atomic number, symbol, name and atomic weight for all 118 elements in a color-coded table.",
      rating: 37,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-1",
      link: "https://gumroad.com/l/periodictableposter1/",
    },
    {
      title: "Periodic Table poster #2 - Available in 35 languages",
      description:
        "Periodic Table of the elements poster which shows atomic number, symbol, name and atomic weight for all 118 elements in a color-coded table.",
      rating: 14,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-2",
      link: "https://gumroad.com/l/periodictableposter2/",
    },
    {
      title: "Periodic Table poster #3 - Available in 35 languages",
      description:
        "Periodic Table of the elements poster which shows atomic number, symbol, name and atomic weight for all 118 elements in a color-coded table.",
      rating: 9,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-3",
      link: "https://gumroad.com/l/periodictableposter3/",
    },
    {
      title: "Periodic Table poster #4 - Available in 35 languages",
      description:
        "Periodic Table of the elements poster which shows atomic number, symbol, name and atomic weight for all 118 elements in a color-coded table.",
      rating: 6,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-4",
      link: "https://gumroad.com/l/periodictableposter4/",
    },
    {
      title: "Periodic Table Flashcards #1 - Available in 42 languages",
      description:
        "Play and learn the periodic table with the printable flash cards. The set includes 118 element flash cards in high resolution PDF format and SVG formats. Download and print them on a PC or Mac.",
      rating: 15,
      price: 0,
      languages: lang42,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-1",
      link: "https://gumroad.com/l/periodictableflashcards1/",
    },
    {
      title: "Periodic Table Flashcards #2 - Available in 42 languages",
      description:
        "Play and learn the periodic table with the printable flash cards. The set includes 118 element flash cards in high resolution PDF format and SVG formats. Download and print them on a PC or Mac.",
      rating: 1,
      price: 3.99,
      languages: lang42,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-2",
      link: "https://gumroad.com/l/periodictableflashcards2/",
    },
    {
      title: "Periodic Table Flashcards #3 - Available in 13 languages",
      description:
        "Play and learn the periodic table with the printable flash cards. The set includes 118 element flash cards in high resolution PDF format and SVG formats. Download and print them on a PC or Mac.",
      rating: 0,
      price: 3.99,
      languages: langReason,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-3",
      link: "https://gumroad.com/l/periodictableflashcards3/",
    },
  ];

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div id='printablesLayout'>");
  writeStream.write("<div class='grid-print'>");

  printableLinks.forEach((printableLink) => {
    writeStream.write("<div class='flex flex-col overflow-auto'>");
    writeStream.write("<h1>" + printableLink.title + "</h1>");
    writeStream.write(
      "<img class='py-4 image' draggable='false' src='" + imagePath + "" + printableLink.image + ".png' alt='" + printableLink.title + "' />"
    );
    writeStream.write("<div class='py-4'>" + printableLink.description + "</div>");
    writeStream.write("<div class='pt-4 grayText'>" + langValues.languages + "</div>");
    writeStream.write("<div class='py-4'>" + printableLink.languages + "</div>");
    writeStream.write("<div class='py-4'><span class='grayText'>Formats: </span>" + printableLink.formats + "</div>");
    if (printableLink.rating > 0) writeStream.write("<div class='py-2'>⭐⭐⭐⭐⭐ (" + printableLink.rating + " ratings)</div>");
    writeStream.write("<div class='py-4'>");
    writeStream.write("<a target='_blank' href='" + printableLink.link + "' class='mx-auto downloadButton justify-center items-center'>");
    writeStream.write(
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>"
    );
    writeStream.write(
      "<path d='M272 397l-1 1c-1 0-1 1-1 1h-1c0 1-1 1-1 1s-1 0-1 1h-1s-1 0-1 1h-2c-1 0-1 1-1 1h-3-1-7-1s0-1-1-1h-1-1c0-1-1-1-1-1h-1c0-1-1-1-1-1s-1 0-1-1h-1s0-1-1-1l-1-1s0 0 0 0L131 288c-9-9-9-24 0-33s24-9 33 0l69 69V39c0-13 10-23 23-23s23 10 23 23v285l69-69c9-9 24-9 33 0s9 24 0 33zM23 248c13 0 24 11 24 24v178h418V272c0-13 11-24 24-24s23 11 23 24v201c0 13-10 23-23 23H23c-13 0-23-10-23-23V272c0-13 10-24 23-24z' />"
    );
    writeStream.write("</svg>");
    writeStream.write(
      "<span class='buttonLabel self-center'>" + langValues.download + (printableLink.price > 0 ? " - $" + printableLink.price : "") + "</span></a>"
    );
    writeStream.write("</div>");
    writeStream.write("</div>");
  });

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
