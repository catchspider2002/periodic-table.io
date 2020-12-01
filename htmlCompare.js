const fs = require("fs");
const Constants = require("./htmlConstants.js");

let newRawData = Constants.rawData;

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter) => {
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

  newRawData.sort(function (a, b) {
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
  writeStream.write("<div class='col-xs-4 new-table'></div");
  writeStream.write("<div class='col-xs-4 new-table padding-10'>");
  // writeStream.write("<select aria-label='First Element' bind:value={firstElement} on:change={() => (firstEle = getElement(firstElement))}>");
  writeStream.write("<select id='firstElement' aria-label='First Element'>");
  newRawData.forEach((ele) => {
    writeStream.write(" <option value=" + ele.id + ">" + langValues[ele.nme] + "</option>");
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  // writeStream.write("</div>");
  writeStream.write("<div class='col-xs-4 new-table padding-10'>");
  // writeStream.write("<select aria-label='Second Element' bind:value={secondElement} on:change={() => (secondEle = getElement(secondElement))}>");
  writeStream.write("<select id='secondElement' aria-label='Second Element'>");
  newRawData.forEach((ele) => {
    writeStream.write(" <option value=" + ele.id + ">" + langValues[ele.nme] + "</option>");
  });
  writeStream.write("</select>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  let element = newRawData[0];
  let compareLinks = [
    { label: "labelSymbol", id: "symbol", value: element.sym },
    { label: "labelAtmNoMain", id: "atmNo", value: getNum(element.num) },
    { label: "group", id: "groups", value: element.grp === "na" ? langValues.na : getNum(element.grp) },
    { label: "period", id: "periods", value: getNum(element.prd) },
    { label: "block", id: "block", value: element.blk },
    { label: "labelCrustMain", id: "crust", value: element.crt === "na" ? langValues.na : getNum(element.crt) },
  ];

  compareLinks.forEach((compareLink) => {
    writeStream.write("<div class='row'>");
    writeStream.write("<div class='col-xs-4 new-table heavyFont'>" + langValues[compareLink.label] + "</div>");
    writeStream.write("<div id='" + compareLink.id + "1' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("<div id='" + compareLink.id + "2' class='col-xs-4 new-table'>" + compareLink.value + "</div>");
    writeStream.write("</div>");
  });

  //               writeStream.write("<div class='row'>
  //               writeStream.write("<div class='col-xs-4 new-table heavyFont'>" + langValues.labelName}</div>
  //             <a href='{langValue}/{firstEle.nme}'>
  //               <div class='col-xs-4 new-table compareLink'><span class='underlineLink'>{Lang[firstEle.nme]}</span></div>
  //             </a>
  //             <a href='{langValue}/{secondEle.nme}'>
  //               <div class='col-xs-4 new-table compareLink'><span class='underlineLink'>{Lang[secondEle.nme]}</span></div>
  //             </a>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>" + langValues.labelSymbol}</div>
  //             <div class='col-xs-4 new-table'>{firstEle.sym}</div>
  //             <div class='col-xs-4 new-table'>{secondEle.sym}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>" + langValues.labelAtmNoMain}</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.num)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.num)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.group}</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.grp === 'na'}{Lang.na}{:else}{getNum(firstEle.grp)}{/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.grp === 'na'}{Lang.na}{:else}{getNum(secondEle.grp)}{/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.period}</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.prd)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.prd)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.block}</div>
  //             <div class='col-xs-4 new-table'>{firstEle.blk}</div>
  //             <div class='col-xs-4 new-table'>{secondEle.blk}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'>{Lang.labelCrustMain}</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.crt === 'na'}
  //                 {Lang.na}
  //               {:else}
  //                 {@html getNum(firstEle.crt)}
  //               {/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.crt === 'na'}
  //                 {Lang.na}
  //               {:else}
  //                 {@html getNum(secondEle.crt)}
  //               {/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'>{Lang.labelUniverseMain}</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.uni === 'na'}
  //                 {Lang.na}
  //               {:else}
  //                 {@html getNum(firstEle.uni)}
  //               {/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.uni === 'na'}
  //                 {Lang.na}
  //               {:else}
  //                 {@html getNum(secondEle.uni)}
  //               {/if}
  //             </div>
  //           </div>
  //           <div class='padding-top-42'>
  //             <div class='headerOutline text-upper heavyFont'>{Lang.labelGeneralProp}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelAtmWtMain}</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.aWt)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.aWt)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelCategoryMain}</div>
  //             <div class='col-xs-4 new-table'>{Lang[firstEle.ctg]}</div>
  //             <div class='col-xs-4 new-table'>{Lang[secondEle.ctg]}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelColorMain}</div>
  //             <div class='col-xs-4 new-table'>{Lang[firstEle.clr]}</div>
  //             <div class='col-xs-4 new-table'>{Lang[secondEle.clr]}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelRadioMain}</div>
  //             <div class='col-xs-4 new-table'>{Lang[firstEle.rdo]}</div>
  //             <div class='col-xs-4 new-table'>{Lang[secondEle.rdo]}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelStructureMain}</div>
  //             <div class='col-xs-4 new-table'>{Lang[firstEle.stc]}</div>
  //             <div class='col-xs-4 new-table'>{Lang[secondEle.stc]}</div>
  //           </div>
  //           <div class='padding-top-42'>
  //             <div class='headerOutline text-upper heavyFont'>{Lang.labelPhysicalProp}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>
  //               <span>{Lang.labelDensityMain}</span> (<span>{@html Lang.labelDensity}</span>)
  //             </div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.dns)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.dns)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelPhaseMain}</div>
  //             <div class='col-xs-4 new-table'>{Lang[firstEle.phs]}</div>
  //             <div class='col-xs-4 new-table'>{Lang[secondEle.phs]}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelMeltingMain}</div>
  //             <div id='meltPoint1' class='col-xs-4 new-table' />
  //             <div id='meltPoint2' class='col-xs-4 new-table' />
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelBoilingMain}</div>
  //             <div id='boilPoint1' class='col-xs-4 new-table' />
  //             <div id='boilPoint2' class='col-xs-4 new-table' />
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'><span>{Lang.labelFusionMain}</span> (<span>{Lang.labelFusion}</span>)</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.fsn === 'na'}{Lang.na}{:else}{getNum(firstEle.fsn)}{/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.fsn === 'na'}{Lang.na}{:else}{getNum(secondEle.fsn)}{/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'><span>{Lang.labelVaporizationMain}</span> (<span>{Lang.labelFusion}</span>)</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.vpn === 'na'}{Lang.na}{:else}{getNum(firstEle.vpn)}{/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.vpn === 'na'}{Lang.na}{:else}{getNum(secondEle.vpn)}{/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'><span>{Lang.labelSpecificMain}</span> (<span>{Lang.labelSpecific}</span>)</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.spc)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.spc)}</div>
  //           </div>
  //           <div class='padding-top-42'>
  //             <div class='headerOutline text-upper heavyFont'>{Lang.labelAtomicProp}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelRadiusMain}</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.aRd === '-'}-{:else}{getNum(firstEle.aRd)} pm{/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.aRd === '-'}-{:else}{getNum(secondEle.aRd)} pm{/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelCovalentMain}</div>
  //             <div class='col-xs-4 new-table'>
  //               {#if firstEle.cRd === '-'}-{:else}{getNum(firstEle.cRd)} pm{/if}
  //             </div>
  //             <div class='col-xs-4 new-table'>
  //               {#if secondEle.cRd === '-'}-{:else}{getNum(secondEle.cRd)} pm{/if}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'><span>{Lang.labelElectronegativityMain}</span> (<span>{Lang.pauling}</span>)</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.eNg)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.eNg)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'><span>{Lang.labelIonizationMain}</span> (<span>{Lang.labelIonization}</span>)</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.ion)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.ion)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>
  //               <span>{Lang.labelVolumeMain}</span> (<span>{@html Lang.labelVolume}</span>)
  //             </div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.vol)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.vol)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'><span>{Lang.labelThermalMain}</span> (<span>{Lang.labelThermal}</span>)</div>
  //             <div class='col-xs-4 new-table'>{getNum(firstEle.trm)}</div>
  //             <div class='col-xs-4 new-table'>{getNum(secondEle.trm)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'>{Lang.labelOxidationMain}</div>
  //             <div class='col-xs-4 new-table ltrText text-left'>{getNum(firstEle.oxi)}</div>
  //             <div class='col-xs-4 new-table ltrText text-left'>{getNum(secondEle.oxi)}</div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont hyphen'>{Lang.labelConfigMain}</div>
  //             <div class='col-xs-4 new-table ltrText text-left'>
  //               {@html firstEle.cnf}
  //             </div>
  //             <div class='col-xs-4 new-table ltrText text-left'>
  //               {@html secondEle.cnf}
  //             </div>
  //           </div>
  //           <div class='row'>
  //             <div class='col-xs-4 new-table heavyFont'>{Lang.labelElectronsMain}</div>
  //             <div class='col-xs-4 new-table ltrText text-left'>{getNum(firstEle.elc)}</div>
  //             <div class='col-xs-4 new-table ltrText text-left'>{getNum(secondEle.elc)}</div>
  //           </div>
  writeStream.write("</div>");
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
