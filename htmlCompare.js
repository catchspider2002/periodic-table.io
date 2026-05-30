const fs = require("fs");
const ConstantsCompare = require("./htmlConstantsCompare.js");

let newRawDataCompare = ConstantsCompare.rawData;
// let defaultTemp = "celsius";
// let defaultPunc = "comma";
const writeFile = (lang, langValues, page, punc, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
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

  function getNum(value) {
    if (punc === "comma") value = value.toString().replace(/\./g, ",");
    if (lang === "ar") {
      // Arabic
      value = value.toString().replace(/\./g, "٫");
      var id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      return value.toString().replace(/[0-9]/g, function (w) {
        return id[+w];
      });
    } else if (lang === "fa") {
      // Persian
      value = value.toString().replace(/\./g, "٫");
      var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return value.toString().replace(/[0-9]/g, function (w) {
        return id[+w];
      });
    } else return value;
  }

  function getTemp(tempValue) {
    var newTemp;

    if (tempValue == "-") newTemp = "-";
    else {
      if (lang === "ar" || lang === "fa" || lang === "he")
        newTemp =
          getNum(Math.round((tempValue + 273.15) * 100) / 100) +
          " K " +
          getNum(tempValue) +
          " | °C " +
          getNum(Math.round((tempValue * 1.8 + 32) * 100) / 100) +
          " °F";
      else
        newTemp =
          Math.round((tempValue + 273.15) * 100) / 100 + " K | " + tempValue + " °C | " + Math.round((tempValue * 1.8 + 32) * 100) / 100 + " °F";
    }

    if (punc === "comma") newTemp = newTemp.replace(/\./g, ",");

    return newTemp;
  }

  newRawDataCompare.sort(function (a, b) {
    if (langValues[a.nme] < langValues[b.nme]) return -1;
    else if (langValues[a.nme] > langValues[b.nme]) return 1;
    return 0;
  });

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='row'>");
  writeStream.write("<div id='compareBg' class='box-content'>");
  writeStream.write("<div id='topRowCompare'>");
  writeStream.write("<div id='compareTop' class='square'>");
  writeStream.write("<div></div>");
  writeStream.write("<div>");
  writeStream.write("<select id='firstElement' class='select-css' onchange='firstChanged()' aria-label='First Element'>");
  newRawDataCompare.forEach((ele) => {
    const selected = ele.id === 'ele1' ? " selected" : "";
    writeStream.write(` <option value=${ele.id}${selected}>${langValues[ele.nme]}</option>`);
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  writeStream.write("<div>");
  writeStream.write("<select id='secondElement' class='select-css' onchange='secondChanged()' aria-label='Second Element'>");
  newRawDataCompare.forEach((ele) => {
    const selected = ele.id === 'ele2' ? " selected" : "";
    writeStream.write(` <option value=${ele.id}${selected}>${langValues[ele.nme]}</option>`);
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div id='mainCompare'>");

  let element1 = newRawDataCompare.find((ele) => ele.id === "ele1") || newRawDataCompare[0];
  let element2 = newRawDataCompare.find((ele) => ele.id === "ele2") || newRawDataCompare[0];

  writeStream.write(`<div class='grayText'>${langValues.labelName}</div>`);
  writeStream.write(`<a id='compEle1' href='element-${element1.num}'>`);
  writeStream.write(`<div class='compareLink'><span id='name1' class='underlineLink'>${langValues[element1.nme]}</span></div>`);
  writeStream.write("</a>");
  writeStream.write(`<a id='compEle2' href='element-${element2.num}'>`);
  writeStream.write(`<div class='compareLink'><span id='name2' class='underlineLink'>${langValues[element2.nme]}</span></div>`);
  writeStream.write("</a>");

  let compare1Properties = [
    { label: "labelSymbol", id: "symbol", key: "sym" },
    { label: "labelAtmNoMain", id: "atmNo", key: "num", isNum: true },
    { label: "group", id: "groups", key: "grp", isGroup: true },
    { label: "period", id: "periods", key: "prd", isNum: true },
    { label: "block", id: "block", key: "blk" },
    { label: "labelCrustMain", id: "crust", key: "crt", isNaNum: true },
    { label: "labelUniverseMain", id: "universe", key: "uni", isNaNum: true },
  ];


  function getNaNum(val) {
    return val === "na" ? langValues.na : getNum(val);
  }

  compare1Properties.forEach((prop) => {
    writeStream.write(`<div class='grayText'>${langValues[prop.label]}</div>`);
    let val1, val2;
    if (prop.isNum) {
      val1 = getNum(element1[prop.key]);
      val2 = getNum(element2[prop.key]);
    } else if (prop.isGroup) {
      val1 = element1[prop.key] === "na" ? langValues.na : getNum(element1[prop.key]);
      val2 = element2[prop.key] === "na" ? langValues.na : getNum(element2[prop.key]);
    } else if (prop.isNaNum) {
      val1 = getNaNum(element1[prop.key]);
      val2 = getNaNum(element2[prop.key]);
    } else {
      val1 = element1[prop.key];
      val2 = element2[prop.key];
    }
    writeStream.write(`<div id='${prop.id}1'>${val1}</div>`);
    writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
  });

  writeStream.write("<div class='span-3 pt-8'>");
  writeStream.write(`<div class='headerOutline text-upper'>${langValues.labelGeneralProp}</div>`);
  writeStream.write("</div>");

  let compare2Properties = [
    { label: "labelAtmWtMain", id: "atmWeight", key: "aWt", isNum: true },
    { label: "labelCategoryMain", id: "category", key: "ctg", isLang: true },
    { label: "labelColorMain", id: "eleColor", key: "clr", isLang: true },
    { label: "labelRadioMain", id: "radioactive", key: "rdo", isLang: true },
    { label: "labelStructureMain", id: "structure", key: "stc", isLang: true },
  ];

  compare2Properties.forEach((prop) => {
    writeStream.write(`<div class='grayText'>${langValues[prop.label]}</div>`);
    let val1, val2;
    if (prop.isNum) {
      val1 = getNum(element1[prop.key]);
      val2 = getNum(element2[prop.key]);
    } else if (prop.isLang) {
      val1 = langValues[element1[prop.key]];
      val2 = langValues[element2[prop.key]];
    }
    writeStream.write(`<div id='${prop.id}1'>${val1}</div>`);
    writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
  });

  writeStream.write("<div class='span-3 pt-8'>");
  writeStream.write(`<div class='headerOutline text-upper'>${langValues.labelPhysicalProp}</div>`);
  writeStream.write("</div>");

  let compare3Properties = [
    { label: `${langValues["labelDensityMain"]} (${langValues["labelDensity"]})`, id: "density", key: "dns", isNum: true },
    { label: langValues["labelPhaseMain"], id: "phase", key: "phs", isLang: true },
    { label: langValues["labelMeltingMain"], id: "meltPoint", key: "mlt", isTemp: true },
    { label: langValues["labelBoilingMain"], id: "boilPoint", key: "bln", isTemp: true },
    { label: `${langValues["labelFusionMain"]} (${langValues["labelFusion"]})`, id: "fusion", key: "fsn", isNaNum: true },
    { label: `${langValues["labelVaporizationMain"]} (${langValues["labelFusion"]})`, id: "vaporization", key: "vpn", isNaNum: true },
    { label: `${langValues["labelSpecificMain"]} (${langValues["labelSpecific"]})`, id: "spHeat", key: "spc", isNum: true },
  ];

  compare3Properties.forEach((prop) => {
    writeStream.write(`<div class='grayText'>${prop.label}</div>`);
    let val1, val2;
    if (prop.isNum) {
      val1 = getNum(element1[prop.key]);
      val2 = getNum(element2[prop.key]);
    } else if (prop.isLang) {
      val1 = langValues[element1[prop.key]];
      val2 = langValues[element2[prop.key]];
    } else if (prop.isTemp) {
      val1 = getTemp(element1[prop.key]);
      val2 = getTemp(element2[prop.key]);
    } else if (prop.isNaNum) {
      val1 = getNaNum(element1[prop.key]);
      val2 = getNaNum(element2[prop.key]);
    }

    if (prop.id === "meltPoint") {
      writeStream.write(`<div id='${prop.id}1'><div id='outputMeltingMain'>${val1}</div></div>`);
      writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
    } else if (prop.id === "boilPoint") {
      writeStream.write(`<div id='${prop.id}1'><div id='outputBoilingMain'>${val1}</div></div>`);
      writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
    } else {
      writeStream.write(`<div id='${prop.id}1'>${val1}</div>`);
      writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
    }
  });

  writeStream.write("<div class='span-3 pt-8'>");
  writeStream.write(`<div class='headerOutline text-upper'>${langValues.labelAtomicProp}</div>`);
  writeStream.write("</div>");

  function getRadius(val) {
     return val === "-" ? "-" : `${getNum(val)} pm`;
  }

  let compare4Properties = [
    { label: langValues["labelRadiusMain"], id: "atmRadius", key: "aRd", isRadius: true },
    { label: langValues["labelCovalentMain"], id: "covRadius", key: "cRd", isRadius: true },
    { label: `${langValues["labelElectronegativityMain"]} (${langValues["pauling"]})`, id: "eleNeg", key: "eNg", isNum: true },
    { label: `${langValues["labelIonizationMain"]} (${langValues["labelIonization"]})`, id: "ionization", key: "ion", isNum: true },
    { label: `${langValues["labelVolumeMain"]} (${langValues["labelVolume"]})`, id: "volume", key: "vol", isNum: true },
    { label: `${langValues["labelThermalMain"]} (${langValues["labelThermal"]})`, id: "theCond", key: "trm", isNum: true },
    { label: langValues["labelOxidationMain"], id: "oxidation", key: "oxi", isNum: true },
    { label: langValues["labelConfigMain"], id: "elecConfig", key: "cnf" },
    { label: langValues["labelElectronsMain"], id: "electrons", key: "elc", isNum: true },
  ];

  compare4Properties.forEach((prop) => {
    writeStream.write(`<div class='grayText'>${prop.label}</div>`);
    let val1, val2;
    if (prop.isNum) {
      val1 = getNum(element1[prop.key]);
      val2 = getNum(element2[prop.key]);
    } else if (prop.isRadius) {
      val1 = getRadius(element1[prop.key]);
      val2 = getRadius(element2[prop.key]);
    } else {
      val1 = element1[prop.key];
      val2 = element2[prop.key];
    }
    writeStream.write(`<div id='${prop.id}1'>${val1}</div>`);
    writeStream.write(`<div id='${prop.id}2'>${val2}</div>`);
  });


  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });
  writeStream.write("<script>");
  writeStream.write(
    `let colorsList = {colorLess: '${langValues["colorLess"]}', colorSilver: '${langValues["colorSilver"]}', colorGold: '${langValues["colorGold"]}', colorRed: '${langValues["colorRed"]}', colorCopper: '${langValues["colorCopper"]}', colorBlack: '${langValues["colorBlack"]}', colorYellow: '${langValues["colorYellow"]}', colorSlateGray: '${langValues["colorSlateGray"]}', colorGray: '${langValues["colorGray"]}', na: '${langValues["na"]}'};`  
  );
  writeStream.write(
    `let structureList = {crystalSH: '${langValues["crystalSH"]}', crystalFCC: '${langValues["crystalFCC"]}', crystalBCC: '${langValues["crystalBCC"]}', crystalBCM: '${langValues["crystalBCM"]}', crystalFCO: '${langValues["crystalFCO"]}', crystalBCO: '${langValues["crystalBCO"]}', crystalSTG: '${langValues["crystalSTG"]}', crystalTP: '${langValues["crystalTP"]}', crystalSTC: '${langValues["crystalSTC"]}', crystalSC: '${langValues["crystalSC"]}', crystalSO: '${langValues["crystalSO"]}', crystalSM: '${langValues["crystalSM"]}', crystalCT: '${langValues["crystalCT"]}', na: '${langValues["na"]}'};`    
  );
  writeStream.write(
    `let categoriesList = {cat1: '${langValues["cat1"]}', cat2: '${langValues["cat2"]}', cat3: '${langValues["cat3"]}', cat4: '${langValues["cat4"]}', cat5: '${langValues["cat5"]}', cat6: '${langValues["cat6"]}', cat7: '${langValues["cat7"]}', cat8: '${langValues["cat8"]}', lanthanides: '${langValues["lanthanides"]}', actinides: '${langValues["actinides"]}', na: '${langValues["na"]}'};`  
  );
  writeStream.write(
    `let phaseList = {phaseGas: '${langValues["phaseGas"]}', phaseSolid: '${langValues["phaseSolid"]}', phaseLiquid: '${langValues["phaseLiquid"]}', unknown: '${langValues["unknown"]}', na: '${langValues["na"]}'};`
  );
  writeStream.write(`let radioactiveList = {yes: '${langValues["yes"]}', no: '${langValues["no"]}', na: '${langValues["na"]}'};`);
  writeStream.write(`let na= '${langValues["na"]}';`);
  writeStream.write("</script>");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log(`Created ${lang}-${page}`);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
