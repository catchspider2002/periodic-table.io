const fs = require("fs");

const writeFile = (
  lang,
  langValues,
  page,
  defaultHead,
  metaTags,
  defaultNav,
  nav4,
  defaultFooter,
  languages,
  regularFont
) => {
  let imagePath =
    "C:/Users/Naveen/Downloads/Git Projects/periodic-table.io/en/images/printables/";
  imagePath = "https://periodic-table.io/images/printables/";

  let website = "https://periodic-table.io";
  if (lang !== "en") {
    website = "https://" + lang + ".periodic-table.io";
  }

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

  let printableLinks = [
    {
      title: `${langValues.poster} #1 - ${langValues.available35}`,
      slug: "periodic-table-poster-1",
      description: `${langValues.posterPrintable}`,
      description2:
        'Decorate your wall with this high-quality poster or take a printout for study. Print from your home, visit your local photo center, or print online. Make sure to click "Fit to Page" on your printer before printing.',
      license: `${langValues.licensedPersonal} ${langValues.posterShared}`,
      rating: 43,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-1",
      link: "https://gumroad.com/l/periodictableposter1/",
    },
    {
      title: `${langValues.poster} #2 - ${langValues.available35}`,
      slug: "periodic-table-poster-2",
      description: `${langValues.posterPrintable}`,
      description2:
        'Decorate your wall with this high-quality poster or take a printout for study. Print from your home, visit your local photo center, or print online. Make sure to click "Fit to Page" on your printer before printing.',
      license: `${langValues.licensedPersonal} ${langValues.posterShared}`,
      rating: 20,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-2",
      link: "https://gumroad.com/l/periodictableposter2/",
    },
    {
      title: `${langValues.poster} #3 - ${langValues.available35}`,
      slug: "periodic-table-poster-3",
      description: `${langValues.posterPrintable}`,
      description2:
        'Decorate your wall with this high-quality poster or take a printout for study. Print from your home, visit your local photo center, or print online. Make sure to click "Fit to Page" on your printer before printing.',
      license: `${langValues.licensedPersonal} ${langValues.posterShared}`,
      rating: 14,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-3",
      link: "https://gumroad.com/l/periodictableposter3/",
    },
    {
      title: `${langValues.poster} #4 - ${langValues.available35}`,
      slug: "periodic-table-poster-4",
      description: `${langValues.posterPrintable}`,
      description2:
        'Decorate your wall with this high-quality poster or take a printout for study. Print from your home, visit your local photo center, or print online. Make sure to click "Fit to Page" on your printer before printing.',
      license: `${langValues.licensedPersonal} ${langValues.posterShared}`,
      rating: 10,
      price: 0,
      languages: lang35,
      formats: "PNG, SVG, PDF",
      image: "Marketing-Image-Small-4",
      link: "https://gumroad.com/l/periodictableposter4/",
    },
    {
      title: `${langValues.flashcards} #1 - ${langValues.available42}`,
      slug: "periodic-table-flashcards-1",
      description: `${langValues.flashcardsPrintable1} ${langValues.flashcardsPrintable2} ${langValues.flashcardsPrintable3}`,
      description2:
        "Flash cards helps you to commit the elements to your memory. Parents and teachers can create fun activities and use them to teach chemistry.<br><br>The PDF file has 30 pages and each page has 4 cards. Each flash card shows the atomic number, symbol, name and atomic weight of the element<br><br>Try to print the flashcards on cardstock paper for a nicer feel and longevity. Print the flash card on one side and the file 000 Cover.pdf on the other side of the flashcard.</br><br>Size: A4<br><br>Text and colors in SVG files can be edited using vector editing software such as Adobe Illustrator or Inkscape",
      license: `${langValues.licensedPersonal} ${langValues.flashcardsShared}`,
      rating: 23,
      price: 0,
      languages: lang42,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-1",
      link: "https://gumroad.com/l/periodictableflashcards1/",
    },
    {
      title: `${langValues.flashcards} #2 - ${langValues.available42}`,
      slug: "periodic-table-flashcards-2",
      description: `${langValues.flashcardsPrintable1} ${langValues.flashcardsPrintable2} ${langValues.flashcardsPrintable3}`,
      description2:
        "Flash cards helps you to commit the elements to your memory. Parents and teachers can create fun activities and use them to teach chemistry.<br><br>The PDF file has 30 pages and each page has 4 cards. Each flash card shows the atomic number, symbol, name and atomic weight of the element<br><br>Try to print the flashcards on cardstock paper for a nicer feel and longevity. Print the flash card on one side and the file 000 Cover.pdf on the other side of the flashcard.</br><br>Size: A4<br><br>Text and colors in SVG files can be edited using vector editing software such as Adobe Illustrator or Inkscape",
      license: `${langValues.licensedPersonal} ${langValues.flashcardsShared}`,
      rating: 1,
      price: 3.99,
      languages: lang42,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-2",
      link: "https://gumroad.com/l/periodictableflashcards2/",
    },
    {
      title: `${langValues.flashcards} #3 - ${langValues.available13}`,
      slug: "periodic-table-flashcards-3",
      description: `${langValues.flashcardsPrintable1} ${langValues.flashcardsPrintable2} ${langValues.flashcardsPrintable3}`,
      description2:
        "Flash cards helps you to commit the elements to your memory. Parents and teachers can create fun activities and use them to teach chemistry.<br><br>The PDF file has 30 pages and each page has 4 cards. Each flash card shows the atomic number, symbol, name and atomic weight of the element<br><br>Try to print the flashcards on cardstock paper for a nicer feel and longevity. Print the flash card on one side and the file 000 Cover.pdf on the other side of the flashcard.</br><br>Size: A4<br><br>Text and colors in SVG files can be edited using vector editing software such as Adobe Illustrator or Inkscape",
      license: `${langValues.licensedPersonal} ${langValues.flashcardsShared}`,
      rating: 0,
      price: 3.99,
      languages: langReason,
      formats: "SVG, PDF",
      image: "Periodic-Table-Flashcards-Small-3",
      link: "https://gumroad.com/l/periodictableflashcards3/",
    },
  ];

  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  // Add structured data for the collection of products
  writeStream.write(`<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
    ${printableLinks
      .map(
        (item, index) => `{
        "@type": "ListItem",
        "position": ${index + 1},
        "item": {
          "@type": "Product",
          "name": "${item.title}",
          "description": "${item.description}",
          "image": "${imagePath}${item.image}.png",
          "url": "${website}/${item.slug}",
          "offers": {
            "@type": "Offer",
            "price": "${item.price}",
            "priceValidUntil": "2099-12-31",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }${
            item.rating
              ? `,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "${item.rating}"
          }`
              : ""
          }
        }
      }`
      )
      .join(",\n")}
    ]
  }
  </script>`);

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<h1 class='truncate'>" + langValues[page] + "</h1>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div id='printablesLayout'>");
  writeStream.write("<div class='grid-print'>");

  printableLinks.forEach((printableLink) => {
    writeStream.write("<div class='flex flex-col overflow-auto'>");
    writeStream.write(`<h1>${printableLink.title}</h1>`);
    writeStream.write(
      `<img class='py-4 image' draggable='false' src='${imagePath}${printableLink.image}.png' alt='${printableLink.title}' />`
    );
    writeStream.write(`<div class='py-4'>${printableLink.description}</div>`);
    writeStream.write(
      `<div class='pt-4 grayText'>${langValues.languages}</div>`
    );
    writeStream.write(`<div class='py-4'>${printableLink.languages}</div>`);
    writeStream.write(
      `<div class='py-4'><span class='grayText'>Formats: </span>${printableLink.formats}</div>`
    );
    if (printableLink.rating > 0)
      writeStream.write(
        `<div class='py-2'>⭐⭐⭐⭐⭐ (${printableLink.rating} ${printableLink.rating > 1 ? langValues.ratings : langValues.rating})</div>`
      );
    writeStream.write("<div class='py-4 flex gap-8 justify-start'>");
    writeStream.write(
      `<a href='${printableLink.slug}' class='downloadButton justify-center items-center'>`
    );
    writeStream.write(
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' stroke='currentColor' fill='currentColor'>"
    );
    writeStream.write(
      "<path d='M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/>"
    );
    writeStream.write("</svg>");
    writeStream.write(
      `<span class='buttonLabel self-center'>${langValues.viewDetails}</span></a>`
    );
    writeStream.write(
      `<a target='_blank' href='${printableLink.link}' class='downloadButton justify-center items-center'>`
    );
    writeStream.write(
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>"
    );
    writeStream.write(
      "<path d='M272 397l-1 1c-1 0-1 1-1 1h-1c0 1-1 1-1 1s-1 0-1 1h-1s-1 0-1 1h-2c-1 0-1 1-1 1h-3-1-7-1s0-1-1-1h-1-1c0-1-1-1-1-1h-1c0-1-1-1-1-1s-1 0-1-1h-1s0-1-1-1l-1-1s0 0 0 0L131 288c-9-9-9-24 0-33s24-9 33 0l69 69V39c0-13 10-23 23-23s23 10 23 23v285l69-69c9-9 24-9 33 0s9 24 0 33zM23 248c13 0 24 11 24 24v178h418V272c0-13 11-24 24-24s23 11 23 24v201c0 13-10 23-23 23H23c-13 0-23-10-23-23V272c0-13 10-24 23-24z' />"
    );
    writeStream.write("</svg>");
    writeStream.write(
      `<span class='buttonLabel self-center'>${langValues.download}${
        printableLink.price > 0 ? " - $" + printableLink.price : ""
      }</span></a>`
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

  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  writeStream.end();

  // Create individual pages
  printableLinks.forEach((printableLink) => {
    let individualStream = fs.createWriteStream(
      lang + "/" + printableLink.slug + ".html"
    );

    // Generate meta tags for individual printable page
    let title = printableLink.title + " - " + langValues.homeHeader;
    let link = website + "/" + printableLink.slug;
    let keywords = `${printableLink.title}, ${langValues.homeHeader}, periodic table, poster, printable, download, chemistry, elements`;
    let image =
      imagePath +
      printableLink.image.replace("Small-", "").replace(".png", ".webp") +
      ".png";

    let individualMetaTags = [
      "<meta name='keywords' content='" + keywords + "' />",
      "<meta name='description' content='" + printableLink.description + "' />",
      "<meta property='og:description' content='" +
        printableLink.description +
        "' />",
      "<meta name='twitter:description' content='" +
        printableLink.description +
        "' />",
      "<meta property='og:title' content='" + title + "' />",
      "<meta name='twitter:title' content='" + title + "' />",
      "<title id='homeTitle'>" + title + "</title>",
      "<meta property='og:image' content='" + image + "' />",
      "<meta name='twitter:image' content='" + image + "' />",
      "<meta name='twitter:image:src' content='" + image + "' />",
      "<meta property='og:url' content='" + link + "' />",
      "<link rel='canonical' href='" + link + "' />",
    ];

    // Add alternate language links
    if (printableLink.slug === "index") {
      individualMetaTags.push(
        "<link rel='alternate' hreflang='en' href='https://periodic-table.io/'/>"
      );
    } else {
      individualMetaTags.push(
        "<link rel='alternate' hreflang='en' href='https://periodic-table.io/" +
          printableLink.slug +
          "'/>"
      );
    }

    // Add alternate links for other languages
    languages.forEach((langVal) => {
      if (langVal.lang !== "en") {
        if (printableLink.slug === "index") {
          individualMetaTags.push(
            "<link rel='alternate' hreflang='" +
              langVal.lang +
              "' href='https://" +
              langVal.lang +
              ".periodic-table.io/'/>"
          );
        } else {
          individualMetaTags.push(
            "<link rel='alternate' hreflang='" +
              langVal.lang +
              "' href='https://" +
              langVal.lang +
              ".periodic-table.io/" +
              printableLink.slug +
              "'/>"
          );
        }
      }
    });

    defaultHead.forEach((heads) => {
      individualStream.write(heads);
    });

    // Add structured data for individual product
    individualStream.write(`<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "${printableLink.title}",
      "description": "${printableLink.description}",
      "image": "${imagePath}${printableLink.image
        .replace("Small-", "")
        .replace(".png", ".webp")}.png",
      "url": "${website}/${printableLink.slug}",
      "offers": {
        "@type": "Offer",
        "price": "${printableLink.price}",
        "priceValidUntil": "2099-12-31",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }${
        printableLink.rating
          ? `,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "${printableLink.rating}"
      }`
          : ""
      }
    }
    </script>`);

    let metaTags2 = [
      "<link rel='stylesheet' href='css/global2.css' />",
      "<script defer src='js/htmlJS.js'></script>",
    ];

    let metaTagsFonts = [
      "<link rel='preload' href='fonts/" +
        regularFont +
        ".woff2' as='font' crossorigin='anonymous' />",
      "<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />",
    ];

    if (regularFont === "NotoSans")
      metaTagsFonts = [
        "<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />",
      ];

    let metaTags3 = [
      "<style>@font-face {font-family: SpecialRegular; src: url(fonts/" +
        regularFont +
        ".woff2) format('woff2'); font-display: swap;}",
      "@font-face {font-family: Regular;src: url(fonts/NotoSans.woff2) format('woff2'); font-display: swap;}",
      "</style>",
      "<script type='module'>",
      "import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';",
      "const el = document.createElement('pwa-update');",
      "document.body.appendChild(el);",
      "</script>",
      "</head><body>",
    ];

    let metaTags = individualMetaTags
      .concat(metaTags2)
      .concat(metaTagsFonts)
      .concat(metaTags3);

    // let metaTags = individualMetaTags;

    metaTags.forEach((tags) => {
      individualStream.write(tags);
    });

    defaultNav.forEach((navs) => {
      individualStream.write(navs);
    });

    individualStream.write(`<h1 class='truncate'>${printableLink.title}</h1>`);

    nav4.forEach((navs) => {
      individualStream.write(navs);
    });

    individualStream.write("<div class='content-wrapper'>");
    individualStream.write("<div class='container'>");
    individualStream.write("<div id='printablesLayout'>");
    individualStream.write("<div class='w-full'>");

    individualStream.write(
      "<div class='flex flex-col overflow-auto max-w-4xl mx-auto'>"
    );
    individualStream.write(`<h1>${printableLink.title}</h1>`);
    individualStream.write(
      `<img class='py-4 image' draggable='false' src='${imagePath}${printableLink.image
        .replace("Small-", "")
        .replace(".png", ".webp")}.png' alt='${printableLink.title}' />`
    );
    individualStream.write(
      `<div class='py-4'>${printableLink.description}</div>`
    );
    individualStream.write(
      `<div class='py-4'>${printableLink.description2}</div>`
    );
    individualStream.write(
      `<div class='py-4'><span class='grayText'>${langValues.formats}: </span>${printableLink.formats}</div>`
    );
    individualStream.write(
      `<div class='pt-4 grayText'>${langValues.languages}</div><div class='py-4'>${printableLink.languages}</div>`
    );
    individualStream.write(
      `<div class='pt-4 grayText'>${langValues.license}</div><div class='py-4'>${printableLink.license}</div>`
    );
    if (printableLink.rating > 0)
      individualStream.write(
        `<div class='py-2'>⭐⭐⭐⭐⭐ (${printableLink.rating} ${printableLink.rating > 1 ? langValues.ratings : langValues.rating})</div>`
      );
    individualStream.write("<div class='py-4'>");
    individualStream.write(
      `<a target='_blank' href='${printableLink.link}' class='mx-auto downloadButton justify-center items-center'>`
    );
    individualStream.write(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>`
    );
    individualStream.write(
      "<path d='M272 397l-1 1c-1 0-1 1-1 1h-1c0 1-1 1-1 1s-1 0-1 1h-1s-1 0-1 1h-2c-1 0-1 1-1 1h-3-1-7-1s0-1-1-1h-1-1c0-1-1-1-1-1h-1c0-1-1-1-1-1s-1 0-1-1h-1s0-1-1-1l-1-1s0 0 0 0L131 288c-9-9-9-24 0-33s24-9 33 0l69 69V39c0-13 10-23 23-23s23 10 23 23v285l69-69c9-9 24-9 33 0s9 24 0 33zM23 248c13 0 24 11 24 24v178h418V272c0-13 11-24 24-24s23 11 23 24v201c0 13-10 23-23 23H23c-13 0-23-10-23-23V272c0-13 10-24 23-24z' />"
    );
    individualStream.write("</svg>");
    individualStream.write(
      `<span class='buttonLabel self-center'>${langValues.download}${
        printableLink.price > 0 ? " - $" + printableLink.price : ""
      }</span></a>`
    );
    individualStream.write("</div>");
    individualStream.write("</div>");

    individualStream.write("</div>");
    individualStream.write("</div>");
    individualStream.write("</div>");
    individualStream.write("</div>");

    defaultFooter.forEach((footers) => {
      individualStream.write(footers);
    });

    individualStream.on("finish", () => {
      console.log("Created " + lang + "-" + printableLink.slug);
    });

    individualStream.end();
  });
};

exports.writeFile = writeFile;
