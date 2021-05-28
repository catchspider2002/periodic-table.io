const fs = require("fs");

const writeFile = (textFilePath, elements, filename, iCntr, directory, language, categoryKeys) => {
  let fontFamily = "font-family='Gill Sans MT'";
  let altFont = "font-family='Gill Sans MT'";
  let numberFont = "font-family='Gill Sans MT'";
  let nameY = 320;
  let categories = [
    { id: "1", str: "cat1", name: "Alkali metals", color: "#e41b90" },
    { id: "2", str: "cat2", name: "Alkaline earth metals", color: "#2261c4" },
    { id: "3", str: "cat3", name: "Transition metals", color: "#d92626" },
    { id: "4", str: "cat4", name: "Post-transition metals", color: "#8b66cc" },
    { id: "5", str: "cat5", name: "Other nonmetals", color: "#1a985a" },
    { id: "6", str: "cat6", name: "Metalloids", color: "#ff5500" },
    { id: "7", str: "cat7", name: "Halogens", color: "#3ba8dd" },
    { id: "8", str: "cat8", name: "Noble gases", color: "#5baa09" },
    { id: "9", str: "lanthanides", name: "Lanthanides", color: "#d98526" },
    { id: "10", str: "actinides", name: "Actinides", color: "#7b7151" },
  ];

  let getColor = (catId) => categories.filter((word) => word.id == catId)[0].color;

  let getCategory = (catId) => categoryKeys[categories.filter((word) => word.id == catId)[0].str];

  switch (filename) {
    case "ja":
      altFont = "font-family='Noto Sans JP Regular'";
      nameY = nameY + 7.4;
      break;
    case "ko":
      altFont = "font-family='Noto Sans KR'";
      nameY = nameY + 7.4;
      break;
    case "hi":
      altFont = "font-family='Noto Sans Devanagari'";
      nameY = nameY + 5.1;
      break;
    case "th":
      altFont = "font-family='Noto Sans Thai'";
      nameY = nameY + 8.7;
      break;
    case "zs":
      altFont = "font-family='Noto Sans SC'";
      nameY = nameY + 7.7;
      break;
    case "zt":
      altFont = "font-family='Noto Sans TC Regular'";
      nameY = nameY + 7.7;
      break;
    case "ar":
    case "fa":
      altFont = "font-family='Noto Sans Kufi Arabic'";
      numberFont = "font-family='Noto Sans Kufi Arabic'";
      break;
    case "he":
      altFont = "font-family='Noto Sans Hebrew'";
      break;
  }

  if (!fs.existsSync(directory)) fs.mkdirSync(directory);

  if (!fs.existsSync(directory + language.name)) fs.mkdirSync(directory + language.name);

  let writeStream = fs.createWriteStream(textFilePath);

  function writeCard(newCntr, x, y) {
    writeStream.write("<svg x='" + x + "' y='" + y + "' width='350' height='500' " + fontFamily + " font-size='50'>");
    // writeStream.write("<rect y='283.545' width='100%' height='85' fill='" + "red" + "' />");
    if (filename == "ar" || filename == "fa" || filename == "he") {
      writeStream.write("<text x='29.5' y='75.5' fill='#fff' " + numberFont + ">" + elements[newCntr].num + "</text>"); // Atomic Number
      writeStream.write("<text x='312' y='220' fill='#fff' font-size='160' text-anchor='end'>" + elements[newCntr].sym + "</text>"); // Symbol
      writeStream.write(
        "<text x='312' y='" + nameY + "' fill='#fff' font-size='42' " + altFont + " text-anchor='end'>" + elements[newCntr].name + "</text>"
      ); // Name
      writeStream.write(
        "<text x='312' y='390' fill='rgba(255,255,255,0.9)' font-size='36' " + numberFont + " text-anchor='end'>" + elements[newCntr].wt + "</text>"
      ); // Atomic Weight
      writeStream.write("<text x='29.5' y='458' fill='#fff' font-size='24' " + altFont + ">" + getCategory(elements[newCntr].category) + "</text>"); // Category
    } else {
      writeStream.write("<text x='312' y='75.5' fill='#fff' " + numberFont + " text-anchor='end'>" + elements[newCntr].num + "</text>"); // Atomic Number
      writeStream.write("<text x='29.5' y='220' fill='#fff' font-size='160'>" + elements[newCntr].sym + "</text>"); // Symbol
      writeStream.write("<text x='29.5' y='" + nameY + "' fill='#fff' font-size='42' " + altFont + ">" + elements[newCntr].name + "</text>"); // Name
      writeStream.write("<text x='29.5' y='390' fill='rgba(255,255,255,0.9)' font-size='36' " + numberFont + ">" + elements[newCntr].wt + "</text>"); // Atomic Weight
      writeStream.write(
        "<text x='312' y='458' fill='#fff' font-size='24' " + altFont + " text-anchor='end'>" + getCategory(elements[newCntr].category) + "</text>"
      ); // Category
    }
    writeStream.write("</svg>");
  }

  function drawBorder(newCntr, path) {
    writeStream.write("<path stroke-width='0.667' stroke='#b2b1b1' fill='" + getColor(elements[newCntr].category) + "' d='" + path + "' />");
  }

  writeStream.write(
    "<?xml version='1.0' encoding='UTF-8' standalone='no'?><svg width='793.701' height='1122.52' style='background-color: black;' " +
      fontFamily +
      " version='1.1'  xmlns='http://www.w3.org/2000/svg'>"
  );

  let newCntr = iCntr * 4 + 0;
  drawBorder(
    newCntr,
    "m 388.517,524.39157 c 0,15.75897 -12.6999,28.53494 -28.3659,28.53494 H 67.55094 c -15.66696,0 -28.36692,-12.77597 -28.36692,-28.53494 V 82.12745 c 0,-15.75997 12.69996,-28.53394 28.36792,-28.53394 H 360.1501 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26412 z"
  );
  writeCard(newCntr, "38.85", "53.26");

  newCntr = iCntr * 4 + 1;
  drawBorder(
    newCntr,
    "m 754.517,524.39157 c 0,15.75897 -12.6999,28.53494 -28.3659,28.53494 H 433.5509 c -15.6669,0 -28.3669,-12.77597 -28.3669,-28.53494 V 82.12745 c 0,-15.75997 12.7,-28.53394 28.3679,-28.53394 h 292.5982 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26412 z"
  );
  writeCard(newCntr, "405.184", "53.26");

  if (iCntr < 29) {
    newCntr = iCntr * 4 + 2;
    drawBorder(
      newCntr,
      "m 388.517,1040.3916 c 0,15.7589 -12.6999,28.5349 -28.3659,28.5349 H 67.55094 c -15.66696,0 -28.36692,-12.776 -28.36692,-28.5349 V 598.12745 c 0,-15.75997 12.69996,-28.53394 28.36792,-28.53394 H 360.1501 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26415 z"
    );
    writeCard(newCntr, "38.85", "569.26");

    newCntr = iCntr * 4 + 3;
    drawBorder(
      newCntr,
      "m 754.517,1040.3916 c 0,15.7589 -12.6999,28.5349 -28.3659,28.5349 H 433.5509 c -15.6669,0 -28.3669,-12.776 -28.3669,-28.5349 V 598.12745 c 0,-15.75997 12.7,-28.53394 28.3679,-28.53394 h 292.5982 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26415 z"
    );
    writeCard(newCntr, "405.184", "569.26");
  }

  writeStream.write("<text x = '755.29' y='1098.5' fill = '#000' text-anchor = 'end'>© Periodic-Table.io - https://periodic-table.io</text>");
  writeStream.write("</svg>");

  writeStream.on("finish", () => {
    console.log("Created file");
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
