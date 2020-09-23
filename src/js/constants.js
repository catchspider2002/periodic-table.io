
var p1 = 1;
var p2 = 2;
var p3 = 3;
var p4 = 4;
var p5 = 5;
var p6 = 6;
var p7 = 7;
var c1 = "cat1";
var c2 = "cat2";
var c3 = "cat3";
var c4 = "cat4";
var c5 = "cat5";
var c6 = "cat6";
var c7 = "cat7";
var c8 = "cat8";
var c9 = "lanthanides";
var c10 = "actinides";
var g1 = 1;
var g2 = 2;
var g3 = 3;
var g4 = 4;
var g5 = 5;
var g6 = 6;
var g7 = 7;
var g8 = 8;
var g9 = 9;
var g10 = 10;
var g11 = 11;
var g12 = 12;
var g13 = 13;
var g14 = 14;
var g15 = 15;
var g16 = 16;
var g17 = 17;
var g18 = 18;
var naVal = "na";
var yesVal = "yes";
var noVal = "no";
var gas = "phaseGas";
var sld = "phaseSolid";
var lqd = "phaseLiquid";
var unw = "unknown";
var clrLes = "colorLess";
var clrSlv = "colorSilver";
var clrBlk = "colorBlack";
var clrYlw = "colorYellow";
var clrSGry = "colorSlateGray";
var clrGry = "colorGray";
var crsSH = "crystalSH";
var crsFCC = "crystalFCC";
var crsBCC = "crystalBCC";
var crsBCM = "crystalBCM";
var crsFCO = "crystalFCO";
var crsBCO = "crystalBCO";
var crsSTG = "crystalSTG";
var crsTP = "crystalTP";
var crsSTC = "crystalSTC";
var crsSC = "crystalSC";
var crsSO = "crystalSO";
var crsSM = "crystalSM";
var crsCT = "crystalCT";
// Index
var ctg1 = cls("alkaliMetals");
var ctg2 = cls("alkalineEarthMetals");
var ctg3 = cls("transitionMetals");
var ctg4 = cls("postTransitionMetals");
var ctg5 = cls("otherNonmetals");
var ctg6 = cls("metalloids");
var ctg7 = cls("halogens");
var ctg8 = cls("nobleGases");
var ctg9 = cls("lanthanides");
var ctg10 = cls("actinides");
var singleElement = cls("elements");
var outerElement = cls("outerElement");
var singleGroup = cls("groups");
var singlePeriod = cls("periods");
var singleCategory = cls("category");
var singleNum = cls("eleNum");
var singleWt = cls("eleWt");
// var period1 = cls("r1");
// var period2 = cls("r2");
// var period3 = cls("r3");
// var period4 = cls("r4");
// var period5 = cls("r5");
// var period6 = cls("r6");
// var period7 = cls("r7");
var group1 = cls("c1");
var group2 = cls("c2");
var group3 = cls("c3");
var group4 = cls("c4");
var group5 = cls("c5");
var group6 = cls("c6");
var group7 = cls("c7");
var group8 = cls("c8");
var group9 = cls("c9");
var group10 = cls("c10");
var group11 = cls("c11");
var group12 = cls("c12");
var group13 = cls("c13");
var group14 = cls("c14");
var group15 = cls("c15");
var group16 = cls("c16");
var group17 = cls("c17");
var group18 = cls("c18");

let colorClass = cls("colorClass");  
var elem = id("mainElements");
var mlt1, mlt2, bln1, bln2, num, sym, item, canvasSize, radius, melting, boiling, lang;
var deg = 2 * Math.PI;
var defaultNewTheme, defaultTemp, defaultMargin, defaultName, defaultAtmNo, defaultPunc, defaultColor;

var s1 = "<sup>1</sup>";
var s2 = "<sup>2</sup>";
var s3 = "<sup>3</sup>";
var s4 = "<sup>4</sup>";
var s5 = "<sup>5</sup>";
var s6 = "<sup>6</sup>";
var s7 = "<sup>7</sup>";
var s8 = "<sup>8</sup>";
var s9 = "<sup>9</sup>";
var s10 = "<sup>10</sup>";
var s11 = "<sup>11</sup>";
var s12 = "<sup>12</sup>";
var s13 = "<sup>13</sup>";
var s14 = "<sup>14</sup>";
var l3 = "2, 8, 18";
var l4 = "2, 8, 18, 32";
var l5 = "2, 8, 18, 32, 32";
var l6 = "2, 8, 18, 32, 32, 18";
var pc6 = "×10<sup>-6</sup>%";
var pc7 = "×10<sup>-7</sup>%";
var pc8 = "×10<sup>-8</sup>%";
var pc9 = "×10<sup>-9</sup>%";

if (langValue === "sq" || langValue === "az" || langValue === "be" || langValue === "bg" || langValue === "ca" || langValue === "hr" ||
langValue === "cs" || langValue === "da" || langValue === "nl" || langValue === "et" || langValue === "fi" || langValue === "fr" ||
langValue === "de" || langValue === "el" || langValue === "hu" || langValue === "id" || langValue === "it" || langValue === "kk" ||
langValue === "lv" || langValue === "lt" || langValue === "mk" || langValue === "nn" || langValue === "ph" || langValue === "pt" ||
langValue === "ro" || langValue === "ru" || langValue === "sr" || langValue === "sk" || langValue === "sl" || langValue === "es" ||
langValue === "sv" || langValue === "tr" || langValue === "uk" || langValue === "uz" || langValue === "vi")
  defaultPunc = "comma";
else
  defaultPunc = "dot";

if(defaultPunc === "comma")
{	
var rawData = [
  { id: "ele1", num: "1", nme: "hydrogen", sym: "H", grp: g1, prd: p1, blk: "s", aWt: "1,00794", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSH, phs: gas, dns: "0,00008988", mlt: -259.14, bln: -252.87,  fsn: "0,558", vpn: "0,452", spc: "14,304", elc: "1", cnf: "1s" + s1, aRd: "53", cRd: "31", eNg: "2,2", ion: "13,5984", trm: "0,001815", oxi: "-1, 1", vol: "14,4", crt: "0,15%", uni: "75%", yr: "1766", mNo: 1, p: 1, e: 1, n: 0, cid: "783", cas: "1333-74-0"},
  { id: "ele2", num: "2", nme: "helium", sym: "He", grp: g18, prd: p1, blk: "s", aWt: "4,002602", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0001785", mlt: -272.2, bln: -268.93,  fsn: "0,02", vpn: "0,083", spc: "5,193", elc: "2", cnf: "1s" + s2, aRd: "31", cRd: "28", eNg: "-", ion: "24,5874", trm: "0,00152", oxi: "0", vol: "27,2", crt: "5,5" + pc7, uni: "23%", yr: "1868", mNo: 4, p: 2, e: 2, n: 2, cid: "23987", cas: "7440-59-7"},
  { id: "ele3", num: "3", nme: "lithium", sym: "Li", grp: g1, prd: p2, blk: "s", aWt: "6,941", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0,534", mlt: 180.54, bln: 1342,  fsn: "3", vpn: "147", spc: "3,582", elc: "2, 1", cnf: "[He] 2s" + s1, aRd: "152", cRd: "128", eNg: "0,98", ion: "5,3917", trm: "0,847", oxi: "1", vol: "13,10", crt: "0,0017%", uni: "6" + pc7, yr: "1817", mNo: 7, p: 3, e: 3, n: 4, cid: "3028194", cas: "7439-93-2"},
  { id: "ele4", num: "4", nme: "beryllium", sym: "Be", grp: g2, prd: p2, blk: "s", aWt: "9,012182", ctg: c2, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "1,85", mlt: 1287, bln: 2469,  fsn: "7,95", vpn: "297", spc: "1,825", elc: "2, 2", cnf: "[He] 2s" + s2, aRd: "112", cRd: "96", eNg: "1,57", ion: "9,3227", trm: "2,01", oxi: "1, 2", vol: "4,9", crt: "0,00019%", uni: "1" + pc7, yr: "1798", mNo: 9, p: 4, e: 4, n: 5, cid: "5460467", cas: "7440-41-7"},
  { id: "ele5", num: "5", nme: "boron", sym: "B", grp: g13, prd: p2, blk: "p", aWt: "10,811", ctg: c6, clr: clrBlk, rdo: noVal, stc: crsSTG, phs: sld, dns: "2,34", mlt: 2076, bln: 3927,  fsn: "50", vpn: "507", spc: "1,026", elc: "2, 3", cnf: "[He] 2s" + s2 + " 2p" + s1, aRd: "90", cRd: "84", eNg: "2,04", ion: "8,298", trm: "0,274", oxi: "1, 2, 3", vol: "4,6", crt: "0,00086%", uni: "1" + pc7, yr: "1808", mNo: 11, p: 5, e: 5, n: 6, cid: "5462311", cas: "7440-42-8"},
  { id: "ele6", num: "6", nme: "carbon", sym: "C", grp: g14, prd: p2, blk: "p", aWt: "12,0107", ctg: c5, clr: clrBlk, rdo: noVal, stc: crsSH, phs: sld, dns: "2,267", mlt: 3675, bln: 4027,  fsn: "105", vpn: "715", spc: "0,709", elc: "2, 4", cnf: "[He] 2s" + s2 + " 2p" + s2, aRd: "67", cRd: "77", eNg: "2,55", ion: "11,2603", trm: "1,29", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "5,31", crt: "0,18%", uni: "0,5%", yr: "3750" + " BC", mNo: 12, p: 6, e: 6, n: 6, cid: "5462310", cas: "7440-44-0"},
  { id: "ele7", num: "7", nme: "nitrogen", sym: "N", grp: g15, prd: p2, blk: "p", aWt: "14,0067", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSH, phs: gas, dns: "0,0012506", mlt: -210, bln: -195.79,  fsn: "0,36", vpn: "2,79", spc: "1,04", elc: "2, 5", cnf: "[He] 2s" + s2 + " 2p" + s3, aRd: "56", cRd: "71", eNg: "3,04", ion: "14,5341", trm: "0,0002598", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17,3", crt: "0,002%", uni: "0,1%", yr: "1772", mNo: 14, p: 7, e: 7, n: 7, cid: "947", cas: "7727-37-9"},
  { id: "ele8", num: "8", nme: "oxygen", sym: "O", grp: g16, prd: p2, blk: "p", aWt: "15,9994", ctg: c5, clr: clrLes, rdo: noVal, stc: crsBCM, phs: gas, dns: "0,001429", mlt: -218.79, bln: -182.95,  fsn: "0,222", vpn: "3,41", spc: "0,918", elc: "2, 6", cnf: "[He] 2s" + s2 + " 2p" + s4, aRd: "48", cRd: "66", eNg: "3,44", ion: "13,6181", trm: "0,0002674", oxi: "-2, -1, 1, 2", vol: "14,0", crt: "46%", uni: "1%", yr: "1771", mNo: 16, p: 8, e: 8, n: 8, cid: "977", cas: "7782-44-7"},
  { id: "ele9", num: "9", nme: "fluorine", sym: "F", grp: g17, prd: p2, blk: "p", aWt: "18,9984032", ctg: c7, clr: clrLes, rdo: noVal, stc: crsBCM, phs: gas, dns: "0,001696", mlt: -219.62, bln: -188.12,  fsn: "0,26", vpn: "3,27", spc: "0,824", elc: "2, 7", cnf: "[He] 2s" + s2 + " 2p" + s5, aRd: "42", cRd: "64", eNg: "3,98", ion: "17,4228", trm: "0,000279", oxi: "-1", vol: "17,1", crt: "0,054%", uni: "0,00004%", yr: "1810", mNo: 19, p: 9, e: 9, n: 10, cid: "24524", cas: "7782-41-4"},
  { id: "ele10", num: "10", nme: "neon", sym: "Ne", grp: g18, prd: p2, blk: "p", aWt: "20,1797", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0008999", mlt: -248.59, bln: -246.08,  fsn: "0,34", vpn: "1,75", spc: "1,03", elc: "2, 8", cnf: "[He] 2s" + s2 + " 2p" + s6, aRd: "38", cRd: "58", eNg: "-", ion: "21,5645", trm: "0,000493", oxi: "0", vol: "16,7", crt: "3" + pc7, uni: "0,13%", yr: "1898", mNo: 20, p: 10, e: 10, n: 10, cid: "23935", cas: "7440-01-9"},
  { id: "ele11", num: "11", nme: "sodium", sym: "Na", grp: g1, prd: p3, blk: "s", aWt: "22,98976928", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0,971", mlt: 97.72, bln: 883,  fsn: "2,6", vpn: "97,7", spc: "1,228", elc: "2, 8, 1", cnf: "[Ne] 3s" + s1, aRd: "186", cRd: "166", eNg: "0,93", ion: "5,1391", trm: "1,41", oxi: "-1, 1", vol: "23,7", crt: "2,3%", uni: "0,002%", yr: "1807", mNo: 23, p: 11, e: 11, n: 12, cid: "5360545", cas: "7440-23-5"},
  { id: "ele12", num: "12", nme: "magnesium", sym: "Mg", grp: g2, prd: p3, blk: "s", aWt: "24,305", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "1,738", mlt: 650, bln: 1090,  fsn: "8,7", vpn: "128", spc: "1,023", elc: "2, 8, 2", cnf: "[Ne] 3s" + s2, aRd: "160", cRd: "141", eNg: "1,31", ion: "7,6462", trm: "1,56", oxi: "1, 2", vol: "13,97", crt: "2,9%", uni: "0,06%", yr: "1755", mNo: 24, p: 12, e: 12, n: 12, cid: "5462224", cas: "7439-95-4"},
  { id: "ele13", num: "13", nme: "aluminium", sym: "Al", grp: g13, prd: p3, blk: "p", aWt: "26,9815386", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "2,698", mlt: 660.32, bln: 2519,  fsn: "10,7", vpn: "293", spc: "0,897", elc: "2, 8, 3", cnf: "[Ne] 3s" + s2 + " 3p" + s1, aRd: "143", cRd: "121", eNg: "1,61", ion: "5,9858", trm: "2,37", oxi: "1, 3", vol: "9,98", crt: "8,1%", uni: "0,005%", yr: "1825", mNo: 27, p: 13, e: 13, n: 14, cid: "5359268", cas: "7429-90-5"},
  { id: "ele14", num: "14", nme: "silicon", sym: "Si", grp: g14, prd: p3, blk: "p", aWt: "28,0855", ctg: c6, clr: clrGry, rdo: noVal, stc: crsTP, phs: sld, dns: "2,3296", mlt: 1414, bln: 3265,  fsn: "50,2", vpn: "359", spc: "0,705", elc: "2, 8, 4", cnf: "[Ne] 3s" + s2 + " 3p" + s2, aRd: "111", cRd: "111", eNg: "1,9", ion: "8,1517", trm: "1,48", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "12,1", crt: "27%", uni: "0,07%", yr: "1824", mNo: 28, p: 14, e: 14, n: 14, cid: "5461123", cas: "7440-21-3"},
  { id: "ele15", num: "15", nme: "phosphorus", sym: "P", grp: g15, prd: p3, blk: "p", aWt: "30,973762", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSTC, phs: sld, dns: "1,82", mlt: 44.1, bln: 279.85,  fsn: "0,64", vpn: "12,4", spc: "0,769", elc: "2, 8, 5", cnf: "[Ne] 3s" + s2 + " 3p" + s3, aRd: "98", cRd: "107", eNg: "2,19", ion: "10,4867", trm: "0,00235", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17,0", crt: "0,099%", uni: "0,0007%", yr: "1669", mNo: 31, p: 15, e: 15, n: 16, cid: "5462309", cas: "7723-14-0"},
  { id: "ele16", num: "16", nme: "sulfur", sym: "S", grp: g16, prd: p3, blk: "p", aWt: "32,065", ctg: c5, clr: clrYlw, rdo: noVal, stc: crsFCO, phs: sld, dns: "2,067", mlt: 115.21, bln: 444.65,  fsn: "1,73", vpn: "9,8", spc: "0,71", elc: "2, 8, 6", cnf: "[Ne] 3s" + s2 + " 3p" + s4, aRd: "88", cRd: "105", eNg: "2,58", ion: "10,36", trm: "0,00269", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "15,5", crt: "0,042%", uni: "0,05%", yr: "500" + " BC", mNo: 32, p: 16, e: 16, n: 16, cid: "5362487", cas: "7704-34-9"},
  { id: "ele17", num: "17", nme: "chlorine", sym: "Cl", grp: g17, prd: p3, blk: "p", aWt: "35,453", ctg: c7, clr: clrYlw, rdo: noVal, stc: crsBCO, phs: gas, dns: "0,003214", mlt: -101.5, bln: -34.04,  fsn: "3,2", vpn: "10,2", spc: "0,479", elc: "2, 8, 7", cnf: "[Ne] 3s" + s2 + " 3p" + s5, aRd: "79", cRd: "102", eNg: "3,16", ion: "12,9676", trm: "0,000089", oxi: "-1, 1, 2, 3, 4, 5, 6, 7", vol: "22,7", crt: "0,017%", uni: "0,0001%", yr: "1774", mNo: 35, p: 17, e: 17, n: 18, cid: "24526", cas: "7782-50-5"},
  { id: "ele18", num: "18", nme: "argon", sym: "Ar", grp: g18, prd: p3, blk: "p", aWt: "39,948", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0017837", mlt: -189.35, bln: -185.85,  fsn: "1,18", vpn: "6,5", spc: "0,52", elc: "2, 8, 8", cnf: "[Ne] 3s" + s2 + " 3p" + s6, aRd: "71", cRd: "106", eNg: "-", ion: "15,7596", trm: "0,0001772", oxi: "0", vol: "22,4", crt: "0,00015%", uni: "0,02%", yr: "1894", mNo: 40, p: 18, e: 18, n: 22, cid: "23968", cas: "7440-37-1"},
  { id: "ele19", num: "19", nme: "potassium", sym: "K", grp: g1, prd: p4, blk: "s", aWt: "39,0983", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0,862", mlt: 63.38, bln: 759,  fsn: "2,33", vpn: "76,9", spc: "0,757", elc: "2, 8, 8, 1", cnf: "[Ar] 4s" + s1, aRd: "227", cRd: "203", eNg: "0,82", ion: "4,3407", trm: "1,024", oxi: "-1, 1", vol: "45,46", crt: "1,5%", uni: "0,0003%", yr: "1807", mNo: 39, p: 19, e: 19, n: 20, cid: "5462222", cas: "7440-09-7"},
  { id: "ele20", num: "20", nme: "calcium", sym: "Ca", grp: g2, prd: p4, blk: "s", aWt: "40,078", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "1,54", mlt: 842, bln: 1484,  fsn: "8,54", vpn: "155", spc: "0,647", elc: "2, 8, 8, 2", cnf: "[Ar] 4s" + s2, aRd: "197", cRd: "176", eNg: "1,00", ion: "6,1132", trm: "2,01", oxi: "1, 2", vol: "29,9", crt: "5%", uni: "0,007%", yr: "1808", mNo: 40, p: 20, e: 20, n: 20, cid: "5460341", cas: "7440-70-2"},
  { id: "ele21", num: "21", nme: "scandium", sym: "Sc", grp: g3, prd: p4, blk: "d", aWt: "44,955912", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "2,989", mlt: 1541, bln: 2836,  fsn: "16", vpn: "318", spc: "0,568", elc: "2, 8, 9, 2", cnf: "[Ar] 3d" + s1 + " 4s" + s2, aRd: "162", cRd: "170", eNg: "1,36", ion: "6,5615", trm: "0,158", oxi: "1, 2, 3", vol: "15,0", crt: "0,0026%", uni: "3" + pc6, yr: "1879", mNo: 45, p: 21, e: 21, n: 24, cid: "23952", cas: "7440-20-2"},
  { id: "ele22", num: "22", nme: "titanium", sym: "Ti", grp: g4, prd: p4, blk: "d", aWt: "47,867", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "4,54", mlt: 1668, bln: 3287,  fsn: "18,7", vpn: "425", spc: "0,523", elc: "2, 8, 10, 2", cnf: "[Ar] 3d" + s2 + " 4s" + s2, aRd: "147", cRd: "160", eNg: "1,54", ion: "6,8281", trm: "0,219", oxi: "-1, 2, 3, 4", vol: "10,64", crt: "0,66%", uni: "0,0003%", yr: "1791", mNo: 48, p: 22, e: 22, n: 26, cid: "23963", cas: "7440-32-6"},
  { id: "ele23", num: "23", nme: "vanadium", sym: "V", grp: g5, prd: p4, blk: "d", aWt: "50,9415", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "6,11", mlt: 1910, bln: 3407,  fsn: "22,8", vpn: "453", spc: "0,489", elc: "2, 8, 11, 2", cnf: "[Ar] 3d" + s3 + " 4s" + s2, aRd: "134", cRd: "153", eNg: "1,63", ion: "6,8281", trm: "0,307", oxi: "-1, 1, 2, 3, 4, 5", vol: "8,78", crt: "0,019%", uni: "0,0001%", yr: "1801", mNo: 51, p: 23, e: 23, n: 28, cid: "23990", cas: "7440-62-2"},
  { id: "ele24", num: "24", nme: "chromium", sym: "Cr", grp: g6, prd: p4, blk: "d", aWt: "51,9961", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "7,15", mlt: 1907, bln: 2671,  fsn: "20,5", vpn: "339", spc: "0,449", elc: "2, 8, 13, 1", cnf: "[Ar] 3d" + s5 + " 4s" + s1, aRd: "128", cRd: "139", eNg: "1,66", ion: "6,7665", trm: "0,937", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "7,23", crt: "0,014%", uni: "0,0015%", yr: "1797", mNo: 52, p: 24, e: 24, n: 28, cid: "23976", cas: "7440-47-3"},
  { id: "ele25", num: "25", nme: "manganese", sym: "Mn", grp: g7, prd: p4, blk: "d", aWt: "54,938045", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "7,44", mlt: 1246, bln: 2061,  fsn: "13,2", vpn: "220", spc: "0,479", elc: "2, 8, 13, 2", cnf: "[Ar] 3d" + s5 + " 4s" + s2, aRd: "127", cRd: "139", eNg: "1,55", ion: "7,434", trm: "0,0782", oxi: "-3, -2, -1, 1, 2, 3, 4, 5, 6, 7", vol: "7,4", crt: "0,11%", uni: "0,0008%", yr: "1774", mNo: 55, p: 25, e: 25, n: 30, cid: "23930", cas: "7439-96-5"},
  { id: "ele26", num: "26", nme: "iron", sym: "Fe", grp: g8, prd: p4, blk: "d", aWt: "55,845", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "7,874", mlt: 1538, bln: 2861,  fsn: "13,8", vpn: "347", spc: "0,449", elc: "2, 8, 14, 2", cnf: "[Ar] 3d" + s6 + " 4s" + s2, aRd: "126", cRd: "132", eNg: "1,83", ion: "7,9024", trm: "0,802", oxi: "-2, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "7,1", crt: "6,3%", uni: "0,11%", yr: "2000" + " BC", mNo: 56, p: 26, e: 26, n: 30, cid: "23925", cas: "7439-89-6"},
  { id: "ele27", num: "27", nme: "cobalt", sym: "Co", grp: g9, prd: p4, blk: "d", aWt: "58,933195", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "8,86", mlt: 1495, bln: 2927,  fsn: "16,2", vpn: "375", spc: "0,421", elc: "2, 8, 15, 2", cnf: "[Ar] 3d" + s7 + " 4s" + s2, aRd: "125", cRd: "126", eNg: "1,88", ion: "7,881", trm: "1", oxi: "-1, 1, 2, 3, 4, 5", vol: "6,7", crt: "0,003%", uni: "0,0003%", yr: "1735", mNo: 59, p: 27, e: 27, n: 32, cid: "104730", cas: "7440-48-4"},
  { id: "ele28", num: "28", nme: "nickel", sym: "Ni", grp: g10, prd: p4, blk: "d", aWt: "58,6934", ctg: c3, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "8,912", mlt: 1455, bln: 2913,  fsn: "17,2", vpn: "378", spc: "0,444", elc: "2, 8, 16, 2", cnf: "[Ar] 3d" + s8 + " 4s" + s2, aRd: "124", cRd: "124", eNg: "1,91", ion: "7,6398", trm: "0,907", oxi: "-1, 1, 2, 3, 4", vol: "6,59", crt: "0,0089%", uni: "0,006%", yr: "1751", mNo: 59, p: 28, e: 28, n: 31, cid: "935", cas: "7440-02-0"},
  { id: "ele29", num: "29", nme: "copper", sym: "Cu", grp: g11, prd: p4, blk: "d", aWt: "63,546", ctg: c3, clr: "colorCopper", rdo: noVal, stc: crsFCC, phs: sld, dns: "8,96", mlt: 1084.6, bln: 2562,  fsn: "13,1", vpn: "300", spc: "0,385", elc: l3 + ", 1", cnf: "[Ar] 3d" + s10 + " 4s" + s1, aRd: "128", cRd: "132", eNg: "1,9", ion: "7,7264", trm: "4,01", oxi: "1, 2, 3, 4", vol: "7,1", crt: "0,0068%", uni: "6" + pc6, yr: "8000" + " BC", mNo: 64, p: 29, e: 29, n: 35, cid: "23978", cas: "7440-50-8"},
  { id: "ele30", num: "30", nme: "zinc", sym: "Zn", grp: g12, prd: p4, blk: "d", aWt: "65,38", ctg: c3, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "7,134", mlt: 419.53, bln: 907,  fsn: "7,35", vpn: "119", spc: "0,388", elc: l3 + ", 2", cnf: "[Ar] 3d" + s10 + " 4s" + s2, aRd: "134", cRd: "122", eNg: "1,65", ion: "9,3942", trm: "1,16", oxi: "1, 2", vol: "9,2", crt: "0,0078%", uni: "0,00003%", yr: "1000" + " BC", mNo: 65, p: 30, e: 30, n: 35, cid: "23994", cas: "7440-66-6"},
  { id: "ele31", num: "31", nme: "gallium", sym: "Ga", grp: g13, prd: p4, blk: "p", aWt: "69,723", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsBCO, phs: sld, dns: "5,907", mlt: 29.76, bln: 2204,  fsn: "5,59", vpn: "256", spc: "0,371", elc: l3 + ", 3", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s1, aRd: "135", cRd: "122", eNg: "1,81", ion: "5,9993", trm: "0,406", oxi: "1, 2, 3", vol: "11,8", crt: "0,0019%", uni: "1" + pc6, yr: "1875", mNo: 70, p: 31, e: 31, n: 39, cid: "5360835", cas: "7440-55-3"},
  { id: "ele32", num: "32", nme: "germanium", sym: "Ge", grp: g14, prd: p4, blk: "p", aWt: "72,63", ctg: c6, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "5,323", mlt: 938.25, bln: 2833,  fsn: "31,8", vpn: "334", spc: "0,32", elc: l3 + ", 4", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s2, aRd: "122", cRd: "122", eNg: "2,01", ion: "7,8994", trm: "0,599", oxi: "-4, 1, 2, 3, 4", vol: "13,6", crt: "0,00014%", uni: "0,00002%", yr: "1886", mNo: 73, p: 32, e: 32, n: 41, cid: "6326954", cas: "7440-56-4"},
  { id: "ele33", num: "33", nme: "arsenic", sym: "As", grp: g15, prd: p4, blk: "p", aWt: "74,9216", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "5,776", mlt: 817, bln: 603,  fsn: "27,7", vpn: "32,4", spc: "0,329", elc: l3 + ", 5", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s3, aRd: "119", cRd: "119", eNg: "2,18", ion: "9,7886", trm: "0,502", oxi: "-3, 2, 3, 5", vol: "12,97", crt: "0,00021%", uni: "8" + pc7, yr: "2500" + " BC", mNo: 75, p: 33, e: 33, n: 42, cid: "5359596", cas: "7440-38-2"},
  { id: "ele34", num: "34", nme: "selenium", sym: "Se", grp: g16, prd: p4, blk: "p", aWt: "78,96", ctg: c5, clr: clrGry, rdo: noVal, stc: crsSM, phs: sld, dns: "4,809", mlt: 221, bln: 685,  fsn: "5,4", vpn: "26", spc: "0,321", elc: l3 + ", 6", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s4, aRd: "120", cRd: "120", eNg: "2,55", ion: "9,7524", trm: "0,0204", oxi: "-2, 2, 4, 6", vol: "16,45", crt: "5" + pc6, uni: "3" + pc6, yr: "1817", mNo: 79, p: 34, e: 34, n: 45, cid: "6326970", cas: "7782-49-2"},
  { id: "ele35", num: "35", nme: "bromine", sym: "Br", grp: g17, prd: p4, blk: "p", aWt: "79,904", ctg: c7, clr: "colorRed", rdo: noVal, stc: crsBCO, phs: lqd, dns: "3,122", mlt: -7.2, bln: 58.8,  fsn: "5,8", vpn: "14,8", spc: "0,474", elc: l3 + ", 7", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s5, aRd: "120", cRd: "120", eNg: "2,96", ion: "11,8138", trm: "0,00122", oxi: "-1, 1, 3, 4, 5, 7", vol: "23,5", crt: "0,0003%", uni: "7" + pc7, yr: "1825", mNo: 80, p: 35, e: 35, n: 45, cid: "24408", cas: "7726-95-6"},
  { id: "ele36", num: "36", nme: "krypton", sym: "Kr", grp: g18, prd: p4, blk: "p", aWt: "83,798", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0,003733", mlt: -157.36, bln: -153.22,  fsn: "1,64", vpn: "9,02", spc: "0,248", elc: l3 + ", 8", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s6, aRd: "88", cRd: "116", eNg: "3,00", ion: "13,9996", trm: "0,0000949", oxi: "2", vol: "38,9", crt: "1,5" + pc8, uni: "4" + pc6, yr: "1898", mNo: 84, p: 36, e: 36, n: 48, cid: "5416", cas: "7439-90-9"},
  { id: "ele37", num: "37", nme: "rubidium", sym: "Rb", grp: g1, prd: p5, blk: "s", aWt: "85,4678", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "1,532", mlt: 39.31, bln: 688,  fsn: "2,19", vpn: "72", spc: "0,363", elc: l3 + ", 8, 1", cnf: "[Kr] 5s" + s1, aRd: "248", cRd: "220", eNg: "0,82", ion: "4,1771", trm: "0,582", oxi: "-1, 1", vol: "55,9", crt: "0,006%", uni: "1" + pc6, yr: "1861", mNo: 85, p: 37, e: 37, n: 48, cid: "5357696", cas: "7440-17-7"},
  { id: "ele38", num: "38", nme: "strontium", sym: "Sr", grp: g2, prd: p5, blk: "s", aWt: "87,62", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "2,64", mlt: 777, bln: 1382,  fsn: "8", vpn: "137", spc: "0,301", elc: l3 + ", 8, 2", cnf: "[Kr] 5s" + s2, aRd: "215", cRd: "195", eNg: "0,95", ion: "5,6949", trm: "0,353", oxi: "1, 2", vol: "33,7", crt: "0,036%", uni: "4" + pc6, yr: "1790", mNo: 88, p: 38, e: 38, n: 50, cid: "5359327", cas: "7440-24-6"},
  { id: "ele39", num: "39", nme: "yttrium", sym: "Y", grp: g3, prd: p5, blk: "d", aWt: "88,90585", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "4,469", mlt: 1526, bln: 3336,  fsn: "11,4", vpn: "380", spc: "0,298", elc: l3 + ", 9, 2", cnf: "[Kr] 4d" + s1 + " 5s" + s2, aRd: "180", cRd: "190", eNg: "1,22", ion: "6,2173", trm: "0,172", oxi: "1, 2, 3", vol: "19,8", crt: "0,0029%", uni: "7" + pc7, yr: "1794", mNo: 89, p: 39, e: 39, n: 50, cid: "23993", cas: "7440-65-5"},
  { id: "ele40", num: "40", nme: "zirconium", sym: "Zr", grp: g4, prd: p5, blk: "d", aWt: "91,224", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6,506", mlt: 1855, bln: 4409,  fsn: "21", vpn: "580", spc: "0,278", elc: l3 + ", 10, 2", cnf: "[Kr] 4d" + s2 + " 5s" + s2, aRd: "160", cRd: "175", eNg: "1,33", ion: "6,6339", trm: "0,227", oxi: "1, 2, 3, 4", vol: "14,0", crt: "0,013%", uni: "5" + pc6, yr: "1789", mNo: 91, p: 40, e: 40, n: 51, cid: "23995", cas: "7440-67-7"},
  { id: "ele41", num: "41", nme: "niobium", sym: "Nb", grp: g5, prd: p5, blk: "d", aWt: "92,90638", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "8,57", mlt: 2477, bln: 4744,  fsn: "26,8", vpn: "690", spc: "0,265", elc: l3 + ", 12, 1", cnf: "[Kr] 4d" + s4 + " 5s" + s1, aRd: "146", cRd: "164", eNg: "1,6", ion: "6,7589", trm: "0,537", oxi: "-1, 2, 3, 4, 5", vol: "10,87", crt: "0,0017%", uni: "2" + pc7, yr: "1801", mNo: 93, p: 41, e: 41, n: 52, cid: "23936", cas: "7440-03-1"},
  { id: "ele42", num: "42", nme: "molybdenum", sym: "Mo", grp: g6, prd: p5, blk: "d", aWt: "95,96", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "10,22", mlt: 2623, bln: 4639,  fsn: "36", vpn: "600", spc: "0,251", elc: l3 + ", 13, 1", cnf: "[Kr] 4d" + s5 + " 5s" + s1, aRd: "139", cRd: "154", eNg: "2,16", ion: "7,0924", trm: "1,38", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9,4", crt: "0,00011%", uni: "5" + pc7, yr: "1778", mNo: 96, p: 42, e: 42, n: 54, cid: "23932", cas: "7439-98-7"},
  { id: "ele43", num: "43", nme: "technetium", sym: "Tc", grp: g7, prd: p5, blk: "d", aWt: "[98]", ctg: c3, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "11,5", mlt: 2157, bln: 4265,  fsn: "23", vpn: "550", spc: "-", elc: l3 + ", 13, 2", cnf: "[Kr] 4d" + s5 + " 5s" + s2, aRd: "136", cRd: "147", eNg: "1,9", ion: "7,28", trm: "0,506", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8,5", crt: naVal, uni: naVal, yr: "1937", mNo: 98, p: 43, e: 43, n: 55, cid: naVal, cas: "7440-26-8"},
  { id: "ele44", num: "44", nme: "ruthenium", sym: "Ru", grp: g8, prd: p5, blk: "d", aWt: "101,07", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "12,37", mlt: 2334, bln: 4150,  fsn: "25,7", vpn: "580", spc: "0,238", elc: l3 + ", 15, 1", cnf: "[Kr] 4d" + s7 + " 5s" + s1, aRd: "134", cRd: "146", eNg: "2,2", ion: "7,3605", trm: "1,17", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,3", crt: "9,9" + pc8, uni: "4" + pc7, yr: "1844", mNo: 101, p: 44, e: 44, n: 57, cid: "23950", cas: "7440-18-8"},
  { id: "ele45", num: "45", nme: "rhodium", sym: "Rh", grp: g9, prd: p5, blk: "d", aWt: "102,9055", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "12,41", mlt: 1964, bln: 3695,  fsn: "21,7", vpn: "495", spc: "0,243", elc: l3 + ", 16, 1", cnf: "[Kr] 4d" + s8 + " 5s" + s1, aRd: "134", cRd: "142", eNg: "2,28", ion: "7,4589", trm: "1,5", oxi: "-1, 1, 2, 3, 4, 5, 6", vol: "8,3", crt: "7" + pc8, uni: "6" + pc8, yr: "1803", mNo: 103, p: 45, e: 45, n: 58, cid: "23948", cas: "7440-16-6"},
  { id: "ele46", num: "46", nme: "palladium", sym: "Pd", grp: g10, prd: p5, blk: "d", aWt: "106,42", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "12,02", mlt: 1554.9, bln: 2963,  fsn: "16,7", vpn: "380", spc: "0,244", elc: l3 + ", 18", cnf: "[Kr] 4d" + s10, aRd: "137", cRd: "139", eNg: "2,2", ion: "8,3369", trm: "0,718", oxi: "2, 4", vol: "8,9", crt: "6,3" + pc7, uni: "2" + pc7, yr: "1803", mNo: 106, p: 46, e: 46, n: 60, cid: "23938", cas: "7440-05-3"},
  { id: "ele47", num: "47", nme: "silver", sym: "Ag", grp: g11, prd: p5, blk: "d", aWt: "107,8682", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "10,49", mlt: 961.78, bln: 2162,  fsn: "11,3", vpn: "255", spc: "0,235", elc: l3 + ", 18, 1", cnf: "[Kr] 4d" + s10 + " 5s" + s1, aRd: "144", cRd: "145", eNg: "1,93", ion: "7,5762", trm: "4,29", oxi: "1, 2, 3", vol: "10,3", crt: "7,9" + pc6, uni: "6" + pc8, yr: "3000" + " BC", mNo: 108, p: 47, e: 47, n: 61, cid: "23954", cas: "7440-22-4"},
  { id: "ele48", num: "48", nme: "cadmium", sym: "Cd", grp: g12, prd: p5, blk: "d", aWt: "112,411", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8,69", mlt: 321.07, bln: 767,  fsn: "6,3", vpn: "100", spc: "0,232", elc: l3 + ", 18, 2", cnf: "[Kr] 4d" + s10 + " 5s" + s2, aRd: "151", cRd: "144", eNg: "1,69", ion: "8,9938", trm: "0,968", oxi: "1, 2", vol: "13,1", crt: "0,000015%", uni: "2" + pc7, yr: "1817", mNo: 112, p: 48, e: 48, n: 64, cid: "23973", cas: "7440-43-9"},
  { id: "ele49", num: "49", nme: "indium", sym: "In", grp: g13, prd: p5, blk: "p", aWt: "114,818", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsCT, phs: sld, dns: "7,31", mlt: 156.6, bln: 2072,  fsn: "3,26", vpn: "230", spc: "0,233", elc: l3 + ", 18, 3", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s1, aRd: "167", cRd: "142", eNg: "1,78", ion: "5,7864", trm: "0,816", oxi: "1, 2, 3", vol: "15,7", crt: "0,000016%", uni: "3" + pc8, yr: "1864", mNo: 115, p: 49, e: 49, n: 66, cid: "5359967", cas: "7440-74-6"},
  { id: "ele50", num: "50", nme: "tin", sym: "Sn", grp: g14, prd: p5, blk: "p", aWt: "118,71", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsCT, phs: sld, dns: "7,287", mlt: 231.93, bln: 2602,  fsn: "7", vpn: "290", spc: "0,228", elc: l3 + ", 18, 4", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s2, aRd: "140", cRd: "139", eNg: "1,96", ion: "7,3439", trm: "0,666", oxi: "-4, 2, 4", vol: "16,3", crt: "0,00022%", uni: "4" + pc7, yr: "3000" + " BC", mNo: 119, p: 50, e: 50, n: 69, cid: "5352426", cas: "7440-31-5"},
  { id: "ele51", num: "51", nme: "antimony", sym: "Sb", grp: g15, prd: p5, blk: "p", aWt: "121,76", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "6,685", mlt: 630.63, bln: 1587,  fsn: "19,7", vpn: "68", spc: "0,207", elc: l3 + ", 18, 5", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s3, aRd: "140", cRd: "139", eNg: "2,05", ion: "8,6084", trm: "0,243", oxi: "-3, 3, 5", vol: "18,22", crt: "0,00002%", uni: "4" + pc8, yr: "3000" + " BC", mNo: 122, p: 51, e: 51, n: 71, cid: "5354495", cas: "7440-36-0"},
  { id: "ele52", num: "52", nme: "tellurium", sym: "Te", grp: g16, prd: p5, blk: "p", aWt: "127,6", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "6,232", mlt: 449.51, bln: 988,  fsn: "17,5", vpn: "48", spc: "0,202", elc: l3 + ", 18, 6", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s4, aRd: "140", cRd: "138", eNg: "2,1", ion: "9,0096", trm: "0,0235", oxi: "-2, 2, 4, 5, 6", vol: "20,5", crt: "9,9" + pc8, uni: "9" + pc7, yr: "1782", mNo: 128, p: 52, e: 52, n: 76, cid: "6327182", cas: "13494-80-9"},
  { id: "ele53", num: "53", nme: "iodine", sym: "I", grp: g17, prd: p5, blk: "p", aWt: "126,90447", ctg: c7, clr: clrSGry, rdo: noVal, stc: crsBCO, phs: sld, dns: "4,93", mlt: 113.7, bln: 184.25,  fsn: "7,76", vpn: "20,9", spc: "0,214", elc: l3 + ", 18, 7", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s5, aRd: "140", cRd: "139", eNg: "2,66", ion: "10,4513", trm: "0,00449", oxi: "-1, 1, 3, 5, 7", vol: "25,74", crt: "0,000049%", uni: "1" + pc7, yr: "1811", mNo: 127, p: 53, e: 53, n: 74, cid: "807", cas: "7553-56-2"},
  { id: "ele54", num: "54", nme: "xenon", sym: "Xe", grp: g18, prd: p5, blk: "p", aWt: "131,293", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0,005887", mlt: -111.7, bln: -108.12,  fsn: "2,3", vpn: "12,64", spc: "0,158", elc: l3 + ", 18, 8", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s6, aRd: "108", cRd: "140", eNg: "2,6", ion: "12,1298", trm: "0,0000569", oxi: "2, 4, 6, 8", vol: "37,3", crt: "2" + pc9, uni: "1" + pc6, yr: "1898", mNo: 131, p: 54, e: 54, n: 77, cid: "23991", cas: "7440-63-3"},
  { id: "ele55", num: "55", nme: "caesium", sym: "Cs", grp: g1, prd: p6, blk: "s", aWt: "132,9054519", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "1,873", mlt: 28.44, bln: 671,  fsn: "2,09", vpn: "65", spc: "0,242", elc: l3 + ", 18, 8, 1", cnf: "[Xe] 6s" + s1, aRd: "265", cRd: "244", eNg: "0,79", ion: "3,8939", trm: "0,359", oxi: "-1, 1", vol: "71,07", crt: "0,00019%", uni: "8" + pc8, yr: "1860", mNo: 133, p: 55, e: 55, n: 78, cid: "5354618", cas: "7440-46-2"},
  { id: "ele56", num: "56", nme: "barium", sym: "Ba", grp: g2, prd: p6, blk: "s", aWt: "137,327", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "3,594", mlt: 727, bln: 1897,  fsn: "8", vpn: "140", spc: "0,204", elc: l3 + ", 18, 8, 2", cnf: "[Xe] 6s" + s2, aRd: "222", cRd: "215", eNg: "0,89", ion: "5,2117", trm: "0,184", oxi: "2", vol: "39,24", crt: "0,034%", uni: "1" + pc6, yr: "1774", mNo: 137, p: 56, e: 56, n: 81, cid: "5355457", cas: "7440-39-3"},
  { id: "ele57", num: "57", nme: "lanthanum", sym: "La", grp: naVal, prd: p6, blk: "f", aWt: "138,90547", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6,145", mlt: 920, bln: 3464,  fsn: "6,2", vpn: "400", spc: "0,195", elc: l3 + ", 18, 9, 2", cnf: "[Xe] 5d" + s1 + " 6s" + s2, aRd: "187", cRd: "207", eNg: "1,1", ion: "5,5769", trm: "0,135", oxi: "2, 3", vol: "22,5", crt: "0,0034%", uni: "2" + pc7, yr: "1839", mNo: 139, p: 57, e: 57, n: 82, cid: "23926", cas: "7439-91-0"},
  { id: "ele58", num: "58", nme: "cerium", sym: "Ce", grp: naVal, prd: p6, blk: "f", aWt: "140,116", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6,77", mlt: 795, bln: 3443,  fsn: "5,5", vpn: "350", spc: "0,192", elc: l3 + ", 19, 9, 2", cnf: "[Xe] 4f" + s1 + " 5d" + s1 + " 6s" + s2, aRd: "182", cRd: "204", eNg: "1,12", ion: "5,5387", trm: "0,114", oxi: "2, 3, 4", vol: "20,67", crt: "0,006%", uni: "1" + pc6, yr: "1803", mNo: 140, p: 58, e: 58, n: 82, cid: "23974", cas: "7440-45-1"},
  { id: "ele59", num: "59", nme: "praseodymium", sym: "Pr", grp: naVal, prd: p6, blk: "f", aWt: "140,90765", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6,773", mlt: 935, bln: 3520,  fsn: "6,9", vpn: "330", spc: "0,193", elc: l3 + ", 21, 8, 2", cnf: "[Xe] 4f" + s3 + " 6s" + s2, aRd: "182", cRd: "203", eNg: "1,13", ion: "5,473", trm: "0,125", oxi: "2, 3, 4", vol: "20,8", crt: "0,00086%", uni: "2" + pc7, yr: "1885", mNo: 141, p: 59, e: 59, n: 82, cid: "23942", cas: "7440-10-0"},
  { id: "ele60", num: "60", nme: "neodymium", sym: "Nd", grp: naVal, prd: p6, blk: "f", aWt: "144,242", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "7,007", mlt: 1024, bln: 3074,  fsn: "7,1", vpn: "285", spc: "0,19", elc: l3 + ", 22, 8, 2", cnf: "[Xe] 4f" + s4 + " 6s" + s2, aRd: "181", cRd: "201", eNg: "1,14", ion: "5,525", trm: "0,165", oxi: "2, 3", vol: "20,6", crt: "0,0033%", uni: "1" + pc6, yr: "1885", mNo: 144, p: 60, e: 60, n: 84, cid: "23934", cas: "7440-00-8"},
  { id: "ele61", num: "61", nme: "promethium", sym: "Pm", grp: naVal, prd: p6, blk: "f", aWt: "[145]", ctg: c9, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "7,26", mlt: 1042, bln: 3000,  fsn: "7,7", vpn: "290", spc: "-", elc: l3 + ", 23, 8, 2", cnf: "[Xe] 4f" + s5 + " 6s" + s2, aRd: "183", cRd: "199", eNg: "-", ion: "5,582", trm: "0,179", oxi: "3", vol: "22,39", crt: naVal, uni: naVal, yr: "1945", mNo: 145, p: 61, e: 61, n: 84, cid: naVal, cas: "7440-12-2"},
  { id: "ele62", num: "62", nme: "samarium", sym: "Sm", grp: naVal, prd: p6, blk: "f", aWt: "150,36", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "7,52", mlt: 1072, bln: 1794,  fsn: "8,6", vpn: "175", spc: "0,197", elc: l3 + ", 24, 8, 2", cnf: "[Xe] 4f" + s6 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1,17", ion: "5,6437", trm: "0,133", oxi: "2, 3", vol: "20,0", crt: "0,0006%", uni: "5" + pc7, yr: "1879", mNo: 150, p: 62, e: 62, n: 88, cid: "23951", cas: "7440-19-9"},
  { id: "ele63", num: "63", nme: "europium", sym: "Eu", grp: naVal, prd: p6, blk: "f", aWt: "151,964", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "5,243", mlt: 826, bln: 1529,  fsn: "9,2", vpn: "175", spc: "0,182", elc: l3 + ", 25, 8, 2", cnf: "[Xe] 4f" + s7 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1,2", ion: "5,6704", trm: "0,139", oxi: "2, 3", vol: "20,8", crt: "0,00018%", uni: "5" + pc8, yr: "1896", mNo: 152, p: 63, e: 63, n: 89, cid: "23981", cas: "7440-53-1"},
  { id: "ele64", num: "64", nme: "gadolinium", sym: "Gd", grp: naVal, prd: p6, blk: "f", aWt: "157,25", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "7,895", mlt: 1312, bln: 3273,  fsn: "10", vpn: "305", spc: "0,236", elc: l3 + ", 25, 9, 2", cnf: "[Xe] 4f" + s7 + " 5d" + s1 + " 6s" + s2, aRd: "180", cRd: "196", eNg: "1,2", ion: "6,1501", trm: "0,106", oxi: "1, 2, 3", vol: "19,9", crt: "0,00052%", uni: "2" + pc7, yr: "1880", mNo: 157, p: 64, e: 64, n: 93, cid: "23982", cas: "7440-54-2"},
  { id: "ele65", num: "65", nme: "terbium", sym: "Tb", grp: naVal, prd: p6, blk: "f", aWt: "158,92535", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8,229", mlt: 1356, bln: 3230,  fsn: "10,8", vpn: "295", spc: "0,182", elc: l3 + ", 27, 8, 2", cnf: "[Xe] 4f" + s9 + " 6s" + s2, aRd: "177", cRd: "194", eNg: "1,2", ion: "5,8638", trm: "0,111", oxi: "1, 3, 4", vol: "19,20", crt: "0,000093%", uni: "5" + pc8, yr: "1843", mNo: 159, p: 65, e: 65, n: 94, cid: "23958", cas: "7440-27-9"},
  { id: "ele66", num: "66", nme: "dysprosium", sym: "Dy", grp: naVal, prd: p6, blk: "f", aWt: "162,5", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8,55", mlt: 1407, bln: 2567,  fsn: "11,1", vpn: "280", spc: "0,17", elc: l3 + ", 28, 8, 2", cnf: "[Xe] 4f" + s10 + " 6s" + s2, aRd: "178", cRd: "192", eNg: "1,22", ion: "5,9389", trm: "0,107", oxi: "2, 3", vol: "19,0", crt: "0,00062%", uni: "2" + pc7, yr: "1886", mNo: 163, p: 66, e: 66, n: 97, cid: "23912", cas: "7429-91-6"},
  { id: "ele67", num: "67", nme: "holmium", sym: "Ho", grp: naVal, prd: p6, blk: "f", aWt: "164,93032", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8,795", mlt: 1461, bln: 2720,  fsn: "17", vpn: "265", spc: "0,165", elc: l3 + ", 29, 8, 2", cnf: "[Xe] 4f" + s11 + " 6s" + s2, aRd: "176", cRd: "192", eNg: "1,23", ion: "6,0215", trm: "0,162", oxi: "3", vol: "18,7", crt: "0,00012%", uni: "5" + pc8, yr: "1878", mNo: 165, p: 67, e: 67, n: 98, cid: "23988", cas: "7440-60-0"},
  { id: "ele68", num: "68", nme: "erbium", sym: "Er", grp: naVal, prd: p6, blk: "f", aWt: "167,259", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9,066", mlt: 1529, bln: 2868,  fsn: "19,9", vpn: "285", spc: "0,168", elc: l3 + ", 30, 8, 2", cnf: "[Xe] 4f" + s12 + " 6s" + s2, aRd: "176", cRd: "189", eNg: "1,24", ion: "6,1077", trm: "0,143", oxi: "3", vol: "18,4", crt: "0,0003%", uni: "2" + pc7, yr: "1843", mNo: 167, p: 68, e: 68, n: 99, cid: "23980", cas: "7440-52-0"},
  { id: "ele69", num: "69", nme: "thulium", sym: "Tm", grp: naVal, prd: p6, blk: "f", aWt: "168,93421", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9,321", mlt: 1545, bln: 1950,  fsn: "16,8", vpn: "250", spc: "0,16", elc: l3 + ", 31, 8, 2", cnf: "[Xe] 4f" + s13 + " 6s" + s2, aRd: "176", cRd: "190", eNg: "1,25", ion: "6,1843", trm: "0,168", oxi: "2, 3", vol: "18,1", crt: "0,000045%", uni: "1" + pc8, yr: "1879", mNo: 169, p: 69, e: 69, n: 100, cid: "23961", cas: "7440-30-4"},
  { id: "ele70", num: "70", nme: "ytterbium", sym: "Yb", grp: naVal, prd: p6, blk: "f", aWt: "173,054", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "6,965", mlt: 824, bln: 1196,  fsn: "7,7", vpn: "160", spc: "0,155", elc: l4 + ", 8, 2", cnf: "[Xe] 4f" + s14 + " 6s" + s2, aRd: "176", cRd: "187", eNg: "1,1", ion: "6,2542", trm: "0,349", oxi: "2, 3", vol: "24,79", crt: "0,00028%", uni: "2" + pc7, yr: "1878", mNo: 173, p: 70, e: 70, n: 103, cid: "23992", cas: "7440-64-4"},
  { id: "ele71", num: "71", nme: "lutetium", sym: "Lu", grp: naVal, prd: p6, blk: "d", aWt: "174,9668", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9,84", mlt: 1652, bln: 3402,  fsn: "22", vpn: "415", spc: "0,154", elc: l4 + ", 9, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s1 + " 6s" + s2, aRd: "174", cRd: "187", eNg: "1,27", ion: "5,4259", trm: "0,164", oxi: "3", vol: "17,78", crt: "0,000056%", uni: "1" + pc8, yr: "1907", mNo: 175, p: 71, e: 71, n: 104, cid: "23929", cas: "7439-94-3"},
  { id: "ele72", num: "72", nme: "hafnium", sym: "Hf", grp: g4, prd: p6, blk: "d", aWt: "178,49", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "13,31", mlt: 2233, bln: 4603,  fsn: "25,5", vpn: "630", spc: "0,144", elc: l4 + ", 10, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s2 + " 6s" + s2, aRd: "159", cRd: "175", eNg: "1,3", ion: "6,8251", trm: "0,23", oxi: "2, 3, 4", vol: "13,6", crt: "0,00033%", uni: "7" + pc8, yr: "1922", mNo: 178, p: 72, e: 72, n: 106, cid: "23986", cas: "7440-58-6"},
  { id: "ele73", num: "73", nme: "tantalum", sym: "Ta", grp: g5, prd: p6, blk: "d", aWt: "180,94788", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "16,654", mlt: 3017, bln: 5458,  fsn: "36", vpn: "735", spc: "0,14", elc: l4 + ", 11, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s3 + " 6s" + s2, aRd: "146", cRd: "170", eNg: "1,5", ion: "7,5496", trm: "0,575", oxi: "-1, 2, 3, 4, 5", vol: "10,90", crt: "0,00017%", uni: "8" + pc9, yr: "1802", mNo: 181, p: 73, e: 73, n: 108, cid: "23956", cas: "7440-25-7"},
  { id: "ele74", num: "74", nme: "tungsten", sym: "W", grp: g6, prd: p6, blk: "d", aWt: "183,84", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "19,25", mlt: 3422, bln: 5555,  fsn: "35", vpn: "800", spc: "0,132", elc: l4 + ", 12, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s4 + " 6s" + s2, aRd: "139", cRd: "162", eNg: "2,36", ion: "7,864", trm: "1,74", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9,53", crt: "0,00011%", uni: "5" + pc8, yr: "1781", mNo: 184, p: 74, e: 74, n: 110, cid: "23964", cas: "7440-33-7"},
  { id: "ele75", num: "75", nme: "rhenium", sym: "Re", grp: g7, prd: p6, blk: "d", aWt: "186,207", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "21,02", mlt: 3186, bln: 5596,  fsn: "33", vpn: "705", spc: "0,137", elc: l4 + ", 13, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s5 + " 6s" + s2, aRd: "137", cRd: "151", eNg: "1,9", ion: "7,8335", trm: "0,479", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8,85", crt: "2,6" + pc7, uni: "2" + pc8, yr: "1908", mNo: 186, p: 75, e: 75, n: 111, cid: "23947", cas: "7440-15-5"},
  { id: "ele76", num: "76", nme: "osmium", sym: "Os", grp: g8, prd: p6, blk: "d", aWt: "190,23", ctg: c3, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "22,61", mlt: 3033, bln: 5012,  fsn: "31", vpn: "630", spc: "0,13", elc: l4 + ", 14, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s6 + " 6s" + s2, aRd: "135", cRd: "144", eNg: "2,2", ion: "8,4382", trm: "0,876", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,49", crt: "1,8" + pc7, uni: "3" + pc7, yr: "1803", mNo: 190, p: 76, e: 76, n: 114, cid: "23937", cas: "7440-04-2"},
  { id: "ele77", num: "77", nme: "iridium", sym: "Ir", grp: g9, prd: p6, blk: "d", aWt: "192,217", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "22,56", mlt: 2466, bln: 4428,  fsn: "26", vpn: "560", spc: "0,131", elc: l4 + ", 15, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s7 + " 6s" + s2, aRd: "136", cRd: "141", eNg: "2,2", ion: "8,967", trm: "1,47", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,54", crt: "4" + pc8, uni: "2" + pc7, yr: "1803", mNo: 192, p: 77, e: 77, n: 115, cid: "23924", cas: "7439-88-5"},
  { id: "ele78", num: "78", nme: "platinum", sym: "Pt", grp: g10, prd: p6, blk: "d", aWt: "195,084", ctg: c3, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "21,45", mlt: 1768.3, bln: 3825,  fsn: "20", vpn: "490", spc: "0,133", elc: l4 + ", 17, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s9 + " 6s" + s1, aRd: "139", cRd: "136", eNg: "2,28", ion: "8,9587", trm: "0,716", oxi: "2, 4, 5, 6", vol: "9,10", crt: "3,7" + pc6, uni: "5" + pc7, yr: "1735", mNo: 195, p: 78, e: 78, n: 117, cid: "23939", cas: "7440-06-4"},
  { id: "ele79", num: "79", nme: "gold", sym: "Au", grp: g11, prd: p6, blk: "d", aWt: "196,966569", ctg: c3, clr: "colorGold", rdo: noVal, stc: crsFCC, phs: sld, dns: "19,282", mlt: 1064.2, bln: 2856,  fsn: "12,5", vpn: "330", spc: "0,129", elc: l4 + ", 18, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s1, aRd: "144", cRd: "136", eNg: "2,54", ion: "9,2255", trm: "3,17", oxi: "-1, 1, 2, 3, 5", vol: "10,2", crt: "3,1" + pc7, uni: "6" + pc8, yr: "2500" + " BC", mNo: 197, p: 79, e: 79, n: 118, cid: "23985", cas: "7440-57-5"},
  { id: "ele80", num: "80", nme: "mercury", sym: "Hg", grp: g12, prd: p6, blk: "d", aWt: "200,59", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: lqd, dns: "13,5336", mlt: -38.83, bln: 357,  fsn: "2,29", vpn: "59,2", spc: "0,14", elc: l4 + ", 18, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2, aRd: "151", cRd: "132", eNg: "2,00", ion: "10,4375", trm: "0,0834", oxi: "1, 2, 4", vol: "14,82", crt: "6,7" + pc6, uni: "1" + pc7, yr: "1500" + " BC", mNo: 201, p: 80, e: 80, n: 121, cid: "23931", cas: "7439-97-6"},
  { id: "ele81", num: "81", nme: "thallium", sym: "Tl", grp: g13, prd: p6, blk: "p", aWt: "204,3833", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "11,85", mlt: 304, bln: 1473,  fsn: "4,2", vpn: "165", spc: "0,129", elc: l4 + ", 18, 3", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s1, aRd: "170", cRd: "145", eNg: "1,62", ion: "6,1082", trm: "0,461", oxi: "1, 3", vol: "17,2", crt: "0,000053%", uni: "5" + pc8, yr: "1861", mNo: 204, p: 81, e: 81, n: 123, cid: "5359464", cas: "7440-28-0"},
  { id: "ele82", num: "82", nme: "lead", sym: "Pb", grp: g14, prd: p6, blk: "p", aWt: "207,2", ctg: c4, clr: clrSGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "11,342", mlt: 327.46, bln: 1749,  fsn: "4,77", vpn: "178", spc: "0,129", elc: l4 + ", 18, 4", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s2, aRd: "175", cRd: "146", eNg: "2,33", ion: "7,4167", trm: "0,353", oxi: "-4, 2, 4", vol: "18,17", crt: "0,00099%", uni: "1" + pc6, yr: "4000" + " BC", mNo: 207, p: 82, e: 82, n: 125, cid: "5352425", cas: "7439-92-1"},
  { id: "ele83", num: "83", nme: "bismuth", sym: "Bi", grp: g15, prd: p6, blk: "p", aWt: "208,9804", ctg: c4, clr: clrGry, rdo: noVal, stc: crsBCM, phs: sld, dns: "9,78", mlt: 271.5, bln: 1564,  fsn: "10,9", vpn: "160", spc: "0,122", elc: l4 + ", 18, 5", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s3, aRd: "156", cRd: "148", eNg: "2,02", ion: "7,2856", trm: "0,0797", oxi: "-3, 3, 5", vol: "21,3", crt: "2,5" + pc6, uni: "7" + pc8, yr: "1753", mNo: 209, p: 83, e: 83, n: 126, cid: "5359367", cas: "7440-69-9"},
  { id: "ele84", num: "84", nme: "polonium", sym: "Po", grp: g16, prd: p6, blk: "p", aWt: "[210]", ctg: c6, clr: clrSlv, rdo: yesVal, stc: crsSC, phs: sld, dns: "9,196", mlt: 254, bln: 962,  fsn: "13", vpn: "100", spc: "-", elc: l4 + ", 18, 6", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s4, aRd: "168", cRd: "140", eNg: "2,00", ion: "8,417", trm: "0,2", oxi: "-2, 2, 4, 6", vol: "22,23", crt: naVal, uni: naVal, yr: "1898", mNo: 210, p: 84, e: 84, n: 126, cid: naVal, cas: "7440-08-6"},
  { id: "ele85", num: "85", nme: "astatine", sym: "At", grp: g17, prd: p6, blk: "p", aWt: "[210]", ctg: c7, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "7", mlt: 302, bln: 337,  fsn: "6", vpn: "40", spc: "-", elc: l4 + ", 18, 7", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s5, aRd: "-", cRd: "150", eNg: "2,2", ion: "9,3", trm: "0,017", oxi: "-1, 1, 3, 5, 7", vol: "30", crt: naVal, uni: naVal, yr: "1940", mNo: 210, p: 85, e: 85, n: 125, cid: naVal, cas: "7440-68-8"},
  { id: "ele86", num: "86", nme: "radon", sym: "Rn", grp: g18, prd: p6, blk: "p", aWt: "[222]", ctg: c8, clr: clrLes, rdo: yesVal, stc: naVal, phs: gas, dns: "0,00973", mlt: -71.15, bln: -61.85,  fsn: "3", vpn: "17", spc: "0,094", elc: l4 + ", 18, 8", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s6, aRd: "120", cRd: "150", eNg: "-", ion: "10,7485", trm: "0,0000364", oxi: "2, 4, 6", vol: "50,5", crt: naVal, uni: naVal, yr: "1900", mNo: 222, p: 86, e: 86, n: 136, cid: "24857", cas: "10043-92-2"},
  { id: "ele87", num: "87", nme: "francium", sym: "Fr", grp: g1, prd: p7, blk: "s", aWt: "[223]", ctg: c1, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "1,87", mlt: 23, bln: 677,  fsn: "2", vpn: "65", spc: "-", elc: l4 + ", 18, 8, 1", cnf: "[Rn] 7s" + s1, aRd: "260", cRd: "348", eNg: "0,7", ion: "4,0727", trm: "0,15", oxi: "1", vol: "71,07", crt: naVal, uni: naVal, yr: "1939", mNo: 223, p: 87, e: 87, n: 136, cid: naVal, cas: "7440-73-5"},
  { id: "ele88", num: "88", nme: "radium", sym: "Ra", grp: g2, prd: p7, blk: "s", aWt: "[226]", ctg: c2, clr: clrSlv, rdo: yesVal, stc: crsBCC, phs: sld, dns: "5,5", mlt: 700, bln: 1737,  fsn: "8", vpn: "125", spc: "-", elc: l4 + ", 18, 8, 2", cnf: "[Rn] 7s" + s2, aRd: "-", cRd: "221", eNg: "0,9", ion: "5,2784", trm: "0,186", oxi: "2", vol: "45,20", crt: "9,9×10<sup>-12</sup>%", uni: naVal, yr: "1898", mNo: 226, p: 88, e: 88, n: 138, cid: "6328144", cas: "7440-14-4"},
  { id: "ele89", num: "89", nme: "actinium", sym: "Ac", grp: naVal, prd: p7, blk: "f", aWt: "[227]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsFCC, phs: sld, dns: "10,07", mlt: 1050, bln: 3198,  fsn: "14", vpn: "400", spc: "0,12", elc: l4 + ", 18, 9, 2", cnf: "[Rn] 6d" + s1 + " 7s" + s2, aRd: "-", cRd: "215", eNg: "1,1", ion: "5,17", trm: "0,12", oxi: "3", vol: "22,54", crt: naVal, uni: naVal, yr: "1899", mNo: 227, p: 89, e: 89, n: 138, cid: naVal, cas: "7440-34-8"},
  { id: "ele90", num: "90", nme: "thorium", sym: "Th", grp: naVal, prd: p7, blk: "f", aWt: "232,03806", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsFCC, phs: sld, dns: "11,7", mlt: 1842, bln: 4788,  fsn: "16", vpn: "530", spc: "0,113", elc: l4 + ", 18, 10, 2", cnf: "[Rn] 6d" + s2 + " 7s" + s2, aRd: "179", cRd: "206", eNg: "1,3", ion: "6,3067", trm: "0,54", oxi: "2, 3, 4", vol: "19,9", crt: "0,0006%", uni: "4" + pc8, yr: "1828", mNo: 232, p: 90, e: 90, n: 142, cid: "23960", cas: "7440-29-1"},
  { id: "ele91", num: "91", nme: "protactinium", sym: "Pa", grp: naVal, prd: p7, blk: "f", aWt: "231,03588", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsCT, phs: sld, dns: "15,37", mlt: 1568, bln: 4027,  fsn: "15", vpn: "470", spc: "-", elc: l4 + ", 20, 9, 2", cnf: "[Rn] 5f" + s2 + " 6d" + s1 + " 7s" + s2, aRd: "163", cRd: "200", eNg: "1,5", ion: "5,89", trm: "0,47", oxi: "3, 4, 5", vol: "15,0", crt: "9,9×10<sup>-13</sup>%", uni: naVal, yr: "1913", mNo: 231, p: 91, e: 91, n: 140, cid: naVal, cas: "7440-13-3"},
  { id: "ele92", num: "92", nme: "uranium", sym: "U", grp: naVal, prd: p7, blk: "f", aWt: "238,02891", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsBCO, phs: sld, dns: "18,95", mlt: 1132.2, bln: 4131,  fsn: "14", vpn: "420", spc: "0,116", elc: l4 + ", 21, 9, 2", cnf: "[Rn] 5f" + s3 + " 6d" + s1 + " 7s" + s2, aRd: "156", cRd: "196", eNg: "1,38", ion: "6,1941", trm: "0,276", oxi: "3, 4, 5, 6", vol: "12,59", crt: "0,00018%", uni: "2" + pc8, yr: "1789", mNo: 238, p: 92, e: 92, n: 146, cid: "23989", cas: "7440-61-1"},
  { id: "ele93", num: "93", nme: "neptunium", sym: "Np", grp: naVal, prd: p7, blk: "f", aWt: "[237]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSO, phs: sld, dns: "20,45", mlt: 637, bln: 4000,  fsn: "10", vpn: "335", spc: "-", elc: l4 + ", 22, 9, 2", cnf: "[Rn] 5f" + s4 + " 6d" + s1 + " 7s" + s2, aRd: "155", cRd: "190", eNg: "1,36", ion: "6,2657", trm: "0,063", oxi: "3, 4, 5, 6, 7", vol: "11,62", crt: naVal, uni: naVal, yr: "1940", mNo: 237, p: 93, e: 93, n: 144, cid: naVal, cas: "7439-99-8"},
  { id: "ele94", num: "94", nme: "plutonium", sym: "Pu", grp: naVal, prd: p7, blk: "f", aWt: "[244]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSM, phs: sld, dns: "19,816", mlt: 639.4, bln: 3228,  fsn: naVal, vpn: "325", spc: "-", elc: l4 + ", 24, 8, 2", cnf: "[Rn] 5f" + s6 + " 7s" + s2, aRd: "159", cRd: "187", eNg: "1,28", ion: "6,0262", trm: "0,0674", oxi: "3, 4, 5, 6, 7, 8", vol: "12,32", crt: naVal, uni: naVal, yr: "1940", mNo: 244, p: 94, e: 94, n: 150, cid: "23940", cas: "7440-07-5"},
  { id: "ele95", num: "95", nme: "americium", sym: "Am", grp: naVal, prd: p7, blk: "f", aWt: "[243]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "13,69", mlt: 1176, bln: 2607,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 8, 2", cnf: "[Rn] 5f" + s7 + " 7s" + s2, aRd: "173", cRd: "180", eNg: "1,3", ion: "5,9738", trm: "0,1", oxi: "2, 3, 4, 5, 6", vol: "17,78", crt: naVal, uni: naVal, yr: "1944", mNo: 243, p: 95, e: 95, n: 148, cid: naVal, cas: "7440-35-9"},
  { id: "ele96", num: "96", nme: "curium", sym: "Cm", grp: naVal, prd: p7, blk: "f", aWt: "[247]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "13,51", mlt: 1340, bln: 3110,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 9, 2", cnf: "[Rn] 5f" + s7 + " 6d" + s1 + " 7s" + s2, aRd: "174", cRd: "169", eNg: "1,3", ion: "5,9915", trm: "0,1", oxi: "3, 4", vol: "18,28", crt: naVal, uni: naVal, yr: "1944", mNo: 247, p: 96, e: 96, n: 151, cid: naVal, cas: "7440-51-9"},
  { id: "ele97", num: "97", nme: "berkelium", sym: "Bk", grp: naVal, prd: p7, blk: "f", aWt: "[247]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "14,78", mlt: 986, bln: 2900,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 27, 8, 2", cnf: "[Rn] 5f" + s9 + " 7s" + s2, aRd: "170", cRd: "-", eNg: "1,3", ion: "6,1979", trm: "0,1", oxi: "3, 4", vol: "16,7", crt: naVal, uni: naVal, yr: "1949", mNo: 247, p: 97, e: 97, n: 150, cid: "23971", cas: "7440-40-6"},
  { id: "ele98", num: "98", nme: "californium", sym: "Cf", grp: naVal, prd: p7, blk: "f", aWt: "[251]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "15,1", mlt: 900, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 28, 8, 2", cnf: "[Rn] 5f" + s10 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,2817", trm: "0,1", oxi: "2, 3, 4", vol: "18,4", crt: naVal, uni: naVal, yr: "1950", mNo: 251, p: 98, e: 98, n: 153, cid: naVal, cas: "7440-71-3"},
  { id: "ele99", num: "99", nme: "einsteinium", sym: "Es", grp: naVal, prd: p7, blk: "f", aWt: "[252]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "8,84", mlt: 860, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 29, 8, 2", cnf: "[Rn] 5f" + s11 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,42", trm: "0,1", oxi: "2, 3", vol: "28,5", crt: naVal, uni: naVal, yr: "1952", mNo: 252, p: 99, e: 99, n: 153, cid: naVal, cas: "7429-92-7"},
  { id: "ele100", num: "100", nme: "fermium", sym: "Fm", grp: naVal, prd: p7, blk: "f", aWt: "[257]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1527, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 30, 8, 2", cnf: "[Rn] 5f" + s12 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,5", trm: "0,1", oxi: "2, 3", vol: "29,1", crt: naVal, uni: naVal, yr: "1952", mNo: 257, p: 100, e: 100, n: 157, cid: naVal, cas: "7440-72-4"},
  { id: "ele101", num: "101", nme: "mendelevium", sym: "Md", grp: naVal, prd: p7, blk: "f", aWt: "[258]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 826.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 31, 8, 2", cnf: "[Rn] 5f" + s13 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,58", trm: "0,1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1955", mNo: 258, p: 101, e: 101, n: 157, cid: naVal, cas: "7440-11-1"},
  { id: "ele102", num: "102", nme: "nobelium", sym: "No", grp: naVal, prd: p7, blk: "f", aWt: "[259]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 827, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 2", cnf: "[Rn] 5f" + s14 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,65", trm: "0,1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1958", mNo: 259, p: 102, e: 102, n: 157, cid: naVal, cas: "10028-14-5"},
  { id: "ele103", num: "103", nme: "lawrencium", sym: "Lr", grp: naVal, prd: p7, blk: "d", aWt: "[262]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1626.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 3", cnf: "[Rn] 5f" + s14 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "-", eNg: "1,3", ion: "4,9", trm: "0,1", oxi: "3", vol: "-", crt: naVal, uni: naVal, yr: "1961", mNo: 262, p: 103, e: 103, n: 159, cid: naVal, cas: "22537-19-5"},
  { id: "ele104", num: "104", nme: "rutherfordium", sym: "Rf", grp: g4, prd: p7, blk: "d", aWt: "[267]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "23", mlt: 2100, bln: 5500,  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 10, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s2 + " 7s" + s2, aRd: "-", cRd: "157", eNg: "-", ion: "6,011", trm: "0,23", oxi: "4", vol: "-", crt: naVal, uni: naVal, yr: "1964", mNo: 261, p: 104, e: 104, n: 157, cid: naVal, cas: "53850-36-5"},
  { id: "ele105", num: "105", nme: "dubnium", sym: "Db", grp: g5, prd: p7, blk: "d", aWt: "[268]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "39", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 11, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s3 + " 7s" + s2, aRd: "-", cRd: "149", eNg: "-", ion: "-", trm: "0,58", oxi: "5", vol: "-", crt: naVal, uni: naVal, yr: "1968", mNo: 262, p: 105, e: 105, n: 157, cid: naVal, cas: "53850-35-4"},
  { id: "ele106", num: "106", nme: "seaborgium", sym: "Sg", grp: g6, prd: p7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 12, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s4 + " 7s" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1974", mNo: 262, p: 106, e: 106, n: 156, cid: naVal, cas: "54038-81-2"},
  { id: "ele107", num: "107", nme: "bohrium", sym: "Bh", grp: g7, prd: p7, blk: "d", aWt: "[270]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "37", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 13, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s5 + " 7s" + s2, aRd: "-", cRd: "141", eNg: "-", ion: "-", trm: "-", oxi: "7", vol: "-", crt: naVal, uni: naVal, yr: "1981", mNo: 264, p: 107, e: 107, n: 157, cid: naVal, cas: "54037-14-8"},
  { id: "ele108", num: "108", nme: "hassium", sym: "Hs", grp: g8, prd: p7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "41", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 14, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s6 + " 7s" + s2, aRd: "-", cRd: "134", eNg: "-", ion: "-", trm: "-", oxi: "8", vol: "-", crt: naVal, uni: naVal, yr: "1984", mNo: 269, p: 108, e: 108, n: 161, cid: naVal, cas: "54037-57-9"},
  { id: "ele109", num: "109", nme: "meitnerium", sym: "Mt", grp: g9, prd: p7, blk: "d", aWt: "[278]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 15, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s7 + " 7s" + s2, aRd: "-", cRd: "129", eNg: "-", ion: "-", trm: "-", oxi: "3, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "1982", mNo: 268, p: 109, e: 109, n: 159, cid: naVal, cas: "54038-01-6"},
  { id: "ele110", num: "110", nme: "darmstadtium", sym: "Ds", grp: g10, prd: p7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 16, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s8 + " 7s" + s2, aRd: "-", cRd: "128", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 110, e: 110, n: 171, cid: naVal, cas: "54083-77-1"},
  { id: "ele111", num: "111", nme: "roentgenium", sym: "Rg", grp: g11, prd: p7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 17, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s9 + " 7s" + s2, aRd: "-", cRd: "121", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 111, e: 111, n: 170, cid: naVal, cas: "54386-24-2"},
  { id: "ele112", num: "112", nme: "copernicium", sym: "Cn", grp: g12, prd: p7, blk: "d", aWt: "[285]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: lqd, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 2", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2, aRd: "-", cRd: "122", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1996", mNo: 285, p: 112, e: 112, n: 173, cid: naVal, cas: "54084-26-3"},
  { id: "ele113", num: "113", nme: "nihonium", sym: "Nh", grp: g13, prd: p7, blk: "p", aWt: "[286]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "16", mlt: 430, bln: 1100,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 3", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "136", eNg: "-", ion: "-", trm: "-", oxi: "1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2003", mNo: 286, p: 113, e: 113, n: 173, cid: naVal, cas: "54084-70-7"},
  { id: "ele114", num: "114", nme: "flerovium", sym: "Fl", grp: g14, prd: p7, blk: "p", aWt: "[289]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "14", mlt: 70, bln: 150,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 4", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1998", mNo: 287, p: 114, e: 114, n: 173, cid: naVal, cas: "54085-16-4"},
  { id: "ele115", num: "115", nme: "moscovium", sym: "Mc", grp: g15, prd: p7, blk: "p", aWt: "[288]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 5", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s3, aRd: "-", cRd: "162", eNg: "-", ion: "-", trm: "-", oxi: "1, 3", vol: "-", crt: naVal, uni: naVal, yr: "2004", mNo: 288, p: 115, e: 115, n: 173, cid: naVal, cas: "54085-64-2"},
  { id: "ele116", num: "116", nme: "livermorium", sym: "Lv", grp: g16, prd: p7, blk: "p", aWt: "[293]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 6", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s4, aRd: "-", cRd: "175", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "2000", mNo: 291, p: 116, e: 116, n: 175, cid: naVal, cas: "54100-71-9"},
  { id: "ele117", num: "117", nme: "tennessine", sym: "Ts", grp: g17, prd: p7, blk: "p", aWt: "[294]", ctg: c7, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 7", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s5, aRd: "-", cRd: "165", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2010", mNo: 294, p: 117, e: 117, n: 177, cid: naVal, cas: "87658-56-8"},
  { id: "ele118", num: "118", nme: "oganesson", sym: "Og", grp: g18, prd: p7, blk: "p", aWt: "[294]", ctg: c8, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "13,65", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 8", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s6, aRd: "152", cRd: "157", eNg: "-", ion: "-", trm: "-", oxi: "-1, 0, 2, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "2002", mNo: 294, p: 118, e: 118, n: 176, cid: naVal, cas: "54144-19-3"}
];
}
else {
var rawData = [
  { id: "ele1", num: "1", nme: "hydrogen", sym: "H", grp: g1, prd: p1, blk: "s", aWt: "1.00794", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSH, phs: gas, dns: "0.00008988", mlt: -259.14, bln: -252.87,  fsn: "0.558", vpn: "0.452", spc: "14.304", elc: "1", cnf: "1s" + s1, aRd: "53", cRd: "31", eNg: "2.2", ion: "13.5984", trm: "0.001815", oxi: "-1, 1", vol: "14.4", crt: "0.15%", uni: "75%", yr: "1766", mNo: 1, p: 1, e: 1, n: 0, cid: "783", cas: "1333-74-0"},
  { id: "ele2", num: "2", nme: "helium", sym: "He", grp: g18, prd: p1, blk: "s", aWt: "4.002602", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0001785", mlt: -272.2, bln: -268.93,  fsn: "0.02", vpn: "0.083", spc: "5.193", elc: "2", cnf: "1s" + s2, aRd: "31", cRd: "28", eNg: "-", ion: "24.5874", trm: "0.00152", oxi: "0", vol: "27.2", crt: "5.5" + pc7, uni: "23%", yr: "1868", mNo: 4, p: 2, e: 2, n: 2, cid: "23987", cas: "7440-59-7"},
  { id: "ele3", num: "3", nme: "lithium", sym: "Li", grp: g1, prd: p2, blk: "s", aWt: "6.941", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0.534", mlt: 180.54, bln: 1342,  fsn: "3", vpn: "147", spc: "3.582", elc: "2, 1", cnf: "[He] 2s" + s1, aRd: "152", cRd: "128", eNg: "0.98", ion: "5.3917", trm: "0.847", oxi: "1", vol: "13.10", crt: "0.0017%", uni: "6" + pc7, yr: "1817", mNo: 7, p: 3, e: 3, n: 4, cid: "3028194", cas: "7439-93-2"},
  { id: "ele4", num: "4", nme: "beryllium", sym: "Be", grp: g2, prd: p2, blk: "s", aWt: "9.012182", ctg: c2, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "1.85", mlt: 1287, bln: 2469,  fsn: "7.95", vpn: "297", spc: "1.825", elc: "2, 2", cnf: "[He] 2s" + s2, aRd: "112", cRd: "96", eNg: "1.57", ion: "9.3227", trm: "2.01", oxi: "1, 2", vol: "4.9", crt: "0.00019%", uni: "1" + pc7, yr: "1798", mNo: 9, p: 4, e: 4, n: 5, cid: "5460467", cas: "7440-41-7"},
  { id: "ele5", num: "5", nme: "boron", sym: "B", grp: g13, prd: p2, blk: "p", aWt: "10.811", ctg: c6, clr: clrBlk, rdo: noVal, stc: crsSTG, phs: sld, dns: "2.34", mlt: 2076, bln: 3927,  fsn: "50", vpn: "507", spc: "1.026", elc: "2, 3", cnf: "[He] 2s" + s2 + " 2p" + s1, aRd: "90", cRd: "84", eNg: "2.04", ion: "8.298", trm: "0.274", oxi: "1, 2, 3", vol: "4.6", crt: "0.00086%", uni: "1" + pc7, yr: "1808", mNo: 11, p: 5, e: 5, n: 6, cid: "5462311", cas: "7440-42-8"},
  { id: "ele6", num: "6", nme: "carbon", sym: "C", grp: g14, prd: p2, blk: "p", aWt: "12.0107", ctg: c5, clr: clrBlk, rdo: noVal, stc: crsSH, phs: sld, dns: "2.267", mlt: 3675, bln: 4027,  fsn: "105", vpn: "715", spc: "0.709", elc: "2, 4", cnf: "[He] 2s" + s2 + " 2p" + s2, aRd: "67", cRd: "77", eNg: "2.55", ion: "11.2603", trm: "1.29", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "5.31", crt: "0.18%", uni: "0.5%", yr: "3750" + " BC", mNo: 12, p: 6, e: 6, n: 6, cid: "5462310", cas: "7440-44-0"},
  { id: "ele7", num: "7", nme: "nitrogen", sym: "N", grp: g15, prd: p2, blk: "p", aWt: "14.0067", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSH, phs: gas, dns: "0.0012506", mlt: -210, bln: -195.79,  fsn: "0.36", vpn: "2.79", spc: "1.04", elc: "2, 5", cnf: "[He] 2s" + s2 + " 2p" + s3, aRd: "56", cRd: "71", eNg: "3.04", ion: "14.5341", trm: "0.0002598", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17.3", crt: "0.002%", uni: "0.1%", yr: "1772", mNo: 14, p: 7, e: 7, n: 7, cid: "947", cas: "7727-37-9"},
  { id: "ele8", num: "8", nme: "oxygen", sym: "O", grp: g16, prd: p2, blk: "p", aWt: "15.9994", ctg: c5, clr: clrLes, rdo: noVal, stc: crsBCM, phs: gas, dns: "0.001429", mlt: -218.79, bln: -182.95,  fsn: "0.222", vpn: "3.41", spc: "0.918", elc: "2, 6", cnf: "[He] 2s" + s2 + " 2p" + s4, aRd: "48", cRd: "66", eNg: "3.44", ion: "13.6181", trm: "0.0002674", oxi: "-2, -1, 1, 2", vol: "14.0", crt: "46%", uni: "1%", yr: "1771", mNo: 16, p: 8, e: 8, n: 8, cid: "977", cas: "7782-44-7"},
  { id: "ele9", num: "9", nme: "fluorine", sym: "F", grp: g17, prd: p2, blk: "p", aWt: "18.9984032", ctg: c7, clr: clrLes, rdo: noVal, stc: crsBCM, phs: gas, dns: "0.001696", mlt: -219.62, bln: -188.12,  fsn: "0.26", vpn: "3.27", spc: "0.824", elc: "2, 7", cnf: "[He] 2s" + s2 + " 2p" + s5, aRd: "42", cRd: "64", eNg: "3.98", ion: "17.4228", trm: "0.000279", oxi: "-1", vol: "17.1", crt: "0.054%", uni: "0.00004%", yr: "1810", mNo: 19, p: 9, e: 9, n: 10, cid: "24524", cas: "7782-41-4"},
  { id: "ele10", num: "10", nme: "neon", sym: "Ne", grp: g18, prd: p2, blk: "p", aWt: "20.1797", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0008999", mlt: -248.59, bln: -246.08,  fsn: "0.34", vpn: "1.75", spc: "1.03", elc: "2, 8", cnf: "[He] 2s" + s2 + " 2p" + s6, aRd: "38", cRd: "58", eNg: "-", ion: "21.5645", trm: "0.000493", oxi: "0", vol: "16.7", crt: "3" + pc7, uni: "0.13%", yr: "1898", mNo: 20, p: 10, e: 10, n: 10, cid: "23935", cas: "7440-01-9"},
  { id: "ele11", num: "11", nme: "sodium", sym: "Na", grp: g1, prd: p3, blk: "s", aWt: "22.98976928", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0.971", mlt: 97.72, bln: 883,  fsn: "2.6", vpn: "97.7", spc: "1.228", elc: "2, 8, 1", cnf: "[Ne] 3s" + s1, aRd: "186", cRd: "166", eNg: "0.93", ion: "5.1391", trm: "1.41", oxi: "-1, 1", vol: "23.7", crt: "2.3%", uni: "0.002%", yr: "1807", mNo: 23, p: 11, e: 11, n: 12, cid: "5360545", cas: "7440-23-5"},
  { id: "ele12", num: "12", nme: "magnesium", sym: "Mg", grp: g2, prd: p3, blk: "s", aWt: "24.305", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "1.738", mlt: 650, bln: 1090,  fsn: "8.7", vpn: "128", spc: "1.023", elc: "2, 8, 2", cnf: "[Ne] 3s" + s2, aRd: "160", cRd: "141", eNg: "1.31", ion: "7.6462", trm: "1.56", oxi: "1, 2", vol: "13.97", crt: "2.9%", uni: "0.06%", yr: "1755", mNo: 24, p: 12, e: 12, n: 12, cid: "5462224", cas: "7439-95-4"},
  { id: "ele13", num: "13", nme: "aluminium", sym: "Al", grp: g13, prd: p3, blk: "p", aWt: "26.9815386", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "2.698", mlt: 660.32, bln: 2519,  fsn: "10.7", vpn: "293", spc: "0.897", elc: "2, 8, 3", cnf: "[Ne] 3s" + s2 + " 3p" + s1, aRd: "143", cRd: "121", eNg: "1.61", ion: "5.9858", trm: "2.37", oxi: "1, 3", vol: "9.98", crt: "8.1%", uni: "0.005%", yr: "1825", mNo: 27, p: 13, e: 13, n: 14, cid: "5359268", cas: "7429-90-5"},
  { id: "ele14", num: "14", nme: "silicon", sym: "Si", grp: g14, prd: p3, blk: "p", aWt: "28.0855", ctg: c6, clr: clrGry, rdo: noVal, stc: crsTP, phs: sld, dns: "2.3296", mlt: 1414, bln: 3265,  fsn: "50.2", vpn: "359", spc: "0.705", elc: "2, 8, 4", cnf: "[Ne] 3s" + s2 + " 3p" + s2, aRd: "111", cRd: "111", eNg: "1.9", ion: "8.1517", trm: "1.48", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "12.1", crt: "27%", uni: "0.07%", yr: "1824", mNo: 28, p: 14, e: 14, n: 14, cid: "5461123", cas: "7440-21-3"},
  { id: "ele15", num: "15", nme: "phosphorus", sym: "P", grp: g15, prd: p3, blk: "p", aWt: "30.973762", ctg: c5, clr: clrLes, rdo: noVal, stc: crsSTC, phs: sld, dns: "1.82", mlt: 44.1, bln: 279.85,  fsn: "0.64", vpn: "12.4", spc: "0.769", elc: "2, 8, 5", cnf: "[Ne] 3s" + s2 + " 3p" + s3, aRd: "98", cRd: "107", eNg: "2.19", ion: "10.4867", trm: "0.00235", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17.0", crt: "0.099%", uni: "0.0007%", yr: "1669", mNo: 31, p: 15, e: 15, n: 16, cid: "5462309", cas: "7723-14-0"},
  { id: "ele16", num: "16", nme: "sulfur", sym: "S", grp: g16, prd: p3, blk: "p", aWt: "32.065", ctg: c5, clr: clrYlw, rdo: noVal, stc: crsFCO, phs: sld, dns: "2.067", mlt: 115.21, bln: 444.65,  fsn: "1.73", vpn: "9.8", spc: "0.71", elc: "2, 8, 6", cnf: "[Ne] 3s" + s2 + " 3p" + s4, aRd: "88", cRd: "105", eNg: "2.58", ion: "10.36", trm: "0.00269", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "15.5", crt: "0.042%", uni: "0.05%", yr: "500" + " BC", mNo: 32, p: 16, e: 16, n: 16, cid: "5362487", cas: "7704-34-9"},
  { id: "ele17", num: "17", nme: "chlorine", sym: "Cl", grp: g17, prd: p3, blk: "p", aWt: "35.453", ctg: c7, clr: clrYlw, rdo: noVal, stc: crsBCO, phs: gas, dns: "0.003214", mlt: -101.5, bln: -34.04,  fsn: "3.2", vpn: "10.2", spc: "0.479", elc: "2, 8, 7", cnf: "[Ne] 3s" + s2 + " 3p" + s5, aRd: "79", cRd: "102", eNg: "3.16", ion: "12.9676", trm: "0.000089", oxi: "-1, 1, 2, 3, 4, 5, 6, 7", vol: "22.7", crt: "0.017%", uni: "0.0001%", yr: "1774", mNo: 35, p: 17, e: 17, n: 18, cid: "24526", cas: "7782-50-5"},
  { id: "ele18", num: "18", nme: "argon", sym: "Ar", grp: g18, prd: p3, blk: "p", aWt: "39.948", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0017837", mlt: -189.35, bln: -185.85,  fsn: "1.18", vpn: "6.5", spc: "0.52", elc: "2, 8, 8", cnf: "[Ne] 3s" + s2 + " 3p" + s6, aRd: "71", cRd: "106", eNg: "-", ion: "15.7596", trm: "0.0001772", oxi: "0", vol: "22.4", crt: "0.00015%", uni: "0.02%", yr: "1894", mNo: 40, p: 18, e: 18, n: 22, cid: "23968", cas: "7440-37-1"},
  { id: "ele19", num: "19", nme: "potassium", sym: "K", grp: g1, prd: p4, blk: "s", aWt: "39.0983", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "0.862", mlt: 63.38, bln: 759,  fsn: "2.33", vpn: "76.9", spc: "0.757", elc: "2, 8, 8, 1", cnf: "[Ar] 4s" + s1, aRd: "227", cRd: "203", eNg: "0.82", ion: "4.3407", trm: "1.024", oxi: "-1, 1", vol: "45.46", crt: "1.5%", uni: "0.0003%", yr: "1807", mNo: 39, p: 19, e: 19, n: 20, cid: "5462222", cas: "7440-09-7"},
  { id: "ele20", num: "20", nme: "calcium", sym: "Ca", grp: g2, prd: p4, blk: "s", aWt: "40.078", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "1.54", mlt: 842, bln: 1484,  fsn: "8.54", vpn: "155", spc: "0.647", elc: "2, 8, 8, 2", cnf: "[Ar] 4s" + s2, aRd: "197", cRd: "176", eNg: "1.00", ion: "6.1132", trm: "2.01", oxi: "1, 2", vol: "29.9", crt: "5%", uni: "0.007%", yr: "1808", mNo: 40, p: 20, e: 20, n: 20, cid: "5460341", cas: "7440-70-2"},
  { id: "ele21", num: "21", nme: "scandium", sym: "Sc", grp: g3, prd: p4, blk: "d", aWt: "44.955912", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "2.989", mlt: 1541, bln: 2836,  fsn: "16", vpn: "318", spc: "0.568", elc: "2, 8, 9, 2", cnf: "[Ar] 3d" + s1 + " 4s" + s2, aRd: "162", cRd: "170", eNg: "1.36", ion: "6.5615", trm: "0.158", oxi: "1, 2, 3", vol: "15.0", crt: "0.0026%", uni: "3" + pc6, yr: "1879", mNo: 45, p: 21, e: 21, n: 24, cid: "23952", cas: "7440-20-2"},
  { id: "ele22", num: "22", nme: "titanium", sym: "Ti", grp: g4, prd: p4, blk: "d", aWt: "47.867", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "4.54", mlt: 1668, bln: 3287,  fsn: "18.7", vpn: "425", spc: "0.523", elc: "2, 8, 10, 2", cnf: "[Ar] 3d" + s2 + " 4s" + s2, aRd: "147", cRd: "160", eNg: "1.54", ion: "6.8281", trm: "0.219", oxi: "-1, 2, 3, 4", vol: "10.64", crt: "0.66%", uni: "0.0003%", yr: "1791", mNo: 48, p: 22, e: 22, n: 26, cid: "23963", cas: "7440-32-6"},
  { id: "ele23", num: "23", nme: "vanadium", sym: "V", grp: g5, prd: p4, blk: "d", aWt: "50.9415", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "6.11", mlt: 1910, bln: 3407,  fsn: "22.8", vpn: "453", spc: "0.489", elc: "2, 8, 11, 2", cnf: "[Ar] 3d" + s3 + " 4s" + s2, aRd: "134", cRd: "153", eNg: "1.63", ion: "6.8281", trm: "0.307", oxi: "-1, 1, 2, 3, 4, 5", vol: "8.78", crt: "0.019%", uni: "0.0001%", yr: "1801", mNo: 51, p: 23, e: 23, n: 28, cid: "23990", cas: "7440-62-2"},
  { id: "ele24", num: "24", nme: "chromium", sym: "Cr", grp: g6, prd: p4, blk: "d", aWt: "51.9961", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "7.15", mlt: 1907, bln: 2671,  fsn: "20.5", vpn: "339", spc: "0.449", elc: "2, 8, 13, 1", cnf: "[Ar] 3d" + s5 + " 4s" + s1, aRd: "128", cRd: "139", eNg: "1.66", ion: "6.7665", trm: "0.937", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "7.23", crt: "0.014%", uni: "0.0015%", yr: "1797", mNo: 52, p: 24, e: 24, n: 28, cid: "23976", cas: "7440-47-3"},
  { id: "ele25", num: "25", nme: "manganese", sym: "Mn", grp: g7, prd: p4, blk: "d", aWt: "54.938045", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "7.44", mlt: 1246, bln: 2061,  fsn: "13.2", vpn: "220", spc: "0.479", elc: "2, 8, 13, 2", cnf: "[Ar] 3d" + s5 + " 4s" + s2, aRd: "127", cRd: "139", eNg: "1.55", ion: "7.434", trm: "0.0782", oxi: "-3, -2, -1, 1, 2, 3, 4, 5, 6, 7", vol: "7.4", crt: "0.11%", uni: "0.0008%", yr: "1774", mNo: 55, p: 25, e: 25, n: 30, cid: "23930", cas: "7439-96-5"},
  { id: "ele26", num: "26", nme: "iron", sym: "Fe", grp: g8, prd: p4, blk: "d", aWt: "55.845", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "7.874", mlt: 1538, bln: 2861,  fsn: "13.8", vpn: "347", spc: "0.449", elc: "2, 8, 14, 2", cnf: "[Ar] 3d" + s6 + " 4s" + s2, aRd: "126", cRd: "132", eNg: "1.83", ion: "7.9024", trm: "0.802", oxi: "-2, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "7.1", crt: "6.3%", uni: "0.11%", yr: "2000" + " BC", mNo: 56, p: 26, e: 26, n: 30, cid: "23925", cas: "7439-89-6"},
  { id: "ele27", num: "27", nme: "cobalt", sym: "Co", grp: g9, prd: p4, blk: "d", aWt: "58.933195", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "8.86", mlt: 1495, bln: 2927,  fsn: "16.2", vpn: "375", spc: "0.421", elc: "2, 8, 15, 2", cnf: "[Ar] 3d" + s7 + " 4s" + s2, aRd: "125", cRd: "126", eNg: "1.88", ion: "7.881", trm: "1", oxi: "-1, 1, 2, 3, 4, 5", vol: "6.7", crt: "0.003%", uni: "0.0003%", yr: "1735", mNo: 59, p: 27, e: 27, n: 32, cid: "104730", cas: "7440-48-4"},
  { id: "ele28", num: "28", nme: "nickel", sym: "Ni", grp: g10, prd: p4, blk: "d", aWt: "58.6934", ctg: c3, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "8.912", mlt: 1455, bln: 2913,  fsn: "17.2", vpn: "378", spc: "0.444", elc: "2, 8, 16, 2", cnf: "[Ar] 3d" + s8 + " 4s" + s2, aRd: "124", cRd: "124", eNg: "1.91", ion: "7.6398", trm: "0.907", oxi: "-1, 1, 2, 3, 4", vol: "6.59", crt: "0.0089%", uni: "0.006%", yr: "1751", mNo: 59, p: 28, e: 28, n: 31, cid: "935", cas: "7440-02-0"},
  { id: "ele29", num: "29", nme: "copper", sym: "Cu", grp: g11, prd: p4, blk: "d", aWt: "63.546", ctg: c3, clr: "colorCopper", rdo: noVal, stc: crsFCC, phs: sld, dns: "8.96", mlt: 1084.6, bln: 2562,  fsn: "13.1", vpn: "300", spc: "0.385", elc: l3 + ", 1", cnf: "[Ar] 3d" + s10 + " 4s" + s1, aRd: "128", cRd: "132", eNg: "1.9", ion: "7.7264", trm: "4.01", oxi: "1, 2, 3, 4", vol: "7.1", crt: "0.0068%", uni: "6" + pc6, yr: "8000" + " BC", mNo: 64, p: 29, e: 29, n: 35, cid: "23978", cas: "7440-50-8"},
  { id: "ele30", num: "30", nme: "zinc", sym: "Zn", grp: g12, prd: p4, blk: "d", aWt: "65.38", ctg: c3, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "7.134", mlt: 419.53, bln: 907,  fsn: "7.35", vpn: "119", spc: "0.388", elc: l3 + ", 2", cnf: "[Ar] 3d" + s10 + " 4s" + s2, aRd: "134", cRd: "122", eNg: "1.65", ion: "9.3942", trm: "1.16", oxi: "1, 2", vol: "9.2", crt: "0.0078%", uni: "0.00003%", yr: "1000" + " BC", mNo: 65, p: 30, e: 30, n: 35, cid: "23994", cas: "7440-66-6"},
  { id: "ele31", num: "31", nme: "gallium", sym: "Ga", grp: g13, prd: p4, blk: "p", aWt: "69.723", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsBCO, phs: sld, dns: "5.907", mlt: 29.76, bln: 2204,  fsn: "5.59", vpn: "256", spc: "0.371", elc: l3 + ", 3", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s1, aRd: "135", cRd: "122", eNg: "1.81", ion: "5.9993", trm: "0.406", oxi: "1, 2, 3", vol: "11.8", crt: "0.0019%", uni: "1" + pc6, yr: "1875", mNo: 70, p: 31, e: 31, n: 39, cid: "5360835", cas: "7440-55-3"},
  { id: "ele32", num: "32", nme: "germanium", sym: "Ge", grp: g14, prd: p4, blk: "p", aWt: "72.63", ctg: c6, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "5.323", mlt: 938.25, bln: 2833,  fsn: "31.8", vpn: "334", spc: "0.32", elc: l3 + ", 4", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s2, aRd: "122", cRd: "122", eNg: "2.01", ion: "7.8994", trm: "0.599", oxi: "-4, 1, 2, 3, 4", vol: "13.6", crt: "0.00014%", uni: "0.00002%", yr: "1886", mNo: 73, p: 32, e: 32, n: 41, cid: "6326954", cas: "7440-56-4"},
  { id: "ele33", num: "33", nme: "arsenic", sym: "As", grp: g15, prd: p4, blk: "p", aWt: "74.9216", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "5.776", mlt: 817, bln: 603,  fsn: "27.7", vpn: "32.4", spc: "0.329", elc: l3 + ", 5", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s3, aRd: "119", cRd: "119", eNg: "2.18", ion: "9.7886", trm: "0.502", oxi: "-3, 2, 3, 5", vol: "12.97", crt: "0.00021%", uni: "8" + pc7, yr: "2500" + " BC", mNo: 75, p: 33, e: 33, n: 42, cid: "5359596", cas: "7440-38-2"},
  { id: "ele34", num: "34", nme: "selenium", sym: "Se", grp: g16, prd: p4, blk: "p", aWt: "78.96", ctg: c5, clr: clrGry, rdo: noVal, stc: crsSM, phs: sld, dns: "4.809", mlt: 221, bln: 685,  fsn: "5.4", vpn: "26", spc: "0.321", elc: l3 + ", 6", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s4, aRd: "120", cRd: "120", eNg: "2.55", ion: "9.7524", trm: "0.0204", oxi: "-2, 2, 4, 6", vol: "16.45", crt: "5" + pc6, uni: "3" + pc6, yr: "1817", mNo: 79, p: 34, e: 34, n: 45, cid: "6326970", cas: "7782-49-2"},
  { id: "ele35", num: "35", nme: "bromine", sym: "Br", grp: g17, prd: p4, blk: "p", aWt: "79.904", ctg: c7, clr: "colorRed", rdo: noVal, stc: crsBCO, phs: lqd, dns: "3.122", mlt: -7.2, bln: 58.8,  fsn: "5.8", vpn: "14.8", spc: "0.474", elc: l3 + ", 7", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s5, aRd: "120", cRd: "120", eNg: "2.96", ion: "11.8138", trm: "0.00122", oxi: "-1, 1, 3, 4, 5, 7", vol: "23.5", crt: "0.0003%", uni: "7" + pc7, yr: "1825", mNo: 80, p: 35, e: 35, n: 45, cid: "24408", cas: "7726-95-6"},
  { id: "ele36", num: "36", nme: "krypton", sym: "Kr", grp: g18, prd: p4, blk: "p", aWt: "83.798", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0.003733", mlt: -157.36, bln: -153.22,  fsn: "1.64", vpn: "9.02", spc: "0.248", elc: l3 + ", 8", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s6, aRd: "88", cRd: "116", eNg: "3.00", ion: "13.9996", trm: "0.0000949", oxi: "2", vol: "38.9", crt: "1.5" + pc8, uni: "4" + pc6, yr: "1898", mNo: 84, p: 36, e: 36, n: 48, cid: "5416", cas: "7439-90-9"},
  { id: "ele37", num: "37", nme: "rubidium", sym: "Rb", grp: g1, prd: p5, blk: "s", aWt: "85.4678", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "1.532", mlt: 39.31, bln: 688,  fsn: "2.19", vpn: "72", spc: "0.363", elc: l3 + ", 8, 1", cnf: "[Kr] 5s" + s1, aRd: "248", cRd: "220", eNg: "0.82", ion: "4.1771", trm: "0.582", oxi: "-1, 1", vol: "55.9", crt: "0.006%", uni: "1" + pc6, yr: "1861", mNo: 85, p: 37, e: 37, n: 48, cid: "5357696", cas: "7440-17-7"},
  { id: "ele38", num: "38", nme: "strontium", sym: "Sr", grp: g2, prd: p5, blk: "s", aWt: "87.62", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "2.64", mlt: 777, bln: 1382,  fsn: "8", vpn: "137", spc: "0.301", elc: l3 + ", 8, 2", cnf: "[Kr] 5s" + s2, aRd: "215", cRd: "195", eNg: "0.95", ion: "5.6949", trm: "0.353", oxi: "1, 2", vol: "33.7", crt: "0.036%", uni: "4" + pc6, yr: "1790", mNo: 88, p: 38, e: 38, n: 50, cid: "5359327", cas: "7440-24-6"},
  { id: "ele39", num: "39", nme: "yttrium", sym: "Y", grp: g3, prd: p5, blk: "d", aWt: "88.90585", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "4.469", mlt: 1526, bln: 3336,  fsn: "11.4", vpn: "380", spc: "0.298", elc: l3 + ", 9, 2", cnf: "[Kr] 4d" + s1 + " 5s" + s2, aRd: "180", cRd: "190", eNg: "1.22", ion: "6.2173", trm: "0.172", oxi: "1, 2, 3", vol: "19.8", crt: "0.0029%", uni: "7" + pc7, yr: "1794", mNo: 89, p: 39, e: 39, n: 50, cid: "23993", cas: "7440-65-5"},
  { id: "ele40", num: "40", nme: "zirconium", sym: "Zr", grp: g4, prd: p5, blk: "d", aWt: "91.224", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6.506", mlt: 1855, bln: 4409,  fsn: "21", vpn: "580", spc: "0.278", elc: l3 + ", 10, 2", cnf: "[Kr] 4d" + s2 + " 5s" + s2, aRd: "160", cRd: "175", eNg: "1.33", ion: "6.6339", trm: "0.227", oxi: "1, 2, 3, 4", vol: "14.0", crt: "0.013%", uni: "5" + pc6, yr: "1789", mNo: 91, p: 40, e: 40, n: 51, cid: "23995", cas: "7440-67-7"},
  { id: "ele41", num: "41", nme: "niobium", sym: "Nb", grp: g5, prd: p5, blk: "d", aWt: "92.90638", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "8.57", mlt: 2477, bln: 4744,  fsn: "26.8", vpn: "690", spc: "0.265", elc: l3 + ", 12, 1", cnf: "[Kr] 4d" + s4 + " 5s" + s1, aRd: "146", cRd: "164", eNg: "1.6", ion: "6.7589", trm: "0.537", oxi: "-1, 2, 3, 4, 5", vol: "10.87", crt: "0.0017%", uni: "2" + pc7, yr: "1801", mNo: 93, p: 41, e: 41, n: 52, cid: "23936", cas: "7440-03-1"},
  { id: "ele42", num: "42", nme: "molybdenum", sym: "Mo", grp: g6, prd: p5, blk: "d", aWt: "95.96", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "10.22", mlt: 2623, bln: 4639,  fsn: "36", vpn: "600", spc: "0.251", elc: l3 + ", 13, 1", cnf: "[Kr] 4d" + s5 + " 5s" + s1, aRd: "139", cRd: "154", eNg: "2.16", ion: "7.0924", trm: "1.38", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9.4", crt: "0.00011%", uni: "5" + pc7, yr: "1778", mNo: 96, p: 42, e: 42, n: 54, cid: "23932", cas: "7439-98-7"},
  { id: "ele43", num: "43", nme: "technetium", sym: "Tc", grp: g7, prd: p5, blk: "d", aWt: "[98]", ctg: c3, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "11.5", mlt: 2157, bln: 4265,  fsn: "23", vpn: "550", spc: "-", elc: l3 + ", 13, 2", cnf: "[Kr] 4d" + s5 + " 5s" + s2, aRd: "136", cRd: "147", eNg: "1.9", ion: "7.28", trm: "0.506", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8.5", crt: naVal, uni: naVal, yr: "1937", mNo: 98, p: 43, e: 43, n: 55, cid: naVal, cas: "7440-26-8"},
  { id: "ele44", num: "44", nme: "ruthenium", sym: "Ru", grp: g8, prd: p5, blk: "d", aWt: "101.07", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "12.37", mlt: 2334, bln: 4150,  fsn: "25.7", vpn: "580", spc: "0.238", elc: l3 + ", 15, 1", cnf: "[Kr] 4d" + s7 + " 5s" + s1, aRd: "134", cRd: "146", eNg: "2.2", ion: "7.3605", trm: "1.17", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.3", crt: "9.9" + pc8, uni: "4" + pc7, yr: "1844", mNo: 101, p: 44, e: 44, n: 57, cid: "23950", cas: "7440-18-8"},
  { id: "ele45", num: "45", nme: "rhodium", sym: "Rh", grp: g9, prd: p5, blk: "d", aWt: "102.9055", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "12.41", mlt: 1964, bln: 3695,  fsn: "21.7", vpn: "495", spc: "0.243", elc: l3 + ", 16, 1", cnf: "[Kr] 4d" + s8 + " 5s" + s1, aRd: "134", cRd: "142", eNg: "2.28", ion: "7.4589", trm: "1.5", oxi: "-1, 1, 2, 3, 4, 5, 6", vol: "8.3", crt: "7" + pc8, uni: "6" + pc8, yr: "1803", mNo: 103, p: 45, e: 45, n: 58, cid: "23948", cas: "7440-16-6"},
  { id: "ele46", num: "46", nme: "palladium", sym: "Pd", grp: g10, prd: p5, blk: "d", aWt: "106.42", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "12.02", mlt: 1554.9, bln: 2963,  fsn: "16.7", vpn: "380", spc: "0.244", elc: l3 + ", 18", cnf: "[Kr] 4d" + s10, aRd: "137", cRd: "139", eNg: "2.2", ion: "8.3369", trm: "0.718", oxi: "2, 4", vol: "8.9", crt: "6.3" + pc7, uni: "2" + pc7, yr: "1803", mNo: 106, p: 46, e: 46, n: 60, cid: "23938", cas: "7440-05-3"},
  { id: "ele47", num: "47", nme: "silver", sym: "Ag", grp: g11, prd: p5, blk: "d", aWt: "107.8682", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "10.49", mlt: 961.78, bln: 2162,  fsn: "11.3", vpn: "255", spc: "0.235", elc: l3 + ", 18, 1", cnf: "[Kr] 4d" + s10 + " 5s" + s1, aRd: "144", cRd: "145", eNg: "1.93", ion: "7.5762", trm: "4.29", oxi: "1, 2, 3", vol: "10.3", crt: "7.9" + pc6, uni: "6" + pc8, yr: "3000" + " BC", mNo: 108, p: 47, e: 47, n: 61, cid: "23954", cas: "7440-22-4"},
  { id: "ele48", num: "48", nme: "cadmium", sym: "Cd", grp: g12, prd: p5, blk: "d", aWt: "112.411", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8.69", mlt: 321.07, bln: 767,  fsn: "6.3", vpn: "100", spc: "0.232", elc: l3 + ", 18, 2", cnf: "[Kr] 4d" + s10 + " 5s" + s2, aRd: "151", cRd: "144", eNg: "1.69", ion: "8.9938", trm: "0.968", oxi: "1, 2", vol: "13.1", crt: "0.000015%", uni: "2" + pc7, yr: "1817", mNo: 112, p: 48, e: 48, n: 64, cid: "23973", cas: "7440-43-9"},
  { id: "ele49", num: "49", nme: "indium", sym: "In", grp: g13, prd: p5, blk: "p", aWt: "114.818", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsCT, phs: sld, dns: "7.31", mlt: 156.6, bln: 2072,  fsn: "3.26", vpn: "230", spc: "0.233", elc: l3 + ", 18, 3", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s1, aRd: "167", cRd: "142", eNg: "1.78", ion: "5.7864", trm: "0.816", oxi: "1, 2, 3", vol: "15.7", crt: "0.000016%", uni: "3" + pc8, yr: "1864", mNo: 115, p: 49, e: 49, n: 66, cid: "5359967", cas: "7440-74-6"},
  { id: "ele50", num: "50", nme: "tin", sym: "Sn", grp: g14, prd: p5, blk: "p", aWt: "118.71", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsCT, phs: sld, dns: "7.287", mlt: 231.93, bln: 2602,  fsn: "7", vpn: "290", spc: "0.228", elc: l3 + ", 18, 4", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s2, aRd: "140", cRd: "139", eNg: "1.96", ion: "7.3439", trm: "0.666", oxi: "-4, 2, 4", vol: "16.3", crt: "0.00022%", uni: "4" + pc7, yr: "3000" + " BC", mNo: 119, p: 50, e: 50, n: 69, cid: "5352426", cas: "7440-31-5"},
  { id: "ele51", num: "51", nme: "antimony", sym: "Sb", grp: g15, prd: p5, blk: "p", aWt: "121.76", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "6.685", mlt: 630.63, bln: 1587,  fsn: "19.7", vpn: "68", spc: "0.207", elc: l3 + ", 18, 5", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s3, aRd: "140", cRd: "139", eNg: "2.05", ion: "8.6084", trm: "0.243", oxi: "-3, 3, 5", vol: "18.22", crt: "0.00002%", uni: "4" + pc8, yr: "3000" + " BC", mNo: 122, p: 51, e: 51, n: 71, cid: "5354495", cas: "7440-36-0"},
  { id: "ele52", num: "52", nme: "tellurium", sym: "Te", grp: g16, prd: p5, blk: "p", aWt: "127.6", ctg: c6, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "6.232", mlt: 449.51, bln: 988,  fsn: "17.5", vpn: "48", spc: "0.202", elc: l3 + ", 18, 6", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s4, aRd: "140", cRd: "138", eNg: "2.1", ion: "9.0096", trm: "0.0235", oxi: "-2, 2, 4, 5, 6", vol: "20.5", crt: "9.9" + pc8, uni: "9" + pc7, yr: "1782", mNo: 128, p: 52, e: 52, n: 76, cid: "6327182", cas: "13494-80-9"},
  { id: "ele53", num: "53", nme: "iodine", sym: "I", grp: g17, prd: p5, blk: "p", aWt: "126.90447", ctg: c7, clr: clrSGry, rdo: noVal, stc: crsBCO, phs: sld, dns: "4.93", mlt: 113.7, bln: 184.25,  fsn: "7.76", vpn: "20.9", spc: "0.214", elc: l3 + ", 18, 7", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s5, aRd: "140", cRd: "139", eNg: "2.66", ion: "10.4513", trm: "0.00449", oxi: "-1, 1, 3, 5, 7", vol: "25.74", crt: "0.000049%", uni: "1" + pc7, yr: "1811", mNo: 127, p: 53, e: 53, n: 74, cid: "807", cas: "7553-56-2"},
  { id: "ele54", num: "54", nme: "xenon", sym: "Xe", grp: g18, prd: p5, blk: "p", aWt: "131.293", ctg: c8, clr: clrLes, rdo: noVal, stc: crsFCC, phs: gas, dns: "0.005887", mlt: -111.7, bln: -108.12,  fsn: "2.3", vpn: "12.64", spc: "0.158", elc: l3 + ", 18, 8", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s6, aRd: "108", cRd: "140", eNg: "2.6", ion: "12.1298", trm: "0.0000569", oxi: "2, 4, 6, 8", vol: "37.3", crt: "2" + pc9, uni: "1" + pc6, yr: "1898", mNo: 131, p: 54, e: 54, n: 77, cid: "23991", cas: "7440-63-3"},
  { id: "ele55", num: "55", nme: "caesium", sym: "Cs", grp: g1, prd: p6, blk: "s", aWt: "132.9054519", ctg: c1, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "1.873", mlt: 28.44, bln: 671,  fsn: "2.09", vpn: "65", spc: "0.242", elc: l3 + ", 18, 8, 1", cnf: "[Xe] 6s" + s1, aRd: "265", cRd: "244", eNg: "0.79", ion: "3.8939", trm: "0.359", oxi: "-1, 1", vol: "71.07", crt: "0.00019%", uni: "8" + pc8, yr: "1860", mNo: 133, p: 55, e: 55, n: 78, cid: "5354618", cas: "7440-46-2"},
  { id: "ele56", num: "56", nme: "barium", sym: "Ba", grp: g2, prd: p6, blk: "s", aWt: "137.327", ctg: c2, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "3.594", mlt: 727, bln: 1897,  fsn: "8", vpn: "140", spc: "0.204", elc: l3 + ", 18, 8, 2", cnf: "[Xe] 6s" + s2, aRd: "222", cRd: "215", eNg: "0.89", ion: "5.2117", trm: "0.184", oxi: "2", vol: "39.24", crt: "0.034%", uni: "1" + pc6, yr: "1774", mNo: 137, p: 56, e: 56, n: 81, cid: "5355457", cas: "7440-39-3"},
  { id: "ele57", num: "57", nme: "lanthanum", sym: "La", grp: naVal, prd: p6, blk: "f", aWt: "138.90547", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6.145", mlt: 920, bln: 3464,  fsn: "6.2", vpn: "400", spc: "0.195", elc: l3 + ", 18, 9, 2", cnf: "[Xe] 5d" + s1 + " 6s" + s2, aRd: "187", cRd: "207", eNg: "1.1", ion: "5.5769", trm: "0.135", oxi: "2, 3", vol: "22.5", crt: "0.0034%", uni: "2" + pc7, yr: "1839", mNo: 139, p: 57, e: 57, n: 82, cid: "23926", cas: "7439-91-0"},
  { id: "ele58", num: "58", nme: "cerium", sym: "Ce", grp: naVal, prd: p6, blk: "f", aWt: "140.116", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6.77", mlt: 795, bln: 3443,  fsn: "5.5", vpn: "350", spc: "0.192", elc: l3 + ", 19, 9, 2", cnf: "[Xe] 4f" + s1 + " 5d" + s1 + " 6s" + s2, aRd: "182", cRd: "204", eNg: "1.12", ion: "5.5387", trm: "0.114", oxi: "2, 3, 4", vol: "20.67", crt: "0.006%", uni: "1" + pc6, yr: "1803", mNo: 140, p: 58, e: 58, n: 82, cid: "23974", cas: "7440-45-1"},
  { id: "ele59", num: "59", nme: "praseodymium", sym: "Pr", grp: naVal, prd: p6, blk: "f", aWt: "140.90765", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "6.773", mlt: 935, bln: 3520,  fsn: "6.9", vpn: "330", spc: "0.193", elc: l3 + ", 21, 8, 2", cnf: "[Xe] 4f" + s3 + " 6s" + s2, aRd: "182", cRd: "203", eNg: "1.13", ion: "5.473", trm: "0.125", oxi: "2, 3, 4", vol: "20.8", crt: "0.00086%", uni: "2" + pc7, yr: "1885", mNo: 141, p: 59, e: 59, n: 82, cid: "23942", cas: "7440-10-0"},
  { id: "ele60", num: "60", nme: "neodymium", sym: "Nd", grp: naVal, prd: p6, blk: "f", aWt: "144.242", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "7.007", mlt: 1024, bln: 3074,  fsn: "7.1", vpn: "285", spc: "0.19", elc: l3 + ", 22, 8, 2", cnf: "[Xe] 4f" + s4 + " 6s" + s2, aRd: "181", cRd: "201", eNg: "1.14", ion: "5.525", trm: "0.165", oxi: "2, 3", vol: "20.6", crt: "0.0033%", uni: "1" + pc6, yr: "1885", mNo: 144, p: 60, e: 60, n: 84, cid: "23934", cas: "7440-00-8"},
  { id: "ele61", num: "61", nme: "promethium", sym: "Pm", grp: naVal, prd: p6, blk: "f", aWt: "[145]", ctg: c9, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "7.26", mlt: 1042, bln: 3000,  fsn: "7.7", vpn: "290", spc: "-", elc: l3 + ", 23, 8, 2", cnf: "[Xe] 4f" + s5 + " 6s" + s2, aRd: "183", cRd: "199", eNg: "-", ion: "5.582", trm: "0.179", oxi: "3", vol: "22.39", crt: naVal, uni: naVal, yr: "1945", mNo: 145, p: 61, e: 61, n: 84, cid: naVal, cas: "7440-12-2"},
  { id: "ele62", num: "62", nme: "samarium", sym: "Sm", grp: naVal, prd: p6, blk: "f", aWt: "150.36", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: sld, dns: "7.52", mlt: 1072, bln: 1794,  fsn: "8.6", vpn: "175", spc: "0.197", elc: l3 + ", 24, 8, 2", cnf: "[Xe] 4f" + s6 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1.17", ion: "5.6437", trm: "0.133", oxi: "2, 3", vol: "20.0", crt: "0.0006%", uni: "5" + pc7, yr: "1879", mNo: 150, p: 62, e: 62, n: 88, cid: "23951", cas: "7440-19-9"},
  { id: "ele63", num: "63", nme: "europium", sym: "Eu", grp: naVal, prd: p6, blk: "f", aWt: "151.964", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsBCC, phs: sld, dns: "5.243", mlt: 826, bln: 1529,  fsn: "9.2", vpn: "175", spc: "0.182", elc: l3 + ", 25, 8, 2", cnf: "[Xe] 4f" + s7 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1.2", ion: "5.6704", trm: "0.139", oxi: "2, 3", vol: "20.8", crt: "0.00018%", uni: "5" + pc8, yr: "1896", mNo: 152, p: 63, e: 63, n: 89, cid: "23981", cas: "7440-53-1"},
  { id: "ele64", num: "64", nme: "gadolinium", sym: "Gd", grp: naVal, prd: p6, blk: "f", aWt: "157.25", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "7.895", mlt: 1312, bln: 3273,  fsn: "10", vpn: "305", spc: "0.236", elc: l3 + ", 25, 9, 2", cnf: "[Xe] 4f" + s7 + " 5d" + s1 + " 6s" + s2, aRd: "180", cRd: "196", eNg: "1.2", ion: "6.1501", trm: "0.106", oxi: "1, 2, 3", vol: "19.9", crt: "0.00052%", uni: "2" + pc7, yr: "1880", mNo: 157, p: 64, e: 64, n: 93, cid: "23982", cas: "7440-54-2"},
  { id: "ele65", num: "65", nme: "terbium", sym: "Tb", grp: naVal, prd: p6, blk: "f", aWt: "158.92535", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8.229", mlt: 1356, bln: 3230,  fsn: "10.8", vpn: "295", spc: "0.182", elc: l3 + ", 27, 8, 2", cnf: "[Xe] 4f" + s9 + " 6s" + s2, aRd: "177", cRd: "194", eNg: "1.2", ion: "5.8638", trm: "0.111", oxi: "1, 3, 4", vol: "19.20", crt: "0.000093%", uni: "5" + pc8, yr: "1843", mNo: 159, p: 65, e: 65, n: 94, cid: "23958", cas: "7440-27-9"},
  { id: "ele66", num: "66", nme: "dysprosium", sym: "Dy", grp: naVal, prd: p6, blk: "f", aWt: "162.5", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8.55", mlt: 1407, bln: 2567,  fsn: "11.1", vpn: "280", spc: "0.17", elc: l3 + ", 28, 8, 2", cnf: "[Xe] 4f" + s10 + " 6s" + s2, aRd: "178", cRd: "192", eNg: "1.22", ion: "5.9389", trm: "0.107", oxi: "2, 3", vol: "19.0", crt: "0.00062%", uni: "2" + pc7, yr: "1886", mNo: 163, p: 66, e: 66, n: 97, cid: "23912", cas: "7429-91-6"},
  { id: "ele67", num: "67", nme: "holmium", sym: "Ho", grp: naVal, prd: p6, blk: "f", aWt: "164.93032", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "8.795", mlt: 1461, bln: 2720,  fsn: "17", vpn: "265", spc: "0.165", elc: l3 + ", 29, 8, 2", cnf: "[Xe] 4f" + s11 + " 6s" + s2, aRd: "176", cRd: "192", eNg: "1.23", ion: "6.0215", trm: "0.162", oxi: "3", vol: "18.7", crt: "0.00012%", uni: "5" + pc8, yr: "1878", mNo: 165, p: 67, e: 67, n: 98, cid: "23988", cas: "7440-60-0"},
  { id: "ele68", num: "68", nme: "erbium", sym: "Er", grp: naVal, prd: p6, blk: "f", aWt: "167.259", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9.066", mlt: 1529, bln: 2868,  fsn: "19.9", vpn: "285", spc: "0.168", elc: l3 + ", 30, 8, 2", cnf: "[Xe] 4f" + s12 + " 6s" + s2, aRd: "176", cRd: "189", eNg: "1.24", ion: "6.1077", trm: "0.143", oxi: "3", vol: "18.4", crt: "0.0003%", uni: "2" + pc7, yr: "1843", mNo: 167, p: 68, e: 68, n: 99, cid: "23980", cas: "7440-52-0"},
  { id: "ele69", num: "69", nme: "thulium", sym: "Tm", grp: naVal, prd: p6, blk: "f", aWt: "168.93421", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9.321", mlt: 1545, bln: 1950,  fsn: "16.8", vpn: "250", spc: "0.16", elc: l3 + ", 31, 8, 2", cnf: "[Xe] 4f" + s13 + " 6s" + s2, aRd: "176", cRd: "190", eNg: "1.25", ion: "6.1843", trm: "0.168", oxi: "2, 3", vol: "18.1", crt: "0.000045%", uni: "1" + pc8, yr: "1879", mNo: 169, p: 69, e: 69, n: 100, cid: "23961", cas: "7440-30-4"},
  { id: "ele70", num: "70", nme: "ytterbium", sym: "Yb", grp: naVal, prd: p6, blk: "f", aWt: "173.054", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "6.965", mlt: 824, bln: 1196,  fsn: "7.7", vpn: "160", spc: "0.155", elc: l4 + ", 8, 2", cnf: "[Xe] 4f" + s14 + " 6s" + s2, aRd: "176", cRd: "187", eNg: "1.1", ion: "6.2542", trm: "0.349", oxi: "2, 3", vol: "24.79", crt: "0.00028%", uni: "2" + pc7, yr: "1878", mNo: 173, p: 70, e: 70, n: 103, cid: "23992", cas: "7440-64-4"},
  { id: "ele71", num: "71", nme: "lutetium", sym: "Lu", grp: naVal, prd: p6, blk: "d", aWt: "174.9668", ctg: c9, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "9.84", mlt: 1652, bln: 3402,  fsn: "22", vpn: "415", spc: "0.154", elc: l4 + ", 9, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s1 + " 6s" + s2, aRd: "174", cRd: "187", eNg: "1.27", ion: "5.4259", trm: "0.164", oxi: "3", vol: "17.78", crt: "0.000056%", uni: "1" + pc8, yr: "1907", mNo: 175, p: 71, e: 71, n: 104, cid: "23929", cas: "7439-94-3"},
  { id: "ele72", num: "72", nme: "hafnium", sym: "Hf", grp: g4, prd: p6, blk: "d", aWt: "178.49", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "13.31", mlt: 2233, bln: 4603,  fsn: "25.5", vpn: "630", spc: "0.144", elc: l4 + ", 10, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s2 + " 6s" + s2, aRd: "159", cRd: "175", eNg: "1.3", ion: "6.8251", trm: "0.23", oxi: "2, 3, 4", vol: "13.6", crt: "0.00033%", uni: "7" + pc8, yr: "1922", mNo: 178, p: 72, e: 72, n: 106, cid: "23986", cas: "7440-58-6"},
  { id: "ele73", num: "73", nme: "tantalum", sym: "Ta", grp: g5, prd: p6, blk: "d", aWt: "180.94788", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "16.654", mlt: 3017, bln: 5458,  fsn: "36", vpn: "735", spc: "0.14", elc: l4 + ", 11, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s3 + " 6s" + s2, aRd: "146", cRd: "170", eNg: "1.5", ion: "7.5496", trm: "0.575", oxi: "-1, 2, 3, 4, 5", vol: "10.90", crt: "0.00017%", uni: "8" + pc9, yr: "1802", mNo: 181, p: 73, e: 73, n: 108, cid: "23956", cas: "7440-25-7"},
  { id: "ele74", num: "74", nme: "tungsten", sym: "W", grp: g6, prd: p6, blk: "d", aWt: "183.84", ctg: c3, clr: clrGry, rdo: noVal, stc: crsBCC, phs: sld, dns: "19.25", mlt: 3422, bln: 5555,  fsn: "35", vpn: "800", spc: "0.132", elc: l4 + ", 12, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s4 + " 6s" + s2, aRd: "139", cRd: "162", eNg: "2.36", ion: "7.864", trm: "1.74", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9.53", crt: "0.00011%", uni: "5" + pc8, yr: "1781", mNo: 184, p: 74, e: 74, n: 110, cid: "23964", cas: "7440-33-7"},
  { id: "ele75", num: "75", nme: "rhenium", sym: "Re", grp: g7, prd: p6, blk: "d", aWt: "186.207", ctg: c3, clr: clrGry, rdo: noVal, stc: crsSH, phs: sld, dns: "21.02", mlt: 3186, bln: 5596,  fsn: "33", vpn: "705", spc: "0.137", elc: l4 + ", 13, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s5 + " 6s" + s2, aRd: "137", cRd: "151", eNg: "1.9", ion: "7.8335", trm: "0.479", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8.85", crt: "2.6" + pc7, uni: "2" + pc8, yr: "1908", mNo: 186, p: 75, e: 75, n: 111, cid: "23947", cas: "7440-15-5"},
  { id: "ele76", num: "76", nme: "osmium", sym: "Os", grp: g8, prd: p6, blk: "d", aWt: "190.23", ctg: c3, clr: clrSGry, rdo: noVal, stc: crsSH, phs: sld, dns: "22.61", mlt: 3033, bln: 5012,  fsn: "31", vpn: "630", spc: "0.13", elc: l4 + ", 14, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s6 + " 6s" + s2, aRd: "135", cRd: "144", eNg: "2.2", ion: "8.4382", trm: "0.876", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.49", crt: "1.8" + pc7, uni: "3" + pc7, yr: "1803", mNo: 190, p: 76, e: 76, n: 114, cid: "23937", cas: "7440-04-2"},
  { id: "ele77", num: "77", nme: "iridium", sym: "Ir", grp: g9, prd: p6, blk: "d", aWt: "192.217", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsFCC, phs: sld, dns: "22.56", mlt: 2466, bln: 4428,  fsn: "26", vpn: "560", spc: "0.131", elc: l4 + ", 15, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s7 + " 6s" + s2, aRd: "136", cRd: "141", eNg: "2.2", ion: "8.967", trm: "1.47", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.54", crt: "4" + pc8, uni: "2" + pc7, yr: "1803", mNo: 192, p: 77, e: 77, n: 115, cid: "23924", cas: "7439-88-5"},
  { id: "ele78", num: "78", nme: "platinum", sym: "Pt", grp: g10, prd: p6, blk: "d", aWt: "195.084", ctg: c3, clr: clrGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "21.45", mlt: 1768.3, bln: 3825,  fsn: "20", vpn: "490", spc: "0.133", elc: l4 + ", 17, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s9 + " 6s" + s1, aRd: "139", cRd: "136", eNg: "2.28", ion: "8.9587", trm: "0.716", oxi: "2, 4, 5, 6", vol: "9.10", crt: "3.7" + pc6, uni: "5" + pc7, yr: "1735", mNo: 195, p: 78, e: 78, n: 117, cid: "23939", cas: "7440-06-4"},
  { id: "ele79", num: "79", nme: "gold", sym: "Au", grp: g11, prd: p6, blk: "d", aWt: "196.966569", ctg: c3, clr: "colorGold", rdo: noVal, stc: crsFCC, phs: sld, dns: "19.282", mlt: 1064.2, bln: 2856,  fsn: "12.5", vpn: "330", spc: "0.129", elc: l4 + ", 18, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s1, aRd: "144", cRd: "136", eNg: "2.54", ion: "9.2255", trm: "3.17", oxi: "-1, 1, 2, 3, 5", vol: "10.2", crt: "3.1" + pc7, uni: "6" + pc8, yr: "2500" + " BC", mNo: 197, p: 79, e: 79, n: 118, cid: "23985", cas: "7440-57-5"},
  { id: "ele80", num: "80", nme: "mercury", sym: "Hg", grp: g12, prd: p6, blk: "d", aWt: "200.59", ctg: c3, clr: clrSlv, rdo: noVal, stc: crsSTG, phs: lqd, dns: "13.5336", mlt: -38.83, bln: 357,  fsn: "2.29", vpn: "59.2", spc: "0.14", elc: l4 + ", 18, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2, aRd: "151", cRd: "132", eNg: "2.00", ion: "10.4375", trm: "0.0834", oxi: "1, 2, 4", vol: "14.82", crt: "6.7" + pc6, uni: "1" + pc7, yr: "1500" + " BC", mNo: 201, p: 80, e: 80, n: 121, cid: "23931", cas: "7439-97-6"},
  { id: "ele81", num: "81", nme: "thallium", sym: "Tl", grp: g13, prd: p6, blk: "p", aWt: "204.3833", ctg: c4, clr: clrSlv, rdo: noVal, stc: crsSH, phs: sld, dns: "11.85", mlt: 304, bln: 1473,  fsn: "4.2", vpn: "165", spc: "0.129", elc: l4 + ", 18, 3", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s1, aRd: "170", cRd: "145", eNg: "1.62", ion: "6.1082", trm: "0.461", oxi: "1, 3", vol: "17.2", crt: "0.000053%", uni: "5" + pc8, yr: "1861", mNo: 204, p: 81, e: 81, n: 123, cid: "5359464", cas: "7440-28-0"},
  { id: "ele82", num: "82", nme: "lead", sym: "Pb", grp: g14, prd: p6, blk: "p", aWt: "207.2", ctg: c4, clr: clrSGry, rdo: noVal, stc: crsFCC, phs: sld, dns: "11.342", mlt: 327.46, bln: 1749,  fsn: "4.77", vpn: "178", spc: "0.129", elc: l4 + ", 18, 4", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s2, aRd: "175", cRd: "146", eNg: "2.33", ion: "7.4167", trm: "0.353", oxi: "-4, 2, 4", vol: "18.17", crt: "0.00099%", uni: "1" + pc6, yr: "4000" + " BC", mNo: 207, p: 82, e: 82, n: 125, cid: "5352425", cas: "7439-92-1"},
  { id: "ele83", num: "83", nme: "bismuth", sym: "Bi", grp: g15, prd: p6, blk: "p", aWt: "208.9804", ctg: c4, clr: clrGry, rdo: noVal, stc: crsBCM, phs: sld, dns: "9.78", mlt: 271.5, bln: 1564,  fsn: "10.9", vpn: "160", spc: "0.122", elc: l4 + ", 18, 5", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s3, aRd: "156", cRd: "148", eNg: "2.02", ion: "7.2856", trm: "0.0797", oxi: "-3, 3, 5", vol: "21.3", crt: "2.5" + pc6, uni: "7" + pc8, yr: "1753", mNo: 209, p: 83, e: 83, n: 126, cid: "5359367", cas: "7440-69-9"},
  { id: "ele84", num: "84", nme: "polonium", sym: "Po", grp: g16, prd: p6, blk: "p", aWt: "[210]", ctg: c6, clr: clrSlv, rdo: yesVal, stc: crsSC, phs: sld, dns: "9.196", mlt: 254, bln: 962,  fsn: "13", vpn: "100", spc: "-", elc: l4 + ", 18, 6", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s4, aRd: "168", cRd: "140", eNg: "2.00", ion: "8.417", trm: "0.2", oxi: "-2, 2, 4, 6", vol: "22.23", crt: naVal, uni: naVal, yr: "1898", mNo: 210, p: 84, e: 84, n: 126, cid: naVal, cas: "7440-08-6"},
  { id: "ele85", num: "85", nme: "astatine", sym: "At", grp: g17, prd: p6, blk: "p", aWt: "[210]", ctg: c7, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "7", mlt: 302, bln: 337,  fsn: "6", vpn: "40", spc: "-", elc: l4 + ", 18, 7", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s5, aRd: "-", cRd: "150", eNg: "2.2", ion: "9.3", trm: "0.017", oxi: "-1, 1, 3, 5, 7", vol: "30", crt: naVal, uni: naVal, yr: "1940", mNo: 210, p: 85, e: 85, n: 125, cid: naVal, cas: "7440-68-8"},
  { id: "ele86", num: "86", nme: "radon", sym: "Rn", grp: g18, prd: p6, blk: "p", aWt: "[222]", ctg: c8, clr: clrLes, rdo: yesVal, stc: naVal, phs: gas, dns: "0.00973", mlt: -71.15, bln: -61.85,  fsn: "3", vpn: "17", spc: "0.094", elc: l4 + ", 18, 8", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s6, aRd: "120", cRd: "150", eNg: "-", ion: "10.7485", trm: "0.0000364", oxi: "2, 4, 6", vol: "50.5", crt: naVal, uni: naVal, yr: "1900", mNo: 222, p: 86, e: 86, n: 136, cid: "24857", cas: "10043-92-2"},
  { id: "ele87", num: "87", nme: "francium", sym: "Fr", grp: g1, prd: p7, blk: "s", aWt: "[223]", ctg: c1, clr: clrSlv, rdo: yesVal, stc: naVal, phs: sld, dns: "1.87", mlt: 23, bln: 677,  fsn: "2", vpn: "65", spc: "-", elc: l4 + ", 18, 8, 1", cnf: "[Rn] 7s" + s1, aRd: "260", cRd: "348", eNg: "0.7", ion: "4.0727", trm: "0.15", oxi: "1", vol: "71.07", crt: naVal, uni: naVal, yr: "1939", mNo: 223, p: 87, e: 87, n: 136, cid: naVal, cas: "7440-73-5"},
  { id: "ele88", num: "88", nme: "radium", sym: "Ra", grp: g2, prd: p7, blk: "s", aWt: "[226]", ctg: c2, clr: clrSlv, rdo: yesVal, stc: crsBCC, phs: sld, dns: "5.5", mlt: 700, bln: 1737,  fsn: "8", vpn: "125", spc: "-", elc: l4 + ", 18, 8, 2", cnf: "[Rn] 7s" + s2, aRd: "-", cRd: "221", eNg: "0.9", ion: "5.2784", trm: "0.186", oxi: "2", vol: "45.20", crt: "9.9×10<sup>-12</sup>%", uni: naVal, yr: "1898", mNo: 226, p: 88, e: 88, n: 138, cid: "6328144", cas: "7440-14-4"},
  { id: "ele89", num: "89", nme: "actinium", sym: "Ac", grp: naVal, prd: p7, blk: "f", aWt: "[227]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsFCC, phs: sld, dns: "10.07", mlt: 1050, bln: 3198,  fsn: "14", vpn: "400", spc: "0.12", elc: l4 + ", 18, 9, 2", cnf: "[Rn] 6d" + s1 + " 7s" + s2, aRd: "-", cRd: "215", eNg: "1.1", ion: "5.17", trm: "0.12", oxi: "3", vol: "22.54", crt: naVal, uni: naVal, yr: "1899", mNo: 227, p: 89, e: 89, n: 138, cid: naVal, cas: "7440-34-8"},
  { id: "ele90", num: "90", nme: "thorium", sym: "Th", grp: naVal, prd: p7, blk: "f", aWt: "232.03806", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsFCC, phs: sld, dns: "11.7", mlt: 1842, bln: 4788,  fsn: "16", vpn: "530", spc: "0.113", elc: l4 + ", 18, 10, 2", cnf: "[Rn] 6d" + s2 + " 7s" + s2, aRd: "179", cRd: "206", eNg: "1.3", ion: "6.3067", trm: "0.54", oxi: "2, 3, 4", vol: "19.9", crt: "0.0006%", uni: "4" + pc8, yr: "1828", mNo: 232, p: 90, e: 90, n: 142, cid: "23960", cas: "7440-29-1"},
  { id: "ele91", num: "91", nme: "protactinium", sym: "Pa", grp: naVal, prd: p7, blk: "f", aWt: "231.03588", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsCT, phs: sld, dns: "15.37", mlt: 1568, bln: 4027,  fsn: "15", vpn: "470", spc: "-", elc: l4 + ", 20, 9, 2", cnf: "[Rn] 5f" + s2 + " 6d" + s1 + " 7s" + s2, aRd: "163", cRd: "200", eNg: "1.5", ion: "5.89", trm: "0.47", oxi: "3, 4, 5", vol: "15.0", crt: "9.9×10<sup>-13</sup>%", uni: naVal, yr: "1913", mNo: 231, p: 91, e: 91, n: 140, cid: naVal, cas: "7440-13-3"},
  { id: "ele92", num: "92", nme: "uranium", sym: "U", grp: naVal, prd: p7, blk: "f", aWt: "238.02891", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsBCO, phs: sld, dns: "18.95", mlt: 1132.2, bln: 4131,  fsn: "14", vpn: "420", spc: "0.116", elc: l4 + ", 21, 9, 2", cnf: "[Rn] 5f" + s3 + " 6d" + s1 + " 7s" + s2, aRd: "156", cRd: "196", eNg: "1.38", ion: "6.1941", trm: "0.276", oxi: "3, 4, 5, 6", vol: "12.59", crt: "0.00018%", uni: "2" + pc8, yr: "1789", mNo: 238, p: 92, e: 92, n: 146, cid: "23989", cas: "7440-61-1"},
  { id: "ele93", num: "93", nme: "neptunium", sym: "Np", grp: naVal, prd: p7, blk: "f", aWt: "[237]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSO, phs: sld, dns: "20.45", mlt: 637, bln: 4000,  fsn: "10", vpn: "335", spc: "-", elc: l4 + ", 22, 9, 2", cnf: "[Rn] 5f" + s4 + " 6d" + s1 + " 7s" + s2, aRd: "155", cRd: "190", eNg: "1.36", ion: "6.2657", trm: "0.063", oxi: "3, 4, 5, 6, 7", vol: "11.62", crt: naVal, uni: naVal, yr: "1940", mNo: 237, p: 93, e: 93, n: 144, cid: naVal, cas: "7439-99-8"},
  { id: "ele94", num: "94", nme: "plutonium", sym: "Pu", grp: naVal, prd: p7, blk: "f", aWt: "[244]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSM, phs: sld, dns: "19.816", mlt: 639.4, bln: 3228,  fsn: naVal, vpn: "325", spc: "-", elc: l4 + ", 24, 8, 2", cnf: "[Rn] 5f" + s6 + " 7s" + s2, aRd: "159", cRd: "187", eNg: "1.28", ion: "6.0262", trm: "0.0674", oxi: "3, 4, 5, 6, 7, 8", vol: "12.32", crt: naVal, uni: naVal, yr: "1940", mNo: 244, p: 94, e: 94, n: 150, cid: "23940", cas: "7440-07-5"},
  { id: "ele95", num: "95", nme: "americium", sym: "Am", grp: naVal, prd: p7, blk: "f", aWt: "[243]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "13.69", mlt: 1176, bln: 2607,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 8, 2", cnf: "[Rn] 5f" + s7 + " 7s" + s2, aRd: "173", cRd: "180", eNg: "1.3", ion: "5.9738", trm: "0.1", oxi: "2, 3, 4, 5, 6", vol: "17.78", crt: naVal, uni: naVal, yr: "1944", mNo: 243, p: 95, e: 95, n: 148, cid: naVal, cas: "7440-35-9"},
  { id: "ele96", num: "96", nme: "curium", sym: "Cm", grp: naVal, prd: p7, blk: "f", aWt: "[247]", ctg: c10, clr: clrSlv, rdo: yesVal, stc: crsSH, phs: sld, dns: "13.51", mlt: 1340, bln: 3110,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 9, 2", cnf: "[Rn] 5f" + s7 + " 6d" + s1 + " 7s" + s2, aRd: "174", cRd: "169", eNg: "1.3", ion: "5.9915", trm: "0.1", oxi: "3, 4", vol: "18.28", crt: naVal, uni: naVal, yr: "1944", mNo: 247, p: 96, e: 96, n: 151, cid: naVal, cas: "7440-51-9"},
  { id: "ele97", num: "97", nme: "berkelium", sym: "Bk", grp: naVal, prd: p7, blk: "f", aWt: "[247]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "14.78", mlt: 986, bln: 2900,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 27, 8, 2", cnf: "[Rn] 5f" + s9 + " 7s" + s2, aRd: "170", cRd: "-", eNg: "1.3", ion: "6.1979", trm: "0.1", oxi: "3, 4", vol: "16.7", crt: naVal, uni: naVal, yr: "1949", mNo: 247, p: 97, e: 97, n: 150, cid: "23971", cas: "7440-40-6"},
  { id: "ele98", num: "98", nme: "californium", sym: "Cf", grp: naVal, prd: p7, blk: "f", aWt: "[251]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "15.1", mlt: 900, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 28, 8, 2", cnf: "[Rn] 5f" + s10 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.2817", trm: "0.1", oxi: "2, 3, 4", vol: "18.4", crt: naVal, uni: naVal, yr: "1950", mNo: 251, p: 98, e: 98, n: 153, cid: naVal, cas: "7440-71-3"},
  { id: "ele99", num: "99", nme: "einsteinium", sym: "Es", grp: naVal, prd: p7, blk: "f", aWt: "[252]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "8.84", mlt: 860, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 29, 8, 2", cnf: "[Rn] 5f" + s11 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.42", trm: "0.1", oxi: "2, 3", vol: "28.5", crt: naVal, uni: naVal, yr: "1952", mNo: 252, p: 99, e: 99, n: 153, cid: naVal, cas: "7429-92-7"},
  { id: "ele100", num: "100", nme: "fermium", sym: "Fm", grp: naVal, prd: p7, blk: "f", aWt: "[257]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1527, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 30, 8, 2", cnf: "[Rn] 5f" + s12 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.5", trm: "0.1", oxi: "2, 3", vol: "29.1", crt: naVal, uni: naVal, yr: "1952", mNo: 257, p: 100, e: 100, n: 157, cid: naVal, cas: "7440-72-4"},
  { id: "ele101", num: "101", nme: "mendelevium", sym: "Md", grp: naVal, prd: p7, blk: "f", aWt: "[258]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 826.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 31, 8, 2", cnf: "[Rn] 5f" + s13 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.58", trm: "0.1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1955", mNo: 258, p: 101, e: 101, n: 157, cid: naVal, cas: "7440-11-1"},
  { id: "ele102", num: "102", nme: "nobelium", sym: "No", grp: naVal, prd: p7, blk: "f", aWt: "[259]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 827, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 2", cnf: "[Rn] 5f" + s14 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.65", trm: "0.1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1958", mNo: 259, p: 102, e: 102, n: 157, cid: naVal, cas: "10028-14-5"},
  { id: "ele103", num: "103", nme: "lawrencium", sym: "Lr", grp: naVal, prd: p7, blk: "d", aWt: "[262]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1626.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 3", cnf: "[Rn] 5f" + s14 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "-", eNg: "1.3", ion: "4.9", trm: "0.1", oxi: "3", vol: "-", crt: naVal, uni: naVal, yr: "1961", mNo: 262, p: 103, e: 103, n: 159, cid: naVal, cas: "22537-19-5"},
  { id: "ele104", num: "104", nme: "rutherfordium", sym: "Rf", grp: g4, prd: p7, blk: "d", aWt: "[267]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "23", mlt: 2100, bln: 5500,  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 10, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s2 + " 7s" + s2, aRd: "-", cRd: "157", eNg: "-", ion: "6.011", trm: "0.23", oxi: "4", vol: "-", crt: naVal, uni: naVal, yr: "1964", mNo: 261, p: 104, e: 104, n: 157, cid: naVal, cas: "53850-36-5"},
  { id: "ele105", num: "105", nme: "dubnium", sym: "Db", grp: g5, prd: p7, blk: "d", aWt: "[268]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "39", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 11, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s3 + " 7s" + s2, aRd: "-", cRd: "149", eNg: "-", ion: "-", trm: "0.58", oxi: "5", vol: "-", crt: naVal, uni: naVal, yr: "1968", mNo: 262, p: 105, e: 105, n: 157, cid: naVal, cas: "53850-35-4"},
  { id: "ele106", num: "106", nme: "seaborgium", sym: "Sg", grp: g6, prd: p7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 12, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s4 + " 7s" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1974", mNo: 262, p: 106, e: 106, n: 156, cid: naVal, cas: "54038-81-2"},
  { id: "ele107", num: "107", nme: "bohrium", sym: "Bh", grp: g7, prd: p7, blk: "d", aWt: "[270]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "37", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 13, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s5 + " 7s" + s2, aRd: "-", cRd: "141", eNg: "-", ion: "-", trm: "-", oxi: "7", vol: "-", crt: naVal, uni: naVal, yr: "1981", mNo: 264, p: 107, e: 107, n: 157, cid: naVal, cas: "54037-14-8"},
  { id: "ele108", num: "108", nme: "hassium", sym: "Hs", grp: g8, prd: p7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "41", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 14, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s6 + " 7s" + s2, aRd: "-", cRd: "134", eNg: "-", ion: "-", trm: "-", oxi: "8", vol: "-", crt: naVal, uni: naVal, yr: "1984", mNo: 269, p: 108, e: 108, n: 161, cid: naVal, cas: "54037-57-9"},
  { id: "ele109", num: "109", nme: "meitnerium", sym: "Mt", grp: g9, prd: p7, blk: "d", aWt: "[278]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 15, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s7 + " 7s" + s2, aRd: "-", cRd: "129", eNg: "-", ion: "-", trm: "-", oxi: "3, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "1982", mNo: 268, p: 109, e: 109, n: 159, cid: naVal, cas: "54038-01-6"},
  { id: "ele110", num: "110", nme: "darmstadtium", sym: "Ds", grp: g10, prd: p7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: unw, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 16, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s8 + " 7s" + s2, aRd: "-", cRd: "128", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 110, e: 110, n: 171, cid: naVal, cas: "54083-77-1"},
  { id: "ele111", num: "111", nme: "roentgenium", sym: "Rg", grp: g11, prd: p7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 17, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s9 + " 7s" + s2, aRd: "-", cRd: "121", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 111, e: 111, n: 170, cid: naVal, cas: "54386-24-2"},
  { id: "ele112", num: "112", nme: "copernicium", sym: "Cn", grp: g12, prd: p7, blk: "d", aWt: "[285]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: lqd, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 2", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2, aRd: "-", cRd: "122", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1996", mNo: 285, p: 112, e: 112, n: 173, cid: naVal, cas: "54084-26-3"},
  { id: "ele113", num: "113", nme: "nihonium", sym: "Nh", grp: g13, prd: p7, blk: "p", aWt: "[286]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "16", mlt: 430, bln: 1100,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 3", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "136", eNg: "-", ion: "-", trm: "-", oxi: "1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2003", mNo: 286, p: 113, e: 113, n: 173, cid: naVal, cas: "54084-70-7"},
  { id: "ele114", num: "114", nme: "flerovium", sym: "Fl", grp: g14, prd: p7, blk: "p", aWt: "[289]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "14", mlt: 70, bln: 150,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 4", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1998", mNo: 287, p: 114, e: 114, n: 173, cid: naVal, cas: "54085-16-4"},
  { id: "ele115", num: "115", nme: "moscovium", sym: "Mc", grp: g15, prd: p7, blk: "p", aWt: "[288]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 5", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s3, aRd: "-", cRd: "162", eNg: "-", ion: "-", trm: "-", oxi: "1, 3", vol: "-", crt: naVal, uni: naVal, yr: "2004", mNo: 288, p: 115, e: 115, n: 173, cid: naVal, cas: "54085-64-2"},
  { id: "ele116", num: "116", nme: "livermorium", sym: "Lv", grp: g16, prd: p7, blk: "p", aWt: "[293]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 6", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s4, aRd: "-", cRd: "175", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "2000", mNo: 291, p: 116, e: 116, n: 175, cid: naVal, cas: "54100-71-9"},
  { id: "ele117", num: "117", nme: "tennessine", sym: "Ts", grp: g17, prd: p7, blk: "p", aWt: "[294]", ctg: c7, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 7", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s5, aRd: "-", cRd: "165", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2010", mNo: 294, p: 117, e: 117, n: 177, cid: naVal, cas: "87658-56-8"},
  { id: "ele118", num: "118", nme: "oganesson", sym: "Og", grp: g18, prd: p7, blk: "p", aWt: "[294]", ctg: c8, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "13.65", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 8", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s6, aRd: "152", cRd: "157", eNg: "-", ion: "-", trm: "-", oxi: "-1, 0, 2, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "2002", mNo: 294, p: 118, e: 118, n: 176, cid: naVal, cas: "54144-19-3"}  
];
}

function returnItem(itemId) {
  for (var j = 0; j < rawData.length; j++) {
    if (rawData[j].id === "ele" + itemId)
      return rawData[j];
  }
}

function id(text) {
  return document.getElementById(text);
}

function cls(classId) {
  return document.getElementsByClassName(classId);
}

function getNum(value) {
  if (langValue === "ar") {
    // Arabic
    value = value.toString().replace(/\./g, "٫");
    var id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return value.toString().replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  } else if (langValue === "fa") {
    // Persian
    value = value.toString().replace(/\./g, "٫");
    var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return value.toString().replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  } else
    return value;
}

function getTemp(tempValue) {
  var newTemp;

  if (tempValue == "-")
    newTemp = "-";
  else {
    if (langValue === "ar" || langValue === "fa" || langValue === "he")
      newTemp = getNum(Math.round((tempValue + 273.15) * 100) / 100) + " K " + ((defaultTemp == "celsius") ? (getNum(tempValue) + " | °C") : (getNum(Math.round(((tempValue * 1.8) + 32) * 100) / 100) + " °F"));
    else
      newTemp = (Math.round((tempValue + 273.15) * 100) / 100) + " K | " + ((defaultTemp == "celsius") ? (tempValue + " °C") : ((Math.round(((tempValue * 1.8) + 32) * 100) / 100) + " °F"));
  }

  if (defaultPunc === "comma")
    newTemp = newTemp.replace(/\./g, ",");

  return newTemp;
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) 
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
   else
      isEscape = (evt.keyCode === 27);
  if (isEscape)
      closeMenu();
};

document.addEventListener("click", function(evt) {
      var targetElement = evt.target;  // clicked element

  do {
      if (targetElement.id === "topNavbar") {
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);
  closeMenu();
});

// Navbar and dropdowns
var toggle = document.getElementsByClassName("navbar-toggle")[0],
  collapse = document.getElementsByClassName("navbar-collapse")[0];

// Toggle if navbar menu is open or closed
function toggleMenu() {
  collapse.classList.toggle("collapse");
  collapse.classList.toggle("in");
}

function closeMenu() {
  collapse.classList.add("collapse");
  collapse.classList.remove("in");
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
  if (document.body.clientWidth >= 768) {
    closeMenu();
    setNavbar();
  }
}

function changeIcon(){

  if (id("themeIcon").textContent === "N"){
    id("themeIcon").textContent = "t";
    defaultNewTheme = "light";
  }
  else{
    id("themeIcon").textContent = "N";
    defaultNewTheme = "dark";
  }

  document.documentElement.setAttribute('data-theme', defaultNewTheme);
  localStorage.setItem("defaultNewTheme", defaultNewTheme);
  setTheme()
}

function initializePage() {

  document.body.classList.remove("fade-out");

  urlLang = getUrlLang(langValue)
  // console.log("urlLang: " + urlLang)

  id("languageSelectSetting").value = langValue;
  localStorage.setItem("langValue", langValue);

  id("settingsLink").addEventListener("click", closeMenu, false);
  id("themeList").addEventListener("click", changeIcon, false);

  // Event listeners
  window.addEventListener("resize", closeMenusOnResize, false);
  toggle.addEventListener("click", toggleMenu, false);

  defaultNewTheme = localStorage.getItem("defaultNewTheme");

  if (!defaultNewTheme) {
    defaultNewTheme = "light";

    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) defaultNewTheme = "dark";
      else defaultNewTheme = "light";
    }

    localStorage.setItem("defaultNewTheme", defaultNewTheme);
  }
  document.documentElement.setAttribute("data-theme", defaultNewTheme);

  id("themeIcon").textContent = (defaultNewTheme === "light") ? "t" : "N"

  defaultColor = localStorage.getItem("defaultColor");

  var invalidColors = ["color11","color12","color13","color14","color15","color16","color17","color18","color19","color20","color21","color22","color23","color24","color25"]

  if (!defaultColor ||  invalidColors.indexOf(defaultColor) > -1) { 
    // Added so that users already using invalidcolors are reset to color8
    localStorage.setItem("defaultColor", "color8");
    defaultColor = "color8";
  }
  else{
    if (defaultColor.indexOf(",") > 0){
      localStorage.setItem("defaultColor", "color10");
      defaultColor = "color10";
    }
  }

  defaultTemp = localStorage.getItem("defaultTemp");

  if (!defaultTemp) {
    localStorage.setItem("defaultTemp", "celsius");
    defaultTemp = "celsius";
  }

  defaultStyle = localStorage.getItem("defaultStyle");

  if (!defaultStyle) {
    localStorage.setItem("defaultStyle", "1");
    defaultStyle = "1";
  }

  defaultMargin = localStorage.getItem("defaultMargin");

  if (!defaultMargin) {
    localStorage.setItem("defaultMargin", "1");
    defaultMargin = "1";
  }

  document.documentElement.setAttribute('data-style', defaultStyle);

  setDefaultTheme();

  setNavbar();

  setSettings();

  colorClicked(defaultColor);

  id("homeTitle").textContent = homeHeader;
  id("modalSettings").textContent = settings;
  id("language").textContent = language;
  // id("sysLanguage").textContent = sysLanguage;
  id("temperature").textContent = temperature;  
  id("settingPeriodicTable").textContent = homeHeader

  document.querySelector('label[for="tempcelsius"]').textContent = tempCelsius;
  document.querySelector('label[for="tempfahrenheit"]').textContent = tempFahrenheit;
  
  id("themeColor").textContent = labelColorMain;

  id("tableWidth").textContent = tableWidth;
  id("settingsName").textContent = labelName;
  id("settingsAtmWtMain").textContent = labelAtmWtMain;

  id("navLogo").href = "./" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("listLink").textContent = list;
  id("listList").title = list;
  id("listList").href = "list.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("compareLink").textContent = compare;
  id("compareList").title = compare;
  id("compareList").href = "compare.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("translateLink").textContent = translate;
  id("translateList").title = translate;
  id("translateList").href = "translation.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("settingsLink").textContent = settings;
  id("settingsList").title = settings;
  id("storeLink").textContent = store;
  id("storeList").title = store;
  id("storeList").href = "store.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("printableLink").textContent = printables;
  id("printableList").title = printables;
  id("printableList").href = "printables.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("themeLink").textContent = theme;
  id("themeList").title = theme;
  id("translate2Link").textContent = translate;
  id("translationFooter").href = "translation.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("suggestionLink").textContent = suggestions;
  id("aboutLink").textContent = about;
  id("aboutFooter").href = "about.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("creditsLink").textContent = credits;
  id("creditsFooter").href = "credits.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  id("privacyLink").textContent = privacy;
  id("privacyFooter").href = "privacy-policy.html" + (urlLang === "en" ? "" : "?lang=" + urlLang)
  
  var newSpan = cls("new")
  for (var i = 0; i < newSpan.length; i++)
  newSpan[i].textContent = newContent;
  
  document.documentElement.setAttribute('lang', urlLang)
  
  var link = document.createElement('link');
  link.rel = 'canonical';
  link.href = window.location.href 
  // "https://periodic-table.io/element.html?num="+num+"&lang="+urlLang;
  document.head.appendChild(link);

  for (var i = 0; i < colorClass.length; i++) {
    colorClass[i].addEventListener("click", function() {
      colorClicked(this.id)
    }, false);
    colorClass[i].addEventListener("mouseenter", setBorder, false);
    colorClass[i].addEventListener("mouseleave", removeBorder, false);
  }
}

function colorClicked(colorId) {

  for (var i = 0; i < colorClass.length; i++)
    colorClass[i].style.outline = "4px solid transparent"

  id(colorId).style.outline = (defaultNewTheme === "light") ? "4px solid #505050": "4px solid #d8d8d8";

  localStorage.setItem("defaultColor", colorId);
  setColor(window[colorId]);
}

function setNavbar() {
  var noOverflow = cls("no-overflow");

  if (window.innerWidth > 768) {
    var navWidth = 500;
        
    if (window.innerWidth > 1200)
      navWidth = 900;
    else{
    switch (langValue) {
      case "en":
        navWidth = 562 + 60;
        break;
      case "gb":
        navWidth = 562 + 60;
        break;
      case "ar":
        navWidth = 558 + 60;
        break;
      case "bg":
        navWidth = 585 + 60;
        break;
      case "ca":
        navWidth = 585 + 60;
        break;
      case "cs":
        navWidth = 597 + 60;
        break;
      case "da":
        navWidth = 585 + 60;
        break;
      case "de":
        navWidth = 592 + 60;
        break;
      case "el":
        navWidth = 571 + 60;
        break;
      case "es":
        navWidth = 579 + 60;
        break;
      case "fa":
        navWidth = 572 + 60;
        break;
      case "fi":
        navWidth = 565 + 60;
        break;
      case "fr":
        navWidth = 577 + 60;
        break;
      case "he":
        navWidth = 547 + 60;
        break;
      case "hi":
        navWidth = 527 + 60;
        break;
      case "hr":
        navWidth = 587 + 60;
        break;
      case "hu":
        navWidth = 622 + 60;
        break;
      case "id":
        navWidth = 608 + 60;
        break;
      case "it":
        navWidth = 601 + 60;
        break;
      case "ja":
        navWidth = 563 + 60;
        break;
      case "ko":
        navWidth = 523 + 60;
        break;
      case "nb":
        navWidth = 592 + 60;
        break;
      case "nl":
        navWidth = 570 + 60;
        break;
      case "nn":
        navWidth = 562 + 60;
        break;
      case "ph":
        navWidth = 583 + 60;
        break;
      case "pt":
        navWidth = 579 + 60;
        break;
      case "ro":
        navWidth = 571 + 60;
        break;
      case "ru":
        navWidth = 593 + 60;
        break;
      case "sk":
        navWidth = 598 + 60;
        break;
      case "sl":
        navWidth = 593 + 60;
        break;
      case "sr":
        navWidth = 580 + 60;
        break;
      case "sv":
        navWidth = 586 + 60;
        break;
      case "th":
        navWidth = 574 + 60;
        break;
      case "tr":
        navWidth = 598 + 60;
        break;
      case "uk":
        navWidth = 603 + 60;
        break;
      case "vi":
        navWidth = 603 + 60;
        break;
      case "zs":
        navWidth = 527 + 60;
        break;
      case "zt":
        navWidth = 587 + 60;
        break;
    }
  }
    navWidth = navWidth + 16;

    for (var i = 0; i < noOverflow.length; i++) {
      if (langValue === "ar" || langValue === "fa" || langValue === "he") {
        noOverflow[i].style.left = navWidth + "px";
        noOverflow[i].style.right = "75px";
      } else {
        noOverflow[i].style.right = navWidth + "px";
        noOverflow[i].style.left = "75px";
      }
    }
  }
}

function setDefaultTheme() {
  colorClicked(localStorage.getItem("defaultColor"));
}

function setLanguage() {
  langValue = id("languageSelectSetting").value;
  localStorage.setItem("langValue", langValue);

  urlLang = getUrlLang(langValue)
  setLangFile(langValue);
  document.documentElement.setAttribute('lang', urlLang)

  loadjs(["locales/locale." + langValue + ".js"], {
    success: loaderFunc
  });
  
  // console.log("urlLang: " + urlLang)
  if (id("outputConfigMain"))
    history.pushState({page: 2}, "title 2", "?num=" + num + "&lang=" + urlLang);
  else
    history.pushState({page: 2}, "title 2", "?lang=" + urlLang);
}

function loaderFunc() {
  if (id("ptable"))
    indexLoad();
  else if (id("outputConfigMain"))
    elementLoad();
  else if (id("firstElement"))
    compareLoad();
  else if (id("mainList"))
    listLoad();
  else if (id("about"))
    aboutLoad();
  else if (id("privacyPolicy"))
    privacyLoad();
  else if (id("solubilityHeader"))
    solubilityLoad();
  else if (id("reactivityHeader"))
    reactivityLoad();
  else if (id("translationHeader"))
    translationLoad();
  else if (id("credits"))
    creditsLoad();
  else if (id("printablesHeader"))
    printablesLoad();
  else if (id("pg404Header"))
    pg404Load();
  else if (id("lightTeeHeader"))
    storeLoad();
}

function setSettings() {
  id("languageSelectSetting").addEventListener("change", setLanguage, false);
  id("languageSelectSetting").value = langValue;
  id("temp"+ defaultTemp).checked = true;
  id("style"+ defaultStyle).checked = true;
}

function setTemp() {
  defaultTemp = document.querySelector('input[name="temperature"]:checked').value;
  localStorage.setItem("defaultTemp", defaultTemp);

  if (id("outputConfigMain"))
    setDegrees(); 

  if (id("firstElement")) {
    setDegreesFirst();
    setDegreesSecond();
  }
}

function setStyle(){
  defaultStyle = document.querySelector('input[name="tableStyle"]:checked').value;
  document.documentElement.setAttribute('data-style', defaultStyle);
  localStorage.setItem("defaultStyle", defaultStyle);
}

function setTheme() {
  setDefaultTheme();
  if (id("outputConfigMain"))
    svgElectron()
}

// Index -------------------------------------------------------------------------------------

function indexLoad() {

  initializePage();
  var ele = document.getElementsByName("flight-type");

ele.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log(radio.value);
  });
});

  id("homeTitle").textContent = home + " - " + homeHeader;

  id("pageHeader").textContent = home;

  id("group").textContent = group;
  id("period").textContent = period;

  id("detailRow2").textContent = discovered;
  id("detailRow3").textContent = labelMeltingMain;
  id("detailRow4").textContent = labelBoilingMain;
  id("detailRow5").textContent = labelElectronsMain;
  id("detailRow6").textContent = labelConfigMain;
  id("lanthanidesMain").textContent = lanthanides;
  id("actinidesMain").textContent = actinides;

  id("ctg1").textContent = cat1;
  id("ctg2").textContent = cat2;
  id("ctg3").textContent = cat3;
  id("ctg4").textContent = cat4;
  id("ctg5").textContent = cat5;
  id("ctg6").textContent = cat6;
  id("ctg7").textContent = cat7;
  id("ctg8").textContent = cat8;
  id("ctg9").textContent = lanthanides;
  id("ctg10").textContent = actinides;

  id("hydrogen").textContent = hydrogen;
  id("helium").textContent = helium;
  id("lithium").textContent = lithium;
  id("beryllium").textContent = beryllium;
  id("boron").textContent = boron;
  id("carbon").textContent = carbon;
  id("nitrogen").textContent = nitrogen;
  id("oxygen").textContent = oxygen;
  id("fluorine").textContent = fluorine;
  id("neon").textContent = neon;
  id("sodium").textContent = sodium;
  id("magnesium").textContent = magnesium;
  id("aluminium").textContent = aluminium;
  id("silicon").textContent = silicon;
  id("phosphorus").textContent = phosphorus;
  id("sulfur").textContent = sulfur;
  id("chlorine").textContent = chlorine;
  id("argon").textContent = argon;
  id("potassium").textContent = potassium;
  id("calcium").textContent = calcium;
  id("scandium").textContent = scandium;
  id("titanium").textContent = titanium;
  id("vanadium").textContent = vanadium;
  id("chromium").textContent = chromium;
  id("manganese").textContent = manganese;
  id("iron").textContent = iron;
  id("cobalt").textContent = cobalt;
  id("nickel").textContent = nickel;
  id("copper").textContent = copper;
  id("zinc").textContent = zinc;
  id("gallium").textContent = gallium;
  id("germanium").textContent = germanium;
  id("arsenic").textContent = arsenic;
  id("selenium").textContent = selenium;
  id("bromine").textContent = bromine;
  id("krypton").textContent = krypton;
  id("rubidium").textContent = rubidium;
  id("strontium").textContent = strontium;
  id("yttrium").textContent = yttrium;
  id("zirconium").textContent = zirconium;
  id("niobium").textContent = niobium;
  id("molybdenum").textContent = molybdenum;
  id("technetium").textContent = technetium;
  id("ruthenium").textContent = ruthenium;
  id("rhodium").textContent = rhodium;
  id("palladium").textContent = palladium;
  id("silver").textContent = silver;
  id("cadmium").textContent = cadmium;
  id("indium").textContent = indium;
  id("tin").textContent = tin;
  id("antimony").textContent = antimony;
  id("tellurium").textContent = tellurium;
  id("iodine").textContent = iodine;
  id("xenon").textContent = xenon;
  id("caesium").textContent = caesium;
  id("barium").textContent = barium;
  id("lanthanum").textContent = lanthanum;
  id("cerium").textContent = cerium;
  id("praseodymium").textContent = praseodymium;
  id("neodymium").textContent = neodymium;
  id("promethium").textContent = promethium;
  id("samarium").textContent = samarium;
  id("europium").textContent = europium;
  id("gadolinium").textContent = gadolinium;
  id("terbium").textContent = terbium;
  id("dysprosium").textContent = dysprosium;
  id("holmium").textContent = holmium;
  id("erbium").textContent = erbium;
  id("thulium").textContent = thulium;
  id("ytterbium").textContent = ytterbium;
  id("lutetium").textContent = lutetium;
  id("hafnium").textContent = hafnium;
  id("tantalum").textContent = tantalum;
  id("tungsten").textContent = tungsten;
  id("rhenium").textContent = rhenium;
  id("osmium").textContent = osmium;
  id("iridium").textContent = iridium;
  id("platinum").textContent = platinum;
  id("gold").textContent = gold;
  id("mercury").textContent = mercury;
  id("thallium").textContent = thallium;
  id("lead").textContent = lead;
  id("bismuth").textContent = bismuth;
  id("polonium").textContent = polonium;
  id("astatine").textContent = astatine;
  id("radon").textContent = radon;
  id("francium").textContent = francium;
  id("radium").textContent = radium;
  id("actinium").textContent = actinium;
  id("thorium").textContent = thorium;
  id("protactinium").textContent = protactinium;
  id("uranium").textContent = uranium;
  id("neptunium").textContent = neptunium;
  id("plutonium").textContent = plutonium;
  id("americium").textContent = americium;
  id("curium").textContent = curium;
  id("berkelium").textContent = berkelium;
  id("californium").textContent = californium;
  id("einsteinium").textContent = einsteinium;
  id("fermium").textContent = fermium;
  id("mendelevium").textContent = mendelevium;
  id("nobelium").textContent = nobelium;
  id("lawrencium").textContent = lawrencium;
  id("rutherfordium").textContent = rutherfordium;
  id("dubnium").textContent = dubnium;
  id("seaborgium").textContent = seaborgium;
  id("bohrium").textContent = bohrium;
  id("hassium").textContent = hassium;
  id("meitnerium").textContent = meitnerium;
  id("darmstadtium").textContent = darmstadtium;
  id("roentgenium").textContent = roentgenium;
  id("copernicium").textContent = copernicium;
  id("nihonium").textContent = nihonium;
  id("flerovium").textContent = flerovium;
  id("moscovium").textContent = moscovium;
  id("livermorium").textContent = livermorium;
  id("tennessine").textContent = tennessine;
  id("oganesson").textContent = oganesson;

  setSize(defaultMargin);

  window.addEventListener("resize", resizeEvent);

  id("snippetDetails").style.visibility = "hidden";

  var elementLength = singleElement.length,
    categoryLength = singleCategory.length,
    periodLength = singlePeriod.length,
    groupLength = singleGroup.length;

  for (var i = 0; i < elementLength; i++) {
    singleElement[i].addEventListener("mouseenter", setOutline, false);
    singleElement[i].addEventListener("mouseleave", removeOutline, false);
  }

  for (var i = 0; i < categoryLength; i++) {
    singleCategory[i].addEventListener("mouseenter", setOpacity15, false);
    singleCategory[i].addEventListener("mouseleave", setOpacity100, false);
  }

  for (var i = 0; i < periodLength; i++) {
    if (langValue === "ar" || langValue === "fa" || langValue === "he")
      singlePeriod[i].textContent = getNum(singlePeriod[i].textContent);
    singlePeriod[i].addEventListener("mouseenter", setOpacity15, false);
    singlePeriod[i].addEventListener("mouseleave", setOpacity100, false);
  }

  for (var i = 0; i < groupLength; i++) {
    if (langValue === "ar" || langValue === "fa" || langValue === "he")
      singleGroup[i].textContent = getNum(singleGroup[i].textContent);
    singleGroup[i].addEventListener("mouseenter", setOpacity15, false);
    singleGroup[i].addEventListener("mouseleave", setOpacity100, false);
  }

  if (langValue === "ar" || langValue === "fa" || langValue === "he") {
    for (var i = 0; i < singleNum.length; i++)
      singleNum[i].textContent = getNum(singleNum[i].textContent);

    for (var i = 0; i < singleWt.length; i++)
      singleWt[i].textContent = getNum(singleWt[i].textContent);
  }
  
  var eleTD = cls("elements");
  for (var i = 0; i < eleTD.length; i++)
    eleTD[i].href =  "element.html?num=" + eleTD[i].id.replace("element", "") + (urlLang === "en" ? "" : "&lang=" + urlLang);

  defaultName = localStorage.getItem("defaultName");

  if (!defaultName) {
    localStorage.setItem("defaultName", "off");
    defaultName = "off";
  }

  defaultAtmNo = localStorage.getItem("defaultAtmNo");

  if (!defaultAtmNo) {
    localStorage.setItem("defaultAtmNo", "off");
    defaultAtmNo = "off";
  }

  id("nameSelectSetting").checked = (defaultName === "on") ? true : false;
  id("nameSelectSetting").addEventListener("change", setNm, false);

  id("atmNoSelectSetting").checked = (defaultAtmNo === "on") ? true : false;
  id("atmNoSelectSetting").addEventListener("change", setAtmNo, false);

  id("marginSetting").addEventListener("change", setMargin, false);
  id("marginSetting").value = defaultMargin;

  setScenarios();
}

function setOpacity100() {
  setOpacity(1);
}

function setOpacity15() {
  var className = window[this.id];
  setOpacity(0.15);
  for (var i = 0; i < className.length; i++)
    className[i].style.opacity = 1;
  if (className === cls("r1") || className === cls("r2") || className === cls("r3") || className === cls("r4") || className === cls("r5") || className === cls("r6") || className === cls("r7"))
    id("periodHeader").style.opacity = 1;
  if (className === group1 || className === group2 || className === group3 || className === group4 || className === group5 || className === group6 ||
    className === group7 || className === group8 || className === group9 || className === group10 || className === group11 || className === group12 ||
    className === group13 || className === group14 || className === group15 || className === group16 || className === group17 || className === group18)
    id("groupHeader").style.opacity = 1;
}

function setNm() {
  defaultName = id("nameSelectSetting").checked ? "on" : "off";
  localStorage.setItem("defaultName", defaultName);
  setScenarios();
}

function setAtmNo() {
  defaultAtmNo = id("atmNoSelectSetting").checked ? "on" : "off";
  localStorage.setItem("defaultAtmNo", defaultAtmNo);
  setScenarios();
}

function setMargin() {
  defaultMargin = id("marginSetting").value;
  localStorage.setItem("defaultMargin", defaultMargin);
  setSize(defaultMargin);
}

function setScenarios() {
  // scenario 1 - Name and AtmNo off
  // scenario 2 - Name off, AtmNo on
  // scenario 3 - Name on, AtmNo off
  // scenario 4 - Name and AtmNo on

  defaultAtmNo = localStorage.getItem("defaultAtmNo");
  defaultName = localStorage.getItem("defaultName");
  var scenario;
  var singleSym = cls("eleSym");
  var singleNm = cls("eleNm");

  if (defaultName === "off")
    scenario = (defaultAtmNo === "off") ? "scenario1" : "scenario2";
  else
    scenario = (defaultAtmNo === "off") ? "scenario3" : "scenario4";

  for (var i = 0; i < singleNum.length; i++) {
    if (scenario === "scenario1")
      singleNum[i].style.fontSize = "0.84em";
    else if (scenario === "scenario4")
      singleNum[i].style.fontSize = "0.78em";
    else
      singleNum[i].style.fontSize = "0.8em";
  }

  for (var i = 0; i < singleSym.length; i++) {
    if (scenario === "scenario1") {
      singleSym[i].style.fontSize = "1.33em";
      singleSym[i].style.paddingTop = "10%";
    } else if (scenario === "scenario4") {
      singleSym[i].style.fontSize = "1.14em";
      singleSym[i].style.paddingTop = "0%";
    } else {
      singleSym[i].style.fontSize = "1.21em";
      singleSym[i].style.paddingTop = "2%";
    }
  }

  for (var i = 0; i < singleWt.length; i++) {
    if (defaultAtmNo === "off")
      singleWt[i].style.display = "none";
    else {
      singleWt[i].style.display = "block";
      singleWt[i].style.fontSize = (scenario === "scenario4") ? "0.56em" : "0.64em";
      singleWt[i].style.paddingTop = (scenario === "scenario4") ? "0%" : "15%";
      if (defaultPunc === "comma")
        singleWt[i].textContent = singleWt[i].textContent.replace(/\./g, ",");
    }
  }

  for (var i = 0; i < singleNm.length; i++) {
    if (defaultName === "off")
      singleNm[i].style.display = "none";
    else {
      singleNm[i].style.display = "block";
      singleNm[i].style.fontSize = (scenario === "scenario4") ? "0.56em" : "0.64em";
      singleNm[i].style.paddingTop = (scenario === "scenario4") ? "0%" : "15%";
    }
  }

  setSize(defaultMargin);
}

function setOpacity(percent) {
  for (var i = 0; i < singleElement.length; i++)
    singleElement[i].style.opacity = percent;
  for (var i = 0; i < singleCategory.length; i++)
    singleCategory[i].style.opacity = percent;
  for (var i = 0; i < singleGroup.length; i++)
    singleGroup[i].style.opacity = percent;
  for (var i = 0; i < singlePeriod.length; i++)
    singlePeriod[i].style.opacity = percent;
  id("lanthanides").style.opacity = percent;
  id("actinides").style.opacity = percent;
  id("star1").style.opacity = percent;
  id("star2").style.opacity = percent;
  id("groupHeader").style.opacity = percent;
  id("periodHeader").style.opacity = percent;
}

function setOutline() {
  var element = this.id;
  var tempClass = id(element).className.replace("elements ", "");
  var colClass = tempClass.substring(0, tempClass.indexOf(" "));
  var elementColor;

  switch (colClass) {
    case "alkaliMetals":
      elementColor = "rgba(" + color10 + ",0.5)";
      break;
    case "alkalineEarthMetals":
      elementColor = "rgba(" + color8 + ",0.5)";
      break;
    case "transitionMetals":
      elementColor = "rgba(" + color1 + ",0.5)";
      break;
    case "postTransitionMetals":
      elementColor = "rgba(" + color9 + ",0.5)";
      break;
    case "otherNonmetals":
      elementColor = "rgba(" + color6 + ",0.5)";
      break;
    case "metalloids":
      elementColor = "rgba(" + color2 + ",0.5)";
      break;
    case "halogens":
      elementColor = "rgba(" + color7 + ",0.5)";
      break;
    case "nobleGases":
      elementColor = "rgba(" + color5 + ",0.5)";
      break;
    case "lanthanides":
      elementColor = "rgba(" + color3 + ",0.5)";
      break;
    case "actinides":
      elementColor = "rgba(" + color4 + ",0.5)";
      break;
  }

  if (document.documentElement.getAttribute('data-style') === "2"){
    id("snippet").style.backgroundColor = "transparent";
    id("details").style.backgroundColor = "transparent";
    id("snippet").style.border = "none";
    id("details").style.border = "none";
    id("snippet").style.borderBottom = "0.125em solid " + elementColor;
    id("details").style.borderBottom = "0.125em solid " + elementColor;
  }
  else if (document.documentElement.getAttribute('data-style') === "3") {
    id("snippet").style.backgroundColor = "transparent";
    id("details").style.backgroundColor = "transparent";
    id("snippet").style.border = "0.125em solid " + elementColor;
    id("details").style.border = "0.125em solid " + elementColor;
  }
  else{
    id("snippet").style.backgroundColor = elementColor;
    id("details").style.backgroundColor = elementColor;
    id("snippet").style.border = "none";
    id("details").style.border = "none";
  }
  // var eleId = returnItem(element.replace("element", "ele"));
  var eleId = returnItem(element.replace("element", ""));

  id("snippetNum").innerHTML = getNum(eleId.num);
  id("snippetSym").innerHTML = eleId.sym;
  id("snippetWt").innerHTML = getNum(eleId.aWt).toString();

  id("detailRow1").innerHTML = window[eleId.nme];
  var eleYear = eleId.yr + "";


  if (eleYear.indexOf(" ") > 0) {
    if (langValue === "zs")
      eleYear = "公元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    else if (langValue === "ko")
      eleYear = "기원전 " + eleYear.substring(0, eleYear.indexOf(" ")) + "년";
    else if (langValue === "ja")
      eleYear = "紀元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    else if (langValue === "kk")
      eleYear = "б.з.д" + eleYear.substring(0, eleYear.indexOf(" ")) + "ж.";
    else if (langValue === "hu" || langValue === "tr" || langValue === "ms" || langValue === "th")
      eleYear = BC + " " + eleYear.substring(0, eleYear.indexOf(" "));
    else
      eleYear = eleYear.substring(0, eleYear.indexOf(" ")) + " " + BC;
  } else {
    if (langValue === "ko")
      eleYear = eleYear + "년";
  }

  id("valueRow2").innerHTML = eleYear;
  id("valueRow3").innerHTML = getTemp(eleId.mlt);
  id("valueRow4").innerHTML = getTemp(eleId.bln);
  id("valueRow5").innerHTML = getNum(eleId.elc);
  id("valueRow6").innerHTML = eleId.cnf;
  id(element).style.outline = "2px solid #505050";
  id(element).style.opacity = "0.75";
  id("snippetDetails").style.visibility = "visible";
}

function removeOutline() {
  var element = this.id;
  if (id("snippet")) {
    id(element).style.outline = "none";
    id("snippetDetails").style.visibility = "hidden";
    id(element).style.opacity = "1";
  }
}

function resizeEvent() {
  setSize(defaultMargin);
}

function setSize(tablePercent) {
  var pageWidth = id("headerwrap").clientWidth; //(document.body.scrollWidth || document.documentElement.clientWidth || document.body.clientWidth);

  var pageHeight = (window.innerHeight || document.documentElement.clientHeight) - 70;

  var clientWidth, individualWidth;

  clientWidth = (pageHeight < pageWidth) ? (pageWidth * tablePercent) : (pageHeight * 1.8);

  id("ptable").style.marginLeft = (pageHeight < pageWidth) ? ((pageWidth * (1 - tablePercent)) / 2 + "px") : "0px";
  id("ptable").style.width = clientWidth + "px";

  individualWidth = (clientWidth / 21);

  for (var i = 0; i < singleGroup.length; i++) {
    singleGroup[i].style.width = individualWidth + "px";
    singleGroup[i].style.height = individualWidth + "px";
  }
  for (var i = 0; i < singlePeriod.length; i++) {
    singlePeriod[i].style.width = individualWidth + "px";
    singlePeriod[i].style.height = individualWidth + "px";
  }
  for (var i = 0; i < outerElement.length; i++) {
    outerElement[i].style.width = individualWidth + "px";
    outerElement[i].style.height = individualWidth + "px";
  }

  var newWidth = individualWidth - (clientWidth * 0.003);

  for (var i = 0; i < singleElement.length; i++) {
    singleElement[i].style.width = newWidth + "px";
    singleElement[i].style.height = newWidth + "px";
  }

  id("groupPeriod").style.width = (individualWidth * 2) + "px";
  id("ptable").style.fontSize = (individualWidth / 4) + "px";
}

function aboutLoad() {
  initializePage();
  id("homeTitle").textContent = about + " - " + homeHeader;
  
  id("about").textContent = about;
  id("contact").textContent = contact;
  id("line1").textContent = line1;
  id("line2").textContent = line2;
  id("versionHist").textContent = changelog;
  id("suppLang").textContent = languages;
  id("langList").textContent = enTrans + '; ' + arTrans + '; ' + bgTrans + '; ' + caTrans + '; ' + csTrans + '; ' + daTrans + '; ' + deTrans + '; ' + elTrans + '; ' +
    esTrans + '; ' + faTrans + '; ' + fiTrans + '; ' + frTrans + '; ' + heTrans + '; ' + hiTrans + '; ' + hrTrans + '; ' + huTrans + '; ' + idTrans + '; ' + itTrans + '; ' +
  jaTrans + '; ' + koTrans + '; ' + msTrans + '; ' + nlTrans + '; ' + nnTrans + '; ' + plTrans + '; ' + ptTrans + '; ' + roTrans + '; ' + ruTrans + '; ' + skTrans + '; ' +
  slTrans + '; ' + srTrans + '; ' + svTrans + '; ' + thTrans + '; ' + trTrans + '; ' + ukTrans + '; ' + viTrans + '; ' + zhTrans + '; ' + chTrans + ';';

  id("feature1").textContent = feature1;
  id("feature2").textContent = feature2;
  id("feature3").textContent = feature3;
  id("feature4").textContent = feature4;
  id("feature5").textContent = feature5;
  id("feature6").textContent = feature6;
  id("feature7").textContent = feature7;
  //  id("feature8").textContent = feature8;
  id("feature9").textContent = feature9;
  //  id("feature10").textContent = feature10;
  id("pageHeader").textContent = about;
}

function pg404Load() {
  initializePage();
  id("homeTitle").textContent = "Page Not Found" + " - " + homeHeader;

  id("main404").textContent = "Page Not Found";
}

function storeLoad() {
  initializePage();
  id("homeTitle").textContent = store + " - " + homeHeader;

  id("pageHeader").textContent = store;
}

function privacyLoad() {
  initializePage();
  id("homeTitle").textContent = privacy + " - " + homeHeader;

  id("pageHeader").textContent = privacy;
  
  id("privacyHeader").textContent = privacy;
  id("privacyPolicy").textContent = privacyFull;
}

function solubilityLoad(){
  initializePage();
  id("homeTitle").textContent = "Solubility Chart" + " - " + homeHeader;

  id("pageHeader").textContent = "Solubility Chart";
}

function reactivityLoad(){  
  initializePage();
  id("homeTitle").textContent = "Reactivity Series" + " - " + homeHeader;

  id("pageHeader").textContent = "Reactivity Series";
}
  

function translationLoad() {
  initializePage();
  id("homeTitle").textContent = translation + " - " + homeHeader;

  id("pageHeader").textContent = translation;
}

function creditsLoad() {
  initializePage();
  id("homeTitle").textContent = credits + " - " + homeHeader;

  id("pageHeader").textContent = credits;
  id("credits").textContent = credits;
  id("translation").textContent = translation;

  id("zhTrans").textContent = zhTrans;
  id("esTrans").textContent = esTrans;
  id("itTrans").textContent = itTrans;
  id("nlTrans").textContent = nlTrans;
  id("ruTrans").textContent = ruTrans;
  id("koTrans").textContent = koTrans;
  id("huTrans").textContent = huTrans;
  id("deTrans").textContent = deTrans;
  id("skTrans").textContent = skTrans;
  id("ukTrans").textContent = ukTrans;
  id("viTrans").textContent = viTrans;
  id("faTrans").textContent = faTrans;
  id("roTrans").textContent = roTrans;
  id("ptTrans").textContent = ptTrans;
  id("fiTrans").textContent = fiTrans;
  id("bgTrans").textContent = bgTrans;
  id("idTrans").textContent = idTrans;
  id("trTrans").textContent = trTrans;
  id("csTrans").textContent = csTrans;
  id("jaTrans").textContent = jaTrans;
  id("caTrans").textContent = caTrans;
  id("srTrans").textContent = srTrans;
  id("frTrans").textContent = frTrans;
  id("nnTrans").textContent = nnTrans;
  id("hiTrans").textContent = hiTrans;
  id("chTrans").textContent = chTrans;
  id("arTrans").textContent = arTrans;
  id("plTrans").textContent = plTrans;
  id("svTrans").textContent = svTrans;
  id("elTrans").textContent = elTrans;
  id("daTrans").textContent = daTrans;
  id("thTrans").textContent = thTrans;
  id("heTrans").textContent = heTrans;
  id("slTrans").textContent = slTrans;
  id("hrTrans").textContent = hrTrans;
  id("msTrans").textContent = msTrans;
}

function printablesLoad() {
  initializePage();
  id("homeTitle").textContent = "Printables" + " - " + homeHeader;

  id("pageHeader").textContent = "Printables";
  id("printablesHeader").textContent =  "Printables";
  // id("printables").innerHTML =  "Periodic Table Poster for Download<br>High quality periodic table images<br>Available in below languages<br>PNG, JPG, PDF (F 5wq1e2)";


  // var cssLink = document.createElement("link") 
  // cssLink.href = "style.min.css"; 
  // cssLink.rel = "stylesheet"; 
  // cssLink.type = "text/css"; 

  //Instead of this
  //frames['frame1'].document.body.appendChild(cssLink);
  //Do this

  // var myIframe = document.getElementById('gumroad-embed-iframe-RsUKZ');

  // waitForElement("gumroad-embed-iframe-RsUKZ", function(){
  //     console.log("Available now");
  // });
}

// function waitForElement(elementId, callback){
//   var poops = setInterval(function(){
//       if(id(elementId)){
//           clearInterval(poops);
//           callback();
//       }
//   }, 100);
// }

// Compare

function compareLoad() {
  initializePage();
  id("homeTitle").textContent = compare + " - " + homeHeader;

  id("pageHeader").textContent = compare;

  id("labelName").textContent = labelName;
  id("labelSymbol").textContent = labelSymbol;
  id("labelAtmNoMain").textContent = labelAtmNoMain;
  id("group").textContent = group;
  id("period").textContent = period;
  id("block").textContent = block;
  id("labelCrustMain").textContent = labelCrustMain;
  id("labelUniverseMain").textContent = labelUniverseMain;

  id("labelGeneralProp").textContent = labelGeneralProp;
  id("labelAtmWtMain").textContent = labelAtmWtMain;
  id("labelCategoryMain").textContent = labelCategoryMain;
  id("labelColorMain").textContent = labelColorMain;
  id("labelRadioMain").textContent = labelRadioMain;
  id("labelStructureMain").textContent = labelStructureMain;

  id("labelPhysicalProp").textContent = labelPhysicalProp;
  id("labelDensityMain").textContent = labelDensityMain;
  id("labelDensity").innerHTML = labelDensity;
  id("labelPhaseMain").textContent = labelPhaseMain;
  id("labelMeltingMain").textContent = labelMeltingMain;
  id("labelBoilingMain").textContent = labelBoilingMain;
  id("labelFusionMain").textContent = labelFusionMain;
  id("labelFusion1").textContent = labelFusion;
  id("labelFusion2").textContent = labelFusion;
  id("labelVaporizationMain").textContent = labelVaporizationMain;
  id("labelSpecificMain").textContent = labelSpecificMain;
  id("labelSpecific").textContent = labelSpecific;

  id("labelAtomicProp").textContent = labelAtomicProp;
  id("labelRadiusMain").textContent = labelRadiusMain;
  id("labelCovalentMain").textContent = labelCovalentMain;
  id("labelElectronegativityMain").textContent = labelElectronegativityMain;
  id("pauling").textContent = pauling;
  id("labelIonizationMain").textContent = labelIonizationMain;
  id("labelIonization").textContent = labelIonization;
  id("labelVolumeMain").textContent = labelVolumeMain;
  id("labelVolume").innerHTML = labelVolume;
  id("labelThermalMain").textContent = labelThermalMain;
  id("labelThermal").textContent = labelThermal;
  id("labelOxidationMain").textContent = labelOxidationMain;
  id("labelConfigMain").textContent = labelConfigMain;
  id("labelElectronsMain").textContent = labelElectronsMain;

  id("firstElement").addEventListener("change", firstChanged, false);
  id("secondElement").addEventListener("change", secondChanged, false);

  var firstElement = id("firstElement");
  var secondElement = id("secondElement");

  var options = [];
  var option = document.createElement("option");

  var newRawData = rawData;

  newRawData.sort(function(a, b) {
    if (window[a.nme] < window[b.nme])
      return -1;
    else if (window[a.nme] > window[b.nme])
      return 1;
    return 0;
  });

  for (var j = 0; j < newRawData.length; j++) {
    option.text = window[newRawData[j].nme];
    option.value = newRawData[j].id.replace("ele", "");
    options.push(option.outerHTML);
  }

  firstElement.insertAdjacentHTML("beforeEnd", options.join("\n"));
  secondElement.insertAdjacentHTML("beforeEnd", options.join("\n"));

  firstChanged();
  secondChanged();
}

function firstChanged() {
  var firstElement = id("firstElement").value;
  // var firstDetails = returnItem("ele" + firstElement);
  var firstDetails = returnItem(firstElement);

  id("atmNo1").textContent = getNum(firstDetails.num);
  id("name1").textContent = window[firstDetails.nme];
  id("compEle1").href = "element.html?num=" + firstDetails.num + (urlLang === "en" ? "" : "&lang=" + urlLang);
  id("symbol1").textContent = firstDetails.sym;
  id("periods1").textContent = getNum(firstDetails.prd);
  id("block1").textContent = firstDetails.blk;
  id("atmWeight1").textContent = getNum(firstDetails.aWt);
  id("category1").textContent = window[firstDetails.ctg];
  id("eleColor1").textContent = window[firstDetails.clr];
  id("radioactive1").textContent = window[firstDetails.rdo];
  id("structure1").textContent = window[firstDetails.stc];
  id("density1").textContent = getNum(firstDetails.dns);
  id("phase1").textContent = window[firstDetails.phs];
  mlt1 = firstDetails.mlt;
  bln1 = firstDetails.bln;
  setDegreesFirst();
  id("spHeat1").textContent = getNum(firstDetails.spc);
  id("atmRadius1").textContent = (firstDetails.aRd === "-") ? "-" : getNum(firstDetails.aRd) + " pm";
  id("covRadius1").textContent = (firstDetails.cRd === "-") ? "-" : getNum(firstDetails.cRd) + " pm";
  id("eleNeg1").textContent = getNum(firstDetails.eNg);
  id("ionization1").textContent = getNum(firstDetails.ion);
  id("volume1").textContent = getNum(firstDetails.vol);
  id("theCond1").textContent = getNum(firstDetails.trm);
  id("oxidation1").textContent = getNum(firstDetails.oxi);
  id("elecConfig1").innerHTML = firstDetails.cnf;
  id("electrons1").textContent = getNum(firstDetails.elc);

  id("groups1").innerHTML = (firstDetails.grp === "na") ? na : getNum(firstDetails.grp);
  id("crust1").innerHTML = (firstDetails.crt === "na") ? na : getNum(firstDetails.crt);
  id("universe1").innerHTML = (firstDetails.uni === "na") ? na : getNum(firstDetails.uni);
  id("fusion1").innerHTML = (firstDetails.fsn === "na") ? na : getNum(firstDetails.fsn);
  id("vaporization1").innerHTML = (firstDetails.vpn === "na") ? na : getNum(firstDetails.vpn);
}

function secondChanged() {
  var secondElement = id("secondElement").value;
  // var secondDetails = returnItem("ele" + secondElement);
  var secondDetails = returnItem(secondElement);

  id("atmNo2").textContent = getNum(secondDetails.num);
  id("name2").textContent = window[secondDetails.nme];
  id("compEle2").href = "element.html?num=" + secondDetails.num + (urlLang === "en" ? "" : "&lang=" + urlLang);
  id("symbol2").textContent = secondDetails.sym;
  id("periods2").textContent = getNum(secondDetails.prd);
  id("block2").textContent = secondDetails.blk;
  id("atmWeight2").textContent = getNum(secondDetails.aWt);
  id("category2").textContent = window[secondDetails.ctg];
  id("eleColor2").textContent = window[secondDetails.clr];
  id("radioactive2").textContent = window[secondDetails.rdo];
  id("structure2").textContent = window[secondDetails.stc];
  id("density2").textContent = getNum(secondDetails.dns);
  id("phase2").textContent = window[secondDetails.phs];
  mlt2 = secondDetails.mlt;
  bln2 = secondDetails.bln;
  setDegreesSecond();
  id("spHeat2").textContent = getNum(secondDetails.spc);
  id("atmRadius2").textContent = (secondDetails.aRd === "-") ? "-" : getNum(secondDetails.aRd) + " pm";
  id("covRadius2").textContent = (secondDetails.cRd === "-") ? "-" : getNum(secondDetails.cRd) + " pm";
  id("eleNeg2").textContent = getNum(secondDetails.eNg);
  id("ionization2").textContent = getNum(secondDetails.ion);
  id("volume2").textContent = getNum(secondDetails.vol);
  id("theCond2").textContent = getNum(secondDetails.trm);
  id("oxidation2").textContent = getNum(secondDetails.oxi);
  id("elecConfig2").innerHTML = secondDetails.cnf;
  id("electrons2").textContent = getNum(secondDetails.elc);

  id("groups2").innerHTML = (secondDetails.grp === "na") ? na : getNum(secondDetails.grp);
  id("crust2").innerHTML = (secondDetails.crt === "na") ? na : getNum(secondDetails.crt);
  id("universe2").innerHTML = (secondDetails.uni === "na") ? na : getNum(secondDetails.uni);
  id("fusion2").innerHTML = (secondDetails.fsn === "na") ? na : getNum(secondDetails.fsn);
  id("vaporization2").innerHTML = (secondDetails.vpn === "na") ? na : getNum(secondDetails.vpn);
}

function setDegreesFirst() {
  id("meltPoint1").textContent = getTemp(mlt1);
  id("boilPoint1").textContent = getTemp(bln1);
}

function setDegreesSecond() {
  id("meltPoint2").textContent = getTemp(mlt2);
  id("boilPoint2").textContent = getTemp(bln2);
}


// List

function setFade() {
  var element = this.id;
  id(element).style.opacity = "0.75";
}

function removeFade() {
  var element = this.id;
  id(element).style.opacity = "1";
}

function listLoad() {
  initializePage();
  id("homeTitle").textContent = list + " - " + homeHeader;

  id("pageHeader").textContent = list;
  id("sortNumber").textContent = sortNumber;
  id("sortName").textContent = sortName;
  id("sortSymbol").textContent = sortSymbol;
  id("searchText").placeholder = search;

  id("buttonSortNum").addEventListener("click", sortByNumber, false);
  id("buttonSortName").addEventListener("click", sortByName, false);
  id("buttonSortSym").addEventListener("click", sortBySymbol, false);

  var listContent = cls("listName");

  for (var i = 0; i < listContent.length; i++) {
    listContent[i].addEventListener("mouseenter", setFade, false);
    listContent[i].addEventListener("mouseleave", removeFade, false);
  }

  var listNumbers = cls("listNum");

  if (langValue === "ar" || langValue === "fa" || langValue === "he") {
    for (var i = 0; i < listNumbers.length; i++) {
      for (var j = 0; j < listNumbers[i].childNodes.length; j++)
        listNumbers[i].childNodes[j].textContent = getNum(listNumbers[i].childNodes[j].textContent)
    }
  }

  
  var elementList = cls("elementList");
  for (var i = 0; i < elementList.length; i++)
    elementList[i].href =  "element.html?num=" + elementList[i].id.replace("elementList", "") + (urlLang === "en" ? "" : "&lang=" + urlLang);

  id("eleList1").innerHTML = hydrogen;
  // id("elementList1").href = "element.html?num=" + "1" + (urlLang === "en" ? "" : "&lang=" + urlLang);
  id("eleList2").innerHTML = helium;
  id("eleList3").innerHTML = lithium;
  id("eleList4").innerHTML = beryllium;
  id("eleList5").innerHTML = boron;
  id("eleList6").innerHTML = carbon;
  id("eleList7").innerHTML = nitrogen;
  id("eleList8").innerHTML = oxygen;
  id("eleList9").innerHTML = fluorine;
  id("eleList10").innerHTML = neon;
  id("eleList11").innerHTML = sodium;
  id("eleList12").innerHTML = magnesium;
  id("eleList13").innerHTML = aluminium;
  id("eleList14").innerHTML = silicon;
  id("eleList15").innerHTML = phosphorus;
  id("eleList16").innerHTML = sulfur;
  id("eleList17").innerHTML = chlorine;
  id("eleList18").innerHTML = argon;
  id("eleList19").innerHTML = potassium;
  id("eleList20").innerHTML = calcium;
  id("eleList21").innerHTML = scandium;
  id("eleList22").innerHTML = titanium;
  id("eleList23").innerHTML = vanadium;
  id("eleList24").innerHTML = chromium;
  id("eleList25").innerHTML = manganese;
  id("eleList26").innerHTML = iron;
  id("eleList27").innerHTML = cobalt;
  id("eleList28").innerHTML = nickel;
  id("eleList29").innerHTML = copper;
  id("eleList30").innerHTML = zinc;
  id("eleList31").innerHTML = gallium;
  id("eleList32").innerHTML = germanium;
  id("eleList33").innerHTML = arsenic;
  id("eleList34").innerHTML = selenium;
  id("eleList35").innerHTML = bromine;
  id("eleList36").innerHTML = krypton;
  id("eleList37").innerHTML = rubidium;
  id("eleList38").innerHTML = strontium;
  id("eleList39").innerHTML = yttrium;
  id("eleList40").innerHTML = zirconium;
  id("eleList41").innerHTML = niobium;
  id("eleList42").innerHTML = molybdenum;
  id("eleList43").innerHTML = technetium;
  id("eleList44").innerHTML = ruthenium;
  id("eleList45").innerHTML = rhodium;
  id("eleList46").innerHTML = palladium;
  id("eleList47").innerHTML = silver;
  id("eleList48").innerHTML = cadmium;
  id("eleList49").innerHTML = indium;
  id("eleList50").innerHTML = tin;
  id("eleList51").innerHTML = antimony;
  id("eleList52").innerHTML = tellurium;
  id("eleList53").innerHTML = iodine;
  id("eleList54").innerHTML = xenon;
  id("eleList55").innerHTML = caesium;
  id("eleList56").innerHTML = barium;
  id("eleList57").innerHTML = lanthanum;
  id("eleList58").innerHTML = cerium;
  id("eleList59").innerHTML = praseodymium;
  id("eleList60").innerHTML = neodymium;
  id("eleList61").innerHTML = promethium;
  id("eleList62").innerHTML = samarium;
  id("eleList63").innerHTML = europium;
  id("eleList64").innerHTML = gadolinium;
  id("eleList65").innerHTML = terbium;
  id("eleList66").innerHTML = dysprosium;
  id("eleList67").innerHTML = holmium;
  id("eleList68").innerHTML = erbium;
  id("eleList69").innerHTML = thulium;
  id("eleList70").innerHTML = ytterbium;
  id("eleList71").innerHTML = lutetium;
  id("eleList72").innerHTML = hafnium;
  id("eleList73").innerHTML = tantalum;
  id("eleList74").innerHTML = tungsten;
  id("eleList75").innerHTML = rhenium;
  id("eleList76").innerHTML = osmium;
  id("eleList77").innerHTML = iridium;
  id("eleList78").innerHTML = platinum;
  id("eleList79").innerHTML = gold;
  id("eleList80").innerHTML = mercury;
  id("eleList81").innerHTML = thallium;
  id("eleList82").innerHTML = lead;
  id("eleList83").innerHTML = bismuth;
  id("eleList84").innerHTML = polonium;
  id("eleList85").innerHTML = astatine;
  id("eleList86").innerHTML = radon;
  id("eleList87").innerHTML = francium;
  id("eleList88").innerHTML = radium;
  id("eleList89").innerHTML = actinium;
  id("eleList90").innerHTML = thorium;
  id("eleList91").innerHTML = protactinium;
  id("eleList92").innerHTML = uranium;
  id("eleList93").innerHTML = neptunium;
  id("eleList94").innerHTML = plutonium;
  id("eleList95").innerHTML = americium;
  id("eleList96").innerHTML = curium;
  id("eleList97").innerHTML = berkelium;
  id("eleList98").innerHTML = californium;
  id("eleList99").innerHTML = einsteinium;
  id("eleList100").innerHTML = fermium;
  id("eleList101").innerHTML = mendelevium;
  id("eleList102").innerHTML = nobelium;
  id("eleList103").innerHTML = lawrencium;
  id("eleList104").innerHTML = rutherfordium;
  id("eleList105").innerHTML = dubnium;
  id("eleList106").innerHTML = seaborgium;
  id("eleList107").innerHTML = bohrium;
  id("eleList108").innerHTML = hassium;
  id("eleList109").innerHTML = meitnerium;
  id("eleList110").innerHTML = darmstadtium;
  id("eleList111").innerHTML = roentgenium;
  id("eleList112").innerHTML = copernicium;
  id("eleList113").innerHTML = nihonium;
  id("eleList114").innerHTML = flerovium;
  id("eleList115").innerHTML = moscovium;
  id("eleList116").innerHTML = livermorium;
  id("eleList117").innerHTML = tennessine;
  id("eleList118").innerHTML = oganesson;

  var options = {
    valueNames: ["listName", "listNum", "listSym"]
  };
  var userList = new List("mainList", options);
}

function sortFunc(var1, var2, var3) {
  var sortUp = "&nbsp;&nbsp;↑";
  var sortDown = "&nbsp;&nbsp;↓";

  id(var1).innerHTML = (id(var1).innerHTML === sortUp) ? sortDown : sortUp;
  id(var2).innerHTML = "";
  id(var3).innerHTML = "";
}

function sortByNumber() {
  sortFunc("sortNum", "sortNm", "sortSym");
}

function sortByName() {
  sortFunc("sortNm", "sortNum", "sortSym");
}

function sortBySymbol() {
  sortFunc("sortSym", "sortNm", "sortNum");
}

// Element

// function drawSvg() {
//   var b = document.querySelector("svelte-electron");
//   var val1 = -800
//   var val2 = 1600
//   var multiplier = 0

//   if (num > 86) multiplier = 0;
//   else if (num > 54) multiplier = 1;
//   else if (num > 36 && num != 46) multiplier = 2;
//   else if (num > 18) multiplier = 3;
//   else if (num > 10) multiplier = 4;
//   else if (num > 2) multiplier = 5;
//   else multiplier = 6;

//   val1 = -800 + multiplier * 80
//   val2 = 1600 - multiplier * 80 * 2

//   var textColor = getComputedStyle(document.body).getPropertyValue("--text-color");
//   var formBgColor = getComputedStyle(document.body).getPropertyValue("--form-bg-color");

//   b.setAttribute("num", num);
//   b.setAttribute("sym", sym);
//   b.setAttribute("fontcolor",formBgColor);
//   b.setAttribute("strokecolor", "rgba("+ textColor + ", 0.9)");
//   b.setAttribute("val1", val1);
//   b.setAttribute("val2", val2);
// }

function createSVGRing(radius, strokeColor){
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke-width', '8');
  circle.setAttribute('stroke', strokeColor);
  return circle
}

function createSVGAtom(x, y, strokeColor){
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', '25');
  circle.setAttribute('fill', strokeColor);
  return circle
}

function svgElectron(){
    var A45 = 0.7071;
    var A90sin = 1;
    var A90cos = 0;
    var A0sin = 0;
    var A0cos = 1;
    var A10sin = 0.173648178;
    var A10cos = 0.984807753;
    var A30sin = 0.5;
    var A30cos = 0.8660254;
    var A50sin = 0.766044443;
    var A50cos = 0.6427876;
    var A70sin = 0.93969262;
    var A70cos = 0.342020;
    var A11sin = 0.19509032201612826784828486847702;
    var A11cos = 0.98078528040323044912618223613424;
    var A22sin = 0.3826834323650897717284599840304;
    var A22cos = 0.92387953251128675612818318939679;
    var A33sin = 0.55557023301960222474283081394853;
    var A33cos = 0.83146961230254523707878837761791;

  var val1 = -800
  var val2 = 1600
  var multiplier = 0

  let rad1 = 230;
  let rad2 = 320;
  let rad3 = 410;
  let rad4 = 500;
  let rad5 = 590;
  let rad6 = 680;
  let rad7 = 770;
  
  var electronConf = id("electronConf");
  if(electronConf.childNodes[1])
    electronConf.removeChild(electronConf.childNodes[1]);
  
  if (num > 86) multiplier = 0;
  else if (num > 54) multiplier = 1;
  else if (num > 36 && num != 46) multiplier = 2;
  else if (num > 18) multiplier = 3;
  else if (num > 10) multiplier = 4;
  else if (num > 2) multiplier = 5;
  else multiplier = 6;

  val1 = -800 + multiplier * 80
  val2 = 1600 - multiplier * 80 * 2
  var textColor = getComputedStyle(document.body).getPropertyValue("--text-color");
  var formBgColor = getComputedStyle(document.body).getPropertyValue("--form-bg-color");
  var strokeColor = "rgba("+ textColor + ", 0.9)"
  // Testing for svg
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('viewBox', '-800 ' + val1 + ' 1600 ' + val2 + '');  
  svg.setAttribute('class', 'atom');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  // svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  
  electronConf.appendChild(svg);

  var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  var g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g1.setAttribute('class', 'one');
  var g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g2.setAttribute('class', 'two');
  var g3 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g3.setAttribute('class', 'three');
  var g4 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g4.setAttribute('class', 'four');
  var g5 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g5.setAttribute('class', 'five');
  var g6 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g6.setAttribute('class', 'six');
  var g7 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g7.setAttribute('class', 'seven');

  var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle1.setAttribute('class', 'nucleus');
  circle1.setAttribute('r', '130');
  circle1.setAttribute('fill', strokeColor);
  circle1.setAttribute('stroke', strokeColor);
  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('class', 'font-fam');
  text.setAttribute('x', '0');
  text.setAttribute('y', '0');
  text.setAttribute('alignment-baseline', 'middle');
  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('fill', formBgColor);
  var txt = document.createTextNode(sym);
  text.appendChild(txt);
  
  svg.appendChild(g);
  g.appendChild(circle1);
  g.appendChild(text);

  if (num > 86){
    g.appendChild(g7);
    g7.appendChild(createSVGRing(rad7, strokeColor));
  }
  if (num > 54){
    g.appendChild(g6);
    g6.appendChild(createSVGRing(rad6, strokeColor));
  }
  if (num > 36 && num != 46){
    g.appendChild(g5);
    g5.appendChild(createSVGRing(rad5, strokeColor));
  }
  if (num > 18){
    g.appendChild(g4);
    g4.appendChild(createSVGRing(rad4, strokeColor));
  }
  if (num > 10){
    g.appendChild(g3);
    g3.appendChild(createSVGRing(rad3, strokeColor));
  }
  if (num > 2){
    g.appendChild(g2);
    g2.appendChild(createSVGRing(rad2, strokeColor));
  }
    
  g.appendChild(g1);
  g1.appendChild(createSVGRing(rad1, strokeColor));

  if (num > 0)
  g1.appendChild(createSVGAtom(-A0sin * rad1, -A0cos * rad1, strokeColor));
      if (num > 1)
  g1.appendChild(createSVGAtom(A0sin * rad1, A0cos * rad1, strokeColor));
      if (num > 2)
  g2.appendChild(createSVGAtom(-A0sin* rad2, -A0cos* rad2, strokeColor));
      if (num > 3)
  g2.appendChild(createSVGAtom(A0sin* rad2, A0cos* rad2, strokeColor));
      if (num > 4)
  g2.appendChild(createSVGAtom(-A90sin* rad2, A90cos* rad2, strokeColor));
      if (num > 5)
  g2.appendChild(createSVGAtom(A90sin* rad2, A90cos* rad2, strokeColor));
      if (num > 6)
  g2.appendChild(createSVGAtom(-A45* rad2, -A45* rad2, strokeColor));
      if (num > 7)
  g2.appendChild(createSVGAtom(A45* rad2, -A45* rad2, strokeColor));
      if (num > 8)
  g2.appendChild(createSVGAtom(-A45* rad2, A45* rad2, strokeColor));
      if (num > 9)
  g2.appendChild(createSVGAtom(A45* rad2, A45* rad2, strokeColor));
  
      if (num > 10)
  g3.appendChild(createSVGAtom(-A0sin* rad3, -A0cos * rad3, strokeColor));
      if (num > 11)
  g3.appendChild(createSVGAtom(A0sin* rad3, A0cos * rad3, strokeColor));
      if (num > 12)
  g3.appendChild(createSVGAtom(-A10cos* rad3, -A10sin * rad3, strokeColor));
      if (num > 13)
  g3.appendChild(createSVGAtom(A10cos* rad3, -A10sin * rad3, strokeColor));
      if (num > 14)
  g3.appendChild(createSVGAtom(-A30cos* rad3, A30sin * rad3, strokeColor));
      if (num > 15)
  g3.appendChild(createSVGAtom(A30cos* rad3, A30sin * rad3, strokeColor));
      if (num > 16)
  g3.appendChild(createSVGAtom(-A50cos* rad3, -A50sin * rad3, strokeColor));
      if (num > 17)
  g3.appendChild(createSVGAtom(A50cos* rad3, -A50sin * rad3, strokeColor));
  
      if (num > 18)
  g4.appendChild(createSVGAtom(-A0sin* rad4, -A0cos * rad4, strokeColor));
      if (num > 19 && num != 24 && num != 29)
  g4.appendChild(createSVGAtom(-A0sin* rad4, A0cos * rad4, strokeColor));
  
      if (num > 20)
  g3.appendChild(createSVGAtom(-A50cos* rad3, A50sin * rad3, strokeColor));
      if (num > 21)
  g3.appendChild(createSVGAtom(A50cos* rad3, A50sin * rad3, strokeColor));
      if (num > 22)
  g3.appendChild(createSVGAtom(-A30cos* rad3, -A30sin * rad3, strokeColor));
      if (num > 23){
  g3.appendChild(createSVGAtom(A30cos* rad3, -A30sin * rad3, strokeColor));
  g3.appendChild(createSVGAtom(-A10cos* rad3, A10sin * rad3, strokeColor));
    }
  
      if (num > 25)
  g3.appendChild(createSVGAtom(A10cos* rad3, A10sin * rad3, strokeColor));
      if (num > 26)
  g3.appendChild(createSVGAtom(-A70cos* rad3, -A70sin * rad3, strokeColor));
      if (num > 27)
  g3.appendChild(createSVGAtom(A70cos* rad3, -A70sin * rad3, strokeColor));
      if (num > 28){
  g3.appendChild(createSVGAtom(-A70cos* rad3, A70sin * rad3, strokeColor));
  g3.appendChild(createSVGAtom(A70cos* rad3, A70sin * rad3, strokeColor));
    }
  
      if (num > 30)
  g4.appendChild(createSVGAtom(-A90sin* rad4, A90cos * rad4, strokeColor));
      if (num > 31)
  g4.appendChild(createSVGAtom(A90sin* rad4, A90cos * rad4, strokeColor));
      if (num > 32)
  g4.appendChild(createSVGAtom(-A45* rad4, -A45 * rad4, strokeColor));
      if (num > 33)
  g4.appendChild(createSVGAtom(A45* rad4, -A45 * rad4, strokeColor));
      if (num > 34)
  g4.appendChild(createSVGAtom(-A45* rad4, A45 * rad4, strokeColor));
      if (num > 35)
  g4.appendChild(createSVGAtom(A45* rad4, A45 * rad4, strokeColor));
  
      if (num > 36 && num != 46)
  g5.appendChild(createSVGAtom(-A0sin* rad5, -A0cos * rad5, strokeColor));
      if (num > 37 && num != 41 && num != 42 && num != 44 && num != 45 && num != 46 && num != 47)
  g5.appendChild(createSVGAtom(A0sin* rad5, A0cos * rad5, strokeColor));
  
      if (num > 38)
  g4.appendChild(createSVGAtom(-A22cos* rad4, -A22sin * rad4, strokeColor));
      if (num > 39)
  g4.appendChild(createSVGAtom(A22cos* rad4, -A22sin * rad4, strokeColor));
      if (num > 40){
  g4.appendChild(createSVGAtom(A22cos* rad4, A22sin * rad4, strokeColor));
  g4.appendChild(createSVGAtom(-A22cos* rad4, A22sin * rad4, strokeColor));
    }
  
      if (num > 41)
  g4.appendChild(createSVGAtom(-A22sin* rad4, -A22cos * rad4, strokeColor));
      if (num > 43){
  g4.appendChild(createSVGAtom(A22sin* rad4, -A22cos * rad4, strokeColor));
  g4.appendChild(createSVGAtom(-A22sin* rad4, A22cos * rad4, strokeColor));
    }
  
      if (num > 44)
  g4.appendChild(createSVGAtom(A22sin* rad4, A22cos * rad4, strokeColor));
      if (num > 45){
  g4.appendChild(createSVGAtom(-A11cos* rad4, -A11sin * rad4, strokeColor));
  g4.appendChild(createSVGAtom(A11cos* rad4, -A11sin * rad4, strokeColor));
    }
  
      if (num > 48)
  g5.appendChild(createSVGAtom(-A90sin* rad5, A90cos* rad5, strokeColor));
      if (num > 49)
  g5.appendChild(createSVGAtom(A90sin* rad5, A90cos* rad5, strokeColor));
      if (num > 50)
  g5.appendChild(createSVGAtom(-A45* rad5, -A45* rad5, strokeColor));
      if (num > 51)
  g5.appendChild(createSVGAtom(A45* rad5, -A45* rad5, strokeColor));
      if (num > 52)
  g5.appendChild(createSVGAtom(-A45* rad5, A45* rad5, strokeColor));
      if (num > 53)
  g5.appendChild(createSVGAtom(A45* rad5, A45* rad5, strokeColor));
      if (num > 54)
  g6.appendChild(createSVGAtom(-A0sin* rad6, -A0cos* rad6, strokeColor));
      if (num > 55 && num != 78 && num != 79)
  g6.appendChild(createSVGAtom(A0sin* rad6, A0cos* rad6, strokeColor));
      if (num > 56 && num != 59 && num != 60 && num != 61 && num != 62 && num != 63 && num != 65 && num != 66 && num != 67 && num != 68 && num != 69 && num != 70)
  g5.appendChild(createSVGAtom(-A22cos* rad5, -A22sin* rad5, strokeColor));
      if (num > 57)
  g4.appendChild(createSVGAtom(-A11sin* rad4, A11cos * rad4, strokeColor));
      if (num > 58){
  g4.appendChild(createSVGAtom(A33cos* rad4, A33sin * rad4, strokeColor));
  g4.appendChild(createSVGAtom(-A11sin* rad4, -A11cos * rad4, strokeColor));
    }
  
      if (num > 59)
  g4.appendChild(createSVGAtom(A33sin* rad4, -A33cos * rad4, strokeColor));
      if (num > 60)
  g4.appendChild(createSVGAtom(-A33cos* rad4, A33sin * rad4, strokeColor));
      if (num > 61)
  g4.appendChild(createSVGAtom(-A33sin* rad4, -A33cos * rad4, strokeColor));
      if (num > 62)
  g4.appendChild(createSVGAtom(A11sin* rad4, A11cos * rad4, strokeColor));
      if (num > 64){
  g4.appendChild(createSVGAtom(-A11cos* rad4, A11sin * rad4, strokeColor));
  g4.appendChild(createSVGAtom(A11cos* rad4, A11sin * rad4, strokeColor));
    }
  
      if (num > 65)
  g4.appendChild(createSVGAtom(A11sin* rad4, -A11cos * rad4, strokeColor));
      if (num > 66)
  g4.appendChild(createSVGAtom(-A33cos* rad4, -A33sin * rad4, strokeColor));
      if (num > 67)
  g4.appendChild(createSVGAtom(A33sin* rad4, A33cos * rad4, strokeColor));
      if (num > 68)
  g4.appendChild(createSVGAtom(A33cos* rad4, -A33sin * rad4, strokeColor));
      if (num > 69)
  g4.appendChild(createSVGAtom(-A33sin* rad4, A33cos * rad4, strokeColor));
      if (num > 71)
  g5.appendChild(createSVGAtom(A22cos* rad5, -A22sin* rad5, strokeColor));
      if (num > 72)
  g5.appendChild(createSVGAtom(A22cos* rad5, A22sin* rad5, strokeColor));
      if (num > 73)
  g5.appendChild(createSVGAtom(-A22cos* rad5, A22sin* rad5, strokeColor));
      if (num > 74)
  g5.appendChild(createSVGAtom(-A22sin* rad5, -A22cos* rad5, strokeColor));
      if (num > 75)
  g5.appendChild(createSVGAtom(A22sin* rad5, -A22cos* rad5, strokeColor));
      if (num > 76)
  g5.appendChild(createSVGAtom(-A22sin* rad5, A22cos* rad5, strokeColor));
      if (num > 77){
  g5.appendChild(createSVGAtom(A22sin* rad5, A22cos* rad5, strokeColor));
  g5.appendChild(createSVGAtom(-A11cos* rad5, -A11sin* rad5, strokeColor));
    }
  
      if (num > 78)
  g5.appendChild(createSVGAtom(A11cos* rad5, -A11sin* rad5, strokeColor)); 
      if (num > 80)
  g6.appendChild(createSVGAtom(-A10cos* rad6, -A10sin* rad6, strokeColor)); 
      if (num > 81)
  g6.appendChild(createSVGAtom(A10cos* rad6, -A10sin* rad6, strokeColor));
      if (num > 82)
  g6.appendChild(createSVGAtom(-A30cos* rad6, A30sin* rad6, strokeColor));
      if (num > 83)
  g6.appendChild(createSVGAtom(A30cos* rad6, A30sin* rad6, strokeColor)); 
      if (num > 84)
  g6.appendChild(createSVGAtom(-A50cos* rad6, -A50sin* rad6, strokeColor)); 
      if (num > 85)
  g6.appendChild(createSVGAtom(A50cos* rad6, -A50sin* rad6, strokeColor));
  
      if (num > 86)
  g7.appendChild(createSVGAtom(-A0sin* rad7, -A0cos* rad7, strokeColor));
      if (num > 87)
  g7.appendChild(createSVGAtom(A0sin* rad7, A0cos* rad7, strokeColor)); 
  
      if (num > 88 && num != 94 && num != 95 && num != 97 && num != 98 && num != 99 && num != 100 && num != 101 && num != 102 && num != 103)
  g6.appendChild(createSVGAtom(-A50cos* rad6, A50sin* rad6, strokeColor));
      if (num > 89 && num != 91 && num != 92 && num != 93 && num != 94 && num != 95 && num != 96 && num != 97 && num != 98 && num != 99 && num != 100 && num != 101 && num != 102 && num != 103)
  g6.appendChild(createSVGAtom(A50cos* rad6, A50sin* rad6, strokeColor));
  
      if (num > 90){
  g5.appendChild(createSVGAtom(-A11sin* rad5, A11cos* rad5, strokeColor)); 
  g5.appendChild(createSVGAtom(A33cos* rad5, A33sin* rad5, strokeColor));
}
  
      if (num > 91)
  g5.appendChild(createSVGAtom(-A11sin* rad5, -A11cos* rad5, strokeColor));
      if (num > 92)
  g5.appendChild(createSVGAtom(A33sin* rad5, -A33cos* rad5, strokeColor)); 
      if (num > 93){
  g5.appendChild(createSVGAtom(-A33cos* rad5, A33sin* rad5, strokeColor));
  g5.appendChild(createSVGAtom(-A33sin* rad5, -A33cos* rad5, strokeColor));
    }
  
      if (num > 94)
  g5.appendChild(createSVGAtom(A11sin* rad5, A11cos* rad5, strokeColor)); 
      if (num > 96)
  g5.appendChild(createSVGAtom(-A11cos* rad5, A11sin* rad5, strokeColor));
      if (num > 96)
  g5.appendChild(createSVGAtom(A11cos* rad5, A11sin* rad5, strokeColor));
      if (num > 97)
  g5.appendChild(createSVGAtom(A11sin* rad5, -A11cos* rad5, strokeColor));
      if (num > 98)
  g5.appendChild(createSVGAtom(-A33cos* rad5, -A33sin* rad5, strokeColor)); 
      if (num > 99)
  g5.appendChild(createSVGAtom(A33sin* rad5, A33cos* rad5, strokeColor)); 
      if (num > 100)
  g5.appendChild(createSVGAtom(A33cos* rad5, -A33sin* rad5, strokeColor)); 
      if (num > 101)
  g5.appendChild(createSVGAtom(-A33sin* rad5, A33cos* rad5, strokeColor));
  
      if (num > 102 && num != 104 && num != 105 && num != 106 && num != 107 && num != 108 && num != 109 && num != 110 && num != 111 && num != 112)
  g7.appendChild(createSVGAtom(-A90sin* rad7, A90cos* rad7, strokeColor)); 
  
      if (num > 104)
  g6.appendChild(createSVGAtom(-A30cos* rad6, -A30sin* rad6, strokeColor)); 
      if (num > 105)
  g6.appendChild(createSVGAtom(A30cos* rad6, -A30sin* rad6, strokeColor)); 
      if (num > 106)
  g6.appendChild(createSVGAtom(-A10cos* rad6, A10sin* rad6, strokeColor)); 
      if (num > 107)
  g6.appendChild(createSVGAtom(A10cos* rad6, A10sin* rad6, strokeColor)); 
      if (num > 108)
  g6.appendChild(createSVGAtom(-A70cos* rad6, -A70sin* rad6, strokeColor));
      if (num > 109)
  g6.appendChild(createSVGAtom(A70cos* rad6, -A70sin* rad6, strokeColor));
      if (num > 110)
  g6.appendChild(createSVGAtom(-A70cos* rad6, A70sin* rad6, strokeColor));
      if (num > 111)
  g6.appendChild(createSVGAtom(A70cos* rad6, A70sin* rad6, strokeColor));
  
      if (num > 113)
  g7.appendChild(createSVGAtom(A90sin* rad7, A90cos* rad7, strokeColor));
      if (num > 114)
  g7.appendChild(createSVGAtom(-A45* rad7, -A45* rad7, strokeColor));
      if (num > 115)
  g7.appendChild(createSVGAtom(A45* rad7, -A45* rad7, strokeColor));
      if (num > 116)
  g7.appendChild(createSVGAtom(-A45* rad7, A45* rad7, strokeColor)); 
      if (num > 117)
  g7.appendChild(createSVGAtom(A45* rad7, A45* rad7, strokeColor));
}

function elementLoad() {
  num = getQueryVariable("num") || "1";

  initializePage();
  id("elementPic").src = "images/placeholder.png"
  id("elementPicture").src = "images/placeholder.png"

  window.addEventListener("resize", resizeElement);

  // item = returnItem("ele" + num);
  item = returnItem(num);
  var eleName = item.id;

  var itemName = window[item.nme];
  id("homeTitle").textContent = itemName + " - " + homeHeader;

  id("group").textContent = group;
  id("period").textContent = period;
  id("block").textContent = block;

  id("labelGeneralProp").textContent = labelGeneralProp;
  id("labelAtmNoMain").textContent = labelAtmNoMain;
  id("labelAtmWtMain").textContent = labelAtmWtMain;
  id("labelMassNum").textContent = labelMassNum;
  id("labelCategoryMain").textContent = labelCategoryMain;
  id("labelColorMain").textContent = labelColorMain;
  id("labelRadioMain").textContent = labelRadioMain;
  id("labelStructureMain").textContent = labelStructureMain;

  id("labelElectronsMain").textContent = labelElectronsMain;
  id("labelConfigMain").textContent = labelConfigMain;

  id("labelPhysicalProp").textContent = labelPhysicalProp;
  id("labelPhaseMain").textContent = labelPhaseMain;
  id("labelDensityMain").textContent = labelDensityMain;
  id("labelMeltingMain").textContent = labelMeltingMain;
  id("labelBoilingMain").textContent = labelBoilingMain;
  id("labelFusionMain").textContent = labelFusionMain;
  id("labelVaporizationMain").textContent = labelVaporizationMain;
  id("labelSpecificMain").textContent = labelSpecificMain;

  id("history").textContent = hist;
  id("uses").textContent = uses;

  id("labelAtomicProp").textContent = labelAtomicProp;
  id("labelRadiusMain").textContent = labelRadiusMain;
  id("labelCovalentMain").textContent = labelCovalentMain;
  id("labelElectronegativityMain").textContent = labelElectronegativityMain;
  id("labelIonizationMain").textContent = labelIonizationMain;
  id("labelVolumeMain").textContent = labelVolumeMain;
  id("labelThermalMain").textContent = labelThermalMain;
  id("labelOxidationMain").textContent = labelOxidationMain;

  id("labelCrustMain").textContent = labelCrustMain;
  id("labelUniverseMain").textContent = labelUniverseMain;
  id("labelCASMain").textContent = labelCASMain;
  id("labelCIDMain").textContent = "PubChem CID Number";

  id("labelLinksMain").textContent = labelLinksMain;
  id("isotopes").textContent = isotopes;
  id("stableIsotopes").textContent = stableIsotopes;
  id("unstableIsotopes").textContent = unstableIsotopes;

  id("pageHeader").innerHTML = itemName;
  id("modalImage").textContent = itemName;
  id("elementReasonMain").innerHTML = window[eleName + "Reason"];
  id("elementFactsMain").innerHTML = window[eleName + "Facts"];
  id("elementHistoryMain").innerHTML = window[eleName + "History"];
  id("elementDangersMain").innerHTML = window[eleName + "Dangers"];
  id("elementUsesMain").innerHTML = window[eleName + "Uses"];

  id("outputGroup").textContent = (item.grp === "na") ? na : getNum(item.grp);

  id("outputCategoryMain").textContent = window[item.ctg];
  id("outputColorMain").textContent = window[item.clr];
  id("outputRadioMain").textContent = window[item.rdo];
  id("outputStructureMain").textContent = window[item.stc];

  id("outputPhaseMain").textContent = window[item.phs];
  id("outputDensityMain").innerHTML = (item.dns === "-") ? "-" : (getNum(item.dns) + " " + labelDensity);

  id("outputFusionMain").textContent = (item.fsn === "na") ? na : (getNum(item.fsn) + " " + labelFusion);
  id("outputVaporizationMain").textContent = (item.vpn === "na") ? na : (getNum(item.vpn) + " " + labelFusion);
  id("outputSpecificMain").textContent = (item.spc === "-") ? "-" : (getNum(item.spc) + " " + labelSpecific);

  id("outputElectronegativityMain").textContent = (item.eNg === "-") ? "-" : (getNum(item.eNg) + " (" + pauling + ")");
  id("outputIonizationMain").textContent = (item.ion === "-") ? "-" : (getNum(item.ion) + " " + labelIonization);
  id("outputVolumeMain").innerHTML = (item.vol === "-") ? "-" : (getNum(item.vol) + " " + labelVolume);
  id("outputThermalMain").textContent = (item.trm === "-") ? "-" : (getNum(item.trm) + " " + labelThermal);

  id("link1").href = wikiLink + itemName;
  id("link1").textContent = wiki;

  id("imgDesc").textContent = window[eleName + "Desc"];

  id("outputCrustMain").innerHTML = (item.crt === "na") ? na : getNum(item.crt);
  id("outputUniverseMain").innerHTML = (item.uni === "na") ? na : getNum(item.uni);

  id("outputCASMain").textContent = item.cas;
  id("outputCIDMain").textContent = (item.cid === "na") ? na : item.cid;

  id("protons").textContent =protons;
  id("electrons").textContent = electrons;
  id("neutrons").textContent =neutrons;

  var transNum = item.num;
  sym = item.sym;

  id("currentElement").innerHTML = sym;

  var previousNum = num - 1;
  var nextNum = num - (-1);

  if (num === "1") {
    id("previousElement").innerHTML = "&mdash;";
    id("previousElement").style.textDecoration = "none";
  } else {
    var previousElement = returnItem(previousNum);
    id("previousElement").innerHTML = window[previousElement.nme];
    id("previousElement").href = "element.html?num=" + previousNum + (urlLang === "en" ? "" : "&lang=" + urlLang);
  }

  if (num === "118") {
    id("nextElement").innerHTML = "&mdash;";
    id("nextElement").style.textDecoration = "none";
  } else {
    var nextElement = returnItem(nextNum);
    id("nextElement").innerHTML = window[nextElement.nme];
    id("nextElement").href = "element.html?num=" + nextNum + (urlLang === "en" ? "" : "&lang=" + urlLang);
  }

  var imageSrc = sym;
  switch (imageSrc) {
    case "Db":
    case "Fl":
    case "Lv":
    case "Mc":
    case "Ts":
    case "Og":
    case "Nh":
      imageSrc = "Db";
      break;
    case "At":
    case "Tc":
      imageSrc = "At";
      break;
    case "Po":
    case "Ra":
      imageSrc = "Po";
      break;
    case "Es":
    case "Fm":
      imageSrc = "Es";
      break;
    case "Cn":
    case "Ds":
    case "Hs":
    case "Mt":
    case "Rg":
      imageSrc = "Cn";
      break;
  }

 id("elementPic").src = "images/"+imageSrc +".jpg";
 id("elementPicture").src = "images/"+imageSrc +".jpg";

  var eleHighlight, eleStable, eleUnstable, eleCredits;
  var preLink = "<a class='underlineLink' target='_blank' rel='noopener' href=";

  switch (num) {
    case "1":
      eleStable = "<sup>1</sup>H, <sup>2</sup>H";
      eleUnstable = "<sup>3</sup>H, <sup>4</sup>H, <sup>5</sup>H, <sup>6</sup>H, <sup>7</sup>H";
      eleHighlight = "0,-60";
      eleCredits = preLink + "'http://images-of-elements.com/hydrogen.php'>Images-of-elements</a>";
      break;
    case "2":
      eleStable = "<sup>3</sup>He, <sup>4</sup>He";
      eleUnstable = "<sup>5</sup>He, <sup>6</sup>He, <sup>7</sup>He, <sup>8</sup>He, <sup>9</sup>He, <sup>10</sup>He";
      eleHighlight = "310,-60";
      eleCredits = preLink + "'http://images-of-elements.com/helium.php'>Images-of-elements</a>";
      break;
    case "3":
      eleUnstable = "<sup>4</sup>Li, <sup>5</sup>Li, <sup>8</sup>Li, <sup>9</sup>Li, <sup>10</sup>Li, <sup>11</sup>Li, <sup>12</sup>Li";
      eleStable = "<sup>6</sup>Li, <sup>7</sup>Li";
      eleHighlight = "0,-50";
      eleCredits = preLink + "'http://images-of-elements.com/lithium.php'>Images-of-elements</a>";
      break;
    case "4":
      eleUnstable = "<sup>5</sup>Be, <sup>6</sup>Be, <sup>7</sup>Be, <sup>8</sup>Be, <sup>10</sup>Be, <sup>11</sup>Be, <sup>12</sup>Be, <sup>13</sup>Be, <sup>14</sup>Be, <sup>15</sup>Be, <sup>16</sup>Be";
      eleStable = "<sup>9</sup>Be";
      eleHighlight = "10,-50";
      eleCredits = preLink + "'http://images-of-elements.com/beryllium.php'>Images-of-elements</a>";
      break;
    case "5":
      eleStable = "<sup>10</sup>B, <sup>11</sup>B";
      eleUnstable = "<sup>7</sup>B, <sup>8</sup>B, <sup>9</sup>B, <sup>12</sup>B, <sup>13</sup>B, <sup>14</sup>B, <sup>15</sup>B, <sup>16</sup>B, <sup>17</sup>B, <sup>18</sup>B, <sup>19</sup>B";
      eleHighlight = "260,-50";
      eleCredits = preLink + "'http://images-of-elements.com/boron.php'>Images-of-elements</a>";
      break;
    case "6":
      eleStable = "<sup>12</sup>C, <sup>13</sup>C";
      eleUnstable = "<sup>8</sup>C, <sup>9</sup>C, <sup>10</sup>C, <sup>11</sup>C, <sup>14</sup>C, <sup>15</sup>C, <sup>16</sup>C, <sup>17</sup>C, <sup>18</sup>C, <sup>19</sup>C, <sup>20</sup>C, <sup>21</sup>C, <sup>22</sup>C";
      eleHighlight = "270,-50";
      eleCredits = preLink + "'http://images-of-elements.com/carbon.php'>Images-of-elements</a>";
      break;
    case "7":
      eleUnstable = "<sup>10</sup>N, <sup>11</sup>N, <sup>12</sup>N, <sup>13</sup>N, <sup>16</sup>N, <sup>17</sup>N, <sup>18</sup>N, <sup>19</sup>N, <sup>20</sup>N, <sup>21</sup>N, <sup>22</sup>N, <sup>23</sup>N, <sup>24</sup>N, <sup>25</sup>N";
      eleStable = "<sup>14</sup>N, <sup>15</sup>N";
      eleHighlight = "280,-50";
      eleCredits = preLink + "'http://images-of-elements.com/nitrogen.php'>Images-of-elements</a>";
      break;
    case "8":
      eleUnstable = "<sup>12</sup>O, <sup>13</sup>O, <sup>14</sup>O, <sup>15</sup>O, <sup>19</sup>O, <sup>20</sup>O, <sup>21</sup>O, <sup>22</sup>O, <sup>23</sup>O, <sup>24</sup>O, <sup>25</sup>O, <sup>26</sup>O, <sup>27</sup>O, <sup>28</sup>O";
      eleStable = "<sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O";
      eleHighlight = "290,-50";
      eleCredits = preLink + "'http://images-of-elements.com/oxygen.php'>Images-of-elements</a>";
      break;
    case "9":
      eleUnstable = "<sup>14</sup>F, <sup>15</sup>F, <sup>16</sup>F, <sup>17</sup>F, <sup>18</sup>F, <sup>20</sup>F, <sup>21</sup>F, <sup>22</sup>F, <sup>23</sup>F, <sup>24</sup>F, <sup>25</sup>F, <sup>26</sup>F, <sup>27</sup>F, <sup>28</sup>F, <sup>29</sup>F, <sup>30</sup>F, <sup>31</sup>F";
      eleStable = "<sup>19</sup>F";
      eleHighlight = "300,-50";
      eleCredits = preLink + "'http://images-of-elements.com/fluorine.php'>Images-of-elements</a>";
      break;
    case "10":
      eleUnstable = "<sup>16</sup>Ne, <sup>17</sup>Ne, <sup>18</sup>Ne, <sup>19</sup>Ne, <sup>23</sup>Ne, <sup>24</sup>Ne, <sup>25</sup>Ne, <sup>26</sup>Ne, <sup>27</sup>Ne, <sup>28</sup>Ne, <sup>29</sup>Ne, <sup>30</sup>Ne, <sup>31</sup>Ne, <sup>32</sup>Ne, <sup>33</sup>Ne, <sup>34</sup>Ne";
      eleStable = "<sup>20</sup>Ne, <sup>21</sup>Ne, <sup>22</sup>Ne";
      eleHighlight = "310,-50";
      eleCredits = preLink + "'http://images-of-elements.com/neon.php'>Images-of-elements</a>";
      break;
    case "11":
      eleUnstable = "<sup>18</sup>Na, <sup>19</sup>Na, <sup>20</sup>Na, <sup>21</sup>Na, <sup>22</sup>Na, <sup>24</sup>Na, <sup>25</sup>Na, <sup>26</sup>Na, <sup>27</sup>Na, <sup>28</sup>Na, <sup>29</sup>Na, <sup>30</sup>Na, <sup>31</sup>Na, <sup>32</sup>Na, <sup>33</sup>Na, <sup>34</sup>Na, <sup>35</sup>Na, <sup>36</sup>Na, <sup>37</sup>Na";
      eleStable = "<sup>23</sup>Na";
      eleHighlight = "0,-40";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Na_(Sodium).jpg'>Wikimedia Commons (Dnn87)</a>";
      break;
    case "12":
      eleUnstable = "<sup>19</sup>Mg, <sup>20</sup>Mg, <sup>21</sup>Mg, <sup>22</sup>Mg, <sup>23</sup>Mg, <sup>27</sup>Mg, <sup>28</sup>Mg, <sup>29</sup>Mg, <sup>30</sup>Mg, <sup>31</sup>Mg, <sup>32</sup>Mg, <sup>33</sup>Mg, <sup>34</sup>Mg, <sup>35</sup>Mg, <sup>36</sup>Mg, <sup>37</sup>Mg, <sup>38</sup>Mg, <sup>39</sup>Mg, <sup>40</sup>Mg";
      eleStable = "<sup>24</sup>Mg, <sup>25</sup>Mg, <sup>26</sup>Mg";
      eleHighlight = "10,-40";
      eleCredits = preLink + "'http://images-of-elements.com/magnesium.php'>Images-of-elements</a>";
      break;
    case "13":
      eleUnstable = "<sup>21</sup>Al, <sup>22</sup>Al, <sup>23</sup>Al, <sup>24</sup>Al, <sup>25</sup>Al, <sup>26</sup>Al, <sup>28</sup>Al, <sup>29</sup>Al, <sup>30</sup>Al, <sup>31</sup>Al, <sup>32</sup>Al, <sup>33</sup>Al, <sup>34</sup>Al, <sup>35</sup>Al, <sup>36</sup>Al, <sup>37</sup>Al, <sup>38</sup>Al, <sup>39</sup>Al, <sup>40</sup>Al, <sup>41</sup>Al, <sup>42</sup>Al";
      eleStable = "<sup>27</sup>Al";
      eleHighlight = "260,-40";
      eleCredits = preLink + "'http://images-of-elements.com/aluminium.php'>Images-of-elements</a>";
      break;
    case "14":
      eleUnstable = "<sup>22</sup>Si, <sup>23</sup>Si, <sup>24</sup>Si, <sup>25</sup>Si, <sup>26</sup>Si, <sup>27</sup>Si, <sup>31</sup>Si, <sup>32</sup>Si, <sup>33</sup>Si, <sup>34</sup>Si, <sup>35</sup>Si, <sup>36</sup>Si, <sup>37</sup>Si, <sup>38</sup>Si, <sup>39</sup>Si, <sup>40</sup>Si, <sup>41</sup>Si, <sup>42</sup>Si, <sup>43</sup>Si, <sup>44</sup>Si";
      eleStable = "<sup>28</sup>Si, <sup>29</sup>Si, <sup>30</sup>Si";
      eleHighlight = "270,-40";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:SiliconCroda.jpg'>Wikimedia Commons (Enricoros)</a>";
      break;
    case "15":
      eleUnstable = "<sup>24</sup>P, <sup>25</sup>P, <sup>26</sup>P, <sup>27</sup>P, <sup>28</sup>P, <sup>29</sup>P, <sup>30</sup>P, <sup>32</sup>P, <sup>33</sup>P, <sup>34</sup>P, <sup>35</sup>P, <sup>36</sup>P, <sup>37</sup>P, <sup>38</sup>P, <sup>39</sup>P, <sup>40</sup>P, <sup>41</sup>P, <sup>42</sup>P, <sup>43</sup>P, <sup>44</sup>P, <sup>45</sup>P, <sup>46</sup>P";
      eleStable = "<sup>31</sup>P";
      eleHighlight = "280,-40";
      eleCredits = preLink + "'http://images-of-elements.com/phosphorus.php'>Images-of-elements</a>";
      break;
    case "16":
      eleUnstable = "<sup>26</sup>S, <sup>27</sup>S, <sup>28</sup>S, <sup>29</sup>S, <sup>30</sup>S, <sup>31</sup>S, <sup>35</sup>S, <sup>37</sup>S, <sup>38</sup>S, <sup>39</sup>S, <sup>40</sup>S, <sup>41</sup>S, <sup>42</sup>S, <sup>43</sup>S, <sup>44</sup>S, <sup>45</sup>S, <sup>46</sup>S, <sup>47</sup>S, <sup>48</sup>S, <sup>49</sup>S";
      eleStable = "<sup>32</sup>S, <sup>33</sup>S, <sup>34</sup>S, <sup>36</sup>S";
      eleHighlight = "290,-40";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Sulfur-sample.jpg'>Wikimedia Commons (Ben Mills)</a>";
      break;
    case "17":
      eleUnstable = "<sup>28</sup>Cl, <sup>29</sup>Cl, <sup>30</sup>Cl, <sup>31</sup>Cl, <sup>32</sup>Cl, <sup>33</sup>Cl, <sup>34</sup>Cl, <sup>36</sup>Cl, <sup>38</sup>Cl, <sup>39</sup>Cl, <sup>40</sup>Cl, <sup>41</sup>Cl, <sup>42</sup>Cl, <sup>43</sup>Cl, <sup>44</sup>Cl, <sup>45</sup>Cl, <sup>46</sup>Cl, <sup>47</sup>Cl, <sup>48</sup>Cl, <sup>49</sup>Cl, <sup>50</sup>Cl, <sup>51</sup>Cl";
      eleStable = "<sup>35</sup>Cl, <sup>37</sup>Cl";
      eleHighlight = "300,-40";
      eleCredits = preLink + "'http://images-of-elements.com/chlorine.php'>Images-of-elements</a>";
      break;
    case "18":
      eleUnstable = "<sup>30</sup>Ar, <sup>31</sup>Ar, <sup>32</sup>Ar, <sup>33</sup>Ar, <sup>34</sup>Ar, <sup>35</sup>Ar, <sup>37</sup>Ar, <sup>39</sup>Ar, <sup>41</sup>Ar, <sup>42</sup>Ar, <sup>43</sup>Ar, <sup>44</sup>Ar, <sup>45</sup>Ar, <sup>46</sup>Ar, <sup>47</sup>Ar, <sup>48</sup>Ar, <sup>49</sup>Ar, <sup>50</sup>Ar, <sup>51</sup>Ar, <sup>52</sup>Ar, <sup>53</sup>Ar";
      eleStable = "<sup>36</sup>Ar, <sup>38</sup>Ar, <sup>40</sup>Ar";
      eleHighlight = "310,-40";
      eleCredits = preLink + "'http://images-of-elements.com/argon.php'>Images-of-elements</a>";
      break;
    case "19":
      eleUnstable = "<sup>32</sup>K, <sup>33</sup>K, <sup>34</sup>K, <sup>35</sup>K, <sup>36</sup>K, <sup>37</sup>K, <sup>38</sup>K, <sup>40</sup>K, <sup>42</sup>K, <sup>43</sup>K, <sup>44</sup>K, <sup>45</sup>K, <sup>46</sup>K, <sup>47</sup>K, <sup>48</sup>K, <sup>49</sup>K, <sup>50</sup>K, <sup>51</sup>K, <sup>52</sup>K, <sup>53</sup>K, <sup>54</sup>K, <sup>55</sup>K";
      eleStable = "<sup>39</sup>K, <sup>41</sup>K";
      eleHighlight = "0,-30";
      eleCredits = preLink + "'http://images-of-elements.com/potassium.php'>Images-of-elements</a>";
      break;
    case "20":
      eleUnstable = "<sup>34</sup>Ca, <sup>35</sup>Ca, <sup>36</sup>Ca, <sup>37</sup>Ca, <sup>38</sup>Ca, <sup>39</sup>Ca, <sup>41</sup>Ca, <sup>45</sup>Ca, <sup>47</sup>Ca, <sup>48</sup>Ca, <sup>49</sup>Ca, <sup>50</sup>Ca, <sup>51</sup>Ca, <sup>52</sup>Ca, <sup>53</sup>Ca, <sup>54</sup>Ca, <sup>55</sup>Ca, <sup>56</sup>Ca, <sup>57</sup>Ca";
      eleStable = "<sup>40</sup>Ca, <sup>42</sup>Ca, <sup>43</sup>Ca, <sup>44</sup>Ca, <sup>46</sup>Ca";
      eleHighlight = "10,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg'>Wikimedia Commons (Matthias Zepper)</a>";
      break;
    case "21":
      eleUnstable = "<sup>36</sup>Sc, <sup>37</sup>Sc, <sup>38</sup>Sc, <sup>39</sup>Sc, <sup>40</sup>Sc, <sup>41</sup>Sc, <sup>42</sup>Sc, <sup>43</sup>Sc, <sup>44</sup>Sc, <sup>46</sup>Sc, <sup>47</sup>Sc, <sup>48</sup>Sc, <sup>49</sup>Sc, <sup>50</sup>Sc, <sup>51</sup>Sc, <sup>52</sup>Sc, <sup>53</sup>Sc, <sup>54</sup>Sc, <sup>55</sup>Sc, <sup>56</sup>Sc, <sup>57</sup>Sc, <sup>58</sup>Sc, <sup>59</sup>Sc, <sup>60</sup>Sc";
      eleStable = "<sup>45</sup>Sc";
      eleHighlight = "160,-30";
      eleCredits = preLink + "'http://images-of-elements.com/scandium.php'>Images-of-elements</a>";
      break;
    case "22":
      eleUnstable = "<sup>38</sup>Ti, <sup>39</sup>Ti, <sup>40</sup>Ti, <sup>41</sup>Ti, <sup>42</sup>Ti, <sup>43</sup>Ti, <sup>44</sup>Ti, <sup>45</sup>Ti, <sup>51</sup>Ti, <sup>52</sup>Ti, <sup>53</sup>Ti, <sup>54</sup>Ti, <sup>55</sup>Ti, <sup>56</sup>Ti, <sup>57</sup>Ti, <sup>58</sup>Ti, <sup>59</sup>Ti, <sup>60</sup>Ti, <sup>61</sup>Ti, <sup>62</sup>Ti, <sup>63</sup>Ti";
      eleStable = "<sup>46</sup>Ti, <sup>47</sup>Ti, <sup>48</sup>Ti, <sup>49</sup>Ti, <sup>50</sup>Ti";
      eleHighlight = "170,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Titan-crystal_bar.JPG'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "23":
      eleUnstable = "<sup>40</sup>V, <sup>41</sup>V, <sup>42</sup>V, <sup>43</sup>V, <sup>44</sup>V, <sup>45</sup>V, <sup>46</sup>V, <sup>47</sup>V, <sup>48</sup>V, <sup>49</sup>V, <sup>50</sup>V, <sup>52</sup>V, <sup>53</sup>V, <sup>54</sup>V, <sup>55</sup>V, <sup>56</sup>V, <sup>57</sup>V, <sup>58</sup>V, <sup>59</sup>V, <sup>60</sup>V, <sup>61</sup>V, <sup>62</sup>V, <sup>63</sup>V, <sup>64</sup>V, <sup>65</sup>V";
      eleStable = "<sup>51</sup>V";
      eleHighlight = "180,-30";
      eleCredits = preLink + "'http://images-of-elements.com/vanadium.php'>Images-of-elements</a>";
      break;
    case "24":
      eleUnstable = "<sup>42</sup>Cr, <sup>43</sup>Cr, <sup>44</sup>Cr, <sup>45</sup>Cr, <sup>46</sup>Cr, <sup>47</sup>Cr, <sup>48</sup>Cr, <sup>49</sup>Cr, <sup>51</sup>Cr, <sup>55</sup>Cr, <sup>56</sup>Cr, <sup>57</sup>Cr, <sup>58</sup>Cr, <sup>59</sup>Cr, <sup>60</sup>Cr, <sup>61</sup>Cr, <sup>62</sup>Cr, <sup>63</sup>Cr, <sup>64</sup>Cr, <sup>65</sup>Cr, <sup>66</sup>Cr, <sup>67</sup>Cr";
      eleStable = "<sup>50</sup>Cr, <sup>52</sup>Cr, <sup>53</sup>Cr, <sup>54</sup>Cr";
      eleHighlight = "190,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Chromium_crystals_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "25":
      eleUnstable = "<sup>44</sup>Mn, <sup>45</sup>Mn, <sup>46</sup>Mn, <sup>47</sup>Mn, <sup>48</sup>Mn, <sup>49</sup>Mn, <sup>50</sup>Mn, <sup>51</sup>Mn, <sup>52</sup>Mn, <sup>53</sup>Mn, <sup>54</sup>Mn, <sup>56</sup>Mn, <sup>57</sup>Mn, <sup>58</sup>Mn, <sup>59</sup>Mn, <sup>60</sup>Mn, <sup>61</sup>Mn, <sup>62</sup>Mn, <sup>63</sup>Mn, <sup>64</sup>Mn, <sup>65</sup>Mn, <sup>66</sup>Mn, <sup>67</sup>Mn, <sup>68</sup>Mn, <sup>69</sup>Mn";
      eleStable = "<sup>55</sup>Mn";
      eleHighlight = "200,-30";
      eleCredits = preLink + "'http://images-of-elements.com/manganese.php'>Images-of-elements</a>";
      break;
    case "26":
      eleUnstable = "<sup>45</sup>Fe, <sup>46</sup>Fe, <sup>47</sup>Fe, <sup>48</sup>Fe, <sup>49</sup>Fe, <sup>50</sup>Fe, <sup>51</sup>Fe, <sup>52</sup>Fe, <sup>53</sup>Fe, <sup>55</sup>Fe, <sup>59</sup>Fe, <sup>60</sup>Fe, <sup>61</sup>Fe, <sup>62</sup>Fe, <sup>63</sup>Fe, <sup>64</sup>Fe, <sup>65</sup>Fe, <sup>66</sup>Fe, <sup>67</sup>Fe, <sup>68</sup>Fe, <sup>69</sup>Fe, <sup>70</sup>Fe, <sup>71</sup>Fe, <sup>72</sup>Fe";
      eleStable = "<sup>54</sup>Fe, <sup>56</sup>Fe, <sup>57</sup>Fe, <sup>58</sup>Fe";
      eleHighlight = "210,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Iron_electrolytic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "27":
      eleUnstable = "<sup>47</sup>Co, <sup>48</sup>Co, <sup>49</sup>Co, <sup>50</sup>Co, <sup>51</sup>Co, <sup>52</sup>Co, <sup>53</sup>Co, <sup>54</sup>Co, <sup>55</sup>Co, <sup>56</sup>Co, <sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co, <sup>61</sup>Co, <sup>62</sup>Co, <sup>63</sup>Co, <sup>64</sup>Co, <sup>65</sup>Co, <sup>66</sup>Co, <sup>67</sup>Co, <sup>68</sup>Co, <sup>69</sup>Co, <sup>70</sup>Co, <sup>71</sup>Co, <sup>72</sup>Co, <sup>73</sup>Co, <sup>74</sup>Co, <sup>75</sup>Co";
      eleStable = "<sup>59</sup>Co";
      eleHighlight = "220,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Kobalt_electrolytic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "28":
      eleUnstable = "<sup>48</sup>Ni, <sup>49</sup>Ni, <sup>50</sup>Ni, <sup>51</sup>Ni, <sup>52</sup>Ni, <sup>53</sup>Ni, <sup>54</sup>Ni, <sup>55</sup>Ni, <sup>56</sup>Ni, <sup>57</sup>Ni, <sup>59</sup>Ni, <sup>63</sup>Ni, <sup>65</sup>Ni, <sup>66</sup>Ni, <sup>67</sup>Ni, <sup>68</sup>Ni, <sup>69</sup>Ni, <sup>70</sup>Ni, <sup>71</sup>Ni, <sup>72</sup>Ni, <sup>73</sup>Ni, <sup>74</sup>Ni, <sup>75</sup>Ni, <sup>76</sup>Ni, <sup>77</sup>Ni, <sup>78</sup>Ni";
      eleStable = "<sup>58</sup>Ni, <sup>60</sup>Ni, <sup>61</sup>Ni, <sup>62</sup>Ni, <sup>64</sup>Ni";
      eleHighlight = "230,-30";
      eleCredits = preLink + "'http://images-of-elements.com/nickel.php'>Images-of-elements</a>";
      break;
    case "29":
      eleUnstable = "<sup>52</sup>Cu, <sup>53</sup>Cu, <sup>54</sup>Cu, <sup>55</sup>Cu, <sup>56</sup>Cu, <sup>57</sup>Cu, <sup>58</sup>Cu, <sup>59</sup>Cu, <sup>60</sup>Cu, <sup>61</sup>Cu, <sup>62</sup>Cu, <sup>64</sup>Cu, <sup>66</sup>Cu, <sup>67</sup>Cu, <sup>68</sup>Cu, <sup>69</sup>Cu, <sup>70</sup>Cu, <sup>71</sup>Cu, <sup>72</sup>Cu, <sup>73</sup>Cu, <sup>74</sup>Cu, <sup>75</sup>Cu, <sup>76</sup>Cu, <sup>77</sup>Cu, <sup>78</sup>Cu, <sup>79</sup>Cu, <sup>80</sup>Cu";
      eleStable = "<sup>63</sup>Cu, <sup>65</sup>Cu";
      eleHighlight = "240,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:NatCopper.jpg'>Wikimedia Commons (Jonathan Zander)</a>";
      break;
    case "30":
      eleUnstable = "<sup>54</sup>Zn, <sup>55</sup>Zn, <sup>56</sup>Zn, <sup>57</sup>Zn, <sup>58</sup>Zn, <sup>59</sup>Zn, <sup>60</sup>Zn, <sup>61</sup>Zn, <sup>62</sup>Zn, <sup>63</sup>Zn, <sup>65</sup>Zn, <sup>69</sup>Zn, <sup>71</sup>Zn, <sup>72</sup>Zn, <sup>73</sup>Zn, <sup>74</sup>Zn, <sup>75</sup>Zn, <sup>76</sup>Zn, <sup>77</sup>Zn, <sup>78</sup>Zn, <sup>79</sup>Zn, <sup>80</sup>Zn, <sup>81</sup>Zn, <sup>82</sup>Zn, <sup>83</sup>Zn";
      eleStable = "<sup>64</sup>Zn, <sup>66</sup>Zn, <sup>67</sup>Zn, <sup>68</sup>Zn, <sup>70</sup>Zn";
      eleHighlight = "250,-30";
      eleCredits = preLink + "'http://images-of-elements.com/zinc.php'>Images-of-elements</a>";
      break;
    case "31":
      eleUnstable = "<sup>56</sup>Ga, <sup>57</sup>Ga, <sup>58</sup>Ga, <sup>59</sup>Ga, <sup>60</sup>Ga, <sup>61</sup>Ga, <sup>62</sup>Ga, <sup>63</sup>Ga, <sup>64</sup>Ga, <sup>65</sup>Ga, <sup>66</sup>Ga, <sup>67</sup>Ga, <sup>68</sup>Ga, <sup>70</sup>Ga, <sup>72</sup>Ga, <sup>73</sup>Ga, <sup>74</sup>Ga, <sup>75</sup>Ga, <sup>76</sup>Ga, <sup>77</sup>Ga, <sup>78</sup>Ga, <sup>79</sup>Ga, <sup>80</sup>Ga, <sup>81</sup>Ga, <sup>82</sup>Ga, <sup>83</sup>Ga, <sup>84</sup>Ga, <sup>85</sup>Ga, <sup>86</sup>Ga";
      eleStable = "<sup>69</sup>Ga, <sup>71</sup>Ga";
      eleHighlight = "260,-30";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Gallium_crystals.jpg'>Wikimedia Commons (Foobar)</a>";
      break;
    case "32":
      eleUnstable = "<sup>58</sup>Ge, <sup>59</sup>Ge, <sup>60</sup>Ge, <sup>61</sup>Ge, <sup>62</sup>Ge, <sup>63</sup>Ge, <sup>64</sup>Ge, <sup>65</sup>Ge, <sup>66</sup>Ge, <sup>67</sup>Ge, <sup>68</sup>Ge, <sup>69</sup>Ge, <sup>71</sup>Ge, <sup>75</sup>Ge, <sup>76</sup>Ge, <sup>77</sup>Ge, <sup>78</sup>Ge, <sup>79</sup>Ge, <sup>80</sup>Ge, <sup>81</sup>Ge, <sup>82</sup>Ge, <sup>83</sup>Ge, <sup>84</sup>Ge, <sup>85</sup>Ge, <sup>86</sup>Ge, <sup>87</sup>Ge, <sup>88</sup>Ge, <sup>89</sup>Ge";
      eleStable = "<sup>70</sup>Ge, <sup>72</sup>Ge, <sup>73</sup>Ge, <sup>74</sup>Ge";
      eleHighlight = "270,-30";
      eleCredits = preLink + "'http://images-of-elements.com/germanium.php'>Images-of-elements</a>";
      break;
    case "33":
      eleUnstable = "<sup>60</sup>As, <sup>61</sup>As, <sup>62</sup>As, <sup>63</sup>As, <sup>64</sup>As, <sup>65</sup>As, <sup>66</sup>As, <sup>67</sup>As, <sup>68</sup>As, <sup>69</sup>As, <sup>70</sup>As, <sup>71</sup>As, <sup>72</sup>As, <sup>73</sup>As, <sup>74</sup>As, <sup>76</sup>As, <sup>77</sup>As, <sup>78</sup>As, <sup>79</sup>As, <sup>80</sup>As, <sup>81</sup>As, <sup>82</sup>As, <sup>83</sup>As, <sup>84</sup>As, <sup>85</sup>As, <sup>86</sup>As, <sup>87</sup>As, <sup>88</sup>As, <sup>89</sup>As, <sup>90</sup>As, <sup>91</sup>As, <sup>92</sup>As";
      eleStable = "<sup>75</sup>As";
      eleHighlight = "280,-30";
      eleCredits = preLink + "'http://images-of-elements.com/arsenic.php'>Images-of-elements</a>";
      break;
    case "34":
      eleUnstable = "<sup>65</sup>Se, <sup>66</sup>Se, <sup>67</sup>Se, <sup>68</sup>Se, <sup>69</sup>Se, <sup>70</sup>Se, <sup>71</sup>Se, <sup>72</sup>Se, <sup>73</sup>Se, <sup>75</sup>Se, <sup>79</sup>Se, <sup>81</sup>Se, <sup>82</sup>Se, <sup>83</sup>Se, <sup>84</sup>Se, <sup>85</sup>Se, <sup>86</sup>Se, <sup>87</sup>Se, <sup>88</sup>Se, <sup>89</sup>Se, <sup>90</sup>Se, <sup>91</sup>Se, <sup>92</sup>Se, <sup>93</sup>Se, <sup>94</sup>Se";
      eleStable = "<sup>74</sup>Se, <sup>76</sup>Se, <sup>77</sup>Se, <sup>78</sup>Se, <sup>80</sup>Se";
      eleHighlight = "290,-30";
      eleCredits = preLink + "'http://images-of-elements.com/selenium.php'>Images-of-elements</a>";
      break;
    case "35":
      eleUnstable = "<sup>67</sup>Br, <sup>68</sup>Br, <sup>69</sup>Br, <sup>70</sup>Br, <sup>71</sup>Br, <sup>72</sup>Br, <sup>73</sup>Br, <sup>74</sup>Br, <sup>75</sup>Br, <sup>76</sup>Br, <sup>77</sup>Br, <sup>78</sup>Br, <sup>80</sup>Br, <sup>82</sup>Br, <sup>83</sup>Br, <sup>84</sup>Br, <sup>85</sup>Br, <sup>86</sup>Br, <sup>87</sup>Br, <sup>88</sup>Br, <sup>89</sup>Br, <sup>90</sup>Br, <sup>91</sup>Br, <sup>92</sup>Br, <sup>93</sup>Br, <sup>94</sup>Br, <sup>95</sup>Br, <sup>96</sup>Br, <sup>97</sup>Br";
      eleStable = "<sup>79</sup>Br, <sup>81</sup>Br";
      eleHighlight = "300,-30";
      eleCredits = preLink + "'http://images-of-elements.com/bromine.php'>Images-of-elements</a>";
      break;
    case "36":
      eleUnstable = "<sup>69</sup>Kr, <sup>70</sup>Kr, <sup>71</sup>Kr, <sup>72</sup>Kr, <sup>73</sup>Kr, <sup>74</sup>Kr, <sup>75</sup>Kr, <sup>76</sup>Kr, <sup>77</sup>Kr, <sup>79</sup>Kr, <sup>81</sup>Kr, <sup>85</sup>Kr, <sup>87</sup>Kr, <sup>88</sup>Kr, <sup>89</sup>Kr, <sup>90</sup>Kr, <sup>91</sup>Kr, <sup>92</sup>Kr, <sup>93</sup>Kr, <sup>94</sup>Kr, <sup>95</sup>Kr, <sup>96</sup>Kr, <sup>97</sup>Kr, <sup>98</sup>Kr, <sup>99</sup>Kr, <sup>100</sup>Kr, <sup>101</sup>Kr";
      eleStable = "<sup>78</sup>Kr, <sup>80</sup>Kr, <sup>82</sup>Kr, <sup>83</sup>Kr, <sup>84</sup>Kr, <sup>86</sup>Kr";
      eleHighlight = "310,-30";
      eleCredits = preLink + "'http://images-of-elements.com/krypton.php'>Images-of-elements</a>";
      break;
    case "37":
      eleUnstable = "<sup>71</sup>Rb, <sup>72</sup>Rb, <sup>73</sup>Rb, <sup>74</sup>Rb, <sup>75</sup>Rb, <sup>76</sup>Rb, <sup>77</sup>Rb, <sup>78</sup>Rb, <sup>79</sup>Rb, <sup>80</sup>Rb, <sup>81</sup>Rb, <sup>82</sup>Rb, <sup>83</sup>Rb, <sup>84</sup>Rb, <sup>86</sup>Rb, <sup>87</sup>Rb, <sup>88</sup>Rb, <sup>89</sup>Rb, <sup>90</sup>Rb, <sup>91</sup>Rb, <sup>92</sup>Rb, <sup>93</sup>Rb, <sup>94</sup>Rb, <sup>95</sup>Rb, <sup>96</sup>Rb, <sup>97</sup>Rb, <sup>98</sup>Rb, <sup>99</sup>Rb, <sup>100</sup>Rb, <sup>101</sup>Rb, <sup>102</sup>Rb";
      eleStable = "<sup>85</sup>Rb";
      eleHighlight = "0,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Rb5.JPG'>Wikimedia Commons (Dnn87)</a>";
      break;
    case "38":
      eleUnstable = "<sup>73</sup>Sr, <sup>74</sup>Sr, <sup>75</sup>Sr, <sup>76</sup>Sr, <sup>77</sup>Sr, <sup>78</sup>Sr, <sup>79</sup>Sr, <sup>80</sup>Sr, <sup>81</sup>Sr, <sup>82</sup>Sr, <sup>83</sup>Sr, <sup>85</sup>Sr, <sup>89</sup>Sr, <sup>90</sup>Sr, <sup>91</sup>Sr, <sup>92</sup>Sr, <sup>93</sup>Sr, <sup>94</sup>Sr, <sup>95</sup>Sr, <sup>96</sup>Sr, <sup>97</sup>Sr, <sup>98</sup>Sr, <sup>99</sup>Sr, <sup>100</sup>Sr, <sup>101</sup>Sr, <sup>102</sup>Sr, <sup>103</sup>Sr, <sup>104</sup>Sr, <sup>105</sup>Sr";
      eleStable = "<sup>84</sup>Sr, <sup>86</sup>Sr, <sup>87</sup>Sr, <sup>88</sup>Sr";
      eleHighlight = "10,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Strontium_destilled_crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "39":
      eleUnstable = "<sup>76</sup>Y, <sup>77</sup>Y, <sup>78</sup>Y, <sup>79</sup>Y, <sup>80</sup>Y, <sup>81</sup>Y, <sup>82</sup>Y, <sup>83</sup>Y, <sup>84</sup>Y, <sup>85</sup>Y, <sup>86</sup>Y, <sup>87</sup>Y, <sup>88</sup>Y, <sup>90</sup>Y, <sup>91</sup>Y, <sup>92</sup>Y, <sup>93</sup>Y, <sup>94</sup>Y, <sup>95</sup>Y, <sup>96</sup>Y, <sup>97</sup>Y, <sup>98</sup>Y, <sup>99</sup>Y, <sup>100</sup>Y, <sup>101</sup>Y, <sup>102</sup>Y, <sup>103</sup>Y, <sup>104</sup>Y, <sup>105</sup>Y, <sup>106</sup>Y, <sup>107</sup>Y, <sup>108</sup>Y";
      eleStable = "<sup>89</sup>Y";
      eleHighlight = "160,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Yttrium_sublimed_dendritic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "40":
      eleUnstable = "<sup>78</sup>Zr, <sup>79</sup>Zr, <sup>80</sup>Zr, <sup>81</sup>Zr, <sup>82</sup>Zr, <sup>83</sup>Zr, <sup>84</sup>Zr, <sup>85</sup>Zr, <sup>86</sup>Zr, <sup>87</sup>Zr, <sup>88</sup>Zr, <sup>89</sup>Zr, <sup>93</sup>Zr, <sup>95</sup>Zr, <sup>96</sup>Zr, <sup>97</sup>Zr, <sup>98</sup>Zr, <sup>99</sup>Zr, <sup>100</sup>Zr, <sup>101</sup>Zr, <sup>102</sup>Zr, <sup>103</sup>Zr, <sup>104</sup>Zr, <sup>105</sup>Zr, <sup>106</sup>Zr, <sup>107</sup>Zr, <sup>108</sup>Zr, <sup>109</sup>Zr, <sup>110</sup>Zr";
      eleStable = "<sup>90</sup>Zr, <sup>91</sup>Zr, <sup>92</sup>Zr, <sup>94</sup>Zr";
      eleHighlight = "170,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Zirconium_crystal_bar_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "41":
      eleUnstable = "<sup>81</sup>Nb, <sup>82</sup>Nb, <sup>83</sup>Nb, <sup>84</sup>Nb, <sup>85</sup>Nb, <sup>86</sup>Nb, <sup>87</sup>Nb, <sup>88</sup>Nb, <sup>89</sup>Nb, <sup>90</sup>Nb, <sup>91</sup>Nb, <sup>92</sup>Nb, <sup>94</sup>Nb, <sup>95</sup>Nb, <sup>96</sup>Nb, <sup>97</sup>Nb, <sup>98</sup>Nb, <sup>99</sup>Nb, <sup>100</sup>Nb, <sup>101</sup>Nb, <sup>102</sup>Nb, <sup>103</sup>Nb, <sup>104</sup>Nb, <sup>105</sup>Nb, <sup>106</sup>Nb, <sup>107</sup>Nb, <sup>108</sup>Nb, <sup>109</sup>Nb, <sup>110</sup>Nb, <sup>111</sup>Nb, <sup>112</sup>Nb, <sup>113</sup>Nb";
      eleStable = "<sup>93</sup>Nb";
      eleHighlight = "180,-20";
      eleCredits = preLink + "'http://images-of-elements.com/niobium.php'>Images-of-elements</a>";
      break;
    case "42":
      eleUnstable = "<sup>83</sup>Mo, <sup>84</sup>Mo, <sup>85</sup>Mo, <sup>86</sup>Mo, <sup>87</sup>Mo, <sup>88</sup>Mo, <sup>89</sup>Mo, <sup>90</sup>Mo, <sup>91</sup>Mo, <sup>93</sup>Mo, <sup>99</sup>Mo, <sup>100</sup>Mo, <sup>101</sup>Mo, <sup>102</sup>Mo, <sup>103</sup>Mo, <sup>104</sup>Mo, <sup>105</sup>Mo, <sup>106</sup>Mo, <sup>107</sup>Mo, <sup>108</sup>Mo, <sup>109</sup>Mo, <sup>110</sup>Mo, <sup>111</sup>Mo, <sup>112</sup>Mo, <sup>113</sup>Mo, <sup>114</sup>Mo, <sup>115</sup>Mo";
      eleStable = "<sup>92</sup>Mo, <sup>94</sup>Mo, <sup>95</sup>Mo, <sup>96</sup>Mo, <sup>97</sup>Mo, <sup>98</sup>Mo";
      eleHighlight = "190,-20";
      eleCredits = preLink + "'http://images-of-elements.com/molybdenum.php'>Images-of-elements</a>";
      break;
    case "43":
      eleStable = "-";
      eleUnstable = "<sup>85</sup>Tc, <sup>86</sup>Tc, <sup>87</sup>Tc, <sup>88</sup>Tc, <sup>89</sup>Tc, <sup>90</sup>Tc, <sup>91</sup>Tc, <sup>92</sup>Tc, <sup>93</sup>Tc, <sup>94</sup>Tc, <sup>95</sup>Tc, <sup>96</sup>Tc, <sup>97</sup>Tc, <sup>98</sup>Tc, <sup>99</sup>Tc, <sup>100</sup>Tc, <sup>101</sup>Tc, <sup>102</sup>Tc, <sup>103</sup>Tc, <sup>104</sup>Tc, <sup>105</sup>Tc, <sup>106</sup>Tc, <sup>107</sup>Tc, <sup>108</sup>Tc, <sup>109</sup>Tc, <sup>110</sup>Tc, <sup>111</sup>Tc, <sup>112</sup>Tc, <sup>113</sup>Tc, <sup>114</sup>Tc, <sup>115</sup>Tc, <sup>116</sup>Tc, <sup>117</sup>Tc, <sup>118</sup>Tc";
      eleHighlight = "200,-20";
      eleCredits = preLink + "'http://pauli.uni-muenster.de/~munsteg/physiker.html'>pauli.uni-muenster.de</a>";
      break;
    case "44":
      eleUnstable = "<sup>87</sup>Ru, <sup>88</sup>Ru, <sup>89</sup>Ru, <sup>90</sup>Ru, <sup>91</sup>Ru, <sup>92</sup>Ru, <sup>93</sup>Ru, <sup>94</sup>Ru, <sup>95</sup>Ru, <sup>97</sup>Ru, <sup>103</sup>Ru, <sup>105</sup>Ru, <sup>106</sup>Ru, <sup>107</sup>Ru, <sup>108</sup>Ru, <sup>109</sup>Ru, <sup>110</sup>Ru, <sup>111</sup>Ru, <sup>112</sup>Ru, <sup>113</sup>Ru, <sup>114</sup>Ru, <sup>115</sup>Ru, <sup>116</sup>Ru, <sup>117</sup>Ru, <sup>118</sup>Ru, <sup>119</sup>Ru, <sup>120</sup>Ru";
      eleStable = "<sup>96</sup>Ru, <sup>98</sup>Ru, <sup>99</sup>Ru, <sup>100</sup>Ru, <sup>101</sup>Ru, <sup>102</sup>Ru, <sup>104</sup>Ru";
      eleHighlight = "210,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Ruthenium_crystals.jpg'>Wikimedia Commons (Periodictableru)</a>";
      break;
    case "45":
      eleStable = "<sup>103</sup>Rh";
      eleUnstable = "<sup>89</sup>Rh, <sup>90</sup>Rh, <sup>91</sup>Rh, <sup>92</sup>Rh, <sup>93</sup>Rh, <sup>94</sup>Rh, <sup>95</sup>Rh, <sup>96</sup>Rh, <sup>97</sup>Rh, <sup>98</sup>Rh, <sup>99</sup>Rh, <sup>100</sup>Rh, <sup>101</sup>Rh, <sup>102</sup>Rh, <sup>104</sup>Rh, <sup>105</sup>Rh, <sup>106</sup>Rh, <sup>107</sup>Rh, <sup>108</sup>Rh, <sup>109</sup>Rh, <sup>110</sup>Rh, <sup>111</sup>Rh, <sup>112</sup>Rh, <sup>113</sup>Rh, <sup>114</sup>Rh, <sup>115</sup>Rh, <sup>116</sup>Rh, <sup>117</sup>Rh, <sup>118</sup>Rh, <sup>119</sup>Rh, <sup>120</sup>Rh, <sup>121</sup>Rh, <sup>122</sup>Rh";
      eleHighlight = "220,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Rhodium_powder_pressed_melted.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "46":
      eleStable = "<sup>102</sup>Pd, <sup>104</sup>Pd, <sup>105</sup>Pd, <sup>106</sup>Pd, <sup>108</sup>Pd, <sup>110</sup>Pd";
      eleUnstable = "<sup>91</sup>Pd, <sup>92</sup>Pd, <sup>93</sup>Pd, <sup>94</sup>Pd, <sup>95</sup>Pd, <sup>96</sup>Pd, <sup>97</sup>Pd, <sup>98</sup>Pd, <sup>99</sup>Pd, <sup>100</sup>Pd, <sup>101</sup>Pd, <sup>103</sup>Pd, <sup>107</sup>Pd, <sup>109</sup>Pd, <sup>111</sup>Pd, <sup>112</sup>Pd, <sup>113</sup>Pd, <sup>114</sup>Pd, <sup>115</sup>Pd, <sup>116</sup>Pd, <sup>117</sup>Pd, <sup>118</sup>Pd, <sup>119</sup>Pd, <sup>120</sup>Pd, <sup>121</sup>Pd, <sup>122</sup>Pd, <sup>123</sup>Pd, <sup>124</sup>Pd";
      eleHighlight = "230,-20";
      eleCredits = preLink + "'http://images-of-elements.com/palladium.php'>Images-of-elements</a>";
      break;
    case "47":
      eleStable = "<sup>107</sup>Ag, <sup>109</sup>Ag";
      eleUnstable = "<sup>93</sup>Ag, <sup>94</sup>Ag, <sup>95</sup>Ag, <sup>96</sup>Ag, <sup>97</sup>Ag, <sup>98</sup>Ag, <sup>99</sup>Ag, <sup>100</sup>Ag, <sup>101</sup>Ag, <sup>102</sup>Ag, <sup>103</sup>Ag, <sup>104</sup>Ag, <sup>105</sup>Ag, <sup>106</sup>Ag, <sup>108</sup>Ag, <sup>110</sup>Ag, <sup>111</sup>Ag, <sup>112</sup>Ag, <sup>113</sup>Ag, <sup>114</sup>Ag, <sup>115</sup>Ag, <sup>116</sup>Ag, <sup>117</sup>Ag, <sup>118</sup>Ag, <sup>119</sup>Ag, <sup>120</sup>Ag, <sup>121</sup>Ag, <sup>122</sup>Ag, <sup>123</sup>Ag, <sup>124</sup>Ag, <sup>125</sup>Ag, <sup>126</sup>Ag, <sup>127</sup>Ag, <sup>128</sup>Ag, <sup>129</sup>Ag, <sup>130</sup>Ag";
      eleHighlight = "240,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Silver_crystal.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "48":
      eleStable = "<sup>106</sup>Cd, <sup>108</sup>Cd, <sup>110</sup>Cd, <sup>111</sup>Cd, <sup>112</sup>Cd, <sup>114</sup>Cd";
      eleUnstable = "<sup>95</sup>Cd, <sup>96</sup>Cd, <sup>97</sup>Cd, <sup>98</sup>Cd, <sup>99</sup>Cd, <sup>100</sup>Cd, <sup>101</sup>Cd, <sup>102</sup>Cd, <sup>103</sup>Cd, <sup>104</sup>Cd, <sup>105</sup>Cd, <sup>107</sup>Cd, <sup>109</sup>Cd, <sup>113</sup>Cd, <sup>115</sup>Cd, <sup>116</sup>Cd, <sup>117</sup>Cd, <sup>118</sup>Cd, <sup>119</sup>Cd, <sup>120</sup>Cd, <sup>121</sup>Cd, <sup>122</sup>Cd, <sup>123</sup>Cd, <sup>124</sup>Cd, <sup>125</sup>Cd, <sup>126</sup>Cd, <sup>127</sup>Cd, <sup>128</sup>Cd, <sup>129</sup>Cd, <sup>130</sup>Cd, <sup>131</sup>Cd, <sup>132</sup>Cd";
      eleHighlight = "250,-20";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Cadmium-crystal_bar.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "49":
      eleStable = "<sup>113</sup>In";
      eleUnstable = "<sup>97</sup>In, <sup>98</sup>In, <sup>99</sup>In, <sup>100</sup>In, <sup>101</sup>In, <sup>102</sup>In, <sup>103</sup>In, <sup>104</sup>In, <sup>105</sup>In, <sup>106</sup>In, <sup>107</sup>In, <sup>108</sup>In, <sup>109</sup>In, <sup>110</sup>In, <sup>111</sup>In, <sup>112</sup>In, <sup>114</sup>In, <sup>115</sup>In, <sup>116</sup>In, <sup>117</sup>In, <sup>118</sup>In, <sup>119</sup>In, <sup>120</sup>In, <sup>121</sup>In, <sup>122</sup>In, <sup>123</sup>In, <sup>124</sup>In, <sup>125</sup>In, <sup>126</sup>In, <sup>127</sup>In, <sup>128</sup>In, <sup>129</sup>In, <sup>130</sup>In, <sup>131</sup>In, <sup>132</sup>In, <sup>133</sup>In, <sup>134</sup>In, <sup>135</sup>In";
      eleHighlight = "260,-20";
      eleCredits = preLink + "'http://images-of-elements.com/indium.php'>Images-of-elements</a>";
      break;
    case "50":
      eleStable = "<sup>112</sup>Sn, <sup>114</sup>Sn, <sup>115</sup>Sn, <sup>116</sup>Sn, <sup>117</sup>Sn, <sup>118</sup>Sn, <sup>119</sup>Sn, <sup>120</sup>Sn, <sup>122</sup>Sn, <sup>124</sup>Sn";
      eleUnstable = "<sup>99</sup>Sn, <sup>100</sup>Sn, <sup>101</sup>Sn, <sup>102</sup>Sn, <sup>103</sup>Sn, <sup>104</sup>Sn, <sup>105</sup>Sn, <sup>106</sup>Sn, <sup>107</sup>Sn, <sup>108</sup>Sn, <sup>109</sup>Sn, <sup>110</sup>Sn, <sup>111</sup>Sn, <sup>113</sup>Sn, <sup>121</sup>Sn, <sup>123</sup>Sn, <sup>125</sup>Sn, <sup>126</sup>Sn, <sup>127</sup>Sn, <sup>128</sup>Sn, <sup>129</sup>Sn, <sup>130</sup>Sn, <sup>131</sup>Sn, <sup>132</sup>Sn, <sup>133</sup>Sn, <sup>134</sup>Sn, <sup>135</sup>Sn, <sup>136</sup>Sn, <sup>137</sup>Sn";
      eleHighlight = "270,-20";
      eleCredits = preLink + "'http://images-of-elements.com/tin.php'>Images-of-elements</a>";
      break;
    case "51":
      eleUnstable = "<sup>103</sup>Sb, <sup>104</sup>Sb, <sup>105</sup>Sb, <sup>106</sup>Sb, <sup>107</sup>Sb, <sup>108</sup>Sb, <sup>109</sup>Sb, <sup>110</sup>Sb, <sup>111</sup>Sb, <sup>112</sup>Sb, <sup>113</sup>Sb, <sup>114</sup>Sb, <sup>115</sup>Sb, <sup>116</sup>Sb, <sup>117</sup>Sb, <sup>118</sup>Sb, <sup>119</sup>Sb, <sup>120</sup>Sb, <sup>122</sup>Sb, <sup>124</sup>Sb, <sup>125</sup>Sb, <sup>126</sup>Sb, <sup>127</sup>Sb, <sup>128</sup>Sb, <sup>129</sup>Sb, <sup>130</sup>Sb, <sup>131</sup>Sb, <sup>132</sup>Sb, <sup>133</sup>Sb, <sup>134</sup>Sb, <sup>135</sup>Sb, <sup>136</sup>Sb, <sup>137</sup>Sb, <sup>138</sup>Sb, <sup>139</sup>Sb";
      eleStable = "<sup>121</sup>Sb, <sup>123</sup>Sb";
      eleHighlight = "280,-20";
      eleCredits = preLink + "'http://images-of-elements.com/antimony.php'>Images-of-elements</a>";
      break;
    case "52":
      eleUnstable = "<sup>105</sup>Te, <sup>106</sup>Te, <sup>107</sup>Te, <sup>108</sup>Te, <sup>109</sup>Te, <sup>110</sup>Te, <sup>111</sup>Te, <sup>112</sup>Te, <sup>113</sup>Te, <sup>114</sup>Te, <sup>115</sup>Te, <sup>116</sup>Te, <sup>117</sup>Te, <sup>118</sup>Te, <sup>119</sup>Te, <sup>121</sup>Te, <sup>123</sup>Te, <sup>127</sup>Te, <sup>128</sup>Te, <sup>129</sup>Te, <sup>130</sup>Te, <sup>131</sup>Te, <sup>132</sup>Te, <sup>133</sup>Te, <sup>134</sup>Te, <sup>135</sup>Te, <sup>136</sup>Te, <sup>137</sup>Te, <sup>138</sup>Te, <sup>139</sup>Te, <sup>140</sup>Te, <sup>141</sup>Te, <sup>142</sup>Te";
      eleStable = "<sup>120</sup>Te, <sup>122</sup>Te, <sup>124</sup>Te, <sup>125</sup>Te, <sup>126</sup>Te";
      eleHighlight = "290,-20";
      eleCredits = preLink + "'http://images-of-elements.com/tellurium.php'>Images-of-elements</a>";
      break;
    case "53":
      eleUnstable = "<sup>108</sup>I, <sup>109</sup>I, <sup>110</sup>I, <sup>111</sup>I, <sup>112</sup>I, <sup>113</sup>I, <sup>114</sup>I, <sup>115</sup>I, <sup>116</sup>I, <sup>117</sup>I, <sup>118</sup>I, <sup>119</sup>I, <sup>120</sup>I, <sup>121</sup>I, <sup>122</sup>I, <sup>123</sup>I, <sup>124</sup>I, <sup>125</sup>I, <sup>126</sup>I, <sup>128</sup>I, <sup>129</sup>I, <sup>130</sup>I, <sup>131</sup>I, <sup>132</sup>I, <sup>133</sup>I, <sup>134</sup>I, <sup>135</sup>I, <sup>136</sup>I, <sup>137</sup>I, <sup>138</sup>I, <sup>139</sup>I, <sup>140</sup>I, <sup>141</sup>I, <sup>142</sup>I, <sup>143</sup>I, <sup>144</sup>I";
      eleStable = "<sup>127</sup>I";
      eleHighlight = "300,-20";
      eleCredits = preLink + "'http://images-of-elements.com/iodine.php'>Images-of-elements</a>";
      break;
    case "54":
      eleUnstable = "<sup>110</sup>Xe, <sup>111</sup>Xe, <sup>112</sup>Xe, <sup>113</sup>Xe, <sup>114</sup>Xe, <sup>115</sup>Xe, <sup>116</sup>Xe, <sup>117</sup>Xe, <sup>118</sup>Xe, <sup>119</sup>Xe, <sup>120</sup>Xe, <sup>121</sup>Xe, <sup>122</sup>Xe, <sup>123</sup>Xe, <sup>125</sup>Xe, <sup>127</sup>Xe, <sup>133</sup>Xe, <sup>135</sup>Xe, <sup>137</sup>Xe, <sup>138</sup>Xe, <sup>139</sup>Xe, <sup>140</sup>Xe, <sup>141</sup>Xe, <sup>142</sup>Xe, <sup>143</sup>Xe, <sup>144</sup>Xe, <sup>145</sup>Xe, <sup>146</sup>Xe, <sup>147</sup>Xe";
      eleStable = "<sup>124</sup>Xe, <sup>126</sup>Xe, <sup>128</sup>Xe, <sup>129</sup>Xe, <sup>130</sup>Xe, <sup>131</sup>Xe, <sup>132</sup>Xe, <sup>134</sup>Xe, <sup>136</sup>Xe";
      eleHighlight = "310,-20";
      eleCredits = preLink + "'http://images-of-elements.com/xenon.php'>Images-of-elements</a>";
      break;
    case "55":
      eleUnstable = "<sup>112</sup>Cs, <sup>113</sup>Cs, <sup>114</sup>Cs, <sup>115</sup>Cs, <sup>116</sup>Cs, <sup>117</sup>Cs, <sup>118</sup>Cs, <sup>119</sup>Cs, <sup>120</sup>Cs, <sup>121</sup>Cs, <sup>122</sup>Cs, <sup>123</sup>Cs, <sup>124</sup>Cs, <sup>125</sup>Cs, <sup>126</sup>Cs, <sup>127</sup>Cs, <sup>128</sup>Cs, <sup>129</sup>Cs, <sup>130</sup>Cs, <sup>131</sup>Cs, <sup>132</sup>Cs, <sup>134</sup>Cs, <sup>135</sup>Cs, <sup>136</sup>Cs, <sup>137</sup>Cs, <sup>138</sup>Cs, <sup>139</sup>Cs, <sup>140</sup>Cs, <sup>141</sup>Cs, <sup>142</sup>Cs, <sup>143</sup>Cs, <sup>144</sup>Cs, <sup>145</sup>Cs, <sup>146</sup>Cs, <sup>147</sup>Cs, <sup>148</sup>Cs, <sup>149</sup>Cs, <sup>150</sup>Cs, <sup>151</sup>Cs";
      eleStable = "<sup>133</sup>Cs";
      eleHighlight = "0,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Cesium.jpg'>Wikimedia Commons (Dnn87)</a>";
      break;
    case "56":
      eleUnstable = "<sup>114</sup>Ba, <sup>115</sup>Ba, <sup>116</sup>Ba, <sup>117</sup>Ba, <sup>118</sup>Ba, <sup>119</sup>Ba, <sup>120</sup>Ba, <sup>121</sup>Ba, <sup>122</sup>Ba, <sup>123</sup>Ba, <sup>124</sup>Ba, <sup>125</sup>Ba, <sup>126</sup>Ba, <sup>127</sup>Ba, <sup>128</sup>Ba, <sup>129</sup>Ba, <sup>131</sup>Ba, <sup>133</sup>Ba, <sup>139</sup>Ba, <sup>140</sup>Ba, <sup>141</sup>Ba, <sup>142</sup>Ba, <sup>143</sup>Ba, <sup>144</sup>Ba, <sup>145</sup>Ba, <sup>146</sup>Ba, <sup>147</sup>Ba, <sup>148</sup>Ba, <sup>149</sup>Ba, <sup>150</sup>Ba, <sup>151</sup>Ba, <sup>152</sup>Ba, <sup>153</sup>Ba";
      eleStable = "<sup>130</sup>Ba, <sup>132</sup>Ba, <sup>134</sup>Ba, <sup>135</sup>Ba, <sup>136</sup>Ba, <sup>137</sup>Ba, <sup>138</sup>Ba";
      eleHighlight = "10,-10";
      eleCredits = preLink + "'http://images-of-elements.com/barium.php'>Images-of-elements</a>";
      break;
    case "57":
      eleUnstable = "<sup>117</sup>La, <sup>118</sup>La, <sup>119</sup>La, <sup>120</sup>La, <sup>121</sup>La, <sup>122</sup>La, <sup>123</sup>La, <sup>124</sup>La, <sup>125</sup>La, <sup>126</sup>La, <sup>127</sup>La, <sup>128</sup>La, <sup>129</sup>La, <sup>130</sup>La, <sup>131</sup>La, <sup>132</sup>La, <sup>133</sup>La, <sup>134</sup>La, <sup>135</sup>La, <sup>136</sup>La, <sup>137</sup>La, <sup>138</sup>La, <sup>140</sup>La, <sup>141</sup>La, <sup>142</sup>La, <sup>143</sup>La, <sup>144</sup>La, <sup>145</sup>La, <sup>146</sup>La, <sup>147</sup>La, <sup>148</sup>La, <sup>149</sup>La, <sup>150</sup>La, <sup>151</sup>La, <sup>152</sup>La, <sup>153</sup>La, <sup>154</sup>La, <sup>155</sup>La";
      eleStable = "<sup>139</sup>La";
      eleHighlight = "20,-10";
      eleCredits = preLink + "'http://images-of-elements.com/lanthanum.php'>Images-of-elements</a>";
      break;
    case "58":
      eleUnstable = "<sup>119</sup>Ce, <sup>120</sup>Ce, <sup>121</sup>Ce, <sup>122</sup>Ce, <sup>123</sup>Ce, <sup>124</sup>Ce, <sup>125</sup>Ce, <sup>126</sup>Ce, <sup>127</sup>Ce, <sup>128</sup>Ce, <sup>129</sup>Ce, <sup>130</sup>Ce, <sup>131</sup>Ce, <sup>132</sup>Ce, <sup>133</sup>Ce, <sup>134</sup>Ce, <sup>135</sup>Ce, <sup>137</sup>Ce, <sup>139</sup>Ce, <sup>141</sup>Ce, <sup>143</sup>Ce, <sup>144</sup>Ce, <sup>145</sup>Ce, <sup>146</sup>Ce, <sup>147</sup>Ce, <sup>148</sup>Ce, <sup>149</sup>Ce, <sup>150</sup>Ce, <sup>151</sup>Ce, <sup>152</sup>Ce, <sup>153</sup>Ce, <sup>154</sup>Ce, <sup>155</sup>Ce, <sup>156</sup>Ce, <sup>157</sup>Ce";
      eleStable = "<sup>136</sup>Ce, <sup>138</sup>Ce, <sup>140</sup>Ce, <sup>142</sup>Ce";
      eleHighlight = "30,-10";
      eleCredits = preLink + "'http://images-of-elements.com/cerium.php'>Images-of-elements</a>";
      break;
    case "59":
      eleUnstable = "<sup>121</sup>Pr, <sup>122</sup>Pr, <sup>123</sup>Pr, <sup>124</sup>Pr, <sup>125</sup>Pr, <sup>126</sup>Pr, <sup>127</sup>Pr, <sup>128</sup>Pr, <sup>129</sup>Pr, <sup>130</sup>Pr, <sup>131</sup>Pr, <sup>132</sup>Pr, <sup>133</sup>Pr, <sup>134</sup>Pr, <sup>135</sup>Pr, <sup>136</sup>Pr, <sup>137</sup>Pr, <sup>138</sup>Pr, <sup>139</sup>Pr, <sup>140</sup>Pr, <sup>142</sup>Pr, <sup>143</sup>Pr, <sup>144</sup>Pr, <sup>145</sup>Pr, <sup>146</sup>Pr, <sup>147</sup>Pr, <sup>148</sup>Pr, <sup>149</sup>Pr, <sup>150</sup>Pr, <sup>151</sup>Pr, <sup>152</sup>Pr, <sup>153</sup>Pr, <sup>154</sup>Pr, <sup>155</sup>Pr, <sup>156</sup>Pr, <sup>157</sup>Pr, <sup>158</sup>Pr, <sup>159</sup>Pr";
      eleStable = "<sup>141</sup>Pr";
      eleHighlight = "40,-10";
      eleCredits = preLink + "'http://images-of-elements.com/praseodymium.php'>Images-of-elements</a>";
      break;
    case "60":
      eleUnstable = "<sup>124</sup>Nd, <sup>125</sup>Nd, <sup>126</sup>Nd, <sup>127</sup>Nd, <sup>128</sup>Nd, <sup>129</sup>Nd, <sup>130</sup>Nd, <sup>131</sup>Nd, <sup>132</sup>Nd, <sup>133</sup>Nd, <sup>134</sup>Nd, <sup>135</sup>Nd, <sup>136</sup>Nd, <sup>137</sup>Nd, <sup>138</sup>Nd, <sup>139</sup>Nd, <sup>140</sup>Nd, <sup>141</sup>Nd, <sup>144</sup>Nd, <sup>147</sup>Nd, <sup>149</sup>Nd, <sup>150</sup>Nd, <sup>151</sup>Nd, <sup>152</sup>Nd, <sup>153</sup>Nd, <sup>154</sup>Nd, <sup>155</sup>Nd, <sup>156</sup>Nd, <sup>157</sup>Nd, <sup>158</sup>Nd, <sup>159</sup>Nd, <sup>160</sup>Nd, <sup>161</sup>Nd";
      eleStable = "<sup>142</sup>Nd, <sup>143</sup>Nd, <sup>145</sup>Nd, <sup>146</sup>Nd, <sup>148</sup>Nd";
      eleHighlight = "50,-10";
      eleCredits = preLink + "'http://images-of-elements.com/neodymium.php'>Images-of-elements</a>";
      break;
    case "61":
      eleStable = "-";
      eleUnstable = "<sup>126</sup>Pm, <sup>127</sup>Pm, <sup>128</sup>Pm, <sup>129</sup>Pm, <sup>130</sup>Pm, <sup>131</sup>Pm, <sup>132</sup>Pm, <sup>133</sup>Pm, <sup>134</sup>Pm, <sup>135</sup>Pm, <sup>136</sup>Pm, <sup>137</sup>Pm, <sup>138</sup>Pm, <sup>139</sup>Pm, <sup>140</sup>Pm, <sup>141</sup>Pm, <sup>142</sup>Pm, <sup>143</sup>Pm, <sup>144</sup>Pm, <sup>145</sup>Pm, <sup>146</sup>Pm, <sup>147</sup>Pm, <sup>148</sup>Pm, <sup>149</sup>Pm, <sup>150</sup>Pm, <sup>151</sup>Pm, <sup>152</sup>Pm, <sup>153</sup>Pm, <sup>154</sup>Pm, <sup>155</sup>Pm, <sup>156</sup>Pm, <sup>157</sup>Pm, <sup>158</sup>Pm, <sup>159</sup>Pm, <sup>160</sup>Pm, <sup>161</sup>Pm, <sup>162</sup>Pm, <sup>163</sup>Pm";
      eleHighlight = "60,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pitchblende_schlema-alberoda.JPG'>Wikimedia Commons (Geomartin)</a>";
      break;
    case "62":
      eleUnstable = "<sup>128</sup>Sm, <sup>129</sup>Sm, <sup>130</sup>Sm, <sup>131</sup>Sm, <sup>132</sup>Sm, <sup>133</sup>Sm, <sup>134</sup>Sm, <sup>135</sup>Sm, <sup>136</sup>Sm, <sup>137</sup>Sm, <sup>138</sup>Sm, <sup>139</sup>Sm, <sup>140</sup>Sm, <sup>141</sup>Sm, <sup>142</sup>Sm, <sup>143</sup>Sm, <sup>145</sup>Sm, <sup>146</sup>Sm, <sup>147</sup>Sm, <sup>148</sup>Sm, <sup>151</sup>Sm, <sup>153</sup>Sm, <sup>155</sup>Sm, <sup>156</sup>Sm, <sup>157</sup>Sm, <sup>158</sup>Sm, <sup>159</sup>Sm, <sup>160</sup>Sm, <sup>161</sup>Sm, <sup>162</sup>Sm, <sup>163</sup>Sm, <sup>164</sup>Sm, <sup>165</sup>Sm";
      eleStable = "<sup>144</sup>Sm, <sup>149</sup>Sm, <sup>150</sup>Sm, <sup>152</sup>Sm, <sup>154</sup>Sm";
      eleHighlight = "70,-10";
      eleCredits = preLink + "'http://images-of-elements.com/samarium.php'>Images-of-elements</a>";
      break;
    case "63":
      eleUnstable = "<sup>130</sup>Eu, <sup>131</sup>Eu, <sup>132</sup>Eu, <sup>133</sup>Eu, <sup>134</sup>Eu, <sup>135</sup>Eu, <sup>136</sup>Eu, <sup>137</sup>Eu, <sup>138</sup>Eu, <sup>139</sup>Eu, <sup>140</sup>Eu, <sup>141</sup>Eu, <sup>142</sup>Eu, <sup>143</sup>Eu, <sup>144</sup>Eu, <sup>145</sup>Eu, <sup>146</sup>Eu, <sup>147</sup>Eu, <sup>148</sup>Eu, <sup>149</sup>Eu, <sup>150</sup>Eu, <sup>152</sup>Eu, <sup>154</sup>Eu, <sup>155</sup>Eu, <sup>156</sup>Eu, <sup>157</sup>Eu, <sup>158</sup>Eu, <sup>159</sup>Eu, <sup>160</sup>Eu, <sup>161</sup>Eu, <sup>162</sup>Eu, <sup>163</sup>Eu, <sup>164</sup>Eu, <sup>165</sup>Eu, <sup>166</sup>Eu, <sup>167</sup>Eu";
      eleStable = "<sup>151</sup>Eu, <sup>153</sup>Eu";
      eleHighlight = "80,-10";
      eleCredits = preLink + "'http://images-of-elements.com/europium.php'>Images-of-elements</a>";
      break;
    case "64":
      eleUnstable = "<sup>134</sup>Gd, <sup>135</sup>Gd, <sup>136</sup>Gd, <sup>137</sup>Gd, <sup>138</sup>Gd, <sup>139</sup>Gd, <sup>140</sup>Gd, <sup>141</sup>Gd, <sup>142</sup>Gd, <sup>143</sup>Gd, <sup>144</sup>Gd, <sup>145</sup>Gd, <sup>146</sup>Gd, <sup>147</sup>Gd, <sup>148</sup>Gd, <sup>149</sup>Gd, <sup>150</sup>Gd, <sup>151</sup>Gd, <sup>152</sup>Gd, <sup>153</sup>Gd, <sup>159</sup>Gd, <sup>161</sup>Gd, <sup>162</sup>Gd, <sup>163</sup>Gd, <sup>164</sup>Gd, <sup>165</sup>Gd, <sup>166</sup>Gd, <sup>167</sup>Gd, <sup>168</sup>Gd, <sup>169</sup>Gd";
      eleStable = "<sup>154</sup>Gd, <sup>155</sup>Gd, <sup>156</sup>Gd, <sup>157</sup>Gd, <sup>158</sup>Gd, <sup>160</sup>Gd";
      eleHighlight = "90,-10";
      eleCredits = preLink + "'http://images-of-elements.com/gadolinium.php'>Images-of-elements</a>";
      break;
    case "65":
      eleUnstable = "<sup>136</sup>Tb, <sup>137</sup>Tb, <sup>138</sup>Tb, <sup>139</sup>Tb, <sup>140</sup>Tb, <sup>141</sup>Tb, <sup>142</sup>Tb, <sup>143</sup>Tb, <sup>144</sup>Tb, <sup>145</sup>Tb, <sup>146</sup>Tb, <sup>147</sup>Tb, <sup>148</sup>Tb, <sup>149</sup>Tb, <sup>150</sup>Tb, <sup>151</sup>Tb, <sup>152</sup>Tb, <sup>153</sup>Tb, <sup>154</sup>Tb, <sup>155</sup>Tb, <sup>156</sup>Tb, <sup>157</sup>Tb, <sup>158</sup>Tb, <sup>160</sup>Tb, <sup>161</sup>Tb, <sup>162</sup>Tb, <sup>163</sup>Tb, <sup>164</sup>Tb, <sup>165</sup>Tb, <sup>166</sup>Tb, <sup>167</sup>Tb, <sup>168</sup>Tb, <sup>169</sup>Tb, <sup>170</sup>Tb, <sup>171</sup>Tb";
      eleStable = "<sup>159</sup>Tb";
      eleHighlight = "100,-10";
      eleCredits = preLink + "'http://images-of-elements.com/terbium.php'>Images-of-elements</a>";
      break;
    case "66":
      eleUnstable = "<sup>138</sup>Dy, <sup>139</sup>Dy, <sup>140</sup>Dy, <sup>141</sup>Dy, <sup>142</sup>Dy, <sup>143</sup>Dy, <sup>144</sup>Dy, <sup>145</sup>Dy, <sup>146</sup>Dy, <sup>147</sup>Dy, <sup>148</sup>Dy, <sup>149</sup>Dy, <sup>150</sup>Dy, <sup>151</sup>Dy, <sup>152</sup>Dy, <sup>153</sup>Dy, <sup>154</sup>Dy, <sup>155</sup>Dy, <sup>157</sup>Dy, <sup>159</sup>Dy, <sup>165</sup>Dy, <sup>166</sup>Dy, <sup>167</sup>Dy, <sup>168</sup>Dy, <sup>169</sup>Dy, <sup>170</sup>Dy, <sup>171</sup>Dy, <sup>172</sup>Dy, <sup>173</sup>Dy";
      eleStable = "<sup>156</sup>Dy, <sup>158</sup>Dy, <sup>160</sup>Dy, <sup>161</sup>Dy, <sup>162</sup>Dy, <sup>163</sup>Dy, <sup>164</sup>Dy";
      eleHighlight = "110,-10";
      eleCredits = preLink + "'http://images-of-elements.com/dysprosium.php'>Images-of-elements</a>";
      break;
    case "67":
      eleUnstable = "<sup>140</sup>Ho, <sup>141</sup>Ho, <sup>142</sup>Ho, <sup>143</sup>Ho, <sup>144</sup>Ho, <sup>145</sup>Ho, <sup>146</sup>Ho, <sup>147</sup>Ho, <sup>148</sup>Ho, <sup>149</sup>Ho, <sup>150</sup>Ho, <sup>151</sup>Ho, <sup>152</sup>Ho, <sup>153</sup>Ho, <sup>154</sup>Ho, <sup>155</sup>Ho, <sup>156</sup>Ho, <sup>157</sup>Ho, <sup>158</sup>Ho, <sup>159</sup>Ho, <sup>160</sup>Ho, <sup>161</sup>Ho, <sup>162</sup>Ho, <sup>163</sup>Ho, <sup>164</sup>Ho, <sup>166</sup>Ho, <sup>167</sup>Ho, <sup>168</sup>Ho, <sup>169</sup>Ho, <sup>170</sup>Ho, <sup>171</sup>Ho, <sup>172</sup>Ho, <sup>173</sup>Ho, <sup>174</sup>Ho, <sup>175</sup>Ho";
      eleStable = "<sup>165</sup>Ho";
      eleHighlight = "120,-10";
      eleCredits = preLink + "'http://images-of-elements.com/holmium.php'>Images-of-elements</a>";
      break;
    case "68":
      eleUnstable = "<sup>143</sup>Er, <sup>144</sup>Er, <sup>145</sup>Er, <sup>146</sup>Er, <sup>147</sup>Er, <sup>148</sup>Er, <sup>149</sup>Er, <sup>150</sup>Er, <sup>151</sup>Er, <sup>152</sup>Er, <sup>153</sup>Er, <sup>154</sup>Er, <sup>155</sup>Er, <sup>156</sup>Er, <sup>157</sup>Er, <sup>158</sup>Er, <sup>159</sup>Er, <sup>160</sup>Er, <sup>161</sup>Er, <sup>163</sup>Er, <sup>165</sup>Er, <sup>169</sup>Er, <sup>171</sup>Er, <sup>172</sup>Er, <sup>173</sup>Er, <sup>174</sup>Er, <sup>175</sup>Er, <sup>176</sup>Er, <sup>177</sup>Er";
      eleStable = "<sup>162</sup>Er, <sup>164</sup>Er, <sup>166</sup>Er, <sup>167</sup>Er, <sup>168</sup>Er, <sup>170</sup>Er";
      eleHighlight = "130,-10";
      eleCredits = preLink + "'http://images-of-elements.com/erbium.php'>Images-of-elements</a>";
      break;
    case "69":
      eleUnstable = "<sup>145</sup>Tm, <sup>146</sup>Tm, <sup>147</sup>Tm, <sup>148</sup>Tm, <sup>149</sup>Tm, <sup>150</sup>Tm, <sup>151</sup>Tm, <sup>152</sup>Tm, <sup>153</sup>Tm, <sup>154</sup>Tm, <sup>155</sup>Tm, <sup>156</sup>Tm, <sup>157</sup>Tm, <sup>158</sup>Tm, <sup>159</sup>Tm, <sup>160</sup>Tm, <sup>161</sup>Tm, <sup>162</sup>Tm, <sup>163</sup>Tm, <sup>164</sup>Tm, <sup>165</sup>Tm, <sup>166</sup>Tm, <sup>167</sup>Tm, <sup>168</sup>Tm, <sup>170</sup>Tm, <sup>171</sup>Tm, <sup>172</sup>Tm, <sup>173</sup>Tm, <sup>174</sup>Tm, <sup>175</sup>Tm, <sup>176</sup>Tm, <sup>177</sup>Tm, <sup>178</sup>Tm, <sup>179</sup>Tm";
      eleStable = "<sup>169</sup>Tm";
      eleHighlight = "140,-10";
      eleCredits = preLink + "'http://images-of-elements.com/thulium.php'>Images-of-elements</a>";
      break;
    case "70":
      eleUnstable = "<sup>148</sup>Yb, <sup>149</sup>Yb, <sup>150</sup>Yb, <sup>151</sup>Yb, <sup>152</sup>Yb, <sup>153</sup>Yb, <sup>154</sup>Yb, <sup>155</sup>Yb, <sup>156</sup>Yb, <sup>157</sup>Yb, <sup>158</sup>Yb, <sup>159</sup>Yb, <sup>160</sup>Yb, <sup>161</sup>Yb, <sup>162</sup>Yb, <sup>163</sup>Yb, <sup>164</sup>Yb, <sup>165</sup>Yb, <sup>166</sup>Yb, <sup>167</sup>Yb, <sup>169</sup>Yb, <sup>175</sup>Yb, <sup>177</sup>Yb, <sup>178</sup>Yb, <sup>179</sup>Yb, <sup>180</sup>Yb, <sup>181</sup>Yb";
      eleStable = "<sup>168</sup>Yb, <sup>170</sup>Yb, <sup>171</sup>Yb, <sup>172</sup>Yb, <sup>173</sup>Yb, <sup>174</sup>Yb, <sup>176</sup>Yb";
      eleHighlight = "150,-10";
      eleCredits = preLink + "'http://images-of-elements.com/ytterbium.php'>Images-of-elements</a>";
      break;
    case "71":
      eleUnstable = "<sup>150</sup>Lu, <sup>151</sup>Lu, <sup>152</sup>Lu, <sup>153</sup>Lu, <sup>154</sup>Lu, <sup>155</sup>Lu, <sup>156</sup>Lu, <sup>157</sup>Lu, <sup>158</sup>Lu, <sup>159</sup>Lu, <sup>160</sup>Lu, <sup>161</sup>Lu, <sup>162</sup>Lu, <sup>163</sup>Lu, <sup>164</sup>Lu, <sup>165</sup>Lu, <sup>166</sup>Lu, <sup>167</sup>Lu, <sup>168</sup>Lu, <sup>169</sup>Lu, <sup>170</sup>Lu, <sup>171</sup>Lu, <sup>172</sup>Lu, <sup>173</sup>Lu, <sup>174</sup>Lu, <sup>176</sup>Lu, <sup>177</sup>Lu, <sup>178</sup>Lu, <sup>179</sup>Lu, <sup>180</sup>Lu, <sup>181</sup>Lu, <sup>182</sup>Lu, <sup>183</sup>Lu, <sup>184</sup>Lu";
      eleStable = "<sup>175</sup>Lu";
      eleHighlight = "160,-10";
      eleCredits = preLink + "'http://images-of-elements.com/lutetium.php'>Images-of-elements</a>";
      break;
    case "72":
      eleUnstable = "<sup>153</sup>Hf, <sup>154</sup>Hf, <sup>155</sup>Hf, <sup>156</sup>Hf, <sup>157</sup>Hf, <sup>158</sup>Hf, <sup>159</sup>Hf, <sup>160</sup>Hf, <sup>161</sup>Hf, <sup>162</sup>Hf, <sup>163</sup>Hf, <sup>164</sup>Hf, <sup>165</sup>Hf, <sup>166</sup>Hf, <sup>167</sup>Hf, <sup>168</sup>Hf, <sup>169</sup>Hf, <sup>170</sup>Hf, <sup>171</sup>Hf, <sup>172</sup>Hf, <sup>173</sup>Hf, <sup>174</sup>Hf, <sup>175</sup>Hf, <sup>181</sup>Hf, <sup>182</sup>Hf, <sup>183</sup>Hf, <sup>184</sup>Hf, <sup>185</sup>Hf, <sup>186</sup>Hf, <sup>187</sup>Hf, <sup>188</sup>Hf";
      eleStable = "<sup>176</sup>Hf, <sup>177</sup>Hf, <sup>178</sup>Hf, <sup>179</sup>Hf, <sup>180</sup>Hf";
      eleHighlight = "170,-10";
      eleCredits = preLink + "'http://images-of-elements.com/hafnium.php'>Images-of-elements</a>";
      break;
    case "73":
      eleUnstable = "<sup>155</sup>Ta, <sup>156</sup>Ta, <sup>157</sup>Ta, <sup>158</sup>Ta, <sup>159</sup>Ta, <sup>160</sup>Ta, <sup>161</sup>Ta, <sup>162</sup>Ta, <sup>163</sup>Ta, <sup>164</sup>Ta, <sup>165</sup>Ta, <sup>166</sup>Ta, <sup>167</sup>Ta, <sup>168</sup>Ta, <sup>169</sup>Ta, <sup>170</sup>Ta, <sup>171</sup>Ta, <sup>172</sup>Ta, <sup>173</sup>Ta, <sup>174</sup>Ta, <sup>175</sup>Ta, <sup>176</sup>Ta, <sup>177</sup>Ta, <sup>178</sup>Ta, <sup>179</sup>Ta, <sup>180</sup>Ta, <sup>182</sup>Ta, <sup>183</sup>Ta, <sup>184</sup>Ta, <sup>185</sup>Ta, <sup>186</sup>Ta, <sup>187</sup>Ta, <sup>188</sup>Ta, <sup>189</sup>Ta, <sup>190</sup>Ta";
      eleStable = "<sup>181</sup>Ta";
      eleHighlight = "180,-10";
      eleCredits = preLink + "'http://images-of-elements.com/tantalum.php'>Images-of-elements</a>";
      break;
    case "74":
      eleUnstable = "<sup>158</sup>W, <sup>159</sup>W, <sup>160</sup>W, <sup>161</sup>W, <sup>162</sup>W, <sup>163</sup>W, <sup>164</sup>W, <sup>165</sup>W, <sup>166</sup>W, <sup>167</sup>W, <sup>168</sup>W, <sup>169</sup>W, <sup>170</sup>W, <sup>171</sup>W, <sup>172</sup>W, <sup>173</sup>W, <sup>174</sup>W, <sup>175</sup>W, <sup>176</sup>W, <sup>177</sup>W, <sup>178</sup>W, <sup>179</sup>W, <sup>181</sup>W, <sup>185</sup>W, <sup>187</sup>W, <sup>188</sup>W, <sup>189</sup>W, <sup>190</sup>W, <sup>191</sup>W, <sup>192</sup>W";
      eleStable = "<sup>180</sup>W, <sup>182</sup>W, <sup>183</sup>W, <sup>184</sup>W, <sup>186</sup>W";
      eleHighlight = "190,-10";
      eleCredits = preLink + "'http://images-of-elements.com/tungsten.php'>Images-of-elements</a>";
      break;
    case "75":
      eleUnstable = "<sup>160</sup>Re, <sup>161</sup>Re, <sup>162</sup>Re, <sup>163</sup>Re, <sup>164</sup>Re, <sup>165</sup>Re, <sup>166</sup>Re, <sup>167</sup>Re, <sup>168</sup>Re, <sup>169</sup>Re, <sup>170</sup>Re, <sup>171</sup>Re, <sup>172</sup>Re, <sup>173</sup>Re, <sup>174</sup>Re, <sup>175</sup>Re, <sup>176</sup>Re, <sup>177</sup>Re, <sup>178</sup>Re, <sup>179</sup>Re, <sup>180</sup>Re, <sup>181</sup>Re, <sup>182</sup>Re, <sup>183</sup>Re, <sup>184</sup>Re, <sup>186</sup>Re, <sup>187</sup>Re, <sup>188</sup>Re, <sup>189</sup>Re, <sup>190</sup>Re, <sup>191</sup>Re, <sup>192</sup>Re, <sup>193</sup>Re, <sup>194</sup>Re";
      eleStable = "<sup>185</sup>Re";
      eleHighlight = "200,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Rhenium_single_crystal_bar_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "76":
      eleUnstable = "<sup>161</sup>Os, <sup>162</sup>Os, <sup>163</sup>Os, <sup>164</sup>Os, <sup>165</sup>Os, <sup>166</sup>Os, <sup>167</sup>Os, <sup>168</sup>Os, <sup>169</sup>Os, <sup>170</sup>Os, <sup>171</sup>Os, <sup>172</sup>Os, <sup>173</sup>Os, <sup>174</sup>Os, <sup>175</sup>Os, <sup>176</sup>Os, <sup>177</sup>Os, <sup>178</sup>Os, <sup>179</sup>Os, <sup>180</sup>Os, <sup>181</sup>Os, <sup>182</sup>Os, <sup>183</sup>Os, <sup>185</sup>Os, <sup>186</sup>Os, <sup>191</sup>Os, <sup>193</sup>Os, <sup>194</sup>Os, <sup>195</sup>Os, <sup>196</sup>Os";
      eleStable = "<sup>184</sup>Os, <sup>187</sup>Os, <sup>188</sup>Os, <sup>189</sup>Os, <sup>190</sup>Os, <sup>192</sup>Os";
      eleHighlight = "210,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Osmium_crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "77":
      eleUnstable = "<sup>164</sup>Ir, <sup>165</sup>Ir, <sup>166</sup>Ir, <sup>167</sup>Ir, <sup>168</sup>Ir, <sup>169</sup>Ir, <sup>170</sup>Ir, <sup>171</sup>Ir, <sup>172</sup>Ir, <sup>173</sup>Ir, <sup>174</sup>Ir, <sup>175</sup>Ir, <sup>176</sup>Ir, <sup>177</sup>Ir, <sup>178</sup>Ir, <sup>179</sup>Ir, <sup>180</sup>Ir, <sup>181</sup>Ir, <sup>182</sup>Ir, <sup>183</sup>Ir, <sup>184</sup>Ir, <sup>185</sup>Ir, <sup>186</sup>Ir, <sup>187</sup>Ir, <sup>188</sup>Ir, <sup>189</sup>Ir, <sup>190</sup>Ir, <sup>192</sup>Ir, <sup>194</sup>Ir, <sup>195</sup>Ir, <sup>196</sup>Ir, <sup>197</sup>Ir, <sup>198</sup>Ir, <sup>199</sup>Ir";
      eleStable = "<sup>191</sup>Ir, <sup>193</sup>Ir";
      eleHighlight = "220,-10";
      eleCredits = preLink + "'http://images-of-elements.com/iridium.php'>Images-of-elements</a>";
      break;
    case "78":
      eleUnstable = "<sup>166</sup>Pt, <sup>167</sup>Pt, <sup>168</sup>Pt, <sup>169</sup>Pt, <sup>170</sup>Pt, <sup>171</sup>Pt, <sup>172</sup>Pt, <sup>173</sup>Pt, <sup>174</sup>Pt, <sup>175</sup>Pt, <sup>176</sup>Pt, <sup>177</sup>Pt, <sup>178</sup>Pt, <sup>179</sup>Pt, <sup>180</sup>Pt, <sup>181</sup>Pt, <sup>182</sup>Pt, <sup>183</sup>Pt, <sup>184</sup>Pt, <sup>185</sup>Pt, <sup>186</sup>Pt, <sup>187</sup>Pt, <sup>188</sup>Pt, <sup>189</sup>Pt, <sup>190</sup>Pt, <sup>191</sup>Pt, <sup>193</sup>Pt, <sup>197</sup>Pt, <sup>199</sup>Pt, <sup>200</sup>Pt, <sup>201</sup>Pt, <sup>202</sup>Pt";
      eleStable = "<sup>192</sup>Pt, <sup>194</sup>Pt, <sup>195</sup>Pt, <sup>196</sup>Pt, <sup>198</sup>Pt";
      eleHighlight = "230,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Platinum-nugget.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "79":
      eleUnstable = "<sup>169</sup>Au, <sup>170</sup>Au, <sup>171</sup>Au, <sup>172</sup>Au, <sup>173</sup>Au, <sup>174</sup>Au, <sup>175</sup>Au, <sup>176</sup>Au, <sup>177</sup>Au, <sup>178</sup>Au, <sup>179</sup>Au, <sup>180</sup>Au, <sup>181</sup>Au, <sup>182</sup>Au, <sup>183</sup>Au, <sup>184</sup>Au, <sup>185</sup>Au, <sup>186</sup>Au, <sup>187</sup>Au, <sup>188</sup>Au, <sup>189</sup>Au, <sup>190</sup>Au, <sup>191</sup>Au, <sup>192</sup>Au, <sup>193</sup>Au, <sup>194</sup>Au, <sup>195</sup>Au, <sup>196</sup>Au, <sup>198</sup>Au, <sup>199</sup>Au, <sup>200</sup>Au, <sup>201</sup>Au, <sup>202</sup>Au, <sup>203</sup>Au, <sup>204</sup>Au, <sup>205</sup>Au";
      eleStable = "<sup>197</sup>Au";
      eleHighlight = "240,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Gold-crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
      break;
    case "80":
      eleUnstable = "<sup>171</sup>Hg, <sup>172</sup>Hg, <sup>173</sup>Hg, <sup>174</sup>Hg, <sup>175</sup>Hg, <sup>176</sup>Hg, <sup>177</sup>Hg, <sup>178</sup>Hg, <sup>179</sup>Hg, <sup>180</sup>Hg, <sup>181</sup>Hg, <sup>182</sup>Hg, <sup>183</sup>Hg, <sup>184</sup>Hg, <sup>185</sup>Hg, <sup>186</sup>Hg, <sup>187</sup>Hg, <sup>188</sup>Hg, <sup>189</sup>Hg, <sup>190</sup>Hg, <sup>191</sup>Hg, <sup>192</sup>Hg, <sup>193</sup>Hg, <sup>194</sup>Hg, <sup>195</sup>Hg, <sup>197</sup>Hg, <sup>203</sup>Hg, <sup>205</sup>Hg, <sup>206</sup>Hg, <sup>207</sup>Hg, <sup>208</sup>Hg, <sup>209</sup>Hg, <sup>210</sup>Hg";
      eleStable = "<sup>196</sup>Hg, <sup>198</sup>Hg, <sup>199</sup>Hg, <sup>200</sup>Hg, <sup>201</sup>Hg, <sup>202</sup>Hg, <sup>204</sup>Hg";
      eleHighlight = "250,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pouring_liquid_mercury_bionerd.jpg'>Wikimedia Commons (Bionerd)</a>";
      break;
    case "81":
      eleUnstable = "<sup>176</sup>Tl, <sup>177</sup>Tl, <sup>178</sup>Tl, <sup>179</sup>Tl, <sup>180</sup>Tl, <sup>181</sup>Tl, <sup>182</sup>Tl, <sup>183</sup>Tl, <sup>184</sup>Tl, <sup>185</sup>Tl, <sup>186</sup>Tl, <sup>187</sup>Tl, <sup>188</sup>Tl, <sup>189</sup>Tl, <sup>190</sup>Tl, <sup>191</sup>Tl, <sup>192</sup>Tl, <sup>193</sup>Tl, <sup>194</sup>Tl, <sup>195</sup>Tl, <sup>196</sup>Tl, <sup>197</sup>Tl, <sup>198</sup>Tl, <sup>199</sup>Tl, <sup>200</sup>Tl, <sup>201</sup>Tl, <sup>202</sup>Tl, <sup>204</sup>Tl, <sup>206</sup>Tl, <sup>207</sup>Tl, <sup>208</sup>Tl, <sup>209</sup>Tl, <sup>210</sup>Tl, <sup>211</sup>Tl, <sup>212</sup>Tl";
      eleStable = "<sup>203</sup>Tl, <sup>205</sup>Tl";
      eleHighlight = "260,-10";
      eleCredits = preLink + "'http://images-of-elements.com/thallium.php'>Images-of-elements</a>";
      break;
    case "82":
      eleUnstable = "<sup>178</sup>Pb, <sup>179</sup>Pb, <sup>180</sup>Pb, <sup>181</sup>Pb, <sup>182</sup>Pb, <sup>183</sup>Pb, <sup>184</sup>Pb, <sup>185</sup>Pb, <sup>186</sup>Pb, <sup>187</sup>Pb, <sup>188</sup>Pb, <sup>189</sup>Pb, <sup>190</sup>Pb, <sup>191</sup>Pb, <sup>192</sup>Pb, <sup>193</sup>Pb, <sup>194</sup>Pb, <sup>195</sup>Pb, <sup>196</sup>Pb, <sup>197</sup>Pb, <sup>198</sup>Pb, <sup>199</sup>Pb, <sup>200</sup>Pb, <sup>201</sup>Pb, <sup>202</sup>Pb, <sup>203</sup>Pb, <sup>205</sup>Pb, <sup>209</sup>Pb, <sup>210</sup>Pb, <sup>211</sup>Pb, <sup>212</sup>Pb, <sup>213</sup>Pb, <sup>214</sup>Pb, <sup>215</sup>Pb";
      eleStable = "<sup>204</sup>Pb, <sup>206</sup>Pb, <sup>207</sup>Pb, <sup>208</sup>Pb";
      eleHighlight = "270,-10";
      eleCredits = preLink + "'http://images-of-elements.com/lead.php'>Images-of-elements</a>";
      break;
    case "83":
      eleStable = "-";
      eleUnstable = "<sup>184</sup>Bi, <sup>185</sup>Bi, <sup>186</sup>Bi, <sup>187</sup>Bi, <sup>188</sup>Bi, <sup>189</sup>Bi, <sup>190</sup>Bi, <sup>191</sup>Bi, <sup>192</sup>Bi, <sup>193</sup>Bi, <sup>194</sup>Bi, <sup>195</sup>Bi, <sup>196</sup>Bi, <sup>197</sup>Bi, <sup>198</sup>Bi, <sup>199</sup>Bi, <sup>200</sup>Bi, <sup>201</sup>Bi, <sup>202</sup>Bi, <sup>203</sup>Bi, <sup>204</sup>Bi, <sup>205</sup>Bi, <sup>206</sup>Bi, <sup>207</sup>Bi, <sup>208</sup>Bi, <sup>209</sup>Bi, <sup>210</sup>Bi, <sup>211</sup>Bi, <sup>212</sup>Bi, <sup>213</sup>Bi, <sup>214</sup>Bi, <sup>215</sup>Bi, <sup>216</sup>Bi, <sup>217</sup>Bi, <sup>218</sup>Bi";
      eleHighlight = "280,-10";
      eleCredits = preLink + "'http://images-of-elements.com/bismuth.php'>Images-of-elements</a>";
      break;
    case "84":
      eleStable = "-";
      eleUnstable = "<sup>188</sup>Po, <sup>189</sup>Po, <sup>190</sup>Po, <sup>191</sup>Po, <sup>192</sup>Po, <sup>193</sup>Po, <sup>194</sup>Po, <sup>195</sup>Po, <sup>196</sup>Po, <sup>197</sup>Po, <sup>198</sup>Po, <sup>199</sup>Po, <sup>200</sup>Po, <sup>201</sup>Po, <sup>202</sup>Po, <sup>203</sup>Po, <sup>204</sup>Po, <sup>205</sup>Po, <sup>206</sup>Po, <sup>207</sup>Po, <sup>208</sup>Po, <sup>209</sup>Po, <sup>210</sup>Po, <sup>211</sup>Po, <sup>212</sup>Po, <sup>213</sup>Po, <sup>214</sup>Po, <sup>215</sup>Po, <sup>216</sup>Po, <sup>217</sup>Po, <sup>218</sup>Po, <sup>219</sup>Po, <sup>220</sup>Po";
      eleHighlight = "290,-10";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg'>hp.ujf.cas.cz</a>";
      break;
    case "85":
      eleStable = "-";
      eleUnstable = "<sup>193</sup>At, <sup>194</sup>At, <sup>195</sup>At, <sup>196</sup>At, <sup>197</sup>At, <sup>198</sup>At, <sup>199</sup>At, <sup>200</sup>At, <sup>201</sup>At, <sup>202</sup>At, <sup>203</sup>At, <sup>204</sup>At, <sup>205</sup>At, <sup>206</sup>At, <sup>207</sup>At, <sup>208</sup>At, <sup>209</sup>At, <sup>210</sup>At, <sup>211</sup>At, <sup>212</sup>At, <sup>213</sup>At, <sup>214</sup>At, <sup>215</sup>At, <sup>216</sup>At, <sup>217</sup>At, <sup>218</sup>At, <sup>219</sup>At, <sup>220</sup>At, <sup>221</sup>At, <sup>222</sup>At, <sup>223</sup>At";
      eleHighlight = "300,-10";
      eleCredits = preLink + "'http://pauli.uni-muenster.de/~munsteg/physiker.html'>pauli.uni-muenster.de</a>";
      break;
    case "86":
      eleStable = "-";
      eleUnstable = "<sup>195</sup>Rn, <sup>196</sup>Rn, <sup>197</sup>Rn, <sup>198</sup>Rn, <sup>199</sup>Rn, <sup>200</sup>Rn, <sup>201</sup>Rn, <sup>202</sup>Rn, <sup>203</sup>Rn, <sup>204</sup>Rn, <sup>205</sup>Rn, <sup>206</sup>Rn, <sup>207</sup>Rn, <sup>208</sup>Rn, <sup>209</sup>Rn, <sup>210</sup>Rn, <sup>211</sup>Rn, <sup>212</sup>Rn, <sup>213</sup>Rn, <sup>214</sup>Rn, <sup>215</sup>Rn, <sup>216</sup>Rn, <sup>217</sup>Rn, <sup>218</sup>Rn, <sup>219</sup>Rn, <sup>220</sup>Rn, <sup>221</sup>Rn, <sup>222</sup>Rn, <sup>223</sup>Rn, <sup>224</sup>Rn, <sup>225</sup>Rn, <sup>226</sup>Rn, <sup>227</sup>Rn, <sup>228</sup>Rn";
      eleHighlight = "310,-10";
      eleCredits = preLink + "'http://images-of-elements.com/radon.php'>Images-of-elements</a>";
      break;
    case "87":
      eleStable = "-";
      eleUnstable = "<sup>199</sup>Fr, <sup>200</sup>Fr, <sup>201</sup>Fr, <sup>202</sup>Fr, <sup>203</sup>Fr, <sup>204</sup>Fr, <sup>205</sup>Fr, <sup>206</sup>Fr, <sup>207</sup>Fr, <sup>208</sup>Fr, <sup>209</sup>Fr, <sup>210</sup>Fr, <sup>211</sup>Fr, <sup>212</sup>Fr, <sup>213</sup>Fr, <sup>214</sup>Fr, <sup>215</sup>Fr, <sup>216</sup>Fr, <sup>217</sup>Fr, <sup>218</sup>Fr, <sup>219</sup>Fr, <sup>220</sup>Fr, <sup>221</sup>Fr, <sup>222</sup>Fr, <sup>223</sup>Fr, <sup>224</sup>Fr, <sup>225</sup>Fr, <sup>226</sup>Fr, <sup>227</sup>Fr, <sup>228</sup>Fr, <sup>229</sup>Fr, <sup>230</sup>Fr, <sup>231</sup>Fr, <sup>232</sup>Fr";
      eleHighlight = "0,0";
      eleCredits = preLink + "'http://images-of-elements.com/francium.php'>Images-of-elements</a>";
      break;
    case "88":
      eleStable = "-";
      eleUnstable = "<sup>202</sup>Ra, <sup>203</sup>Ra, <sup>204</sup>Ra, <sup>205</sup>Ra, <sup>206</sup>Ra, <sup>207</sup>Ra, <sup>208</sup>Ra, <sup>209</sup>Ra, <sup>210</sup>Ra, <sup>211</sup>Ra, <sup>212</sup>Ra, <sup>213</sup>Ra, <sup>214</sup>Ra, <sup>215</sup>Ra, <sup>216</sup>Ra, <sup>217</sup>Ra, <sup>218</sup>Ra, <sup>219</sup>Ra, <sup>220</sup>Ra, <sup>221</sup>Ra, <sup>222</sup>Ra, <sup>223</sup>Ra, <sup>224</sup>Ra, <sup>225</sup>Ra, <sup>226</sup>Ra, <sup>227</sup>Ra, <sup>228</sup>Ra, <sup>229</sup>Ra, <sup>230</sup>Ra, <sup>231</sup>Ra, <sup>232</sup>Ra, <sup>233</sup>Ra, <sup>234</sup>Ra";
      eleHighlight = "10,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg'>hp.ujf.cas.cz</a>";
      break;
    case "89":
      eleStable = "-";
      eleUnstable = "<sup>206</sup>Ac, <sup>207</sup>Ac, <sup>208</sup>Ac, <sup>209</sup>Ac, <sup>210</sup>Ac, <sup>211</sup>Ac, <sup>212</sup>Ac, <sup>213</sup>Ac, <sup>214</sup>Ac, <sup>215</sup>Ac, <sup>216</sup>Ac, <sup>217</sup>Ac, <sup>218</sup>Ac, <sup>219</sup>Ac, <sup>220</sup>Ac, <sup>221</sup>Ac, <sup>222</sup>Ac, <sup>223</sup>Ac, <sup>224</sup>Ac, <sup>225</sup>Ac, <sup>226</sup>Ac, <sup>227</sup>Ac, <sup>228</sup>Ac, <sup>229</sup>Ac, <sup>230</sup>Ac, <sup>231</sup>Ac, <sup>232</sup>Ac, <sup>233</sup>Ac, <sup>234</sup>Ac, <sup>235</sup>Ac, <sup>236</sup>Ac";
      eleHighlight = "20,0";
      eleCredits = preLink + "'http://images-of-elements.com/actinium.php'>Images-of-elements</a>";
      break;
    case "90":
      eleUnstable = "<sup>209</sup>Th, <sup>210</sup>Th, <sup>211</sup>Th, <sup>212</sup>Th, <sup>213</sup>Th, <sup>214</sup>Th, <sup>215</sup>Th, <sup>216</sup>Th, <sup>217</sup>Th, <sup>218</sup>Th, <sup>219</sup>Th, <sup>220</sup>Th, <sup>221</sup>Th, <sup>222</sup>Th, <sup>223</sup>Th, <sup>224</sup>Th, <sup>225</sup>Th, <sup>226</sup>Th, <sup>227</sup>Th, <sup>228</sup>Th, <sup>229</sup>Th, <sup>230</sup>Th, <sup>231</sup>Th, <sup>233</sup>Th, <sup>234</sup>Th, <sup>235</sup>Th, <sup>236</sup>Th, <sup>237</sup>Th, <sup>238</sup>Th";
      eleStable = "<sup>232</sup>Th";
      eleHighlight = "30,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Keplers_supernova.jpg'>Wikimedia Commons (NASA/ESA/JHU/R.Sankrit & W.Blair)</a>";
      break;
    case "91":
      eleStable = "-";
      eleUnstable = "<sup>212</sup>Pa, <sup>213</sup>Pa, <sup>214</sup>Pa, <sup>215</sup>Pa, <sup>216</sup>Pa, <sup>217</sup>Pa, <sup>218</sup>Pa, <sup>219</sup>Pa, <sup>220</sup>Pa, <sup>221</sup>Pa, <sup>222</sup>Pa, <sup>223</sup>Pa, <sup>224</sup>Pa, <sup>225</sup>Pa, <sup>226</sup>Pa, <sup>227</sup>Pa, <sup>228</sup>Pa, <sup>229</sup>Pa, <sup>230</sup>Pa, <sup>231</sup>Pa, <sup>232</sup>Pa, <sup>233</sup>Pa, <sup>234</sup>Pa, <sup>235</sup>Pa, <sup>236</sup>Pa, <sup>237</sup>Pa, <sup>238</sup>Pa, <sup>239</sup>Pa, <sup>240</sup>Pa";
      eleHighlight = "40,0";
      eleCredits = preLink + "'http://images-of-elements.com/protactinium.php'>Images-of-elements</a>";
      break;
    case "92":
      eleStable = "-";
      eleUnstable = "<sup>215</sup>U, <sup>216</sup>U, <sup>217</sup>U, <sup>218</sup>U, <sup>219</sup>U, <sup>220</sup>U, <sup>221</sup>U, <sup>222</sup>U, <sup>223</sup>U, <sup>224</sup>U, <sup>225</sup>U, <sup>226</sup>U, <sup>227</sup>U, <sup>228</sup>U, <sup>229</sup>U, <sup>230</sup>U, <sup>231</sup>U, <sup>232</sup>U, <sup>233</sup>U, <sup>234</sup>U, <sup>235</sup>U, <sup>236</sup>U, <sup>237</sup>U, <sup>238</sup>U, <sup>239</sup>U, <sup>240</sup>U, <sup>241</sup>U, <sup>242</sup>U";
      eleHighlight = "50,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:HEUraniumC.jpg'>Wikimedia Commons (Zxctypo)</a>";
      break;
    case "93":
      eleStable = "-";
      eleUnstable = "<sup>225</sup>Np, <sup>226</sup>Np, <sup>227</sup>Np, <sup>228</sup>Np, <sup>229</sup>Np, <sup>230</sup>Np, <sup>231</sup>Np, <sup>232</sup>Np, <sup>233</sup>Np, <sup>234</sup>Np, <sup>235</sup>Np, <sup>236</sup>Np, <sup>237</sup>Np, <sup>238</sup>Np, <sup>239</sup>Np, <sup>240</sup>Np, <sup>241</sup>Np, <sup>242</sup>Np, <sup>243</sup>Np, <sup>244</sup>Np";
      eleHighlight = "60,0";
      eleCredits = preLink + "'http://www.scienceworld.ro/stiri/cei-mai-mari-10-oameni-de-stiinta-de-care-nu-ai-auzit-11793.html'>scienceworld.ro</a>";
      break;
    case "94":
      eleStable = "-";
      eleUnstable = "<sup>228</sup>Pu, <sup>229</sup>Pu, <sup>230</sup>Pu, <sup>231</sup>Pu, <sup>232</sup>Pu, <sup>233</sup>Pu, <sup>234</sup>Pu, <sup>235</sup>Pu, <sup>236</sup>Pu, <sup>237</sup>Pu, <sup>238</sup>Pu, <sup>239</sup>Pu, <sup>240</sup>Pu, <sup>241</sup>Pu, <sup>242</sup>Pu, <sup>243</sup>Pu, <sup>244</sup>Pu, <sup>245</sup>Pu, <sup>246</sup>Pu, <sup>247</sup>Pu";
      eleHighlight = "70,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Plutonium_ring.jpg'>Wikimedia Commons (Los Alamos National Laboratory)</a>";
      break;
    case "95":
      eleStable = "-";
      eleUnstable = "<sup>229</sup>Am, <sup>231</sup>Am, <sup>232</sup>Am, <sup>233</sup>Am, <sup>234</sup>Am, <sup>235</sup>Am, <sup>236</sup>Am, <sup>237</sup>Am, <sup>238</sup>Am, <sup>239</sup>Am, <sup>240</sup>Am, <sup>241</sup>Am, <sup>242</sup>Am, <sup>243</sup>Am, <sup>244</sup>Am, <sup>245</sup>Am, <sup>246</sup>Am, <sup>247</sup>Am, <sup>248</sup>Am, <sup>249</sup>Am";
      eleHighlight = "80,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Americium_microscope.jpg'>Wikimedia Commons (Bionerd)</a>";
      break;
    case "96":
      eleStable = "-";
      eleUnstable = "<sup>233</sup>Cm, <sup>234</sup>Cm, <sup>235</sup>Cm, <sup>236</sup>Cm, <sup>237</sup>Cm, <sup>238</sup>Cm, <sup>239</sup>Cm, <sup>240</sup>Cm, <sup>241</sup>Cm, <sup>242</sup>Cm, <sup>243</sup>Cm, <sup>244</sup>Cm, <sup>245</sup>Cm, <sup>246</sup>Cm, <sup>247</sup>Cm, <sup>248</sup>Cm, <sup>249</sup>Cm, <sup>250</sup>Cm, <sup>251</sup>Cm, <sup>252</sup>Cm";
      eleHighlight = "90,0";
      eleCredits = preLink + "'http://images-of-elements.com/curium.php'>Images-of-elements</a>";
      break;
    case "97":
      eleStable = "-";
      eleUnstable = "<sup>233</sup>Bk, <sup>235</sup>Bk, <sup>236</sup>Bk, <sup>237</sup>Bk, <sup>238</sup>Bk, <sup>239</sup>Bk, <sup>240</sup>Bk, <sup>241</sup>Bk, <sup>242</sup>Bk, <sup>243</sup>Bk, <sup>244</sup>Bk, <sup>245</sup>Bk, <sup>246</sup>Bk, <sup>247</sup>Bk, <sup>248</sup>Bk, <sup>249</sup>Bk, <sup>250</sup>Bk, <sup>251</sup>Bk, <sup>252</sup>Bk, <sup>253</sup>Bk, <sup>254</sup>Bk";
      eleHighlight = "100,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Berkeley_60-inch_cyclotron.jpg'>Wikimedia Commons (Department of Energy - Office of Public Affairs)</a>";
      break;
    case "98":
      eleStable = "-";
      eleUnstable = "<sup>237</sup>Cf, <sup>238</sup>Cf, <sup>239</sup>Cf, <sup>240</sup>Cf, <sup>241</sup>Cf, <sup>242</sup>Cf, <sup>243</sup>Cf, <sup>244</sup>Cf, <sup>245</sup>Cf, <sup>246</sup>Cf, <sup>247</sup>Cf, <sup>248</sup>Cf, <sup>249</sup>Cf, <sup>250</sup>Cf, <sup>251</sup>Cf, <sup>252</sup>Cf, <sup>253</sup>Cf, <sup>254</sup>Cf, <sup>255</sup>Cf, <sup>256</sup>Cf";
      eleHighlight = "110,0";
      eleCredits = preLink + "'http://images-of-elements.com/californium.php'>Images-of-elements</a>";
      break;
    case "99":
      eleStable = "-";
      eleUnstable = "<sup>240</sup>Es, <sup>241</sup>Es, <sup>242</sup>Es, <sup>243</sup>Es, <sup>244</sup>Es, <sup>245</sup>Es, <sup>246</sup>Es, <sup>247</sup>Es, <sup>248</sup>Es, <sup>249</sup>Es, <sup>250</sup>Es, <sup>251</sup>Es, <sup>252</sup>Es, <sup>253</sup>Es, <sup>254</sup>Es, <sup>255</sup>Es, <sup>256</sup>Es, <sup>257</sup>Es, <sup>258</sup>Es";
      eleHighlight = "120,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Ivy_Mike_-_mushroom_cloud.jpg'>Wikimedia Commons (National Nuclear Security Administration)</a>";
      break;
    case "100":
      eleStable = "-";
      eleUnstable = "<sup>241</sup>Fm, <sup>242</sup>Fm, <sup>243</sup>Fm, <sup>244</sup>Fm, <sup>245</sup>Fm, <sup>246</sup>Fm, <sup>247</sup>Fm, <sup>248</sup>Fm, <sup>249</sup>Fm, <sup>250</sup>Fm, <sup>251</sup>Fm, <sup>252</sup>Fm, <sup>253</sup>Fm, <sup>254</sup>Fm, <sup>255</sup>Fm, <sup>256</sup>Fm, <sup>257</sup>Fm, <sup>258</sup>Fm, <sup>259</sup>Fm, <sup>260</sup>Fm";
      eleHighlight = "130,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Ivy_Mike_-_mushroom_cloud.jpg'>Wikimedia Commons (National Nuclear Security Administration)</a>";
      break;
    case "101":
      eleStable = "-";
      eleUnstable = "<sup>245</sup>Md, <sup>246</sup>Md, <sup>247</sup>Md, <sup>248</sup>Md, <sup>249</sup>Md, <sup>250</sup>Md, <sup>251</sup>Md, <sup>252</sup>Md, <sup>253</sup>Md, <sup>254</sup>Md, <sup>255</sup>Md, <sup>256</sup>Md, <sup>257</sup>Md, <sup>258</sup>Md, <sup>259</sup>Md, <sup>260</sup>Md, <sup>261</sup>Md, <sup>262</sup>Md";
      eleHighlight = "140,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:DIMendeleevCab.jpg'>Wikimedia Commons (Serge Lachinov)</a>";
      break;
    case "102":
      eleStable = "-";
      eleUnstable = "<sup>248</sup>No, <sup>249</sup>No, <sup>250</sup>No, <sup>251</sup>No, <sup>252</sup>No, <sup>253</sup>No, <sup>254</sup>No, <sup>255</sup>No, <sup>256</sup>No, <sup>257</sup>No, <sup>258</sup>No, <sup>259</sup>No, <sup>260</sup>No, <sup>261</sup>No, <sup>262</sup>No, <sup>263</sup>No, <sup>264</sup>No";
      eleHighlight = "150,0";
      eleCredits = preLink + "'http://images-of-elements.com/nobelium.php'>Images-of-elements</a>";
      break;
    case "103":
      eleStable = "-";
      eleUnstable = "<sup>251</sup>Lr, <sup>252</sup>Lr, <sup>253</sup>Lr, <sup>254</sup>Lr, <sup>255</sup>Lr, <sup>256</sup>Lr, <sup>257</sup>Lr, <sup>258</sup>Lr, <sup>259</sup>Lr, <sup>260</sup>Lr, <sup>261</sup>Lr, <sup>262</sup>Lr, <sup>263</sup>Lr, <sup>264</sup>Lr, <sup>265</sup>Lr, <sup>266</sup>Lr";
      eleHighlight = "160,0";
      eleCredits = preLink + "'http://images-of-elements.com/lawrencium.php'>Images-of-elements</a>";
      break;
    case "104":
      eleStable = "-";
      eleUnstable = "<sup>253</sup>Rf, <sup>254</sup>Rf, <sup>255</sup>Rf, <sup>256</sup>Rf, <sup>257</sup>Rf, <sup>258</sup>Rf, <sup>259</sup>Rf, <sup>260</sup>Rf, <sup>261</sup>Rf, <sup>262</sup>Rf, <sup>263</sup>Rf, <sup>264</sup>Rf, <sup>265</sup>Rf, <sup>266</sup>Rf, <sup>267</sup>Rf, <sup>268</sup>Rf";
      eleHighlight = "170,0";
      eleCredits = preLink + "'http://wal.nbed.nb.ca/sciencesettechnologies/pierrebrideau/00311.htm'>wal.nbed.nb.ca</a>";
      break;
    case "105":
      eleStable = "-";
      eleUnstable = "<sup>255</sup>Db, <sup>256</sup>Db, <sup>257</sup>Db, <sup>258</sup>Db, <sup>259</sup>Db, <sup>260</sup>Db, <sup>261</sup>Db, <sup>262</sup>Db, <sup>263</sup>Db, <sup>264</sup>Db, <sup>265</sup>Db, <sup>266</sup>Db, <sup>267</sup>Db, <sup>268</sup>Db, <sup>269</sup>Db, <sup>270</sup>Db";
      eleHighlight = "180,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "106":
      eleStable = "-";
      eleUnstable = "<sup>258</sup>Sg, <sup>259</sup>Sg, <sup>260</sup>Sg, <sup>261</sup>Sg, <sup>262</sup>Sg, <sup>263</sup>Sg, <sup>264</sup>Sg, <sup>265</sup>Sg, <sup>266</sup>Sg, <sup>267</sup>Sg, <sup>268</sup>Sg, <sup>269</sup>Sg, <sup>270</sup>Sg, <sup>271</sup>Sg, <sup>272</sup>Sg, <sup>273</sup>Sg";
      eleHighlight = "190,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Glenn_Seaborg_-_1964.jpg'>Wikimedia Commons (Atomic Energy Commission)</a>";
      break;
    case "107":
      eleStable = "-";
      eleUnstable = "<sup>260</sup>Bh, <sup>261</sup>Bh, <sup>262</sup>Bh, <sup>263</sup>Bh, <sup>264</sup>Bh, <sup>265</sup>Bh, <sup>266</sup>Bh, <sup>267</sup>Bh, <sup>268</sup>Bh, <sup>269</sup>Bh, <sup>270</sup>Bh, <sup>271</sup>Bh, <sup>272</sup>Bh, <sup>273</sup>Bh, <sup>274</sup>Bh, <sup>275</sup>Bh";
      eleHighlight = "200,0";
      eleCredits = preLink + "'http://skepticism.org/timeline/october-history/9209-birth-physicist-niels-bohr.html'>skepticism.org</a>";
      break;
    case "108":
      eleStable = "-";
      eleUnstable = "<sup>263</sup>Hs, <sup>264</sup>Hs, <sup>265</sup>Hs, <sup>266</sup>Hs, <sup>267</sup>Hs, <sup>268</sup>Hs, <sup>269</sup>Hs, <sup>270</sup>Hs, <sup>271</sup>Hs, <sup>272</sup>Hs, <sup>273</sup>Hs, <sup>274</sup>Hs, <sup>275</sup>Hs, <sup>276</sup>Hs, <sup>277</sup>Hs";
      eleHighlight = "210,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
      break;
    case "109":
      eleStable = "-";
      eleUnstable = "<sup>265</sup>Mt, <sup>266</sup>Mt, <sup>267</sup>Mt, <sup>268</sup>Mt, <sup>269</sup>Mt, <sup>270</sup>Mt, <sup>271</sup>Mt, <sup>272</sup>Mt, <sup>273</sup>Mt, <sup>274</sup>Mt, <sup>275</sup>Mt, <sup>276</sup>Mt, <sup>277</sup>Mt, <sup>278</sup>Mt, <sup>279</sup>Mt";
      eleHighlight = "220,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
      break;
    case "110":
      eleStable = "-";
      eleUnstable = "<sup>267</sup>Ds, <sup>268</sup>Ds, <sup>269</sup>Ds, <sup>270</sup>Ds, <sup>271</sup>Ds, <sup>272</sup>Ds, <sup>273</sup>Ds, <sup>274</sup>Ds, <sup>275</sup>Ds, <sup>276</sup>Ds, <sup>277</sup>Ds, <sup>278</sup>Ds, <sup>279</sup>Ds, <sup>280</sup>Ds, <sup>281</sup>Ds";
      eleHighlight = "230,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
      break;
    case "111":
      eleStable = "-";
      eleUnstable = "<sup>272</sup>Rg, <sup>273</sup>Rg, <sup>274</sup>Rg, <sup>275</sup>Rg, <sup>276</sup>Rg, <sup>277</sup>Rg, <sup>278</sup>Rg, <sup>279</sup>Rg, <sup>280</sup>Rg, <sup>281</sup>Rg, <sup>282</sup>Rg, <sup>283</sup>Rg";
      eleHighlight = "240,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
      break;
    case "112":
      eleStable = "-";
      eleUnstable = "<sup>277</sup>Cn, <sup>278</sup>Cn, <sup>279</sup>Cn, <sup>280</sup>Cn, <sup>281</sup>Cn, <sup>282</sup>Cn, <sup>283</sup>Cn, <sup>284</sup>Cn, <sup>285</sup>Cn";
      eleHighlight = "250,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
      break;
    case "113":
      eleStable = "-";
      eleUnstable = "<sup>278</sup>Nh, <sup>282</sup>Nh, <sup>283</sup>Nh, <sup>284</sup>Nh, <sup>285</sup>Nh, <sup>286</sup>Nh, <sup>287</sup>Nh";
      eleHighlight = "260,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "114":
      eleStable = "-";
      eleUnstable = "<sup>284</sup>Fl, <sup>285</sup>Fl, <sup>286</sup>Fl, <sup>287</sup>Fl, <sup>288</sup>Fl, <sup>289</sup>Fl";
      eleHighlight = "270,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "115":
      eleStable = "-";
      eleUnstable = "<sup>287</sup>Mc, <sup>288</sup>Mc, <sup>289</sup>Mc, <sup>290</sup>Mc, <sup>291</sup>Mc";
      eleHighlight = "280,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "116":
      eleStable = "-";
      eleUnstable = "<sup>289</sup>Lv, <sup>290</sup>Lv, <sup>291</sup>Lv, <sup>292</sup>Lv, <sup>293</sup>Lv";
      eleHighlight = "290,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "117":
      eleStable = "-";
      eleUnstable = "<sup>291</sup>Ts, <sup>292</sup>Ts, <sup>293</sup>Ts, <sup>294</sup>Ts";
      eleHighlight = "300,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
    case "118":
      eleStable = "-";
      eleUnstable = "<sup>293</sup>Og, <sup>294</sup>Og";
      eleHighlight = "310,0";
      eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
      break;
  }

  var link2url = (num === "113" || num === "115" || num === "117" || num === "118") ? ("element-" + num) : item.nme;
  var link4url = item.nme;

  if (num === "13")
    link2url = link4url = "aluminum";
  else if (num === "55")
    link2url = link4url = "cesium";

  if (num === "2" || num === "3" || num === "5" || num === "6" || num === "10" || num === "15" || num === "18" || num === "26" || num === "27" || num === "28" || num === "36" || num === "46" || num === "74" || num === "79" || num === "80" || num === "82" || num === "96")
    link2url = link2url + "-chemical-element";

    var description = itemName + " - " + homeHeader + "; " + window[eleName + "History"].replace(/<br><br>/g," ")
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", itemName + ", " + homeHeader + ", " + elements + ", " + isotopes + ", " + labelConfigMain + ", " 
                                                                          + hist + ", " + properties + ", " + uses + ", PWA, responsive, interactive");
    document.querySelector('meta[property="og:title"]').setAttribute("content", itemName + " - " + homeHeader);
    document.querySelector('meta[property="og:description"]').setAttribute("content", description);
    
    // var link = document.createElement('link');
    // link.rel = 'canonical';
    // link.href = "https://periodic-table.io/element.html?num="+num+"&lang="+urlLang;
    // document.head.appendChild(link);

    for (var i = 0; i < languageList.length; i++) {
      var link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = languageList[i].url;
      link.href = "https://periodic-table.io/element.html?num=" + num + "&lang=" + languageList[i].url;
      document.head.appendChild(link);
    }
    
    var link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = 'x-default';
    link.href = "https://periodic-table.io/element.html?num=" + num;
    document.head.appendChild(link);

    // chemical, interactive, PWA, properties, history, name origin, images, applications, hazards, electron shell, diagram, chemistry, information
  id("link2").href = "https://www.britannica.com/science/" + link2url;
  id("link3").href = "http://www.wolframalpha.com/input/?i=" + item.nme + "+element";
  id("link4").href = "http://www.chemicool.com/elements/" + link4url + ".html";
  id("link5").href = "http://www.rsc.org/periodic-table/element/" + num + "/" + item.nme;
  id("link6").href = "http://www.webelements.com/" + item.nme + "/";

  id("resultSymbolInner").textContent = sym;
  id("resultNumber").textContent = getNum(transNum);

  id("outputPeriod").textContent = getNum(item.prd);
  id("outputBlock").textContent = item.blk;

  id("outputAtmNoMain").textContent = getNum(transNum);
  id("outputAtmWtMain").textContent = getNum(item.aWt);
  id("outputProtons").textContent = getNum(item.p);
  id("outputElectrons").textContent = getNum(item.e);
  id("outputNeutrons").textContent = getNum(item.n);
  id("outputMassNum").textContent = getNum(item.mNo);

  melting = item.mlt;
  boiling = item.bln;

  setDegrees();

  id("outputElectronsMain").textContent = getNum(item.elc);
  id("outputConfigMain").innerHTML = item.cnf;

  id("outputRadiusMain").textContent = (item.aRd === "-") ? "-" : getNum(item.aRd) + " pm";
  id("outputCovalentMain").textContent = (item.cRd === "-") ? "-" : getNum(item.cRd) + " pm";
  id("outputOxidationMain").textContent = getNum(item.oxi);

  id("imgCredits").textContent = imgCredits + ": ";
  id("imgCreditsLink").innerHTML = eleCredits;

  id("stableIsotopesList").innerHTML = getNum(eleStable);
  id("unstableIsotopesList").innerHTML = getNum(eleUnstable);

  id("highlight").setAttribute("transform", "translate(" + eleHighlight + ")");

  // svgElectron()

  resizeElement();
  if (langValue === "ar" || langValue === "fa" || langValue === "he")
    id("tableSVG").setAttribute("transform", "scale(-1,1)");
  else
    id("tableSVG").setAttribute("transform", "scale(1,1)");
}

function setDegrees() {
  id("outputMeltingMain").textContent = getTemp(melting);
  id("outputBoilingMain").textContent = getTemp(boiling);
}

function resizeElement() {
  var firstSquareWidth = id("firstSquare").clientWidth;
  id("firstSquare").style.fontSize = (firstSquareWidth / 7.7143) + "px";
  id("secondSquare").style.fontSize = (firstSquareWidth / 10.374) + "px";
  svgElectron()
}

function setBorder() {
  var element = this.id;
    id(element).style.outline = (defaultNewTheme === "light") ? "4px solid #505050" : "4px solid #d8d8d8";
}

function removeBorder() {
  var element = this.id;
  if (element != localStorage.getItem("defaultColor"))
    id(element).style.outline = "none"
}
