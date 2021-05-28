const fs = require("fs");

const writeFile = (textFilePath, elements, filename, iCntr, directory, language) => {
  let fontFamily = "font-family='Gill Sans MT'";
  let altFont = "font-family='Gill Sans MT'";
  let numberFont = "font-family='Gill Sans MT'";
  let nameY = 336.92;

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

  if (!fs.existsSync(directory + language.name)) fs.mkdirSync(directory + language.name);

  let writeStream = fs.createWriteStream(textFilePath);

  function writeCard(x, y, newCntr) {
    writeStream.write("<svg x='" + x + "' y='" + y + "' width='350' height='500' " + fontFamily + " font-size='50'>");
    writeStream.write("<rect y='283.545' width='100%' height='85' fill='#466886' />");
    if (filename == "ar" || filename == "fa" || filename == "he") {
      writeStream.write("<text x='312' y='75.5' fill='#466886' " + numberFont + " text-anchor='end'>" + elements[newCntr].num + "</text>"); // Atomic Number
      writeStream.write("<text x='29.5' y='458' fill='#466886' " + numberFont + ">" + elements[newCntr].wt + "</text>"); // Atomic Weight
    } else {
      writeStream.write("<text x='29.5' y='75.5' fill='#466886' " + numberFont + ">" + elements[newCntr].num + "</text>"); // Atomic Number
      writeStream.write("<text x='312' y='458' fill='#466886' " + numberFont + " text-anchor='end'>" + elements[newCntr].wt + "</text>"); // Atomic Weight
    }
    writeStream.write("<text x='175' y='228.636' fill='#466886' font-size='144' text-anchor='middle'>" + elements[newCntr].sym + "</text>"); // Symbol
    writeStream.write(
      "<text x='175' y='" + nameY + "' fill='#fff' font-size='48' " + altFont + " text-anchor='middle'>" + elements[newCntr].name + "</text>"
    ); // Name
    writeStream.write("</svg>");
  }

  function drawBorder(path) {
    writeStream.write("<path stroke-width='0.667' stroke='#b2b1b1' fill='none' d='" + path + "' />");
  }

  writeStream.write(
    "<?xml version='1.0' encoding='UTF-8' standalone='no'?><svg width='793.701' height='1122.52' " +
    fontFamily +
    " version='1.1'  xmlns='http://www.w3.org/2000/svg'>"
  );

  drawBorder(
    "m 388.517,524.39157 c 0,15.75897 -12.6999,28.53494 -28.3659,28.53494 H 67.55094 c -15.66696,0 -28.36692,-12.77597 -28.36692,-28.53494 V 82.12745 c 0,-15.75997 12.69996,-28.53394 28.36792,-28.53394 H 360.1501 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26412 z"
  );
  drawBorder(
    "m 754.517,524.39157 c 0,15.75897 -12.6999,28.53494 -28.3659,28.53494 H 433.5509 c -15.6669,0 -28.3669,-12.77597 -28.3669,-28.53494 V 82.12745 c 0,-15.75997 12.7,-28.53394 28.3679,-28.53394 h 292.5982 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26412 z"
  );
  writeCard("38.85", "53.26", iCntr * 4 + 0);
  writeCard("405.184", "53.26", iCntr * 4 + 1);

  if (iCntr < 29) {
    drawBorder(
      "m 388.517,1040.3916 c 0,15.7589 -12.6999,28.5349 -28.3659,28.5349 H 67.55094 c -15.66696,0 -28.36692,-12.776 -28.36692,-28.5349 V 598.12745 c 0,-15.75997 12.69996,-28.53394 28.36792,-28.53394 H 360.1501 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26415 z"
    );
    drawBorder(
      "m 754.517,1040.3916 c 0,15.7589 -12.6999,28.5349 -28.3659,28.5349 H 433.5509 c -15.6669,0 -28.3669,-12.776 -28.3669,-28.5349 V 598.12745 c 0,-15.75997 12.7,-28.53394 28.3679,-28.53394 h 292.5982 c 15.666,0 28.3659,12.77397 28.3659,28.53394 v 442.26415 z"
    );
    writeCard("38.85", "569.26", iCntr * 4 + 2);
    writeCard("405.184", "569.26", iCntr * 4 + 3);
  }

  writeStream.write("<text x = '755.29' y='1098.5' fill = '#466886' text-anchor = 'end'>© Periodic-Table.io - https://periodic-table.io</text>");
  writeStream.write("</svg>");

  writeStream.on("finish", () => {
    console.log("Created file");
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
