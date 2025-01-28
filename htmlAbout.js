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
  updates
) => {
  let writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write(`<h1 class='truncate'>${langValues[page]}</h1>`);

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  let starIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='icon' viewBox='0 0 24 24' transform='translate(0,4)'><path d='M12 17.75L5.83 21 7 14.12 2 9.26l6.9-1L11.99 2l3.09 6.25 6.9 1-5 4.87L18.16 21z'/></svg>";
  let checkIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='icon' viewBox='0 0 24 24' transform='translate(0,4)'><circle cx='12' cy='12' r='9'/><path d='M9 12l2 2l4 -4'/></svg>";

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write(
    `<div class='text-upper aboutHeader text-center pb-8'>${langValues.about}</div>`
  );
  writeStream.write("<div>");
  writeStream.write(`${langValues.line1} `);
  writeStream.write(`${langValues.line2}`);
  writeStream.write("<div id='features'>");
  writeStream.write(`${starIcon}${langValues.feature1}`);
  writeStream.write(`${starIcon}${langValues.feature2}`);
  writeStream.write(`${starIcon}${langValues.feature3}`);
  writeStream.write(`${starIcon}${langValues.feature4}`);
  writeStream.write(`${starIcon}${langValues.feature5}`);
  writeStream.write(`${starIcon}${langValues.feature6}`);
  writeStream.write(`${starIcon}${langValues.feature7}`);
  writeStream.write(`${starIcon}${langValues.feature9}`);
  writeStream.write("</div>");
  writeStream.write(`<span class='grayText'>${langValues.contact}: </span>`);
  writeStream.write(
    `<a class='underlineLink' href='mailto:naveen@periodic-table.io?subject=Periodic-Table.io'>naveen@periodic-table.io</a>`
  );
  writeStream.write("<br />");
  writeStream.write(`<span class='grayText'>Github: </span>`);
  writeStream.write(
    "<a class='underlineLink' href='https://github.com/catchspider2002/periodic-table.io'>https://github.com/catchspider2002/periodic-table.io</a>"
  );
  writeStream.write("</div>");
  writeStream.write(
    `<div id='versionNotes' class='text-upper aboutHeader text-center pt-16'>${langValues.changelog}</div>`
  );
  writeStream.write("<div>");
  writeStream.write("<div id='logs'>");

  updates.forEach((update) => {
    writeStream.write(`<div class='versionHeader'>${update.date}</div>`);
    update.updates.forEach((change) => {
      writeStream.write(`${checkIcon}<div>${change}</div>`);
    });
  });

  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write(
    `<div class='text-upper aboutHeader text-center pt-16 pb-8'>${langValues.languages}</div>`
  );
  writeStream.write("<div>");
  writeStream.write("<div class='pb-8'>");
  writeStream.write(
    `${langValues.enTrans}; ${langValues.afTrans}; ${langValues.arTrans}; ${langValues.bgTrans}; `
  );
  writeStream.write(
    `${langValues.caTrans}; ${langValues.csTrans}; ${langValues.daTrans}; ${langValues.deTrans}; `
  );
  writeStream.write(
    `${langValues.elTrans}; ${langValues.esTrans}; ${langValues.eoTrans}; ${langValues.faTrans}; `
  );
  writeStream.write(
    `${langValues.fiTrans}; ${langValues.frTrans}; ${langValues.heTrans}; ${langValues.hiTrans}; `
  );
  writeStream.write(
    `${langValues.hrTrans}; ${langValues.huTrans}; ${langValues.hyTrans}; ${langValues.idTrans}; `
  );
  writeStream.write(
    `${langValues.itTrans}; ${langValues.jaTrans}; ${langValues.koTrans}; ${langValues.mkTrans}; `
  );
  writeStream.write(
    `${langValues.msTrans}; ${langValues.nlTrans}; ${langValues.nnTrans}; ${langValues.plTrans}; `
  );
  writeStream.write(
    `${langValues.ptTrans}; ${langValues.roTrans}; ${langValues.ruTrans}; ${langValues.skTrans}; `
  );
  writeStream.write(
    `${langValues.slTrans}; ${langValues.srTrans}; ${langValues.svTrans}; ${langValues.taTrans}; `
  );
  writeStream.write(
    `${langValues.thTrans}; ${langValues.trTrans}; ${langValues.ukTrans}; ${langValues.uzTrans}; `
  );
  writeStream.write(
    `${langValues.viTrans}; ${langValues.zhTrans}; ${langValues.chTrans}; `
  );
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log(`Created ${lang}-${page}`);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
