const fs = require("fs");
const ConstantsCompare = require("./htmlConstantsCompare.js");

let newRawDataCompare = ConstantsCompare.rawData;
// let defaultTemp = "celsius";
// let defaultPunc = "comma";

const writeFile = (lang, langValues, page, punc, defaultHead, metaTags, defaultNav, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
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
  writeStream.write("<div id='mainCompare'>");
  writeStream.write("<div id='topRowCompare'>");
  writeStream.write("<div id='compareTop' class='square'>");
  writeStream.write("<div class='col-xs-4 new-table'></div>");
  writeStream.write("<div class='col-xs-4 new-table padding-10'>");
  // writeStream.write("<select aria-label='First Element' bind:value={firstElement} on:change={() => (firstEle = getElement(firstElement))}>");
  writeStream.write("<select id='firstElement' class='select-css' onchange='firstChanged()' aria-label='First Element'>");
  newRawDataCompare.forEach((ele) => {
    writeStream.write(" <option value=" + ele.id + ">" + langValues[ele.nme] + "</option>");
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  // writeStream.write("</div>");
  writeStream.write("<div class='col-xs-4 new-table padding-10'>");
  // writeStream.write("<select aria-label='Second Element' bind:value={secondElement} on:change={() => (secondEle = getElement(secondElement))}>");
  writeStream.write("<select id='secondElement' class='select-css' onchange='secondChanged()' aria-label='Second Element'>");
  newRawDataCompare.forEach((ele) => {
    writeStream.write(" <option value=" + ele.id + ">" + langValues[ele.nme] + "</option>");
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  let element = newRawDataCompare[0];
  writeStream.write("<div class='row'>");
  writeStream.write("<div class='col-xs-4 new-table grayText'>" + langValues.labelName + "</div>");
  writeStream.write("<a id='compEle1' href='element-" + element.num + ".html'>");
  writeStream.write(
    "<div class='col-xs-4 new-table compareLink'><span id='name1' class='underlineLink'>" + langValues[element.nme] + "</span></div>"
  );
  writeStream.write("</a>");
  writeStream.write("<a id='compEle2' href='element-" + element.num + ".html'>");
  writeStream.write(
    "<div class='col-xs-4 new-table compareLink'><span id='name2' class='underlineLink'>" + langValues[element.nme] + "</span></div>"
  );
  writeStream.write("</a>");
  writeStream.write("</div>");

  let compare1Links = [
    { label: "labelSymbol", id: "symbol", value: element.sym },
    { label: "labelAtmNoMain", id: "atmNo", value: getNum(element.num) },
    { label: "group", id: "groups", value: element.grp === "na" ? langValues.na : getNum(element.grp) },
    { label: "period", id: "periods", value: getNum(element.prd) },
    { label: "block", id: "block", value: element.blk },
    { label: "labelCrustMain", id: "crust", value: element.crt === "na" ? langValues.na : getNum(element.crt) },
    { label: "labelUniverseMain", id: "universe", value: element.uni === "na" ? langValues.na : getNum(element.uni) },
  ];

  compare1Links.forEach((compareLink) => {
    writeStream.write("<div class='row'>");
    writeStream.write("<div class='col-xs-4 new-table grayText'>" + langValues[compareLink.label] + "</div>");
    writeStream.write("<div id='" + compareLink.id + "1' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("<div id='" + compareLink.id + "2' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("</div>");
  });

  writeStream.write("<div class='padding-top-42'>");
  writeStream.write("<div class='headerOutline text-upper'>" + langValues.labelGeneralProp + "</div>");
  writeStream.write("</div>");

  let compare2Links = [
    { label: "labelAtmWtMain", id: "atmWeight", value: getNum(element.aWt) },
    { label: "labelCategoryMain", id: "category", value: langValues[element.ctg] },
    { label: "labelColorMain", id: "eleColor", value: langValues[element.clr] },
    { label: "labelRadioMain", id: "radioactive", value: langValues[element.rdo] },
    { label: "labelStructureMain", id: "structure", value: langValues[element.stc] },
  ];

  compare2Links.forEach((compareLink) => {
    writeStream.write("<div class='row'>");
    writeStream.write("<div class='col-xs-4 new-table grayText'>" + langValues[compareLink.label] + "</div>");
    writeStream.write("<div id='" + compareLink.id + "1' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("<div id='" + compareLink.id + "2' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("</div>");
  });

  writeStream.write("<div class='padding-top-42'>");
  writeStream.write("<div class='headerOutline text-upper'>" + langValues.labelPhysicalProp + "</div>");
  writeStream.write("</div>");

  let compare3Links = [
    { label: langValues["labelDensityMain"] + " (" + langValues["labelDensity"] + ")", id: "density", value: getNum(element.dns) },
    { label: langValues["labelPhaseMain"], id: "phase", value: langValues[element.phs] },
    { label: langValues["labelMeltingMain"], id: "meltPoint", value: getTemp(element.mlt) },
    { label: langValues["labelBoilingMain"], id: "boilPoint", value: getTemp(element.bln) },
    {
      label: langValues["labelFusionMain"] + " (" + langValues["labelFusion"] + ")",
      id: "fusion",
      value: element.fsn === "na" ? langValues.na : getNum(element.fsn),
    },
    {
      label: langValues["labelVaporizationMain"] + " (" + langValues["labelFusion"] + ")",
      id: "vaporization",
      value: element.vpn === "na" ? langValues.na : getNum(element.vpn),
    },
    { label: langValues["labelSpecificMain"] + " (" + langValues["labelSpecific"] + ")", id: "spHeat", value: getNum(element.spc) },
  ];

  compare3Links.forEach((compareLink) => {
    writeStream.write("<div class='row'>");
    writeStream.write("<div class='col-xs-4 new-table grayText'>" + compareLink.label + "</div>");
    if (compareLink.id === "meltPoint")
      writeStream.write(
        "<div id='" + compareLink.id + "1' class='col-xs-4 new-table'><div id='outputMeltingMain'>" + compareLink.value + "</div></div>"
      );
    else if (compareLink.id === "boilPoint")
      writeStream.write(
        "<div id='" + compareLink.id + "1' class='col-xs-4 new-table'><div id='outputBoilingMain'>" + compareLink.value + "</div></div>"
      );
    else writeStream.write("<div id='" + compareLink.id + "1' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("<div id='" + compareLink.id + "2' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("</div>");
  });

  writeStream.write("<div class='padding-top-42'>");
  writeStream.write("<div class='headerOutline text-upper'>" + langValues.labelAtomicProp + "</div>");
  writeStream.write("</div>");

  let compare4Links = [
    { label: langValues["labelRadiusMain"], id: "atmRadius", value: element.aRd === "-" ? "-" : getNum(element.aRd) + " pm" },
    { label: langValues["labelCovalentMain"], id: "covRadius", value: element.cRd === "-" ? "-" : getNum(element.cRd) + " pm" },
    { label: langValues["labelElectronegativityMain"] + " (" + langValues["pauling"] + ")", id: "eleNeg", value: getNum(element.eNg) },
    { label: langValues["labelIonizationMain"] + " (" + langValues["labelIonization"] + ")", id: "ionization", value: getNum(element.ion) },
    { label: langValues["labelVolumeMain"] + " (" + langValues["labelVolume"] + ")", id: "volume", value: getNum(element.vol) },
    { label: langValues["labelThermalMain"] + " (" + langValues["labelThermal"] + ")", id: "theCond", value: getNum(element.trm) },
    { label: langValues["labelOxidationMain"], id: "oxidation", value: getNum(element.oxi) },
    { label: langValues["labelConfigMain"], id: "elecConfig", value: element.cnf },
    { label: langValues["labelElectronsMain"], id: "electrons", value: getNum(element.elc) },
  ];

  compare4Links.forEach((compareLink) => {
    writeStream.write("<div class='row'>");
    writeStream.write("<div class='col-xs-4 new-table grayText'>" + compareLink.label + "</div>");
    writeStream.write("<div id='" + compareLink.id + "1' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("<div id='" + compareLink.id + "2' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("</div>");
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
    "let colorsList = {colorLess: '" +
      langValues["colorLess"] +
      "', colorSilver: '" +
      langValues["colorSilver"] +
      "', colorGold: '" +
      langValues["colorGold"] +
      "', colorRed: '" +
      langValues["colorRed"] +
      "', colorCopper: '" +
      langValues["colorCopper"] +
      "', colorBlack: '" +
      langValues["colorBlack"] +
      "', colorYellow: '" +
      langValues["colorYellow"] +
      "', colorSlateGray: '" +
      langValues["colorSlateGray"] +
      "', colorGray: '" +
      langValues["colorGray"] +
      "', na: '" +
      langValues["na"] +
      "'};"
  );
  writeStream.write(
    "let structureList = {crystalSH: '" +
      langValues["crystalSH"] +
      "', crystalFCC: '" +
      langValues["crystalFCC"] +
      "', crystalBCC: '" +
      langValues["crystalBCC"] +
      "', crystalBCM: '" +
      langValues["crystalBCM"] +
      "', crystalFCO: '" +
      langValues["crystalFCO"] +
      "', crystalBCO: '" +
      langValues["crystalBCO"] +
      "', crystalSTG: '" +
      langValues["crystalSTG"] +
      "', crystalTP: '" +
      langValues["crystalTP"] +
      "', crystalSTC: '" +
      langValues["crystalSTC"] +
      "', crystalSC: '" +
      langValues["crystalSC"] +
      "', crystalSO: '" +
      langValues["crystalSO"] +
      "', crystalSM: '" +
      langValues["crystalSM"] +
      "', crystalCT: '" +
      langValues["crystalCT"] +
      "', na: '" +
      langValues["na"] +
      "'};"
  );
  writeStream.write(
    "let categoriesList = {cat1: '" +
      langValues["cat1"] +
      "', cat2: '" +
      langValues["cat2"] +
      "', cat3: '" +
      langValues["cat3"] +
      "', cat4: '" +
      langValues["cat4"] +
      "', cat5: '" +
      langValues["cat5"] +
      "', cat6: '" +
      langValues["cat6"] +
      "', cat7: '" +
      langValues["cat7"] +
      "', cat8: '" +
      langValues["cat8"] +
      "', lanthanides: '" +
      langValues["lanthanides"] +
      "', actinides: '" +
      langValues["actinides"] +
      "', na: '" +
      langValues["na"] +
      "'};"
  );
  writeStream.write(
    "let phaseList = {phaseGas: '" +
      langValues["phaseGas"] +
      "', phaseSolid: '" +
      langValues["phaseSolid"] +
      "', phaseLiquid: '" +
      langValues["phaseLiquid"] +
      "', unknown: '" +
      langValues["unknown"] +
      "', na: '" +
      langValues["na"] +
      "'};"
  );
  writeStream.write("let radioactiveList = {yes: '" + langValues["yes"] + "', no: '" + langValues["no"] + "', na: '" + langValues["na"] + "'};");
  writeStream.write("let na= '" + langValues["na"] + "';");
  writeStream.write("</script>");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
