const fs = require("fs");
const Constants = require("./htmlConstants.js");

let newRawData = Constants.rawData;

newRawData.sort(function (a, b) {
  if (parseInt(a.num) < parseInt(b.num)) return -1;
  else if (parseInt(a.num) > parseInt(b.num)) return 1;
  return 0;
});

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

  function getElement(num, className) {
    let element = newRawData[num];

    return (
      "<td id='ele" +
      (num - -1) +
      "' class='eleTD'><a href='element-" +
      element.num +
      ".html' id='element" +
      element.num +
      "' class='elements " +
      className +
      "'><div class='eleNum'>" +
      element.num +
      "</div><div class='eleSym'>" +
      element.sym +
      "</div><div class='eleNm'>" +
      langValues[element.nme] +
      "</div><div class='eleWt'>" +
      element.aWt +
      "</div></a></td>"
    );
  }

  writeStream.write("<div id='headerwrap'>");
  writeStream.write("<table id='ptable' class='table square margin-bottom-20'>");
  writeStream.write("<tbody class='text-left'>");
  writeStream.write("<tr class='text-center'>");
  writeStream.write(
    "<td id='groupPeriod'><span id='groupHeader'>" +
      langValues.group +
      " →</span> <br /><span id='periodHeader'>↓ " +
      langValues.period +
      "</span></td>"
  );
  writeStream.write("<td id='c1' class='groups unselectable c1'>1</td>");
  writeStream.write("<td id='c2' class='groups unselectable c2'>2</td>");
  writeStream.write("<td id='c3' class='groups unselectable c3'>3</td>");
  writeStream.write("<td id='c4' class='groups unselectable c4'>4</td>");
  writeStream.write("<td id='c5' class='groups unselectable c5'>5</td>");
  writeStream.write("<td id='c6' class='groups unselectable c6'>6</td>");
  writeStream.write("<td id='c7' class='groups unselectable c7'>7</td>");
  writeStream.write("<td id='c8' class='groups unselectable c8'>8</td>");
  writeStream.write("<td id='c9' class='groups unselectable c9'>9</td>");
  writeStream.write("<td id='c10' class='groups unselectable c10'>10</td>");
  writeStream.write("<td id='c11' class='groups unselectable c11'>11</td>");
  writeStream.write("<td id='c12' class='groups unselectable c12'>12</td>");
  writeStream.write("<td id='c13' class='groups unselectable c13'>13</td>");
  writeStream.write("<td id='c14' class='groups unselectable c14'>14</td>");
  writeStream.write("<td id='c15' class='groups unselectable c15'>15</td>");
  writeStream.write("<td id='c16' class='groups unselectable c16'>16</td>");
  writeStream.write("<td id='c17' class='groups unselectable c17'>17</td>");
  writeStream.write("<td id='c18' class='groups unselectable c18'>18</td>");
  writeStream.write("<td id='c19' class='groups unselectable' />");
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r1' class='periods unselectable r1 text-center'>1</td>");
  writeStream.write(getElement(0, "otherNonmetals r1 c1"));
  writeStream.write("<td />");
  writeStream.write("<td id='snippetDetails' colspan='10' rowspan='3'>");
  writeStream.write("<div class='innerSnippet'>");
  writeStream.write("<div id='snippet' class='square'>");
  writeStream.write("<div id='snippetNum'></div>");
  writeStream.write("<div id='snippetSym' class='text-center'></div>");
  writeStream.write("<div id='snippetWt' class='text-right'></div>");
  writeStream.write("</div>");
  writeStream.write("<div id='details' class='square text-left'>");
  writeStream.write("<div id='detailRow1' class='grayText text-upper detailRow1' colspan='2'></div>");
  writeStream.write("<div id='detailRow2'>" + langValues.discovered + "</div>");
  writeStream.write("<div id='valueRow2'></div>");
  writeStream.write("<div id='detailRow3'>" + langValues.labelMeltingMain + "</div>");
  writeStream.write("<div id='valueRow3'></div>");
  writeStream.write("<div id='detailRow4'>" + langValues.labelBoilingMain + "</div>");
  writeStream.write("<div id='valueRow4'></div>");
  writeStream.write("<div id='detailRow5'>" + langValues.labelElectronsMain + "</div>");
  writeStream.write("<div id='valueRow5' class='ltrText text-left'></div>");
  writeStream.write("<div id='detailRow6'>" + langValues.labelConfigMain + "</div>");
  writeStream.write("<div id='valueRow6' class='ltrText text-left'></div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</td>");
  writeStream.write("<td colspan='5' />");
  writeStream.write(getElement(1, "nobleGases r1 c18"));
  // console.log(getElement(1, "nobleGases r1 c18"));
  // writeStream.write("<Element {langValue} name={langValues[Constants[1].nme]} num='1' className='nobleGases r1 c18' />");
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r2' class='periods unselectable r2 text-center'>2</td>");
  writeStream.write(getElement(2, "alkaliMetals r2 c1"));
  writeStream.write(getElement(3, "alkalineEarthMetals r2 c2"));
  writeStream.write(getElement(4, "metalloids r2 c13"));
  writeStream.write(getElement(5, "otherNonmetals r2 c14"));
  writeStream.write(getElement(6, "otherNonmetals r2 c15"));
  writeStream.write(getElement(7, "otherNonmetals r2 c16"));
  writeStream.write(getElement(8, "halogens r2 c17"));
  writeStream.write(getElement(9, "nobleGases r2 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r3' class='periods unselectable r3 text-center'>3</td>");
  writeStream.write(getElement(10, "alkaliMetals r3 c1"));
  writeStream.write(getElement(11, "alkalineEarthMetals r3 c2"));
  writeStream.write(getElement(12, "postTransitionMetals r3 c13"));
  writeStream.write(getElement(13, "metalloids r3 c14"));
  writeStream.write(getElement(14, "otherNonmetals r3 c15"));
  writeStream.write(getElement(15, "otherNonmetals r3 c16"));
  writeStream.write(getElement(16, "halogens r3 c17"));
  writeStream.write(getElement(17, "nobleGases r3 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r4' class='periods unselectable r4 text-center'>4</td>");
  writeStream.write(getElement(18, "alkaliMetals r4 c1"));
  writeStream.write(getElement(19, "alkalineEarthMetals r4 c2"));
  writeStream.write(getElement(20, "transitionMetals r4 c3"));
  writeStream.write(getElement(21, "transitionMetals r4 c4"));
  writeStream.write(getElement(22, "transitionMetals r4 c5"));
  writeStream.write(getElement(23, "transitionMetals r4 c6"));
  writeStream.write(getElement(24, "transitionMetals r4 c7"));
  writeStream.write(getElement(25, "transitionMetals r4 c8"));
  writeStream.write(getElement(26, "transitionMetals r4 c9"));
  writeStream.write(getElement(27, "transitionMetals r4 c10"));
  writeStream.write(getElement(28, "transitionMetals r4 c11"));
  writeStream.write(getElement(29, "transitionMetals r4 c12"));
  writeStream.write(getElement(30, "postTransitionMetals r4 c13"));
  writeStream.write(getElement(31, "metalloids r4 c14"));
  writeStream.write(getElement(32, "metalloids r4 c15"));
  writeStream.write(getElement(33, "otherNonmetals r4 c16"));
  writeStream.write(getElement(34, "halogens r4 c17"));
  writeStream.write(getElement(35, "nobleGases r4 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r5' class='periods unselectable r5 text-center'>5</td>");
  writeStream.write(getElement(36, "alkaliMetals r5 c1"));
  writeStream.write(getElement(37, "alkalineEarthMetals r5 c2"));
  writeStream.write(getElement(38, "transitionMetals r5 c3"));
  writeStream.write(getElement(39, "transitionMetals r5 c4"));
  writeStream.write(getElement(40, "transitionMetals r5 c5"));
  writeStream.write(getElement(41, "transitionMetals r5 c6"));
  writeStream.write(getElement(42, "transitionMetals r5 c7"));
  writeStream.write(getElement(43, "transitionMetals r5 c8"));
  writeStream.write(getElement(44, "transitionMetals r5 c9"));
  writeStream.write(getElement(45, "transitionMetals r5 c10"));
  writeStream.write(getElement(46, "transitionMetals r5 c11"));
  writeStream.write(getElement(47, "transitionMetals r5 c12"));
  writeStream.write(getElement(48, "postTransitionMetals r5 c13"));
  writeStream.write(getElement(49, "postTransitionMetals r5 c14"));
  writeStream.write(getElement(50, "metalloids r5 c15"));
  writeStream.write(getElement(51, "metalloids r5 c16"));
  writeStream.write(getElement(52, "halogens r5 c17"));
  writeStream.write(getElement(53, "nobleGases r5 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r6' class='periods unselectable r6 text-center'>6</td>");
  writeStream.write(getElement(54, "alkaliMetals r6 c1"));
  writeStream.write(getElement(55, "alkalineEarthMetals r6 c2"));
  writeStream.write("<td id='star1' class='text-center'>*</td>");
  writeStream.write(getElement(71, "transitionMetals r6 c4"));
  writeStream.write(getElement(72, "transitionMetals r6 c5"));
  writeStream.write(getElement(73, "transitionMetals r6 c6"));
  writeStream.write(getElement(74, "transitionMetals r6 c7"));
  writeStream.write(getElement(75, "transitionMetals r6 c8"));
  writeStream.write(getElement(76, "transitionMetals r6 c9"));
  writeStream.write(getElement(77, "transitionMetals r6 c10"));
  writeStream.write(getElement(78, "transitionMetals r6 c11"));
  writeStream.write(getElement(79, "transitionMetals r6 c12"));
  writeStream.write(getElement(80, "postTransitionMetals r6 c13"));
  writeStream.write(getElement(81, "postTransitionMetals r6 c14"));
  writeStream.write(getElement(82, "postTransitionMetals r6 c15"));
  writeStream.write(getElement(83, "metalloids r6 c16"));
  writeStream.write(getElement(84, "halogens r6 c17"));
  writeStream.write(getElement(85, "nobleGases r6 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td id='r7' class='periods unselectable r7 text-center'>7</td>");
  writeStream.write(getElement(86, "alkaliMetals r7 c1"));
  writeStream.write(getElement(87, "alkalineEarthMetals r7 c2"));
  writeStream.write("<td id='star2' class='text-center'>**</td>");
  writeStream.write(getElement(103, "transitionMetals r7 c4"));
  writeStream.write(getElement(104, "transitionMetals r7 c5"));
  writeStream.write(getElement(105, "transitionMetals r7 c6"));
  writeStream.write(getElement(106, "transitionMetals r7 c7"));
  writeStream.write(getElement(107, "transitionMetals r7 c8"));
  writeStream.write(getElement(108, "transitionMetals r7 c9"));
  writeStream.write(getElement(109, "transitionMetals r7 c10"));
  writeStream.write(getElement(110, "transitionMetals r7 c11"));
  writeStream.write(getElement(111, "transitionMetals r7 c12"));
  writeStream.write(getElement(112, "postTransitionMetals r7 c13"));
  writeStream.write(getElement(113, "postTransitionMetals r7 c14"));
  writeStream.write(getElement(114, "postTransitionMetals r7 c15"));
  writeStream.write(getElement(115, "postTransitionMetals r7 c16"));
  writeStream.write(getElement(116, "halogens r7 c17"));
  writeStream.write(getElement(117, "nobleGases r7 c18"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td class='gap'  />");
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td />");
  writeStream.write("<td colspan='2' id='lanthanidesMain' class='text-left'>* " + langValues.lanthanides + "</td>");
  writeStream.write(getElement(56, "lanthanides r6"));
  writeStream.write(getElement(57, "lanthanides r6"));
  writeStream.write(getElement(58, "lanthanides r6"));
  writeStream.write(getElement(59, "lanthanides r6"));
  writeStream.write(getElement(60, "lanthanides r6"));
  writeStream.write(getElement(61, "lanthanides r6"));
  writeStream.write(getElement(62, "lanthanides r6"));
  writeStream.write(getElement(63, "lanthanides r6"));
  writeStream.write(getElement(64, "lanthanides r6"));
  writeStream.write(getElement(65, "lanthanides r6"));
  writeStream.write(getElement(66, "lanthanides r6"));
  writeStream.write(getElement(67, "lanthanides r6"));
  writeStream.write(getElement(68, "lanthanides r6"));
  writeStream.write(getElement(69, "lanthanides r6"));
  writeStream.write(getElement(70, "lanthanides r6"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td />");
  writeStream.write("<td colspan='2' id='actinidesMain' class='text-left'>** " + langValues.actinides + "</td>");
  writeStream.write(getElement(88, "actinides r7"));
  writeStream.write(getElement(89, "actinides r7"));
  writeStream.write(getElement(90, "actinides r7"));
  writeStream.write(getElement(91, "actinides r7"));
  writeStream.write(getElement(92, "actinides r7"));
  writeStream.write(getElement(93, "actinides r7"));
  writeStream.write(getElement(94, "actinides r7"));
  writeStream.write(getElement(95, "actinides r7"));
  writeStream.write(getElement(96, "actinides r7"));
  writeStream.write(getElement(97, "actinides r7"));
  writeStream.write(getElement(98, "actinides r7"));
  writeStream.write(getElement(99, "actinides r7"));
  writeStream.write(getElement(100, "actinides r7"));
  writeStream.write(getElement(101, "actinides r7"));
  writeStream.write(getElement(102, "actinides r7"));
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td class='gap' />");
  writeStream.write("</tr>");
  writeStream.write("<tr>");
  writeStream.write("<td />");
  writeStream.write("<td colspan='18'>");
  writeStream.write("<div class='flex text-center margin-bottom-20 width-100'>");
  writeStream.write("<div id='alkaliMetals' class='flex-auto category alkaliMetals unselectable'>" + langValues.cat1 + "</div>");
  writeStream.write("<div id='alkalineEarthMetals' class='flex-auto category alkalineEarthMetals unselectable'>" + langValues.cat2 + "</div>");
  writeStream.write("<div id='transitionMetals' class='flex-auto category transitionMetals unselectable'>" + langValues.cat3 + "</div>");
  writeStream.write("<div id='postTransitionMetals' class='flex-auto category postTransitionMetals unselectable'>" + langValues.cat4 + "</div>");
  writeStream.write("<div id='otherNonmetals' class='flex-auto category otherNonmetals unselectable'>" + langValues.cat5 + "</div>");
  writeStream.write("<div id='metalloids' class='flex-auto category metalloids unselectable'>" + langValues.cat6 + "</div>");
  writeStream.write("<div id='halogens' class='flex-auto category halogens unselectable'>" + langValues.cat7 + "</div>");
  writeStream.write("<div id='nobleGases' class='flex-auto category nobleGases unselectable'>" + langValues.cat8 + "</div>");
  writeStream.write("<div id='lanthanides' class='flex-auto category lanthanides unselectable'>" + langValues.lanthanides + "</div>");
  writeStream.write("<div id='actinides' class='flex-auto category actinides unselectable'>" + langValues.actinides + "</div>");
  writeStream.write("</div>");
  writeStream.write("</td>");
  writeStream.write("</tr>");
  writeStream.write("<tr />");
  writeStream.write("</tbody>");
  writeStream.write("</table>");
  writeStream.write("</div>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });
  writeStream.write("<script>");
  writeStream.write("let bc= '" + langValues["BC"] + "';");
  writeStream.write("</script>");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
