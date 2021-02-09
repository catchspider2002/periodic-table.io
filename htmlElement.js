const xlsxFile = require("read-excel-file/node");
const fs = require("fs");
const Constants = require("./htmlConstants.js");

let newRawDataElement = Constants.rawData;

let r = 25;
let A45 = 0.7071;
let A90sin = 1;
let A90cos = 0;
let A0sin = 0;
let A0cos = 1;
let A10sin = 0.173648178;
let A10cos = 0.984807753;
let A30sin = 0.5;
let A30cos = 0.8660254;
let A50sin = 0.766044443;
let A50cos = 0.6427876;
let A70sin = 0.93969262;
let A70cos = 0.34202;
let A11sin = 0.19509032201612826784828486847702;
let A11cos = 0.98078528040323044912618223613424;
let A22sin = 0.3826834323650897717284599840304;
let A22cos = 0.92387953251128675612818318939679;
let A33sin = 0.55557023301960222474283081394853;
let A33cos = 0.83146961230254523707878837761791;
let fontcolor,
  strokecolor,
  val1 = -800,
  val2 = 1600;

let rad1 = 230;
let rad2 = 320;
let rad3 = 410;
let rad4 = 500;
let rad5 = 590;
let rad6 = 680;
let rad7 = 770;
let ringSize = 8,
  multiplier = 0;

var crsSHSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 36 40.488'><path class='strokeHidden' d='M29.5 8.869l-.002 16.745-14.5 8.373L.5 25.617M15.002.499l-.004 33.488M29.5 8.869L.5 25.617M.502 8.873L15 17.243l14.498 8.37 4 4m-18.5 4.374l4 4'/><path class='fillHidden' d='M15.002 16.744a.5.5 0 100 1 .5.5 0 000-1zM29.5 25.117a.5.5 0 100 1 .5.5 0 000-1zm-14.498 8.371a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.502 8.873l4 4m14.496 25.114L4.5 29.617l.002-16.744 14.5-8.374 14.498 8.37-.002 16.745zM15.002.5l4 4-.004 33.488M4.5 29.617l-4-4L.502 8.873l14.5-8.374L29.5 8.869l4 4zm.002-16.744l14.5 8.372 14.496 8.369'/><path class='fillVisible' d='M15.002 0a.5.5 0 100 1 .5.5 0 000-1zm4 4a.5.5 0 100 1 .5.5 0 000-1zM.5 8.373a.5.5 0 100 1 .5.5 0 000-1zm29 0a.5.5 0 100 1 .5.5 0 000-1zm-25 4a.5.5 0 100 1 .5.5 0 000-1zm29 0a.5.5 0 100 1 .5.5 0 000-1zm-14.498 8.371a.5.5 0 100 1 .5.5 0 000-1zM.5 25.117a.5.5 0 100 1 .5.5 0 000-1zm4 4a.5.5 0 100 1 .5.5 0 000-1zm29 0a.5.5 0 100 1 .5.5 0 000-1zm-14.498 8.371a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsSCSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 37.411'><path class='strokeHidden'd='M24.91.5l-.003 24.407L.5 24.91m24.407-.004l4 10'/><path class='fillHidden' d='M24.906 24.407a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 24.911L.503.506 24.91.5m0 0l4 10M.503.506l4 10M4.5 34.911l.003-24.405L28.91 10.5l-.003 24.407zm-4-10l4 10' /><path class='fillVisible' d='M24.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zM28.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 24.411a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 34.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsFCCSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 37.411'><path class='strokeHidden' d='M24.907 24.907l-12.202-12.2L.503.507M24.91.5L.5 24.912m28.407 9.993L24.91.5m3.997 34.407L.5 24.912M28.91 10.5l-2.001 7.203-2.002 7.202m0 .002L14.704 29.91 4.5 34.912m20.407-10.005l4 10M24.91.5l-.003 24.407L.5 24.912'/><path class='fillHidden' d='M12.205 12.706a.5.5 0 101 0 .5.5 0 00-1 0zm1.999 17.203a.5.5 0 101 0 .5.5 0 00-1 0zm12.205-12.2a.5.5 0 101 0 .5.5 0 00-1 0zm-2.002 7.198a.5.5 0 101 0 .5.5 0 00-1 0z' /><path class='strokeVisible' d='M.5 24.912L.503.507 24.91.5m0 0L14.707 5.502 4.503 10.505M28.91 10.5L.503.505M4.5 34.912L.503.507M28.91 10.5L4.5 34.912m0 0l.003-24.405L28.91 10.5l-.003 24.407zM24.91.5l4 10M.5 24.912l4 10M.503.507l4 10m24.404 24.4l-12.202-12.2-12.202-12.2m0 0l-2.001 7.202L.5 24.912' /><path class='fillVisible' d='M16.205 22.706a.5.5 0 101 0 .5.5 0 00-1 0zM14.204 5.502a.5.5 0 101 0 .5.5 0 00-1 0zM2.002 17.71a.5.5 0 101 0 .5.5 0 00-1 0zM28.41 10.5a.5.5 0 101 0 .5.5 0 00-1 0zm-.003 24.408a.5.5 0 101 0 .5.5 0 00-1 0zM4 34.91a.5.5 0 101 0 .5.5 0 00-1 0zm.003-24.405a.5.5 0 101 0 .5.5 0 00-1 0zM24.41.5a.5.5 0 101 0 .5.5 0 00-1 0zM0 24.91a.5.5 0 101 0 .5.5 0 00-1 0zM.003.506a.5.5 0 101 0 .5.5 0 00-1 0z'/></svg>";
var crsBCCSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 37.41'><path class='strokeHidden' d='M24.907 24.906l-20.404-14.4m24.407-.007l-14.206 7.206L.5 24.91M24.91.499L4.5 34.911m24.407-.005L.503.506M24.91.499l-.003 24.407L.5 24.911m24.407-.005l4 10'/><path class='fillHidden' d='M14.705 17.205a.5.5 0 100 1 .5.5 0 000-1zm10.201 7.201a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 24.91L.503.507 24.91.499m0 0l4 10M.503.506l4 10M4.5 34.91l.003-24.405 24.407-.007-.003 24.407zm-4-10l4 10'/><path class='fillVisible' d='M24.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zM28.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 24.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 34.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsSMSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 37.41 37.41'><path class='strokeHidden' d='M30.91.5l-6.003 24.406L.5 24.911m24.407-.005l4 10'/><path class='fillHidden' d='M24.906 24.406a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 24.91L6.503.507 30.91.499m0 0l4 10M6.503.506l4 10M4.5 34.91l6.003-24.405 24.407-.007-6.003 24.407zm-4-10l4 10'/><path class='fillVisible' d='M30.91 0a.5.5 0 100 1 .5.5 0 000-1zM6.502.006a.5.5 0 100 1 .5.5 0 000-1zM34.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 24.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 34.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsBCMSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 37.41 37.41'><path class='strokeHidden' d='M4.5 34.91l20.407-10.006M.5 24.911l14.203 4.996 14.204 4.997M30.91.5l-6.003 24.407L.5 24.911m24.407-.005l4 10'/><path class='fillHidden' d='M24.906 24.406a.5.5 0 100 1 .5.5 0 000-1zm-10.203 5.002a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M10.503 10.506L30.91.499M6.503.506l14.203 4.997 14.204 4.996M.5 24.911L6.503.506 30.91.499m0 0l4 10M6.503.506l4 10M4.5 34.91l6.003-24.405 24.407-.007-6.003 24.407zm-4-10l4 10'/><path class='fillVisible' d='M20.206 5.503a.5.5 0 101 0 .5.5 0 00-1 0zM30.91 0a.5.5 0 100 1 .5.5 0 000-1zM6.502.006a.5.5 0 100 1 .5.5 0 000-1zM34.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 24.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 34.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsSOSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 41.41'><path class='strokeHidden' d='M24.91.5l-.003 26.406L.5 26.911m24.407-.005l4 12'/><path class='fillHidden' d='M24.906 26.406a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 26.91L.503.507 24.91.499m0 0l4 12M.503.506l4 12M4.5 38.91l.003-26.405 24.407-.007-.003 26.407zm-4-12l4 12'/><path class='fillVisible' d='M24.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zM28.91 12a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 26.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 11.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 38.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsFCOSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 41.41'><path class='strokeHidden' d='M24.907 26.904l2.001-7.202 2.002-7.203m-.003 26.405L24.91.5m0 0L12.705 13.705.5 26.911m24.407-.004L.503.507M4.5 38.91l10.203-6.004 10.204-6.003M.5 26.911l28.407 11.993M24.91.5l-.003 26.408L.5 26.91m24.407-.004l4 12'/><path class='fillHidden' d='M12.705 13.205a.5.5 0 100 1 .5.5 0 000-1zm14.203 5.996a.5.5 0 100 1 .5.5 0 000-1zm-2.002 7.205a.5.5 0 100 1 .5.5 0 000-1zm-10.203 6a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M28.91 12.5L16.705 25.704 4.5 38.911m24.407-.004l-24.404-26.4M.5 26.91L2.5 19.709l2.002-7.203M4.5 38.911L.503.506m4 12l10.203-6.003L24.91.5M.503.506L28.91 12.5M.5 26.911L.503.506 24.91.5m0 0l4 12M.503.506l4 12M4.5 38.911l.003-26.405L28.91 12.5l-.003 26.408zm-4-12l4 12'/><path class='fillVisible' d='M24.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zm14.203 5.998a.5.5 0 100 1 .5.5 0 000-1zM28.91 12a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zm-2 7.203a.5.5 0 100 1 .5.5 0 000-1zM.5 26.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 11.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 38.41a.5.5 0 100 1 .5.5 0 000-1zm11.704-12.704a.5.5 0 101 0 .5.5 0 00-1 0z'/></svg>";
var crsBCOSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 41.41'><path class='strokeHidden' d='M4.5 38.91l10.203-6.003 10.204-6.003M.5 26.911l28.407 11.993M24.91.5l-.003 26.407L.5 26.911m24.407-.005l4 12'/><path class='fillHidden' d='M24.906 26.406a.5.5 0 100 1 .5.5 0 000-1zm-10.203 6a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M4.503 12.506l10.203-6.003L24.91.499M.503.506L28.91 12.499M.5 26.911L.503.506 24.91.499m0 0l4 12M.503.506l4 12M4.5 38.91l.003-26.405 24.407-.007-.003 26.407zm-4-12l4 12'/><path class='fillVisible' d='M14.706 6.003a.5.5 0 100 1 .5.5 0 000-1zM24.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zM28.91 12a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 26.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 11.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 38.41a.5.5 0 100 1 .5.5 0 000-1z'/></svg>";
var crsSTGSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 37.41 37.41'><path class='strokeHidden'd='M30.91.5l-6.003 24.406L.5 24.911m24.407-.005l4 10'/><path class='fillHidden' d='M24.906 24.406a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 24.91L6.503.507 30.91.499m0 0l4 10M6.503.506l4 10M4.5 34.91l6.003-24.405 24.407-.007-6.003 24.407zm-4-10l4 10' /><path class='fillVisible' d='M30.91 0a.5.5 0 100 1 .5.5 0 000-1zM6.502.006a.5.5 0 100 1 .5.5 0 000-1zM34.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 24.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 34.41a.5.5 0 100 1 .5.5 0 000-1z' /></svg>";
var crsSTCSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 37.41 39.41'><path class='strokeHidden'd='M30.91.5l-6.003 26.406L.5 26.911m24.407-.005l4 10'/><path class='fillHidden' d='M24.906 26.406a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 26.91L6.503.507 30.91.499m0 0l4 10M6.503.506l4 10M4.5 36.91l6.003-26.405 24.407-.007-6.003 26.407zm-4-10l4 10' /><path class='fillVisible' d='M30.91 0a.5.5 0 100 1 .5.5 0 000-1zM6.502.006a.5.5 0 100 1 .5.5 0 000-1zM34.91 10a.5.5 0 100 1 .5.5 0 000-1zm-24.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 26.41a.5.5 0 100 1 .5.5 0 000-1zm28.406 9.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 36.41a.5.5 0 100 1 .5.5 0 000-1z' /></svg>";
var crsCTSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 29.41 45.41'><path class='strokeHidden'd='M22.91.5l-.003 30.406L.5 30.911m22.407-.005l4 12'/><path class='fillHidden' d='M22.906 30.406a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 30.91L.503.507 22.91.499m0 0l4 12M.503.506l4 12M4.5 42.91l.003-30.405 22.407-.007-.003 30.407zm-4-12l4 12' /><path class='fillVisible' d='M22.91 0a.5.5 0 100 1 .5.5 0 000-1zM.502.006a.5.5 0 100 1 .5.5 0 000-1zM26.91 12a.5.5 0 100 1 .5.5 0 000-1zm-22.408.006a.5.5 0 100 1 .5.5 0 000-1zM.5 30.41a.5.5 0 100 1 .5.5 0 000-1zm26.406 11.996a.5.5 0 100 1 .5.5 0 000-1zM4.5 42.41a.5.5 0 100 1 .5.5 0 000-1z' /></svg>";
var crsTPSVG =
  "<svg xmlns='http://www.w3.org/2000/svg' class='crystalDiagram' viewBox='-1 -1 31.41 37.411'><path class='strokeHidden' d='M7.604 9.106l5.101 3.6 9.102 1.396M9.603 26.308l7.102-3.602 3.101-1.399m2.001-7.205l5.102 3.607-7.103 3.598M7.604 9.107l-5.102 8.602 7.101 8.599M7.604 9.106l7.1-3.604 7.103 8.6M9.603 26.308l5.101 3.601 5.102-8.602m5.101 3.6l-5.101-3.6M28.91 10.5l-7.103 3.602M9.603 26.308L4.5 34.911M7.604 9.106L.503.506M24.91.5l-.003 24.407L.5 24.91m24.407-.004l4 10' /><path class='fillHidden' d='M12.205 12.706a.5.5 0 101 0 .5.5 0 00-1 0zm1.999 17.203a.5.5 0 101 0 .5.5 0 00-1 0zm12.205-12.2a.5.5 0 101 0 .5.5 0 00-1 0zm-2.002 7.198a.5.5 0 101 0 .5.5 0 00-1 0z'/><path class='fillInter' d='M7.604 8.605a.5.5 0 100 1 .5.5 0 000-1zm14.203 4.997a.5.5 0 100 1 .5.5 0 000-1zm-2 7.205a.5.5 0 100 1 .5.5 0 000-1zM9.604 25.809a.5.5 0 100 1 .5.5 0 000-1z'/><path class='strokeVisible' d='M.5 24.911L.503.506 24.91.5m0 0l4 10M.503.506l4 10M4.5 34.911l.003-24.405L28.91 10.5l-.003 24.407zm-4-10l4 10'/><path class='fillVisible' d='M16.205 22.706a.5.5 0 101 0 .5.5 0 00-1 0zM14.204 5.502a.5.5 0 101 0 .5.5 0 00-1 0zM2.002 17.709a.5.5 0 101 0 .5.5 0 00-1 0zm26.408-7.21a.5.5 0 101 0 .5.5 0 00-1 0zm-.003 24.408a.5.5 0 101 0 .5.5 0 00-1 0zM4 34.91a.5.5 0 101 0 .5.5 0 00-1 0zm.003-24.405a.5.5 0 101 0 .5.5 0 00-1 0zM24.41.5a.5.5 0 101 0 .5.5 0 00-1 0zM0 24.91a.5.5 0 101 0 .5.5 0 00-1 0zM.003.506a.5.5 0 101 0 .5.5 0 00-1 0z'/></svg>";

// let defaultTemp = "celsius";
// let defaultPunc = "comma";

const writeFile = (lang, langValues, column, regularFont, punc, page, defaultHead, defaultNav, nav4, defaultFooter, languages) => {
  xlsxFile("../Translation/Periodic Table others.xlsm", { sheet: 2 }).then((rows) => {
    for (let i = 1; i < 5; i++) {
      let eleNum = i;
      let element = newRawDataElement[eleNum - 1];

      let num = element.num;
      let sym = element.sym;

      if (num > 86) multiplier = 0;
      else if (num > 54) multiplier = 1;
      else if (num > 36 && num != 46) multiplier = 2;
      else if (num > 18) multiplier = 3;
      else if (num > 10) multiplier = 4;
      else if (num > 2) multiplier = 5;
      else multiplier = 6;

      val1 = -800 + multiplier * 80;
      val2 = 1600 - multiplier * 80 * 2;

      let writeStream = fs.createWriteStream(lang + "/element-" + element.num + ".html");

      defaultHead.forEach((heads) => {
        writeStream.write(heads);
      });

      let keywords =
        langValues[element.nme] +
        ", " +
        langValues.homeHeader +
        ", chemical, " +
        langValues.elements +
        ", interactive, PWA, " +
        langValues.properties +
        ", " +
        langValues.uses +
        ", " +
        langValues.hist +
        ", " +
        langValues.isotopes +
        ", " +
        langValues.labelConfigMain +
        ", " +
        langValues.labelElectronsMain +
        ", name origin, images, hazards, diagram, chemistry, information";
      let description =
        langValues[element.nme] +
        " - Interactive periodic table of the chemical elements in 39 languages - Includes properties, history, name origin, facts, applications, hazards, isotopes and more.";
      let website = "https://periodic-table.io";
      let image = website + "/images/icons/android-chrome-256x256.png";
      let title = langValues[element.nme] + " - " + langValues.homeHeader;
      let link = website + "/" + lang + "/element-" + element.num + "/";

      let metaTags1 = [
        "<meta name='keywords' content='" + keywords + "' />",
        "<meta name='description' content='" + description + "' />",
        "<meta property='og:description' content='" + description + "' />",
        "<meta name='twitter:description' content='" + description + "' />",
        "<meta property='og:title' content='" + title + "' />",
        "<meta name='twitter:title' content='" + title + "' />",
        "<title id='homeTitle'>" + title + "</title>",
        "<meta property='og:image' content='" + image + "' />",
        "<meta name='twitter:image' content='" + image + "' />",
        "<meta name='twitter:image:src' content='" + image + "' />",
        "<meta property='og:url' content='" + link + "' />",
        "<link rel='canonical' href='" + link + "' />",
        // "<link rel='stylesheet' href='css/global.css' />",
        // "<script defer src='js/htmlJS.js'></script>",
        // "<link rel='preload' href='fonts/" + regularFont + ".woff2' as='font' crossorigin='anonymous' />",
        // "<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />",
        // "<style>@font-face {font-family: SpecialRegular; src: url(fonts/" + regularFont + ".woff2) format('woff2'); font-display: swap;}",
        // "@font-face {font-family: Regular; src: url(fonts/NotoSans.woff2) format('woff2'); font-display: swap;}",
        // "</style></head>",
      ];

      let metaAlternate = [];

      languages.forEach((langVal) => {
        metaAlternate.push(
          "<link rel='alternate' hreflang='" + langVal.lang + "' href='https://" + langVal.lang + ".periodic-table.io/element-" + element.num + "'/>"
        );
      });

      let metaTags2 = ["<link rel='stylesheet' href='css/global.css' />", "<script defer src='js/htmlJS.js'></script>"];

      let metaTagsFonts = [
        "<link rel='preload' href='fonts/" + regularFont + ".woff2' as='font' crossorigin='anonymous' />",
        "<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />",
      ];

      if (regularFont === "NotoSans") metaTagsFonts = ["<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />"];

      let metaTags3 = [
        "<style>@font-face {font-family: SpecialRegular; src: url(fonts/" + regularFont + ".woff2) format('woff2'); font-display: swap;}",
        "@font-face {font-family: Regular;src: url(fonts/NotoSans.woff2) format('woff2'); font-display: swap;}",
        "</style></head>",
      ];

      let metaTags = metaTags1.concat(metaAlternate).concat(metaTags2).concat(metaTagsFonts).concat(metaTags3);

      metaTags.forEach((tags) => {
        writeStream.write(tags);
      });

      defaultNav.forEach((navs) => {
        writeStream.write(navs);
      });

      writeStream.write("<span class='truncate'>" + langValues[element.nme] + "</span>");

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

      function printObject(col) {
        let o = {};
        for (var j = 1; j < rows.length; j++) {
          o[rows[j][1]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
        }

        return o;
      }

      let post = printObject(column);

      let preLink = "<a class='underlineLink' target='_blank' rel='noopener' href=";

      let eleStable, eleUnstable, eleHighlight, eleCredits;

      switch (eleNum) {
        case 1:
          eleStable = "<sup>1</sup>H, <sup>2</sup>H";
          eleUnstable = "<sup>3</sup>H, <sup>4</sup>H, <sup>5</sup>H, <sup>6</sup>H, <sup>7</sup>H";
          eleHighlight = "0,-60";
          eleCredits = preLink + "'http://images-of-elements.com/hydrogen.php'>Images-of-elements</a>";
          break;
        case 2:
          eleStable = "<sup>3</sup>He, <sup>4</sup>He";
          eleUnstable = "<sup>5</sup>He, <sup>6</sup>He, <sup>7</sup>He, <sup>8</sup>He, <sup>9</sup>He, <sup>10</sup>He";
          eleHighlight = "310,-60";
          eleCredits = preLink + "'http://images-of-elements.com/helium.php'>Images-of-elements</a>";
          break;
        case 3:
          eleUnstable = "<sup>4</sup>Li, <sup>5</sup>Li, <sup>8</sup>Li, <sup>9</sup>Li, <sup>10</sup>Li, <sup>11</sup>Li, <sup>12</sup>Li";
          eleStable = "<sup>6</sup>Li, <sup>7</sup>Li";
          eleHighlight = "0,-50";
          eleCredits = preLink + "'http://images-of-elements.com/lithium.php'>Images-of-elements</a>";
          break;
        case 4:
          eleUnstable =
            "<sup>5</sup>Be, <sup>6</sup>Be, <sup>7</sup>Be, <sup>8</sup>Be, <sup>10</sup>Be, <sup>11</sup>Be, <sup>12</sup>Be, <sup>13</sup>Be, <sup>14</sup>Be, <sup>15</sup>Be, <sup>16</sup>Be";
          eleStable = "<sup>9</sup>Be";
          eleHighlight = "10,-50";
          eleCredits = preLink + "'http://images-of-elements.com/beryllium.php'>Images-of-elements</a>";
          break;
        case 5:
          eleStable = "<sup>10</sup>B, <sup>11</sup>B";
          eleUnstable =
            "<sup>7</sup>B, <sup>8</sup>B, <sup>9</sup>B, <sup>12</sup>B, <sup>13</sup>B, <sup>14</sup>B, <sup>15</sup>B, <sup>16</sup>B, <sup>17</sup>B, <sup>18</sup>B, <sup>19</sup>B";
          eleHighlight = "260,-50";
          eleCredits = preLink + "'http://images-of-elements.com/boron.php'>Images-of-elements</a>";
          break;
        case 6:
          eleStable = "<sup>12</sup>C, <sup>13</sup>C";
          eleUnstable =
            "<sup>8</sup>C, <sup>9</sup>C, <sup>10</sup>C, <sup>11</sup>C, <sup>14</sup>C, <sup>15</sup>C, <sup>16</sup>C, <sup>17</sup>C, <sup>18</sup>C, <sup>19</sup>C, <sup>20</sup>C, <sup>21</sup>C, <sup>22</sup>C";
          eleHighlight = "270,-50";
          eleCredits = preLink + "'http://images-of-elements.com/carbon.php'>Images-of-elements</a>";
          break;
        case 7:
          eleUnstable =
            "<sup>10</sup>N, <sup>11</sup>N, <sup>12</sup>N, <sup>13</sup>N, <sup>16</sup>N, <sup>17</sup>N, <sup>18</sup>N, <sup>19</sup>N, <sup>20</sup>N, <sup>21</sup>N, <sup>22</sup>N, <sup>23</sup>N, <sup>24</sup>N, <sup>25</sup>N";
          eleStable = "<sup>14</sup>N, <sup>15</sup>N";
          eleHighlight = "280,-50";
          eleCredits = preLink + "'http://images-of-elements.com/nitrogen.php'>Images-of-elements</a>";
          break;
        case 8:
          eleUnstable =
            "<sup>12</sup>O, <sup>13</sup>O, <sup>14</sup>O, <sup>15</sup>O, <sup>19</sup>O, <sup>20</sup>O, <sup>21</sup>O, <sup>22</sup>O, <sup>23</sup>O, <sup>24</sup>O, <sup>25</sup>O, <sup>26</sup>O, <sup>27</sup>O, <sup>28</sup>O";
          eleStable = "<sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O";
          eleHighlight = "290,-50";
          eleCredits = preLink + "'http://images-of-elements.com/oxygen.php'>Images-of-elements</a>";
          break;
        case 9:
          eleUnstable =
            "<sup>14</sup>F, <sup>15</sup>F, <sup>16</sup>F, <sup>17</sup>F, <sup>18</sup>F, <sup>20</sup>F, <sup>21</sup>F, <sup>22</sup>F, <sup>23</sup>F, <sup>24</sup>F, <sup>25</sup>F, <sup>26</sup>F, <sup>27</sup>F, <sup>28</sup>F, <sup>29</sup>F, <sup>30</sup>F, <sup>31</sup>F";
          eleStable = "<sup>19</sup>F";
          eleHighlight = "300,-50";
          eleCredits = preLink + "'http://images-of-elements.com/fluorine.php'>Images-of-elements</a>";
          break;
        case 10:
          eleUnstable =
            "<sup>16</sup>Ne, <sup>17</sup>Ne, <sup>18</sup>Ne, <sup>19</sup>Ne, <sup>23</sup>Ne, <sup>24</sup>Ne, <sup>25</sup>Ne, <sup>26</sup>Ne, <sup>27</sup>Ne, <sup>28</sup>Ne, <sup>29</sup>Ne, <sup>30</sup>Ne, <sup>31</sup>Ne, <sup>32</sup>Ne, <sup>33</sup>Ne, <sup>34</sup>Ne";
          eleStable = "<sup>20</sup>Ne, <sup>21</sup>Ne, <sup>22</sup>Ne";
          eleHighlight = "310,-50";
          eleCredits = preLink + "'http://images-of-elements.com/neon.php'>Images-of-elements</a>";
          break;
        case 11:
          eleUnstable =
            "<sup>18</sup>Na, <sup>19</sup>Na, <sup>20</sup>Na, <sup>21</sup>Na, <sup>22</sup>Na, <sup>24</sup>Na, <sup>25</sup>Na, <sup>26</sup>Na, <sup>27</sup>Na, <sup>28</sup>Na, <sup>29</sup>Na, <sup>30</sup>Na, <sup>31</sup>Na, <sup>32</sup>Na, <sup>33</sup>Na, <sup>34</sup>Na, <sup>35</sup>Na, <sup>36</sup>Na, <sup>37</sup>Na";
          eleStable = "<sup>23</sup>Na";
          eleHighlight = "0,-40";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Na_(Sodium).jpg'>Wikimedia Commons (Dnn87)</a>";
          break;
        case 12:
          eleUnstable =
            "<sup>19</sup>Mg, <sup>20</sup>Mg, <sup>21</sup>Mg, <sup>22</sup>Mg, <sup>23</sup>Mg, <sup>27</sup>Mg, <sup>28</sup>Mg, <sup>29</sup>Mg, <sup>30</sup>Mg, <sup>31</sup>Mg, <sup>32</sup>Mg, <sup>33</sup>Mg, <sup>34</sup>Mg, <sup>35</sup>Mg, <sup>36</sup>Mg, <sup>37</sup>Mg, <sup>38</sup>Mg, <sup>39</sup>Mg, <sup>40</sup>Mg";
          eleStable = "<sup>24</sup>Mg, <sup>25</sup>Mg, <sup>26</sup>Mg";
          eleHighlight = "10,-40";
          eleCredits = preLink + "'http://images-of-elements.com/magnesium.php'>Images-of-elements</a>";
          break;
        case 13:
          eleUnstable =
            "<sup>21</sup>Al, <sup>22</sup>Al, <sup>23</sup>Al, <sup>24</sup>Al, <sup>25</sup>Al, <sup>26</sup>Al, <sup>28</sup>Al, <sup>29</sup>Al, <sup>30</sup>Al, <sup>31</sup>Al, <sup>32</sup>Al, <sup>33</sup>Al, <sup>34</sup>Al, <sup>35</sup>Al, <sup>36</sup>Al, <sup>37</sup>Al, <sup>38</sup>Al, <sup>39</sup>Al, <sup>40</sup>Al, <sup>41</sup>Al, <sup>42</sup>Al";
          eleStable = "<sup>27</sup>Al";
          eleHighlight = "260,-40";
          eleCredits = preLink + "'http://images-of-elements.com/aluminium.php'>Images-of-elements</a>";
          break;
        case 14:
          eleUnstable =
            "<sup>22</sup>Si, <sup>23</sup>Si, <sup>24</sup>Si, <sup>25</sup>Si, <sup>26</sup>Si, <sup>27</sup>Si, <sup>31</sup>Si, <sup>32</sup>Si, <sup>33</sup>Si, <sup>34</sup>Si, <sup>35</sup>Si, <sup>36</sup>Si, <sup>37</sup>Si, <sup>38</sup>Si, <sup>39</sup>Si, <sup>40</sup>Si, <sup>41</sup>Si, <sup>42</sup>Si, <sup>43</sup>Si, <sup>44</sup>Si";
          eleStable = "<sup>28</sup>Si, <sup>29</sup>Si, <sup>30</sup>Si";
          eleHighlight = "270,-40";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:SiliconCroda.jpg'>Wikimedia Commons (Enricoros)</a>";
          break;
        case 15:
          eleUnstable =
            "<sup>24</sup>P, <sup>25</sup>P, <sup>26</sup>P, <sup>27</sup>P, <sup>28</sup>P, <sup>29</sup>P, <sup>30</sup>P, <sup>32</sup>P, <sup>33</sup>P, <sup>34</sup>P, <sup>35</sup>P, <sup>36</sup>P, <sup>37</sup>P, <sup>38</sup>P, <sup>39</sup>P, <sup>40</sup>P, <sup>41</sup>P, <sup>42</sup>P, <sup>43</sup>P, <sup>44</sup>P, <sup>45</sup>P, <sup>46</sup>P";
          eleStable = "<sup>31</sup>P";
          eleHighlight = "280,-40";
          eleCredits = preLink + "'http://images-of-elements.com/phosphorus.php'>Images-of-elements</a>";
          break;
        case 16:
          eleUnstable =
            "<sup>26</sup>S, <sup>27</sup>S, <sup>28</sup>S, <sup>29</sup>S, <sup>30</sup>S, <sup>31</sup>S, <sup>35</sup>S, <sup>37</sup>S, <sup>38</sup>S, <sup>39</sup>S, <sup>40</sup>S, <sup>41</sup>S, <sup>42</sup>S, <sup>43</sup>S, <sup>44</sup>S, <sup>45</sup>S, <sup>46</sup>S, <sup>47</sup>S, <sup>48</sup>S, <sup>49</sup>S";
          eleStable = "<sup>32</sup>S, <sup>33</sup>S, <sup>34</sup>S, <sup>36</sup>S";
          eleHighlight = "290,-40";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Sulfur-sample.jpg'>Wikimedia Commons (Ben Mills)</a>";
          break;
        case 17:
          eleUnstable =
            "<sup>28</sup>Cl, <sup>29</sup>Cl, <sup>30</sup>Cl, <sup>31</sup>Cl, <sup>32</sup>Cl, <sup>33</sup>Cl, <sup>34</sup>Cl, <sup>36</sup>Cl, <sup>38</sup>Cl, <sup>39</sup>Cl, <sup>40</sup>Cl, <sup>41</sup>Cl, <sup>42</sup>Cl, <sup>43</sup>Cl, <sup>44</sup>Cl, <sup>45</sup>Cl, <sup>46</sup>Cl, <sup>47</sup>Cl, <sup>48</sup>Cl, <sup>49</sup>Cl, <sup>50</sup>Cl, <sup>51</sup>Cl";
          eleStable = "<sup>35</sup>Cl, <sup>37</sup>Cl";
          eleHighlight = "300,-40";
          eleCredits = preLink + "'http://images-of-elements.com/chlorine.php'>Images-of-elements</a>";
          break;
        case 18:
          eleUnstable =
            "<sup>30</sup>Ar, <sup>31</sup>Ar, <sup>32</sup>Ar, <sup>33</sup>Ar, <sup>34</sup>Ar, <sup>35</sup>Ar, <sup>37</sup>Ar, <sup>39</sup>Ar, <sup>41</sup>Ar, <sup>42</sup>Ar, <sup>43</sup>Ar, <sup>44</sup>Ar, <sup>45</sup>Ar, <sup>46</sup>Ar, <sup>47</sup>Ar, <sup>48</sup>Ar, <sup>49</sup>Ar, <sup>50</sup>Ar, <sup>51</sup>Ar, <sup>52</sup>Ar, <sup>53</sup>Ar";
          eleStable = "<sup>36</sup>Ar, <sup>38</sup>Ar, <sup>40</sup>Ar";
          eleHighlight = "310,-40";
          eleCredits = preLink + "'http://images-of-elements.com/argon.php'>Images-of-elements</a>";
          break;
        case 19:
          eleUnstable =
            "<sup>32</sup>K, <sup>33</sup>K, <sup>34</sup>K, <sup>35</sup>K, <sup>36</sup>K, <sup>37</sup>K, <sup>38</sup>K, <sup>40</sup>K, <sup>42</sup>K, <sup>43</sup>K, <sup>44</sup>K, <sup>45</sup>K, <sup>46</sup>K, <sup>47</sup>K, <sup>48</sup>K, <sup>49</sup>K, <sup>50</sup>K, <sup>51</sup>K, <sup>52</sup>K, <sup>53</sup>K, <sup>54</sup>K, <sup>55</sup>K";
          eleStable = "<sup>39</sup>K, <sup>41</sup>K";
          eleHighlight = "0,-30";
          eleCredits = preLink + "'http://images-of-elements.com/potassium.php'>Images-of-elements</a>";
          break;
        case 20:
          eleUnstable =
            "<sup>34</sup>Ca, <sup>35</sup>Ca, <sup>36</sup>Ca, <sup>37</sup>Ca, <sup>38</sup>Ca, <sup>39</sup>Ca, <sup>41</sup>Ca, <sup>45</sup>Ca, <sup>47</sup>Ca, <sup>48</sup>Ca, <sup>49</sup>Ca, <sup>50</sup>Ca, <sup>51</sup>Ca, <sup>52</sup>Ca, <sup>53</sup>Ca, <sup>54</sup>Ca, <sup>55</sup>Ca, <sup>56</sup>Ca, <sup>57</sup>Ca";
          eleStable = "<sup>40</sup>Ca, <sup>42</sup>Ca, <sup>43</sup>Ca, <sup>44</sup>Ca, <sup>46</sup>Ca";
          eleHighlight = "10,-30";
          eleCredits =
            preLink +
            "'http://commons.wikimedia.org/wiki/File:Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg'>Wikimedia Commons (Matthias Zepper)</a>";
          break;
        case 21:
          eleUnstable =
            "<sup>36</sup>Sc, <sup>37</sup>Sc, <sup>38</sup>Sc, <sup>39</sup>Sc, <sup>40</sup>Sc, <sup>41</sup>Sc, <sup>42</sup>Sc, <sup>43</sup>Sc, <sup>44</sup>Sc, <sup>46</sup>Sc, <sup>47</sup>Sc, <sup>48</sup>Sc, <sup>49</sup>Sc, <sup>50</sup>Sc, <sup>51</sup>Sc, <sup>52</sup>Sc, <sup>53</sup>Sc, <sup>54</sup>Sc, <sup>55</sup>Sc, <sup>56</sup>Sc, <sup>57</sup>Sc, <sup>58</sup>Sc, <sup>59</sup>Sc, <sup>60</sup>Sc";
          eleStable = "<sup>45</sup>Sc";
          eleHighlight = "160,-30";
          eleCredits = preLink + "'http://images-of-elements.com/scandium.php'>Images-of-elements</a>";
          break;
        case 22:
          eleUnstable =
            "<sup>38</sup>Ti, <sup>39</sup>Ti, <sup>40</sup>Ti, <sup>41</sup>Ti, <sup>42</sup>Ti, <sup>43</sup>Ti, <sup>44</sup>Ti, <sup>45</sup>Ti, <sup>51</sup>Ti, <sup>52</sup>Ti, <sup>53</sup>Ti, <sup>54</sup>Ti, <sup>55</sup>Ti, <sup>56</sup>Ti, <sup>57</sup>Ti, <sup>58</sup>Ti, <sup>59</sup>Ti, <sup>60</sup>Ti, <sup>61</sup>Ti, <sup>62</sup>Ti, <sup>63</sup>Ti";
          eleStable = "<sup>46</sup>Ti, <sup>47</sup>Ti, <sup>48</sup>Ti, <sup>49</sup>Ti, <sup>50</sup>Ti";
          eleHighlight = "170,-30";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Titan-crystal_bar.JPG'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 23:
          eleUnstable =
            "<sup>40</sup>V, <sup>41</sup>V, <sup>42</sup>V, <sup>43</sup>V, <sup>44</sup>V, <sup>45</sup>V, <sup>46</sup>V, <sup>47</sup>V, <sup>48</sup>V, <sup>49</sup>V, <sup>50</sup>V, <sup>52</sup>V, <sup>53</sup>V, <sup>54</sup>V, <sup>55</sup>V, <sup>56</sup>V, <sup>57</sup>V, <sup>58</sup>V, <sup>59</sup>V, <sup>60</sup>V, <sup>61</sup>V, <sup>62</sup>V, <sup>63</sup>V, <sup>64</sup>V, <sup>65</sup>V";
          eleStable = "<sup>51</sup>V";
          eleHighlight = "180,-30";
          eleCredits = preLink + "'http://images-of-elements.com/vanadium.php'>Images-of-elements</a>";
          break;
        case 24:
          eleUnstable =
            "<sup>42</sup>Cr, <sup>43</sup>Cr, <sup>44</sup>Cr, <sup>45</sup>Cr, <sup>46</sup>Cr, <sup>47</sup>Cr, <sup>48</sup>Cr, <sup>49</sup>Cr, <sup>51</sup>Cr, <sup>55</sup>Cr, <sup>56</sup>Cr, <sup>57</sup>Cr, <sup>58</sup>Cr, <sup>59</sup>Cr, <sup>60</sup>Cr, <sup>61</sup>Cr, <sup>62</sup>Cr, <sup>63</sup>Cr, <sup>64</sup>Cr, <sup>65</sup>Cr, <sup>66</sup>Cr, <sup>67</sup>Cr";
          eleStable = "<sup>50</sup>Cr, <sup>52</sup>Cr, <sup>53</sup>Cr, <sup>54</sup>Cr";
          eleHighlight = "190,-30";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Chromium_crystals_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 25:
          eleUnstable =
            "<sup>44</sup>Mn, <sup>45</sup>Mn, <sup>46</sup>Mn, <sup>47</sup>Mn, <sup>48</sup>Mn, <sup>49</sup>Mn, <sup>50</sup>Mn, <sup>51</sup>Mn, <sup>52</sup>Mn, <sup>53</sup>Mn, <sup>54</sup>Mn, <sup>56</sup>Mn, <sup>57</sup>Mn, <sup>58</sup>Mn, <sup>59</sup>Mn, <sup>60</sup>Mn, <sup>61</sup>Mn, <sup>62</sup>Mn, <sup>63</sup>Mn, <sup>64</sup>Mn, <sup>65</sup>Mn, <sup>66</sup>Mn, <sup>67</sup>Mn, <sup>68</sup>Mn, <sup>69</sup>Mn";
          eleStable = "<sup>55</sup>Mn";
          eleHighlight = "200,-30";
          eleCredits = preLink + "'http://images-of-elements.com/manganese.php'>Images-of-elements</a>";
          break;
        case 26:
          eleUnstable =
            "<sup>45</sup>Fe, <sup>46</sup>Fe, <sup>47</sup>Fe, <sup>48</sup>Fe, <sup>49</sup>Fe, <sup>50</sup>Fe, <sup>51</sup>Fe, <sup>52</sup>Fe, <sup>53</sup>Fe, <sup>55</sup>Fe, <sup>59</sup>Fe, <sup>60</sup>Fe, <sup>61</sup>Fe, <sup>62</sup>Fe, <sup>63</sup>Fe, <sup>64</sup>Fe, <sup>65</sup>Fe, <sup>66</sup>Fe, <sup>67</sup>Fe, <sup>68</sup>Fe, <sup>69</sup>Fe, <sup>70</sup>Fe, <sup>71</sup>Fe, <sup>72</sup>Fe";
          eleStable = "<sup>54</sup>Fe, <sup>56</sup>Fe, <sup>57</sup>Fe, <sup>58</sup>Fe";
          eleHighlight = "210,-30";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Iron_electrolytic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 27:
          eleUnstable =
            "<sup>47</sup>Co, <sup>48</sup>Co, <sup>49</sup>Co, <sup>50</sup>Co, <sup>51</sup>Co, <sup>52</sup>Co, <sup>53</sup>Co, <sup>54</sup>Co, <sup>55</sup>Co, <sup>56</sup>Co, <sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co, <sup>61</sup>Co, <sup>62</sup>Co, <sup>63</sup>Co, <sup>64</sup>Co, <sup>65</sup>Co, <sup>66</sup>Co, <sup>67</sup>Co, <sup>68</sup>Co, <sup>69</sup>Co, <sup>70</sup>Co, <sup>71</sup>Co, <sup>72</sup>Co, <sup>73</sup>Co, <sup>74</sup>Co, <sup>75</sup>Co";
          eleStable = "<sup>59</sup>Co";
          eleHighlight = "220,-30";
          eleCredits =
            preLink + "'http://commons.wikimedia.org/wiki/File:Kobalt_electrolytic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 28:
          eleUnstable =
            "<sup>48</sup>Ni, <sup>49</sup>Ni, <sup>50</sup>Ni, <sup>51</sup>Ni, <sup>52</sup>Ni, <sup>53</sup>Ni, <sup>54</sup>Ni, <sup>55</sup>Ni, <sup>56</sup>Ni, <sup>57</sup>Ni, <sup>59</sup>Ni, <sup>63</sup>Ni, <sup>65</sup>Ni, <sup>66</sup>Ni, <sup>67</sup>Ni, <sup>68</sup>Ni, <sup>69</sup>Ni, <sup>70</sup>Ni, <sup>71</sup>Ni, <sup>72</sup>Ni, <sup>73</sup>Ni, <sup>74</sup>Ni, <sup>75</sup>Ni, <sup>76</sup>Ni, <sup>77</sup>Ni, <sup>78</sup>Ni";
          eleStable = "<sup>58</sup>Ni, <sup>60</sup>Ni, <sup>61</sup>Ni, <sup>62</sup>Ni, <sup>64</sup>Ni";
          eleHighlight = "230,-30";
          eleCredits = preLink + "'http://images-of-elements.com/nickel.php'>Images-of-elements</a>";
          break;
        case 29:
          eleUnstable =
            "<sup>52</sup>Cu, <sup>53</sup>Cu, <sup>54</sup>Cu, <sup>55</sup>Cu, <sup>56</sup>Cu, <sup>57</sup>Cu, <sup>58</sup>Cu, <sup>59</sup>Cu, <sup>60</sup>Cu, <sup>61</sup>Cu, <sup>62</sup>Cu, <sup>64</sup>Cu, <sup>66</sup>Cu, <sup>67</sup>Cu, <sup>68</sup>Cu, <sup>69</sup>Cu, <sup>70</sup>Cu, <sup>71</sup>Cu, <sup>72</sup>Cu, <sup>73</sup>Cu, <sup>74</sup>Cu, <sup>75</sup>Cu, <sup>76</sup>Cu, <sup>77</sup>Cu, <sup>78</sup>Cu, <sup>79</sup>Cu, <sup>80</sup>Cu";
          eleStable = "<sup>63</sup>Cu, <sup>65</sup>Cu";
          eleHighlight = "240,-30";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:NatCopper.jpg'>Wikimedia Commons (Jonathan Zander)</a>";
          break;
        case 30:
          eleUnstable =
            "<sup>54</sup>Zn, <sup>55</sup>Zn, <sup>56</sup>Zn, <sup>57</sup>Zn, <sup>58</sup>Zn, <sup>59</sup>Zn, <sup>60</sup>Zn, <sup>61</sup>Zn, <sup>62</sup>Zn, <sup>63</sup>Zn, <sup>65</sup>Zn, <sup>69</sup>Zn, <sup>71</sup>Zn, <sup>72</sup>Zn, <sup>73</sup>Zn, <sup>74</sup>Zn, <sup>75</sup>Zn, <sup>76</sup>Zn, <sup>77</sup>Zn, <sup>78</sup>Zn, <sup>79</sup>Zn, <sup>80</sup>Zn, <sup>81</sup>Zn, <sup>82</sup>Zn, <sup>83</sup>Zn";
          eleStable = "<sup>64</sup>Zn, <sup>66</sup>Zn, <sup>67</sup>Zn, <sup>68</sup>Zn, <sup>70</sup>Zn";
          eleHighlight = "250,-30";
          eleCredits = preLink + "'http://images-of-elements.com/zinc.php'>Images-of-elements</a>";
          break;
        case 31:
          eleUnstable =
            "<sup>56</sup>Ga, <sup>57</sup>Ga, <sup>58</sup>Ga, <sup>59</sup>Ga, <sup>60</sup>Ga, <sup>61</sup>Ga, <sup>62</sup>Ga, <sup>63</sup>Ga, <sup>64</sup>Ga, <sup>65</sup>Ga, <sup>66</sup>Ga, <sup>67</sup>Ga, <sup>68</sup>Ga, <sup>70</sup>Ga, <sup>72</sup>Ga, <sup>73</sup>Ga, <sup>74</sup>Ga, <sup>75</sup>Ga, <sup>76</sup>Ga, <sup>77</sup>Ga, <sup>78</sup>Ga, <sup>79</sup>Ga, <sup>80</sup>Ga, <sup>81</sup>Ga, <sup>82</sup>Ga, <sup>83</sup>Ga, <sup>84</sup>Ga, <sup>85</sup>Ga, <sup>86</sup>Ga";
          eleStable = "<sup>69</sup>Ga, <sup>71</sup>Ga";
          eleHighlight = "260,-30";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Gallium_crystals.jpg'>Wikimedia Commons (Foobar)</a>";
          break;
        case 32:
          eleUnstable =
            "<sup>58</sup>Ge, <sup>59</sup>Ge, <sup>60</sup>Ge, <sup>61</sup>Ge, <sup>62</sup>Ge, <sup>63</sup>Ge, <sup>64</sup>Ge, <sup>65</sup>Ge, <sup>66</sup>Ge, <sup>67</sup>Ge, <sup>68</sup>Ge, <sup>69</sup>Ge, <sup>71</sup>Ge, <sup>75</sup>Ge, <sup>76</sup>Ge, <sup>77</sup>Ge, <sup>78</sup>Ge, <sup>79</sup>Ge, <sup>80</sup>Ge, <sup>81</sup>Ge, <sup>82</sup>Ge, <sup>83</sup>Ge, <sup>84</sup>Ge, <sup>85</sup>Ge, <sup>86</sup>Ge, <sup>87</sup>Ge, <sup>88</sup>Ge, <sup>89</sup>Ge";
          eleStable = "<sup>70</sup>Ge, <sup>72</sup>Ge, <sup>73</sup>Ge, <sup>74</sup>Ge";
          eleHighlight = "270,-30";
          eleCredits = preLink + "'http://images-of-elements.com/germanium.php'>Images-of-elements</a>";
          break;
        case 33:
          eleUnstable =
            "<sup>60</sup>As, <sup>61</sup>As, <sup>62</sup>As, <sup>63</sup>As, <sup>64</sup>As, <sup>65</sup>As, <sup>66</sup>As, <sup>67</sup>As, <sup>68</sup>As, <sup>69</sup>As, <sup>70</sup>As, <sup>71</sup>As, <sup>72</sup>As, <sup>73</sup>As, <sup>74</sup>As, <sup>76</sup>As, <sup>77</sup>As, <sup>78</sup>As, <sup>79</sup>As, <sup>80</sup>As, <sup>81</sup>As, <sup>82</sup>As, <sup>83</sup>As, <sup>84</sup>As, <sup>85</sup>As, <sup>86</sup>As, <sup>87</sup>As, <sup>88</sup>As, <sup>89</sup>As, <sup>90</sup>As, <sup>91</sup>As, <sup>92</sup>As";
          eleStable = "<sup>75</sup>As";
          eleHighlight = "280,-30";
          eleCredits = preLink + "'http://images-of-elements.com/arsenic.php'>Images-of-elements</a>";
          break;
        case 34:
          eleUnstable =
            "<sup>65</sup>Se, <sup>66</sup>Se, <sup>67</sup>Se, <sup>68</sup>Se, <sup>69</sup>Se, <sup>70</sup>Se, <sup>71</sup>Se, <sup>72</sup>Se, <sup>73</sup>Se, <sup>75</sup>Se, <sup>79</sup>Se, <sup>81</sup>Se, <sup>82</sup>Se, <sup>83</sup>Se, <sup>84</sup>Se, <sup>85</sup>Se, <sup>86</sup>Se, <sup>87</sup>Se, <sup>88</sup>Se, <sup>89</sup>Se, <sup>90</sup>Se, <sup>91</sup>Se, <sup>92</sup>Se, <sup>93</sup>Se, <sup>94</sup>Se";
          eleStable = "<sup>74</sup>Se, <sup>76</sup>Se, <sup>77</sup>Se, <sup>78</sup>Se, <sup>80</sup>Se";
          eleHighlight = "290,-30";
          eleCredits = preLink + "'http://images-of-elements.com/selenium.php'>Images-of-elements</a>";
          break;
        case 35:
          eleUnstable =
            "<sup>67</sup>Br, <sup>68</sup>Br, <sup>69</sup>Br, <sup>70</sup>Br, <sup>71</sup>Br, <sup>72</sup>Br, <sup>73</sup>Br, <sup>74</sup>Br, <sup>75</sup>Br, <sup>76</sup>Br, <sup>77</sup>Br, <sup>78</sup>Br, <sup>80</sup>Br, <sup>82</sup>Br, <sup>83</sup>Br, <sup>84</sup>Br, <sup>85</sup>Br, <sup>86</sup>Br, <sup>87</sup>Br, <sup>88</sup>Br, <sup>89</sup>Br, <sup>90</sup>Br, <sup>91</sup>Br, <sup>92</sup>Br, <sup>93</sup>Br, <sup>94</sup>Br, <sup>95</sup>Br, <sup>96</sup>Br, <sup>97</sup>Br";
          eleStable = "<sup>79</sup>Br, <sup>81</sup>Br";
          eleHighlight = "300,-30";
          eleCredits = preLink + "'http://images-of-elements.com/bromine.php'>Images-of-elements</a>";
          break;
        case 36:
          eleUnstable =
            "<sup>69</sup>Kr, <sup>70</sup>Kr, <sup>71</sup>Kr, <sup>72</sup>Kr, <sup>73</sup>Kr, <sup>74</sup>Kr, <sup>75</sup>Kr, <sup>76</sup>Kr, <sup>77</sup>Kr, <sup>79</sup>Kr, <sup>81</sup>Kr, <sup>85</sup>Kr, <sup>87</sup>Kr, <sup>88</sup>Kr, <sup>89</sup>Kr, <sup>90</sup>Kr, <sup>91</sup>Kr, <sup>92</sup>Kr, <sup>93</sup>Kr, <sup>94</sup>Kr, <sup>95</sup>Kr, <sup>96</sup>Kr, <sup>97</sup>Kr, <sup>98</sup>Kr, <sup>99</sup>Kr, <sup>100</sup>Kr, <sup>101</sup>Kr";
          eleStable = "<sup>78</sup>Kr, <sup>80</sup>Kr, <sup>82</sup>Kr, <sup>83</sup>Kr, <sup>84</sup>Kr, <sup>86</sup>Kr";
          eleHighlight = "310,-30";
          eleCredits = preLink + "'http://images-of-elements.com/krypton.php'>Images-of-elements</a>";
          break;
        case 37:
          eleUnstable =
            "<sup>71</sup>Rb, <sup>72</sup>Rb, <sup>73</sup>Rb, <sup>74</sup>Rb, <sup>75</sup>Rb, <sup>76</sup>Rb, <sup>77</sup>Rb, <sup>78</sup>Rb, <sup>79</sup>Rb, <sup>80</sup>Rb, <sup>81</sup>Rb, <sup>82</sup>Rb, <sup>83</sup>Rb, <sup>84</sup>Rb, <sup>86</sup>Rb, <sup>87</sup>Rb, <sup>88</sup>Rb, <sup>89</sup>Rb, <sup>90</sup>Rb, <sup>91</sup>Rb, <sup>92</sup>Rb, <sup>93</sup>Rb, <sup>94</sup>Rb, <sup>95</sup>Rb, <sup>96</sup>Rb, <sup>97</sup>Rb, <sup>98</sup>Rb, <sup>99</sup>Rb, <sup>100</sup>Rb, <sup>101</sup>Rb, <sup>102</sup>Rb";
          eleStable = "<sup>85</sup>Rb";
          eleHighlight = "0,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Rb5.JPG'>Wikimedia Commons (Dnn87)</a>";
          break;
        case 38:
          eleUnstable =
            "<sup>73</sup>Sr, <sup>74</sup>Sr, <sup>75</sup>Sr, <sup>76</sup>Sr, <sup>77</sup>Sr, <sup>78</sup>Sr, <sup>79</sup>Sr, <sup>80</sup>Sr, <sup>81</sup>Sr, <sup>82</sup>Sr, <sup>83</sup>Sr, <sup>85</sup>Sr, <sup>89</sup>Sr, <sup>90</sup>Sr, <sup>91</sup>Sr, <sup>92</sup>Sr, <sup>93</sup>Sr, <sup>94</sup>Sr, <sup>95</sup>Sr, <sup>96</sup>Sr, <sup>97</sup>Sr, <sup>98</sup>Sr, <sup>99</sup>Sr, <sup>100</sup>Sr, <sup>101</sup>Sr, <sup>102</sup>Sr, <sup>103</sup>Sr, <sup>104</sup>Sr, <sup>105</sup>Sr";
          eleStable = "<sup>84</sup>Sr, <sup>86</sup>Sr, <sup>87</sup>Sr, <sup>88</sup>Sr";
          eleHighlight = "10,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Strontium_destilled_crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 39:
          eleUnstable =
            "<sup>76</sup>Y, <sup>77</sup>Y, <sup>78</sup>Y, <sup>79</sup>Y, <sup>80</sup>Y, <sup>81</sup>Y, <sup>82</sup>Y, <sup>83</sup>Y, <sup>84</sup>Y, <sup>85</sup>Y, <sup>86</sup>Y, <sup>87</sup>Y, <sup>88</sup>Y, <sup>90</sup>Y, <sup>91</sup>Y, <sup>92</sup>Y, <sup>93</sup>Y, <sup>94</sup>Y, <sup>95</sup>Y, <sup>96</sup>Y, <sup>97</sup>Y, <sup>98</sup>Y, <sup>99</sup>Y, <sup>100</sup>Y, <sup>101</sup>Y, <sup>102</sup>Y, <sup>103</sup>Y, <sup>104</sup>Y, <sup>105</sup>Y, <sup>106</sup>Y, <sup>107</sup>Y, <sup>108</sup>Y";
          eleStable = "<sup>89</sup>Y";
          eleHighlight = "160,-20";
          eleCredits =
            preLink + "'http://commons.wikimedia.org/wiki/File:Yttrium_sublimed_dendritic_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 40:
          eleUnstable =
            "<sup>78</sup>Zr, <sup>79</sup>Zr, <sup>80</sup>Zr, <sup>81</sup>Zr, <sup>82</sup>Zr, <sup>83</sup>Zr, <sup>84</sup>Zr, <sup>85</sup>Zr, <sup>86</sup>Zr, <sup>87</sup>Zr, <sup>88</sup>Zr, <sup>89</sup>Zr, <sup>93</sup>Zr, <sup>95</sup>Zr, <sup>96</sup>Zr, <sup>97</sup>Zr, <sup>98</sup>Zr, <sup>99</sup>Zr, <sup>100</sup>Zr, <sup>101</sup>Zr, <sup>102</sup>Zr, <sup>103</sup>Zr, <sup>104</sup>Zr, <sup>105</sup>Zr, <sup>106</sup>Zr, <sup>107</sup>Zr, <sup>108</sup>Zr, <sup>109</sup>Zr, <sup>110</sup>Zr";
          eleStable = "<sup>90</sup>Zr, <sup>91</sup>Zr, <sup>92</sup>Zr, <sup>94</sup>Zr";
          eleHighlight = "170,-20";
          eleCredits =
            preLink + "'http://commons.wikimedia.org/wiki/File:Zirconium_crystal_bar_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 41:
          eleUnstable =
            "<sup>81</sup>Nb, <sup>82</sup>Nb, <sup>83</sup>Nb, <sup>84</sup>Nb, <sup>85</sup>Nb, <sup>86</sup>Nb, <sup>87</sup>Nb, <sup>88</sup>Nb, <sup>89</sup>Nb, <sup>90</sup>Nb, <sup>91</sup>Nb, <sup>92</sup>Nb, <sup>94</sup>Nb, <sup>95</sup>Nb, <sup>96</sup>Nb, <sup>97</sup>Nb, <sup>98</sup>Nb, <sup>99</sup>Nb, <sup>100</sup>Nb, <sup>101</sup>Nb, <sup>102</sup>Nb, <sup>103</sup>Nb, <sup>104</sup>Nb, <sup>105</sup>Nb, <sup>106</sup>Nb, <sup>107</sup>Nb, <sup>108</sup>Nb, <sup>109</sup>Nb, <sup>110</sup>Nb, <sup>111</sup>Nb, <sup>112</sup>Nb, <sup>113</sup>Nb";
          eleStable = "<sup>93</sup>Nb";
          eleHighlight = "180,-20";
          eleCredits = preLink + "'http://images-of-elements.com/niobium.php'>Images-of-elements</a>";
          break;
        case 42:
          eleUnstable =
            "<sup>83</sup>Mo, <sup>84</sup>Mo, <sup>85</sup>Mo, <sup>86</sup>Mo, <sup>87</sup>Mo, <sup>88</sup>Mo, <sup>89</sup>Mo, <sup>90</sup>Mo, <sup>91</sup>Mo, <sup>93</sup>Mo, <sup>99</sup>Mo, <sup>100</sup>Mo, <sup>101</sup>Mo, <sup>102</sup>Mo, <sup>103</sup>Mo, <sup>104</sup>Mo, <sup>105</sup>Mo, <sup>106</sup>Mo, <sup>107</sup>Mo, <sup>108</sup>Mo, <sup>109</sup>Mo, <sup>110</sup>Mo, <sup>111</sup>Mo, <sup>112</sup>Mo, <sup>113</sup>Mo, <sup>114</sup>Mo, <sup>115</sup>Mo";
          eleStable = "<sup>92</sup>Mo, <sup>94</sup>Mo, <sup>95</sup>Mo, <sup>96</sup>Mo, <sup>97</sup>Mo, <sup>98</sup>Mo";
          eleHighlight = "190,-20";
          eleCredits = preLink + "'http://images-of-elements.com/molybdenum.php'>Images-of-elements</a>";
          break;
        case 43:
          eleStable = "-";
          eleUnstable =
            "<sup>85</sup>Tc, <sup>86</sup>Tc, <sup>87</sup>Tc, <sup>88</sup>Tc, <sup>89</sup>Tc, <sup>90</sup>Tc, <sup>91</sup>Tc, <sup>92</sup>Tc, <sup>93</sup>Tc, <sup>94</sup>Tc, <sup>95</sup>Tc, <sup>96</sup>Tc, <sup>97</sup>Tc, <sup>98</sup>Tc, <sup>99</sup>Tc, <sup>100</sup>Tc, <sup>101</sup>Tc, <sup>102</sup>Tc, <sup>103</sup>Tc, <sup>104</sup>Tc, <sup>105</sup>Tc, <sup>106</sup>Tc, <sup>107</sup>Tc, <sup>108</sup>Tc, <sup>109</sup>Tc, <sup>110</sup>Tc, <sup>111</sup>Tc, <sup>112</sup>Tc, <sup>113</sup>Tc, <sup>114</sup>Tc, <sup>115</sup>Tc, <sup>116</sup>Tc, <sup>117</sup>Tc, <sup>118</sup>Tc";
          eleHighlight = "200,-20";
          eleCredits = preLink + "'http://pauli.uni-muenster.de/~munsteg/physiker.html'>pauli.uni-muenster.de</a>";
          break;
        case 44:
          eleUnstable =
            "<sup>87</sup>Ru, <sup>88</sup>Ru, <sup>89</sup>Ru, <sup>90</sup>Ru, <sup>91</sup>Ru, <sup>92</sup>Ru, <sup>93</sup>Ru, <sup>94</sup>Ru, <sup>95</sup>Ru, <sup>97</sup>Ru, <sup>103</sup>Ru, <sup>105</sup>Ru, <sup>106</sup>Ru, <sup>107</sup>Ru, <sup>108</sup>Ru, <sup>109</sup>Ru, <sup>110</sup>Ru, <sup>111</sup>Ru, <sup>112</sup>Ru, <sup>113</sup>Ru, <sup>114</sup>Ru, <sup>115</sup>Ru, <sup>116</sup>Ru, <sup>117</sup>Ru, <sup>118</sup>Ru, <sup>119</sup>Ru, <sup>120</sup>Ru";
          eleStable = "<sup>96</sup>Ru, <sup>98</sup>Ru, <sup>99</sup>Ru, <sup>100</sup>Ru, <sup>101</sup>Ru, <sup>102</sup>Ru, <sup>104</sup>Ru";
          eleHighlight = "210,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Ruthenium_crystals.jpg'>Wikimedia Commons (Periodictableru)</a>";
          break;
        case 45:
          eleStable = "<sup>103</sup>Rh";
          eleUnstable =
            "<sup>89</sup>Rh, <sup>90</sup>Rh, <sup>91</sup>Rh, <sup>92</sup>Rh, <sup>93</sup>Rh, <sup>94</sup>Rh, <sup>95</sup>Rh, <sup>96</sup>Rh, <sup>97</sup>Rh, <sup>98</sup>Rh, <sup>99</sup>Rh, <sup>100</sup>Rh, <sup>101</sup>Rh, <sup>102</sup>Rh, <sup>104</sup>Rh, <sup>105</sup>Rh, <sup>106</sup>Rh, <sup>107</sup>Rh, <sup>108</sup>Rh, <sup>109</sup>Rh, <sup>110</sup>Rh, <sup>111</sup>Rh, <sup>112</sup>Rh, <sup>113</sup>Rh, <sup>114</sup>Rh, <sup>115</sup>Rh, <sup>116</sup>Rh, <sup>117</sup>Rh, <sup>118</sup>Rh, <sup>119</sup>Rh, <sup>120</sup>Rh, <sup>121</sup>Rh, <sup>122</sup>Rh";
          eleHighlight = "220,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Rhodium_powder_pressed_melted.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 46:
          eleStable = "<sup>102</sup>Pd, <sup>104</sup>Pd, <sup>105</sup>Pd, <sup>106</sup>Pd, <sup>108</sup>Pd, <sup>110</sup>Pd";
          eleUnstable =
            "<sup>91</sup>Pd, <sup>92</sup>Pd, <sup>93</sup>Pd, <sup>94</sup>Pd, <sup>95</sup>Pd, <sup>96</sup>Pd, <sup>97</sup>Pd, <sup>98</sup>Pd, <sup>99</sup>Pd, <sup>100</sup>Pd, <sup>101</sup>Pd, <sup>103</sup>Pd, <sup>107</sup>Pd, <sup>109</sup>Pd, <sup>111</sup>Pd, <sup>112</sup>Pd, <sup>113</sup>Pd, <sup>114</sup>Pd, <sup>115</sup>Pd, <sup>116</sup>Pd, <sup>117</sup>Pd, <sup>118</sup>Pd, <sup>119</sup>Pd, <sup>120</sup>Pd, <sup>121</sup>Pd, <sup>122</sup>Pd, <sup>123</sup>Pd, <sup>124</sup>Pd";
          eleHighlight = "230,-20";
          eleCredits = preLink + "'http://images-of-elements.com/palladium.php'>Images-of-elements</a>";
          break;
        case 47:
          eleStable = "<sup>107</sup>Ag, <sup>109</sup>Ag";
          eleUnstable =
            "<sup>93</sup>Ag, <sup>94</sup>Ag, <sup>95</sup>Ag, <sup>96</sup>Ag, <sup>97</sup>Ag, <sup>98</sup>Ag, <sup>99</sup>Ag, <sup>100</sup>Ag, <sup>101</sup>Ag, <sup>102</sup>Ag, <sup>103</sup>Ag, <sup>104</sup>Ag, <sup>105</sup>Ag, <sup>106</sup>Ag, <sup>108</sup>Ag, <sup>110</sup>Ag, <sup>111</sup>Ag, <sup>112</sup>Ag, <sup>113</sup>Ag, <sup>114</sup>Ag, <sup>115</sup>Ag, <sup>116</sup>Ag, <sup>117</sup>Ag, <sup>118</sup>Ag, <sup>119</sup>Ag, <sup>120</sup>Ag, <sup>121</sup>Ag, <sup>122</sup>Ag, <sup>123</sup>Ag, <sup>124</sup>Ag, <sup>125</sup>Ag, <sup>126</sup>Ag, <sup>127</sup>Ag, <sup>128</sup>Ag, <sup>129</sup>Ag, <sup>130</sup>Ag";
          eleHighlight = "240,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Silver_crystal.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 48:
          eleStable = "<sup>106</sup>Cd, <sup>108</sup>Cd, <sup>110</sup>Cd, <sup>111</sup>Cd, <sup>112</sup>Cd, <sup>114</sup>Cd";
          eleUnstable =
            "<sup>95</sup>Cd, <sup>96</sup>Cd, <sup>97</sup>Cd, <sup>98</sup>Cd, <sup>99</sup>Cd, <sup>100</sup>Cd, <sup>101</sup>Cd, <sup>102</sup>Cd, <sup>103</sup>Cd, <sup>104</sup>Cd, <sup>105</sup>Cd, <sup>107</sup>Cd, <sup>109</sup>Cd, <sup>113</sup>Cd, <sup>115</sup>Cd, <sup>116</sup>Cd, <sup>117</sup>Cd, <sup>118</sup>Cd, <sup>119</sup>Cd, <sup>120</sup>Cd, <sup>121</sup>Cd, <sup>122</sup>Cd, <sup>123</sup>Cd, <sup>124</sup>Cd, <sup>125</sup>Cd, <sup>126</sup>Cd, <sup>127</sup>Cd, <sup>128</sup>Cd, <sup>129</sup>Cd, <sup>130</sup>Cd, <sup>131</sup>Cd, <sup>132</sup>Cd";
          eleHighlight = "250,-20";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Cadmium-crystal_bar.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 49:
          eleStable = "<sup>113</sup>In";
          eleUnstable =
            "<sup>97</sup>In, <sup>98</sup>In, <sup>99</sup>In, <sup>100</sup>In, <sup>101</sup>In, <sup>102</sup>In, <sup>103</sup>In, <sup>104</sup>In, <sup>105</sup>In, <sup>106</sup>In, <sup>107</sup>In, <sup>108</sup>In, <sup>109</sup>In, <sup>110</sup>In, <sup>111</sup>In, <sup>112</sup>In, <sup>114</sup>In, <sup>115</sup>In, <sup>116</sup>In, <sup>117</sup>In, <sup>118</sup>In, <sup>119</sup>In, <sup>120</sup>In, <sup>121</sup>In, <sup>122</sup>In, <sup>123</sup>In, <sup>124</sup>In, <sup>125</sup>In, <sup>126</sup>In, <sup>127</sup>In, <sup>128</sup>In, <sup>129</sup>In, <sup>130</sup>In, <sup>131</sup>In, <sup>132</sup>In, <sup>133</sup>In, <sup>134</sup>In, <sup>135</sup>In";
          eleHighlight = "260,-20";
          eleCredits = preLink + "'http://images-of-elements.com/indium.php'>Images-of-elements</a>";
          break;
        case 50:
          eleStable =
            "<sup>112</sup>Sn, <sup>114</sup>Sn, <sup>115</sup>Sn, <sup>116</sup>Sn, <sup>117</sup>Sn, <sup>118</sup>Sn, <sup>119</sup>Sn, <sup>120</sup>Sn, <sup>122</sup>Sn, <sup>124</sup>Sn";
          eleUnstable =
            "<sup>99</sup>Sn, <sup>100</sup>Sn, <sup>101</sup>Sn, <sup>102</sup>Sn, <sup>103</sup>Sn, <sup>104</sup>Sn, <sup>105</sup>Sn, <sup>106</sup>Sn, <sup>107</sup>Sn, <sup>108</sup>Sn, <sup>109</sup>Sn, <sup>110</sup>Sn, <sup>111</sup>Sn, <sup>113</sup>Sn, <sup>121</sup>Sn, <sup>123</sup>Sn, <sup>125</sup>Sn, <sup>126</sup>Sn, <sup>127</sup>Sn, <sup>128</sup>Sn, <sup>129</sup>Sn, <sup>130</sup>Sn, <sup>131</sup>Sn, <sup>132</sup>Sn, <sup>133</sup>Sn, <sup>134</sup>Sn, <sup>135</sup>Sn, <sup>136</sup>Sn, <sup>137</sup>Sn";
          eleHighlight = "270,-20";
          eleCredits = preLink + "'http://images-of-elements.com/tin.php'>Images-of-elements</a>";
          break;
        case 51:
          eleUnstable =
            "<sup>103</sup>Sb, <sup>104</sup>Sb, <sup>105</sup>Sb, <sup>106</sup>Sb, <sup>107</sup>Sb, <sup>108</sup>Sb, <sup>109</sup>Sb, <sup>110</sup>Sb, <sup>111</sup>Sb, <sup>112</sup>Sb, <sup>113</sup>Sb, <sup>114</sup>Sb, <sup>115</sup>Sb, <sup>116</sup>Sb, <sup>117</sup>Sb, <sup>118</sup>Sb, <sup>119</sup>Sb, <sup>120</sup>Sb, <sup>122</sup>Sb, <sup>124</sup>Sb, <sup>125</sup>Sb, <sup>126</sup>Sb, <sup>127</sup>Sb, <sup>128</sup>Sb, <sup>129</sup>Sb, <sup>130</sup>Sb, <sup>131</sup>Sb, <sup>132</sup>Sb, <sup>133</sup>Sb, <sup>134</sup>Sb, <sup>135</sup>Sb, <sup>136</sup>Sb, <sup>137</sup>Sb, <sup>138</sup>Sb, <sup>139</sup>Sb";
          eleStable = "<sup>121</sup>Sb, <sup>123</sup>Sb";
          eleHighlight = "280,-20";
          eleCredits = preLink + "'http://images-of-elements.com/antimony.php'>Images-of-elements</a>";
          break;
        case 52:
          eleUnstable =
            "<sup>105</sup>Te, <sup>106</sup>Te, <sup>107</sup>Te, <sup>108</sup>Te, <sup>109</sup>Te, <sup>110</sup>Te, <sup>111</sup>Te, <sup>112</sup>Te, <sup>113</sup>Te, <sup>114</sup>Te, <sup>115</sup>Te, <sup>116</sup>Te, <sup>117</sup>Te, <sup>118</sup>Te, <sup>119</sup>Te, <sup>121</sup>Te, <sup>123</sup>Te, <sup>127</sup>Te, <sup>128</sup>Te, <sup>129</sup>Te, <sup>130</sup>Te, <sup>131</sup>Te, <sup>132</sup>Te, <sup>133</sup>Te, <sup>134</sup>Te, <sup>135</sup>Te, <sup>136</sup>Te, <sup>137</sup>Te, <sup>138</sup>Te, <sup>139</sup>Te, <sup>140</sup>Te, <sup>141</sup>Te, <sup>142</sup>Te";
          eleStable = "<sup>120</sup>Te, <sup>122</sup>Te, <sup>124</sup>Te, <sup>125</sup>Te, <sup>126</sup>Te";
          eleHighlight = "290,-20";
          eleCredits = preLink + "'http://images-of-elements.com/tellurium.php'>Images-of-elements</a>";
          break;
        case 53:
          eleUnstable =
            "<sup>108</sup>I, <sup>109</sup>I, <sup>110</sup>I, <sup>111</sup>I, <sup>112</sup>I, <sup>113</sup>I, <sup>114</sup>I, <sup>115</sup>I, <sup>116</sup>I, <sup>117</sup>I, <sup>118</sup>I, <sup>119</sup>I, <sup>120</sup>I, <sup>121</sup>I, <sup>122</sup>I, <sup>123</sup>I, <sup>124</sup>I, <sup>125</sup>I, <sup>126</sup>I, <sup>128</sup>I, <sup>129</sup>I, <sup>130</sup>I, <sup>131</sup>I, <sup>132</sup>I, <sup>133</sup>I, <sup>134</sup>I, <sup>135</sup>I, <sup>136</sup>I, <sup>137</sup>I, <sup>138</sup>I, <sup>139</sup>I, <sup>140</sup>I, <sup>141</sup>I, <sup>142</sup>I, <sup>143</sup>I, <sup>144</sup>I";
          eleStable = "<sup>127</sup>I";
          eleHighlight = "300,-20";
          eleCredits = preLink + "'http://images-of-elements.com/iodine.php'>Images-of-elements</a>";
          break;
        case 54:
          eleUnstable =
            "<sup>110</sup>Xe, <sup>111</sup>Xe, <sup>112</sup>Xe, <sup>113</sup>Xe, <sup>114</sup>Xe, <sup>115</sup>Xe, <sup>116</sup>Xe, <sup>117</sup>Xe, <sup>118</sup>Xe, <sup>119</sup>Xe, <sup>120</sup>Xe, <sup>121</sup>Xe, <sup>122</sup>Xe, <sup>123</sup>Xe, <sup>125</sup>Xe, <sup>127</sup>Xe, <sup>133</sup>Xe, <sup>135</sup>Xe, <sup>137</sup>Xe, <sup>138</sup>Xe, <sup>139</sup>Xe, <sup>140</sup>Xe, <sup>141</sup>Xe, <sup>142</sup>Xe, <sup>143</sup>Xe, <sup>144</sup>Xe, <sup>145</sup>Xe, <sup>146</sup>Xe, <sup>147</sup>Xe";
          eleStable =
            "<sup>124</sup>Xe, <sup>126</sup>Xe, <sup>128</sup>Xe, <sup>129</sup>Xe, <sup>130</sup>Xe, <sup>131</sup>Xe, <sup>132</sup>Xe, <sup>134</sup>Xe, <sup>136</sup>Xe";
          eleHighlight = "310,-20";
          eleCredits = preLink + "'http://images-of-elements.com/xenon.php'>Images-of-elements</a>";
          break;
        case 55:
          eleUnstable =
            "<sup>112</sup>Cs, <sup>113</sup>Cs, <sup>114</sup>Cs, <sup>115</sup>Cs, <sup>116</sup>Cs, <sup>117</sup>Cs, <sup>118</sup>Cs, <sup>119</sup>Cs, <sup>120</sup>Cs, <sup>121</sup>Cs, <sup>122</sup>Cs, <sup>123</sup>Cs, <sup>124</sup>Cs, <sup>125</sup>Cs, <sup>126</sup>Cs, <sup>127</sup>Cs, <sup>128</sup>Cs, <sup>129</sup>Cs, <sup>130</sup>Cs, <sup>131</sup>Cs, <sup>132</sup>Cs, <sup>134</sup>Cs, <sup>135</sup>Cs, <sup>136</sup>Cs, <sup>137</sup>Cs, <sup>138</sup>Cs, <sup>139</sup>Cs, <sup>140</sup>Cs, <sup>141</sup>Cs, <sup>142</sup>Cs, <sup>143</sup>Cs, <sup>144</sup>Cs, <sup>145</sup>Cs, <sup>146</sup>Cs, <sup>147</sup>Cs, <sup>148</sup>Cs, <sup>149</sup>Cs, <sup>150</sup>Cs, <sup>151</sup>Cs";
          eleStable = "<sup>133</sup>Cs";
          eleHighlight = "0,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Cesium.jpg'>Wikimedia Commons (Dnn87)</a>";
          break;
        case 56:
          eleUnstable =
            "<sup>114</sup>Ba, <sup>115</sup>Ba, <sup>116</sup>Ba, <sup>117</sup>Ba, <sup>118</sup>Ba, <sup>119</sup>Ba, <sup>120</sup>Ba, <sup>121</sup>Ba, <sup>122</sup>Ba, <sup>123</sup>Ba, <sup>124</sup>Ba, <sup>125</sup>Ba, <sup>126</sup>Ba, <sup>127</sup>Ba, <sup>128</sup>Ba, <sup>129</sup>Ba, <sup>131</sup>Ba, <sup>133</sup>Ba, <sup>139</sup>Ba, <sup>140</sup>Ba, <sup>141</sup>Ba, <sup>142</sup>Ba, <sup>143</sup>Ba, <sup>144</sup>Ba, <sup>145</sup>Ba, <sup>146</sup>Ba, <sup>147</sup>Ba, <sup>148</sup>Ba, <sup>149</sup>Ba, <sup>150</sup>Ba, <sup>151</sup>Ba, <sup>152</sup>Ba, <sup>153</sup>Ba";
          eleStable = "<sup>130</sup>Ba, <sup>132</sup>Ba, <sup>134</sup>Ba, <sup>135</sup>Ba, <sup>136</sup>Ba, <sup>137</sup>Ba, <sup>138</sup>Ba";
          eleHighlight = "10,-10";
          eleCredits = preLink + "'http://images-of-elements.com/barium.php'>Images-of-elements</a>";
          break;
        case 57:
          eleUnstable =
            "<sup>117</sup>La, <sup>118</sup>La, <sup>119</sup>La, <sup>120</sup>La, <sup>121</sup>La, <sup>122</sup>La, <sup>123</sup>La, <sup>124</sup>La, <sup>125</sup>La, <sup>126</sup>La, <sup>127</sup>La, <sup>128</sup>La, <sup>129</sup>La, <sup>130</sup>La, <sup>131</sup>La, <sup>132</sup>La, <sup>133</sup>La, <sup>134</sup>La, <sup>135</sup>La, <sup>136</sup>La, <sup>137</sup>La, <sup>138</sup>La, <sup>140</sup>La, <sup>141</sup>La, <sup>142</sup>La, <sup>143</sup>La, <sup>144</sup>La, <sup>145</sup>La, <sup>146</sup>La, <sup>147</sup>La, <sup>148</sup>La, <sup>149</sup>La, <sup>150</sup>La, <sup>151</sup>La, <sup>152</sup>La, <sup>153</sup>La, <sup>154</sup>La, <sup>155</sup>La";
          eleStable = "<sup>139</sup>La";
          eleHighlight = "20,-10";
          eleCredits = preLink + "'http://images-of-elements.com/lanthanum.php'>Images-of-elements</a>";
          break;
        case 58:
          eleUnstable =
            "<sup>119</sup>Ce, <sup>120</sup>Ce, <sup>121</sup>Ce, <sup>122</sup>Ce, <sup>123</sup>Ce, <sup>124</sup>Ce, <sup>125</sup>Ce, <sup>126</sup>Ce, <sup>127</sup>Ce, <sup>128</sup>Ce, <sup>129</sup>Ce, <sup>130</sup>Ce, <sup>131</sup>Ce, <sup>132</sup>Ce, <sup>133</sup>Ce, <sup>134</sup>Ce, <sup>135</sup>Ce, <sup>137</sup>Ce, <sup>139</sup>Ce, <sup>141</sup>Ce, <sup>143</sup>Ce, <sup>144</sup>Ce, <sup>145</sup>Ce, <sup>146</sup>Ce, <sup>147</sup>Ce, <sup>148</sup>Ce, <sup>149</sup>Ce, <sup>150</sup>Ce, <sup>151</sup>Ce, <sup>152</sup>Ce, <sup>153</sup>Ce, <sup>154</sup>Ce, <sup>155</sup>Ce, <sup>156</sup>Ce, <sup>157</sup>Ce";
          eleStable = "<sup>136</sup>Ce, <sup>138</sup>Ce, <sup>140</sup>Ce, <sup>142</sup>Ce";
          eleHighlight = "30,-10";
          eleCredits = preLink + "'http://images-of-elements.com/cerium.php'>Images-of-elements</a>";
          break;
        case 59:
          eleUnstable =
            "<sup>121</sup>Pr, <sup>122</sup>Pr, <sup>123</sup>Pr, <sup>124</sup>Pr, <sup>125</sup>Pr, <sup>126</sup>Pr, <sup>127</sup>Pr, <sup>128</sup>Pr, <sup>129</sup>Pr, <sup>130</sup>Pr, <sup>131</sup>Pr, <sup>132</sup>Pr, <sup>133</sup>Pr, <sup>134</sup>Pr, <sup>135</sup>Pr, <sup>136</sup>Pr, <sup>137</sup>Pr, <sup>138</sup>Pr, <sup>139</sup>Pr, <sup>140</sup>Pr, <sup>142</sup>Pr, <sup>143</sup>Pr, <sup>144</sup>Pr, <sup>145</sup>Pr, <sup>146</sup>Pr, <sup>147</sup>Pr, <sup>148</sup>Pr, <sup>149</sup>Pr, <sup>150</sup>Pr, <sup>151</sup>Pr, <sup>152</sup>Pr, <sup>153</sup>Pr, <sup>154</sup>Pr, <sup>155</sup>Pr, <sup>156</sup>Pr, <sup>157</sup>Pr, <sup>158</sup>Pr, <sup>159</sup>Pr";
          eleStable = "<sup>141</sup>Pr";
          eleHighlight = "40,-10";
          eleCredits = preLink + "'http://images-of-elements.com/praseodymium.php'>Images-of-elements</a>";
          break;
        case 60:
          eleUnstable =
            "<sup>124</sup>Nd, <sup>125</sup>Nd, <sup>126</sup>Nd, <sup>127</sup>Nd, <sup>128</sup>Nd, <sup>129</sup>Nd, <sup>130</sup>Nd, <sup>131</sup>Nd, <sup>132</sup>Nd, <sup>133</sup>Nd, <sup>134</sup>Nd, <sup>135</sup>Nd, <sup>136</sup>Nd, <sup>137</sup>Nd, <sup>138</sup>Nd, <sup>139</sup>Nd, <sup>140</sup>Nd, <sup>141</sup>Nd, <sup>144</sup>Nd, <sup>147</sup>Nd, <sup>149</sup>Nd, <sup>150</sup>Nd, <sup>151</sup>Nd, <sup>152</sup>Nd, <sup>153</sup>Nd, <sup>154</sup>Nd, <sup>155</sup>Nd, <sup>156</sup>Nd, <sup>157</sup>Nd, <sup>158</sup>Nd, <sup>159</sup>Nd, <sup>160</sup>Nd, <sup>161</sup>Nd";
          eleStable = "<sup>142</sup>Nd, <sup>143</sup>Nd, <sup>145</sup>Nd, <sup>146</sup>Nd, <sup>148</sup>Nd";
          eleHighlight = "50,-10";
          eleCredits = preLink + "'http://images-of-elements.com/neodymium.php'>Images-of-elements</a>";
          break;
        case 61:
          eleStable = "-";
          eleUnstable =
            "<sup>126</sup>Pm, <sup>127</sup>Pm, <sup>128</sup>Pm, <sup>129</sup>Pm, <sup>130</sup>Pm, <sup>131</sup>Pm, <sup>132</sup>Pm, <sup>133</sup>Pm, <sup>134</sup>Pm, <sup>135</sup>Pm, <sup>136</sup>Pm, <sup>137</sup>Pm, <sup>138</sup>Pm, <sup>139</sup>Pm, <sup>140</sup>Pm, <sup>141</sup>Pm, <sup>142</sup>Pm, <sup>143</sup>Pm, <sup>144</sup>Pm, <sup>145</sup>Pm, <sup>146</sup>Pm, <sup>147</sup>Pm, <sup>148</sup>Pm, <sup>149</sup>Pm, <sup>150</sup>Pm, <sup>151</sup>Pm, <sup>152</sup>Pm, <sup>153</sup>Pm, <sup>154</sup>Pm, <sup>155</sup>Pm, <sup>156</sup>Pm, <sup>157</sup>Pm, <sup>158</sup>Pm, <sup>159</sup>Pm, <sup>160</sup>Pm, <sup>161</sup>Pm, <sup>162</sup>Pm, <sup>163</sup>Pm";
          eleHighlight = "60,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pitchblende_schlema-alberoda.JPG'>Wikimedia Commons (Geomartin)</a>";
          break;
        case 62:
          eleUnstable =
            "<sup>128</sup>Sm, <sup>129</sup>Sm, <sup>130</sup>Sm, <sup>131</sup>Sm, <sup>132</sup>Sm, <sup>133</sup>Sm, <sup>134</sup>Sm, <sup>135</sup>Sm, <sup>136</sup>Sm, <sup>137</sup>Sm, <sup>138</sup>Sm, <sup>139</sup>Sm, <sup>140</sup>Sm, <sup>141</sup>Sm, <sup>142</sup>Sm, <sup>143</sup>Sm, <sup>145</sup>Sm, <sup>146</sup>Sm, <sup>147</sup>Sm, <sup>148</sup>Sm, <sup>151</sup>Sm, <sup>153</sup>Sm, <sup>155</sup>Sm, <sup>156</sup>Sm, <sup>157</sup>Sm, <sup>158</sup>Sm, <sup>159</sup>Sm, <sup>160</sup>Sm, <sup>161</sup>Sm, <sup>162</sup>Sm, <sup>163</sup>Sm, <sup>164</sup>Sm, <sup>165</sup>Sm";
          eleStable = "<sup>144</sup>Sm, <sup>149</sup>Sm, <sup>150</sup>Sm, <sup>152</sup>Sm, <sup>154</sup>Sm";
          eleHighlight = "70,-10";
          eleCredits = preLink + "'http://images-of-elements.com/samarium.php'>Images-of-elements</a>";
          break;
        case 63:
          eleUnstable =
            "<sup>130</sup>Eu, <sup>131</sup>Eu, <sup>132</sup>Eu, <sup>133</sup>Eu, <sup>134</sup>Eu, <sup>135</sup>Eu, <sup>136</sup>Eu, <sup>137</sup>Eu, <sup>138</sup>Eu, <sup>139</sup>Eu, <sup>140</sup>Eu, <sup>141</sup>Eu, <sup>142</sup>Eu, <sup>143</sup>Eu, <sup>144</sup>Eu, <sup>145</sup>Eu, <sup>146</sup>Eu, <sup>147</sup>Eu, <sup>148</sup>Eu, <sup>149</sup>Eu, <sup>150</sup>Eu, <sup>152</sup>Eu, <sup>154</sup>Eu, <sup>155</sup>Eu, <sup>156</sup>Eu, <sup>157</sup>Eu, <sup>158</sup>Eu, <sup>159</sup>Eu, <sup>160</sup>Eu, <sup>161</sup>Eu, <sup>162</sup>Eu, <sup>163</sup>Eu, <sup>164</sup>Eu, <sup>165</sup>Eu, <sup>166</sup>Eu, <sup>167</sup>Eu";
          eleStable = "<sup>151</sup>Eu, <sup>153</sup>Eu";
          eleHighlight = "80,-10";
          eleCredits = preLink + "'http://images-of-elements.com/europium.php'>Images-of-elements</a>";
          break;
        case 64:
          eleUnstable =
            "<sup>134</sup>Gd, <sup>135</sup>Gd, <sup>136</sup>Gd, <sup>137</sup>Gd, <sup>138</sup>Gd, <sup>139</sup>Gd, <sup>140</sup>Gd, <sup>141</sup>Gd, <sup>142</sup>Gd, <sup>143</sup>Gd, <sup>144</sup>Gd, <sup>145</sup>Gd, <sup>146</sup>Gd, <sup>147</sup>Gd, <sup>148</sup>Gd, <sup>149</sup>Gd, <sup>150</sup>Gd, <sup>151</sup>Gd, <sup>152</sup>Gd, <sup>153</sup>Gd, <sup>159</sup>Gd, <sup>161</sup>Gd, <sup>162</sup>Gd, <sup>163</sup>Gd, <sup>164</sup>Gd, <sup>165</sup>Gd, <sup>166</sup>Gd, <sup>167</sup>Gd, <sup>168</sup>Gd, <sup>169</sup>Gd";
          eleStable = "<sup>154</sup>Gd, <sup>155</sup>Gd, <sup>156</sup>Gd, <sup>157</sup>Gd, <sup>158</sup>Gd, <sup>160</sup>Gd";
          eleHighlight = "90,-10";
          eleCredits = preLink + "'http://images-of-elements.com/gadolinium.php'>Images-of-elements</a>";
          break;
        case 65:
          eleUnstable =
            "<sup>136</sup>Tb, <sup>137</sup>Tb, <sup>138</sup>Tb, <sup>139</sup>Tb, <sup>140</sup>Tb, <sup>141</sup>Tb, <sup>142</sup>Tb, <sup>143</sup>Tb, <sup>144</sup>Tb, <sup>145</sup>Tb, <sup>146</sup>Tb, <sup>147</sup>Tb, <sup>148</sup>Tb, <sup>149</sup>Tb, <sup>150</sup>Tb, <sup>151</sup>Tb, <sup>152</sup>Tb, <sup>153</sup>Tb, <sup>154</sup>Tb, <sup>155</sup>Tb, <sup>156</sup>Tb, <sup>157</sup>Tb, <sup>158</sup>Tb, <sup>160</sup>Tb, <sup>161</sup>Tb, <sup>162</sup>Tb, <sup>163</sup>Tb, <sup>164</sup>Tb, <sup>165</sup>Tb, <sup>166</sup>Tb, <sup>167</sup>Tb, <sup>168</sup>Tb, <sup>169</sup>Tb, <sup>170</sup>Tb, <sup>171</sup>Tb";
          eleStable = "<sup>159</sup>Tb";
          eleHighlight = "100,-10";
          eleCredits = preLink + "'http://images-of-elements.com/terbium.php'>Images-of-elements</a>";
          break;
        case 66:
          eleUnstable =
            "<sup>138</sup>Dy, <sup>139</sup>Dy, <sup>140</sup>Dy, <sup>141</sup>Dy, <sup>142</sup>Dy, <sup>143</sup>Dy, <sup>144</sup>Dy, <sup>145</sup>Dy, <sup>146</sup>Dy, <sup>147</sup>Dy, <sup>148</sup>Dy, <sup>149</sup>Dy, <sup>150</sup>Dy, <sup>151</sup>Dy, <sup>152</sup>Dy, <sup>153</sup>Dy, <sup>154</sup>Dy, <sup>155</sup>Dy, <sup>157</sup>Dy, <sup>159</sup>Dy, <sup>165</sup>Dy, <sup>166</sup>Dy, <sup>167</sup>Dy, <sup>168</sup>Dy, <sup>169</sup>Dy, <sup>170</sup>Dy, <sup>171</sup>Dy, <sup>172</sup>Dy, <sup>173</sup>Dy";
          eleStable = "<sup>156</sup>Dy, <sup>158</sup>Dy, <sup>160</sup>Dy, <sup>161</sup>Dy, <sup>162</sup>Dy, <sup>163</sup>Dy, <sup>164</sup>Dy";
          eleHighlight = "110,-10";
          eleCredits = preLink + "'http://images-of-elements.com/dysprosium.php'>Images-of-elements</a>";
          break;
        case 67:
          eleUnstable =
            "<sup>140</sup>Ho, <sup>141</sup>Ho, <sup>142</sup>Ho, <sup>143</sup>Ho, <sup>144</sup>Ho, <sup>145</sup>Ho, <sup>146</sup>Ho, <sup>147</sup>Ho, <sup>148</sup>Ho, <sup>149</sup>Ho, <sup>150</sup>Ho, <sup>151</sup>Ho, <sup>152</sup>Ho, <sup>153</sup>Ho, <sup>154</sup>Ho, <sup>155</sup>Ho, <sup>156</sup>Ho, <sup>157</sup>Ho, <sup>158</sup>Ho, <sup>159</sup>Ho, <sup>160</sup>Ho, <sup>161</sup>Ho, <sup>162</sup>Ho, <sup>163</sup>Ho, <sup>164</sup>Ho, <sup>166</sup>Ho, <sup>167</sup>Ho, <sup>168</sup>Ho, <sup>169</sup>Ho, <sup>170</sup>Ho, <sup>171</sup>Ho, <sup>172</sup>Ho, <sup>173</sup>Ho, <sup>174</sup>Ho, <sup>175</sup>Ho";
          eleStable = "<sup>165</sup>Ho";
          eleHighlight = "120,-10";
          eleCredits = preLink + "'http://images-of-elements.com/holmium.php'>Images-of-elements</a>";
          break;
        case 68:
          eleUnstable =
            "<sup>143</sup>Er, <sup>144</sup>Er, <sup>145</sup>Er, <sup>146</sup>Er, <sup>147</sup>Er, <sup>148</sup>Er, <sup>149</sup>Er, <sup>150</sup>Er, <sup>151</sup>Er, <sup>152</sup>Er, <sup>153</sup>Er, <sup>154</sup>Er, <sup>155</sup>Er, <sup>156</sup>Er, <sup>157</sup>Er, <sup>158</sup>Er, <sup>159</sup>Er, <sup>160</sup>Er, <sup>161</sup>Er, <sup>163</sup>Er, <sup>165</sup>Er, <sup>169</sup>Er, <sup>171</sup>Er, <sup>172</sup>Er, <sup>173</sup>Er, <sup>174</sup>Er, <sup>175</sup>Er, <sup>176</sup>Er, <sup>177</sup>Er";
          eleStable = "<sup>162</sup>Er, <sup>164</sup>Er, <sup>166</sup>Er, <sup>167</sup>Er, <sup>168</sup>Er, <sup>170</sup>Er";
          eleHighlight = "130,-10";
          eleCredits = preLink + "'http://images-of-elements.com/erbium.php'>Images-of-elements</a>";
          break;
        case 69:
          eleUnstable =
            "<sup>145</sup>Tm, <sup>146</sup>Tm, <sup>147</sup>Tm, <sup>148</sup>Tm, <sup>149</sup>Tm, <sup>150</sup>Tm, <sup>151</sup>Tm, <sup>152</sup>Tm, <sup>153</sup>Tm, <sup>154</sup>Tm, <sup>155</sup>Tm, <sup>156</sup>Tm, <sup>157</sup>Tm, <sup>158</sup>Tm, <sup>159</sup>Tm, <sup>160</sup>Tm, <sup>161</sup>Tm, <sup>162</sup>Tm, <sup>163</sup>Tm, <sup>164</sup>Tm, <sup>165</sup>Tm, <sup>166</sup>Tm, <sup>167</sup>Tm, <sup>168</sup>Tm, <sup>170</sup>Tm, <sup>171</sup>Tm, <sup>172</sup>Tm, <sup>173</sup>Tm, <sup>174</sup>Tm, <sup>175</sup>Tm, <sup>176</sup>Tm, <sup>177</sup>Tm, <sup>178</sup>Tm, <sup>179</sup>Tm";
          eleStable = "<sup>169</sup>Tm";
          eleHighlight = "140,-10";
          eleCredits = preLink + "'http://images-of-elements.com/thulium.php'>Images-of-elements</a>";
          break;
        case 70:
          eleUnstable =
            "<sup>148</sup>Yb, <sup>149</sup>Yb, <sup>150</sup>Yb, <sup>151</sup>Yb, <sup>152</sup>Yb, <sup>153</sup>Yb, <sup>154</sup>Yb, <sup>155</sup>Yb, <sup>156</sup>Yb, <sup>157</sup>Yb, <sup>158</sup>Yb, <sup>159</sup>Yb, <sup>160</sup>Yb, <sup>161</sup>Yb, <sup>162</sup>Yb, <sup>163</sup>Yb, <sup>164</sup>Yb, <sup>165</sup>Yb, <sup>166</sup>Yb, <sup>167</sup>Yb, <sup>169</sup>Yb, <sup>175</sup>Yb, <sup>177</sup>Yb, <sup>178</sup>Yb, <sup>179</sup>Yb, <sup>180</sup>Yb, <sup>181</sup>Yb";
          eleStable = "<sup>168</sup>Yb, <sup>170</sup>Yb, <sup>171</sup>Yb, <sup>172</sup>Yb, <sup>173</sup>Yb, <sup>174</sup>Yb, <sup>176</sup>Yb";
          eleHighlight = "150,-10";
          eleCredits = preLink + "'http://images-of-elements.com/ytterbium.php'>Images-of-elements</a>";
          break;
        case 71:
          eleUnstable =
            "<sup>150</sup>Lu, <sup>151</sup>Lu, <sup>152</sup>Lu, <sup>153</sup>Lu, <sup>154</sup>Lu, <sup>155</sup>Lu, <sup>156</sup>Lu, <sup>157</sup>Lu, <sup>158</sup>Lu, <sup>159</sup>Lu, <sup>160</sup>Lu, <sup>161</sup>Lu, <sup>162</sup>Lu, <sup>163</sup>Lu, <sup>164</sup>Lu, <sup>165</sup>Lu, <sup>166</sup>Lu, <sup>167</sup>Lu, <sup>168</sup>Lu, <sup>169</sup>Lu, <sup>170</sup>Lu, <sup>171</sup>Lu, <sup>172</sup>Lu, <sup>173</sup>Lu, <sup>174</sup>Lu, <sup>176</sup>Lu, <sup>177</sup>Lu, <sup>178</sup>Lu, <sup>179</sup>Lu, <sup>180</sup>Lu, <sup>181</sup>Lu, <sup>182</sup>Lu, <sup>183</sup>Lu, <sup>184</sup>Lu";
          eleStable = "<sup>175</sup>Lu";
          eleHighlight = "160,-10";
          eleCredits = preLink + "'http://images-of-elements.com/lutetium.php'>Images-of-elements</a>";
          break;
        case 72:
          eleUnstable =
            "<sup>153</sup>Hf, <sup>154</sup>Hf, <sup>155</sup>Hf, <sup>156</sup>Hf, <sup>157</sup>Hf, <sup>158</sup>Hf, <sup>159</sup>Hf, <sup>160</sup>Hf, <sup>161</sup>Hf, <sup>162</sup>Hf, <sup>163</sup>Hf, <sup>164</sup>Hf, <sup>165</sup>Hf, <sup>166</sup>Hf, <sup>167</sup>Hf, <sup>168</sup>Hf, <sup>169</sup>Hf, <sup>170</sup>Hf, <sup>171</sup>Hf, <sup>172</sup>Hf, <sup>173</sup>Hf, <sup>174</sup>Hf, <sup>175</sup>Hf, <sup>181</sup>Hf, <sup>182</sup>Hf, <sup>183</sup>Hf, <sup>184</sup>Hf, <sup>185</sup>Hf, <sup>186</sup>Hf, <sup>187</sup>Hf, <sup>188</sup>Hf";
          eleStable = "<sup>176</sup>Hf, <sup>177</sup>Hf, <sup>178</sup>Hf, <sup>179</sup>Hf, <sup>180</sup>Hf";
          eleHighlight = "170,-10";
          eleCredits = preLink + "'http://images-of-elements.com/hafnium.php'>Images-of-elements</a>";
          break;
        case 73:
          eleUnstable =
            "<sup>155</sup>Ta, <sup>156</sup>Ta, <sup>157</sup>Ta, <sup>158</sup>Ta, <sup>159</sup>Ta, <sup>160</sup>Ta, <sup>161</sup>Ta, <sup>162</sup>Ta, <sup>163</sup>Ta, <sup>164</sup>Ta, <sup>165</sup>Ta, <sup>166</sup>Ta, <sup>167</sup>Ta, <sup>168</sup>Ta, <sup>169</sup>Ta, <sup>170</sup>Ta, <sup>171</sup>Ta, <sup>172</sup>Ta, <sup>173</sup>Ta, <sup>174</sup>Ta, <sup>175</sup>Ta, <sup>176</sup>Ta, <sup>177</sup>Ta, <sup>178</sup>Ta, <sup>179</sup>Ta, <sup>180</sup>Ta, <sup>182</sup>Ta, <sup>183</sup>Ta, <sup>184</sup>Ta, <sup>185</sup>Ta, <sup>186</sup>Ta, <sup>187</sup>Ta, <sup>188</sup>Ta, <sup>189</sup>Ta, <sup>190</sup>Ta";
          eleStable = "<sup>181</sup>Ta";
          eleHighlight = "180,-10";
          eleCredits = preLink + "'http://images-of-elements.com/tantalum.php'>Images-of-elements</a>";
          break;
        case 74:
          eleUnstable =
            "<sup>158</sup>W, <sup>159</sup>W, <sup>160</sup>W, <sup>161</sup>W, <sup>162</sup>W, <sup>163</sup>W, <sup>164</sup>W, <sup>165</sup>W, <sup>166</sup>W, <sup>167</sup>W, <sup>168</sup>W, <sup>169</sup>W, <sup>170</sup>W, <sup>171</sup>W, <sup>172</sup>W, <sup>173</sup>W, <sup>174</sup>W, <sup>175</sup>W, <sup>176</sup>W, <sup>177</sup>W, <sup>178</sup>W, <sup>179</sup>W, <sup>181</sup>W, <sup>185</sup>W, <sup>187</sup>W, <sup>188</sup>W, <sup>189</sup>W, <sup>190</sup>W, <sup>191</sup>W, <sup>192</sup>W";
          eleStable = "<sup>180</sup>W, <sup>182</sup>W, <sup>183</sup>W, <sup>184</sup>W, <sup>186</sup>W";
          eleHighlight = "190,-10";
          eleCredits = preLink + "'http://images-of-elements.com/tungsten.php'>Images-of-elements</a>";
          break;
        case 75:
          eleUnstable =
            "<sup>160</sup>Re, <sup>161</sup>Re, <sup>162</sup>Re, <sup>163</sup>Re, <sup>164</sup>Re, <sup>165</sup>Re, <sup>166</sup>Re, <sup>167</sup>Re, <sup>168</sup>Re, <sup>169</sup>Re, <sup>170</sup>Re, <sup>171</sup>Re, <sup>172</sup>Re, <sup>173</sup>Re, <sup>174</sup>Re, <sup>175</sup>Re, <sup>176</sup>Re, <sup>177</sup>Re, <sup>178</sup>Re, <sup>179</sup>Re, <sup>180</sup>Re, <sup>181</sup>Re, <sup>182</sup>Re, <sup>183</sup>Re, <sup>184</sup>Re, <sup>186</sup>Re, <sup>187</sup>Re, <sup>188</sup>Re, <sup>189</sup>Re, <sup>190</sup>Re, <sup>191</sup>Re, <sup>192</sup>Re, <sup>193</sup>Re, <sup>194</sup>Re";
          eleStable = "<sup>185</sup>Re";
          eleHighlight = "200,-10";
          eleCredits =
            preLink + "'http://commons.wikimedia.org/wiki/File:Rhenium_single_crystal_bar_and_1cm3_cube.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 76:
          eleUnstable =
            "<sup>161</sup>Os, <sup>162</sup>Os, <sup>163</sup>Os, <sup>164</sup>Os, <sup>165</sup>Os, <sup>166</sup>Os, <sup>167</sup>Os, <sup>168</sup>Os, <sup>169</sup>Os, <sup>170</sup>Os, <sup>171</sup>Os, <sup>172</sup>Os, <sup>173</sup>Os, <sup>174</sup>Os, <sup>175</sup>Os, <sup>176</sup>Os, <sup>177</sup>Os, <sup>178</sup>Os, <sup>179</sup>Os, <sup>180</sup>Os, <sup>181</sup>Os, <sup>182</sup>Os, <sup>183</sup>Os, <sup>185</sup>Os, <sup>186</sup>Os, <sup>191</sup>Os, <sup>193</sup>Os, <sup>194</sup>Os, <sup>195</sup>Os, <sup>196</sup>Os";
          eleStable = "<sup>184</sup>Os, <sup>187</sup>Os, <sup>188</sup>Os, <sup>189</sup>Os, <sup>190</sup>Os, <sup>192</sup>Os";
          eleHighlight = "210,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Osmium_crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 77:
          eleUnstable =
            "<sup>164</sup>Ir, <sup>165</sup>Ir, <sup>166</sup>Ir, <sup>167</sup>Ir, <sup>168</sup>Ir, <sup>169</sup>Ir, <sup>170</sup>Ir, <sup>171</sup>Ir, <sup>172</sup>Ir, <sup>173</sup>Ir, <sup>174</sup>Ir, <sup>175</sup>Ir, <sup>176</sup>Ir, <sup>177</sup>Ir, <sup>178</sup>Ir, <sup>179</sup>Ir, <sup>180</sup>Ir, <sup>181</sup>Ir, <sup>182</sup>Ir, <sup>183</sup>Ir, <sup>184</sup>Ir, <sup>185</sup>Ir, <sup>186</sup>Ir, <sup>187</sup>Ir, <sup>188</sup>Ir, <sup>189</sup>Ir, <sup>190</sup>Ir, <sup>192</sup>Ir, <sup>194</sup>Ir, <sup>195</sup>Ir, <sup>196</sup>Ir, <sup>197</sup>Ir, <sup>198</sup>Ir, <sup>199</sup>Ir";
          eleStable = "<sup>191</sup>Ir, <sup>193</sup>Ir";
          eleHighlight = "220,-10";
          eleCredits = preLink + "'http://images-of-elements.com/iridium.php'>Images-of-elements</a>";
          break;
        case 78:
          eleUnstable =
            "<sup>166</sup>Pt, <sup>167</sup>Pt, <sup>168</sup>Pt, <sup>169</sup>Pt, <sup>170</sup>Pt, <sup>171</sup>Pt, <sup>172</sup>Pt, <sup>173</sup>Pt, <sup>174</sup>Pt, <sup>175</sup>Pt, <sup>176</sup>Pt, <sup>177</sup>Pt, <sup>178</sup>Pt, <sup>179</sup>Pt, <sup>180</sup>Pt, <sup>181</sup>Pt, <sup>182</sup>Pt, <sup>183</sup>Pt, <sup>184</sup>Pt, <sup>185</sup>Pt, <sup>186</sup>Pt, <sup>187</sup>Pt, <sup>188</sup>Pt, <sup>189</sup>Pt, <sup>190</sup>Pt, <sup>191</sup>Pt, <sup>193</sup>Pt, <sup>197</sup>Pt, <sup>199</sup>Pt, <sup>200</sup>Pt, <sup>201</sup>Pt, <sup>202</sup>Pt";
          eleStable = "<sup>192</sup>Pt, <sup>194</sup>Pt, <sup>195</sup>Pt, <sup>196</sup>Pt, <sup>198</sup>Pt";
          eleHighlight = "230,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Platinum-nugget.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 79:
          eleUnstable =
            "<sup>169</sup>Au, <sup>170</sup>Au, <sup>171</sup>Au, <sup>172</sup>Au, <sup>173</sup>Au, <sup>174</sup>Au, <sup>175</sup>Au, <sup>176</sup>Au, <sup>177</sup>Au, <sup>178</sup>Au, <sup>179</sup>Au, <sup>180</sup>Au, <sup>181</sup>Au, <sup>182</sup>Au, <sup>183</sup>Au, <sup>184</sup>Au, <sup>185</sup>Au, <sup>186</sup>Au, <sup>187</sup>Au, <sup>188</sup>Au, <sup>189</sup>Au, <sup>190</sup>Au, <sup>191</sup>Au, <sup>192</sup>Au, <sup>193</sup>Au, <sup>194</sup>Au, <sup>195</sup>Au, <sup>196</sup>Au, <sup>198</sup>Au, <sup>199</sup>Au, <sup>200</sup>Au, <sup>201</sup>Au, <sup>202</sup>Au, <sup>203</sup>Au, <sup>204</sup>Au, <sup>205</sup>Au";
          eleStable = "<sup>197</sup>Au";
          eleHighlight = "240,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Gold-crystals.jpg'>Wikimedia Commons (Alchemist-hp)</a>";
          break;
        case 80:
          eleUnstable =
            "<sup>171</sup>Hg, <sup>172</sup>Hg, <sup>173</sup>Hg, <sup>174</sup>Hg, <sup>175</sup>Hg, <sup>176</sup>Hg, <sup>177</sup>Hg, <sup>178</sup>Hg, <sup>179</sup>Hg, <sup>180</sup>Hg, <sup>181</sup>Hg, <sup>182</sup>Hg, <sup>183</sup>Hg, <sup>184</sup>Hg, <sup>185</sup>Hg, <sup>186</sup>Hg, <sup>187</sup>Hg, <sup>188</sup>Hg, <sup>189</sup>Hg, <sup>190</sup>Hg, <sup>191</sup>Hg, <sup>192</sup>Hg, <sup>193</sup>Hg, <sup>194</sup>Hg, <sup>195</sup>Hg, <sup>197</sup>Hg, <sup>203</sup>Hg, <sup>205</sup>Hg, <sup>206</sup>Hg, <sup>207</sup>Hg, <sup>208</sup>Hg, <sup>209</sup>Hg, <sup>210</sup>Hg";
          eleStable = "<sup>196</sup>Hg, <sup>198</sup>Hg, <sup>199</sup>Hg, <sup>200</sup>Hg, <sup>201</sup>Hg, <sup>202</sup>Hg, <sup>204</sup>Hg";
          eleHighlight = "250,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pouring_liquid_mercury_bionerd.jpg'>Wikimedia Commons (Bionerd)</a>";
          break;
        case 81:
          eleUnstable =
            "<sup>176</sup>Tl, <sup>177</sup>Tl, <sup>178</sup>Tl, <sup>179</sup>Tl, <sup>180</sup>Tl, <sup>181</sup>Tl, <sup>182</sup>Tl, <sup>183</sup>Tl, <sup>184</sup>Tl, <sup>185</sup>Tl, <sup>186</sup>Tl, <sup>187</sup>Tl, <sup>188</sup>Tl, <sup>189</sup>Tl, <sup>190</sup>Tl, <sup>191</sup>Tl, <sup>192</sup>Tl, <sup>193</sup>Tl, <sup>194</sup>Tl, <sup>195</sup>Tl, <sup>196</sup>Tl, <sup>197</sup>Tl, <sup>198</sup>Tl, <sup>199</sup>Tl, <sup>200</sup>Tl, <sup>201</sup>Tl, <sup>202</sup>Tl, <sup>204</sup>Tl, <sup>206</sup>Tl, <sup>207</sup>Tl, <sup>208</sup>Tl, <sup>209</sup>Tl, <sup>210</sup>Tl, <sup>211</sup>Tl, <sup>212</sup>Tl";
          eleStable = "<sup>203</sup>Tl, <sup>205</sup>Tl";
          eleHighlight = "260,-10";
          eleCredits = preLink + "'http://images-of-elements.com/thallium.php'>Images-of-elements</a>";
          break;
        case 82:
          eleUnstable =
            "<sup>178</sup>Pb, <sup>179</sup>Pb, <sup>180</sup>Pb, <sup>181</sup>Pb, <sup>182</sup>Pb, <sup>183</sup>Pb, <sup>184</sup>Pb, <sup>185</sup>Pb, <sup>186</sup>Pb, <sup>187</sup>Pb, <sup>188</sup>Pb, <sup>189</sup>Pb, <sup>190</sup>Pb, <sup>191</sup>Pb, <sup>192</sup>Pb, <sup>193</sup>Pb, <sup>194</sup>Pb, <sup>195</sup>Pb, <sup>196</sup>Pb, <sup>197</sup>Pb, <sup>198</sup>Pb, <sup>199</sup>Pb, <sup>200</sup>Pb, <sup>201</sup>Pb, <sup>202</sup>Pb, <sup>203</sup>Pb, <sup>205</sup>Pb, <sup>209</sup>Pb, <sup>210</sup>Pb, <sup>211</sup>Pb, <sup>212</sup>Pb, <sup>213</sup>Pb, <sup>214</sup>Pb, <sup>215</sup>Pb";
          eleStable = "<sup>204</sup>Pb, <sup>206</sup>Pb, <sup>207</sup>Pb, <sup>208</sup>Pb";
          eleHighlight = "270,-10";
          eleCredits = preLink + "'http://images-of-elements.com/lead.php'>Images-of-elements</a>";
          break;
        case 83:
          eleStable = "-";
          eleUnstable =
            "<sup>184</sup>Bi, <sup>185</sup>Bi, <sup>186</sup>Bi, <sup>187</sup>Bi, <sup>188</sup>Bi, <sup>189</sup>Bi, <sup>190</sup>Bi, <sup>191</sup>Bi, <sup>192</sup>Bi, <sup>193</sup>Bi, <sup>194</sup>Bi, <sup>195</sup>Bi, <sup>196</sup>Bi, <sup>197</sup>Bi, <sup>198</sup>Bi, <sup>199</sup>Bi, <sup>200</sup>Bi, <sup>201</sup>Bi, <sup>202</sup>Bi, <sup>203</sup>Bi, <sup>204</sup>Bi, <sup>205</sup>Bi, <sup>206</sup>Bi, <sup>207</sup>Bi, <sup>208</sup>Bi, <sup>209</sup>Bi, <sup>210</sup>Bi, <sup>211</sup>Bi, <sup>212</sup>Bi, <sup>213</sup>Bi, <sup>214</sup>Bi, <sup>215</sup>Bi, <sup>216</sup>Bi, <sup>217</sup>Bi, <sup>218</sup>Bi";
          eleHighlight = "280,-10";
          eleCredits = preLink + "'http://images-of-elements.com/bismuth.php'>Images-of-elements</a>";
          break;
        case 84:
          eleStable = "-";
          eleUnstable =
            "<sup>188</sup>Po, <sup>189</sup>Po, <sup>190</sup>Po, <sup>191</sup>Po, <sup>192</sup>Po, <sup>193</sup>Po, <sup>194</sup>Po, <sup>195</sup>Po, <sup>196</sup>Po, <sup>197</sup>Po, <sup>198</sup>Po, <sup>199</sup>Po, <sup>200</sup>Po, <sup>201</sup>Po, <sup>202</sup>Po, <sup>203</sup>Po, <sup>204</sup>Po, <sup>205</sup>Po, <sup>206</sup>Po, <sup>207</sup>Po, <sup>208</sup>Po, <sup>209</sup>Po, <sup>210</sup>Po, <sup>211</sup>Po, <sup>212</sup>Po, <sup>213</sup>Po, <sup>214</sup>Po, <sup>215</sup>Po, <sup>216</sup>Po, <sup>217</sup>Po, <sup>218</sup>Po, <sup>219</sup>Po, <sup>220</sup>Po";
          eleHighlight = "290,-10";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg'>hp.ujf.cas.cz</a>";
          break;
        case 85:
          eleStable = "-";
          eleUnstable =
            "<sup>193</sup>At, <sup>194</sup>At, <sup>195</sup>At, <sup>196</sup>At, <sup>197</sup>At, <sup>198</sup>At, <sup>199</sup>At, <sup>200</sup>At, <sup>201</sup>At, <sup>202</sup>At, <sup>203</sup>At, <sup>204</sup>At, <sup>205</sup>At, <sup>206</sup>At, <sup>207</sup>At, <sup>208</sup>At, <sup>209</sup>At, <sup>210</sup>At, <sup>211</sup>At, <sup>212</sup>At, <sup>213</sup>At, <sup>214</sup>At, <sup>215</sup>At, <sup>216</sup>At, <sup>217</sup>At, <sup>218</sup>At, <sup>219</sup>At, <sup>220</sup>At, <sup>221</sup>At, <sup>222</sup>At, <sup>223</sup>At";
          eleHighlight = "300,-10";
          eleCredits = preLink + "'http://pauli.uni-muenster.de/~munsteg/physiker.html'>pauli.uni-muenster.de</a>";
          break;
        case 86:
          eleStable = "-";
          eleUnstable =
            "<sup>195</sup>Rn, <sup>196</sup>Rn, <sup>197</sup>Rn, <sup>198</sup>Rn, <sup>199</sup>Rn, <sup>200</sup>Rn, <sup>201</sup>Rn, <sup>202</sup>Rn, <sup>203</sup>Rn, <sup>204</sup>Rn, <sup>205</sup>Rn, <sup>206</sup>Rn, <sup>207</sup>Rn, <sup>208</sup>Rn, <sup>209</sup>Rn, <sup>210</sup>Rn, <sup>211</sup>Rn, <sup>212</sup>Rn, <sup>213</sup>Rn, <sup>214</sup>Rn, <sup>215</sup>Rn, <sup>216</sup>Rn, <sup>217</sup>Rn, <sup>218</sup>Rn, <sup>219</sup>Rn, <sup>220</sup>Rn, <sup>221</sup>Rn, <sup>222</sup>Rn, <sup>223</sup>Rn, <sup>224</sup>Rn, <sup>225</sup>Rn, <sup>226</sup>Rn, <sup>227</sup>Rn, <sup>228</sup>Rn";
          eleHighlight = "310,-10";
          eleCredits = preLink + "'http://images-of-elements.com/radon.php'>Images-of-elements</a>";
          break;
        case 87:
          eleStable = "-";
          eleUnstable =
            "<sup>199</sup>Fr, <sup>200</sup>Fr, <sup>201</sup>Fr, <sup>202</sup>Fr, <sup>203</sup>Fr, <sup>204</sup>Fr, <sup>205</sup>Fr, <sup>206</sup>Fr, <sup>207</sup>Fr, <sup>208</sup>Fr, <sup>209</sup>Fr, <sup>210</sup>Fr, <sup>211</sup>Fr, <sup>212</sup>Fr, <sup>213</sup>Fr, <sup>214</sup>Fr, <sup>215</sup>Fr, <sup>216</sup>Fr, <sup>217</sup>Fr, <sup>218</sup>Fr, <sup>219</sup>Fr, <sup>220</sup>Fr, <sup>221</sup>Fr, <sup>222</sup>Fr, <sup>223</sup>Fr, <sup>224</sup>Fr, <sup>225</sup>Fr, <sup>226</sup>Fr, <sup>227</sup>Fr, <sup>228</sup>Fr, <sup>229</sup>Fr, <sup>230</sup>Fr, <sup>231</sup>Fr, <sup>232</sup>Fr";
          eleHighlight = "0,0";
          eleCredits = preLink + "'http://images-of-elements.com/francium.php'>Images-of-elements</a>";
          break;
        case 88:
          eleStable = "-";
          eleUnstable =
            "<sup>202</sup>Ra, <sup>203</sup>Ra, <sup>204</sup>Ra, <sup>205</sup>Ra, <sup>206</sup>Ra, <sup>207</sup>Ra, <sup>208</sup>Ra, <sup>209</sup>Ra, <sup>210</sup>Ra, <sup>211</sup>Ra, <sup>212</sup>Ra, <sup>213</sup>Ra, <sup>214</sup>Ra, <sup>215</sup>Ra, <sup>216</sup>Ra, <sup>217</sup>Ra, <sup>218</sup>Ra, <sup>219</sup>Ra, <sup>220</sup>Ra, <sup>221</sup>Ra, <sup>222</sup>Ra, <sup>223</sup>Ra, <sup>224</sup>Ra, <sup>225</sup>Ra, <sup>226</sup>Ra, <sup>227</sup>Ra, <sup>228</sup>Ra, <sup>229</sup>Ra, <sup>230</sup>Ra, <sup>231</sup>Ra, <sup>232</sup>Ra, <sup>233</sup>Ra, <sup>234</sup>Ra";
          eleHighlight = "10,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg'>hp.ujf.cas.cz</a>";
          break;
        case 89:
          eleStable = "-";
          eleUnstable =
            "<sup>206</sup>Ac, <sup>207</sup>Ac, <sup>208</sup>Ac, <sup>209</sup>Ac, <sup>210</sup>Ac, <sup>211</sup>Ac, <sup>212</sup>Ac, <sup>213</sup>Ac, <sup>214</sup>Ac, <sup>215</sup>Ac, <sup>216</sup>Ac, <sup>217</sup>Ac, <sup>218</sup>Ac, <sup>219</sup>Ac, <sup>220</sup>Ac, <sup>221</sup>Ac, <sup>222</sup>Ac, <sup>223</sup>Ac, <sup>224</sup>Ac, <sup>225</sup>Ac, <sup>226</sup>Ac, <sup>227</sup>Ac, <sup>228</sup>Ac, <sup>229</sup>Ac, <sup>230</sup>Ac, <sup>231</sup>Ac, <sup>232</sup>Ac, <sup>233</sup>Ac, <sup>234</sup>Ac, <sup>235</sup>Ac, <sup>236</sup>Ac";
          eleHighlight = "20,0";
          eleCredits = preLink + "'http://images-of-elements.com/actinium.php'>Images-of-elements</a>";
          break;
        case 90:
          eleUnstable =
            "<sup>209</sup>Th, <sup>210</sup>Th, <sup>211</sup>Th, <sup>212</sup>Th, <sup>213</sup>Th, <sup>214</sup>Th, <sup>215</sup>Th, <sup>216</sup>Th, <sup>217</sup>Th, <sup>218</sup>Th, <sup>219</sup>Th, <sup>220</sup>Th, <sup>221</sup>Th, <sup>222</sup>Th, <sup>223</sup>Th, <sup>224</sup>Th, <sup>225</sup>Th, <sup>226</sup>Th, <sup>227</sup>Th, <sup>228</sup>Th, <sup>229</sup>Th, <sup>230</sup>Th, <sup>231</sup>Th, <sup>233</sup>Th, <sup>234</sup>Th, <sup>235</sup>Th, <sup>236</sup>Th, <sup>237</sup>Th, <sup>238</sup>Th";
          eleStable = "<sup>232</sup>Th";
          eleHighlight = "30,0";
          eleCredits =
            preLink + "'http://commons.wikimedia.org/wiki/File:Keplers_supernova.jpg'>Wikimedia Commons (NASA/ESA/JHU/R.Sankrit & W.Blair)</a>";
          break;
        case 91:
          eleStable = "-";
          eleUnstable =
            "<sup>212</sup>Pa, <sup>213</sup>Pa, <sup>214</sup>Pa, <sup>215</sup>Pa, <sup>216</sup>Pa, <sup>217</sup>Pa, <sup>218</sup>Pa, <sup>219</sup>Pa, <sup>220</sup>Pa, <sup>221</sup>Pa, <sup>222</sup>Pa, <sup>223</sup>Pa, <sup>224</sup>Pa, <sup>225</sup>Pa, <sup>226</sup>Pa, <sup>227</sup>Pa, <sup>228</sup>Pa, <sup>229</sup>Pa, <sup>230</sup>Pa, <sup>231</sup>Pa, <sup>232</sup>Pa, <sup>233</sup>Pa, <sup>234</sup>Pa, <sup>235</sup>Pa, <sup>236</sup>Pa, <sup>237</sup>Pa, <sup>238</sup>Pa, <sup>239</sup>Pa, <sup>240</sup>Pa";
          eleHighlight = "40,0";
          eleCredits = preLink + "'http://images-of-elements.com/protactinium.php'>Images-of-elements</a>";
          break;
        case 92:
          eleStable = "-";
          eleUnstable =
            "<sup>215</sup>U, <sup>216</sup>U, <sup>217</sup>U, <sup>218</sup>U, <sup>219</sup>U, <sup>220</sup>U, <sup>221</sup>U, <sup>222</sup>U, <sup>223</sup>U, <sup>224</sup>U, <sup>225</sup>U, <sup>226</sup>U, <sup>227</sup>U, <sup>228</sup>U, <sup>229</sup>U, <sup>230</sup>U, <sup>231</sup>U, <sup>232</sup>U, <sup>233</sup>U, <sup>234</sup>U, <sup>235</sup>U, <sup>236</sup>U, <sup>237</sup>U, <sup>238</sup>U, <sup>239</sup>U, <sup>240</sup>U, <sup>241</sup>U, <sup>242</sup>U";
          eleHighlight = "50,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:HEUraniumC.jpg'>Wikimedia Commons (Zxctypo)</a>";
          break;
        case 93:
          eleStable = "-";
          eleUnstable =
            "<sup>225</sup>Np, <sup>226</sup>Np, <sup>227</sup>Np, <sup>228</sup>Np, <sup>229</sup>Np, <sup>230</sup>Np, <sup>231</sup>Np, <sup>232</sup>Np, <sup>233</sup>Np, <sup>234</sup>Np, <sup>235</sup>Np, <sup>236</sup>Np, <sup>237</sup>Np, <sup>238</sup>Np, <sup>239</sup>Np, <sup>240</sup>Np, <sup>241</sup>Np, <sup>242</sup>Np, <sup>243</sup>Np, <sup>244</sup>Np";
          eleHighlight = "60,0";
          eleCredits =
            preLink + "'http://www.scienceworld.ro/stiri/cei-mai-mari-10-oameni-de-stiinta-de-care-nu-ai-auzit-11793.html'>scienceworld.ro</a>";
          break;
        case 94:
          eleStable = "-";
          eleUnstable =
            "<sup>228</sup>Pu, <sup>229</sup>Pu, <sup>230</sup>Pu, <sup>231</sup>Pu, <sup>232</sup>Pu, <sup>233</sup>Pu, <sup>234</sup>Pu, <sup>235</sup>Pu, <sup>236</sup>Pu, <sup>237</sup>Pu, <sup>238</sup>Pu, <sup>239</sup>Pu, <sup>240</sup>Pu, <sup>241</sup>Pu, <sup>242</sup>Pu, <sup>243</sup>Pu, <sup>244</sup>Pu, <sup>245</sup>Pu, <sup>246</sup>Pu, <sup>247</sup>Pu";
          eleHighlight = "70,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Plutonium_ring.jpg'>Wikimedia Commons (Los Alamos National Laboratory)</a>";
          break;
        case 95:
          eleStable = "-";
          eleUnstable =
            "<sup>229</sup>Am, <sup>231</sup>Am, <sup>232</sup>Am, <sup>233</sup>Am, <sup>234</sup>Am, <sup>235</sup>Am, <sup>236</sup>Am, <sup>237</sup>Am, <sup>238</sup>Am, <sup>239</sup>Am, <sup>240</sup>Am, <sup>241</sup>Am, <sup>242</sup>Am, <sup>243</sup>Am, <sup>244</sup>Am, <sup>245</sup>Am, <sup>246</sup>Am, <sup>247</sup>Am, <sup>248</sup>Am, <sup>249</sup>Am";
          eleHighlight = "80,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Americium_microscope.jpg'>Wikimedia Commons (Bionerd)</a>";
          break;
        case 96:
          eleStable = "-";
          eleUnstable =
            "<sup>233</sup>Cm, <sup>234</sup>Cm, <sup>235</sup>Cm, <sup>236</sup>Cm, <sup>237</sup>Cm, <sup>238</sup>Cm, <sup>239</sup>Cm, <sup>240</sup>Cm, <sup>241</sup>Cm, <sup>242</sup>Cm, <sup>243</sup>Cm, <sup>244</sup>Cm, <sup>245</sup>Cm, <sup>246</sup>Cm, <sup>247</sup>Cm, <sup>248</sup>Cm, <sup>249</sup>Cm, <sup>250</sup>Cm, <sup>251</sup>Cm, <sup>252</sup>Cm";
          eleHighlight = "90,0";
          eleCredits = preLink + "'http://images-of-elements.com/curium.php'>Images-of-elements</a>";
          break;
        case 97:
          eleStable = "-";
          eleUnstable =
            "<sup>233</sup>Bk, <sup>235</sup>Bk, <sup>236</sup>Bk, <sup>237</sup>Bk, <sup>238</sup>Bk, <sup>239</sup>Bk, <sup>240</sup>Bk, <sup>241</sup>Bk, <sup>242</sup>Bk, <sup>243</sup>Bk, <sup>244</sup>Bk, <sup>245</sup>Bk, <sup>246</sup>Bk, <sup>247</sup>Bk, <sup>248</sup>Bk, <sup>249</sup>Bk, <sup>250</sup>Bk, <sup>251</sup>Bk, <sup>252</sup>Bk, <sup>253</sup>Bk, <sup>254</sup>Bk";
          eleHighlight = "100,0";
          eleCredits =
            preLink +
            "'http://commons.wikimedia.org/wiki/File:Berkeley_60-inch_cyclotron.jpg'>Wikimedia Commons (Department of Energy - Office of Public Affairs)</a>";
          break;
        case 98:
          eleStable = "-";
          eleUnstable =
            "<sup>237</sup>Cf, <sup>238</sup>Cf, <sup>239</sup>Cf, <sup>240</sup>Cf, <sup>241</sup>Cf, <sup>242</sup>Cf, <sup>243</sup>Cf, <sup>244</sup>Cf, <sup>245</sup>Cf, <sup>246</sup>Cf, <sup>247</sup>Cf, <sup>248</sup>Cf, <sup>249</sup>Cf, <sup>250</sup>Cf, <sup>251</sup>Cf, <sup>252</sup>Cf, <sup>253</sup>Cf, <sup>254</sup>Cf, <sup>255</sup>Cf, <sup>256</sup>Cf";
          eleHighlight = "110,0";
          eleCredits = preLink + "'http://images-of-elements.com/californium.php'>Images-of-elements</a>";
          break;
        case 99:
          eleStable = "-";
          eleUnstable =
            "<sup>240</sup>Es, <sup>241</sup>Es, <sup>242</sup>Es, <sup>243</sup>Es, <sup>244</sup>Es, <sup>245</sup>Es, <sup>246</sup>Es, <sup>247</sup>Es, <sup>248</sup>Es, <sup>249</sup>Es, <sup>250</sup>Es, <sup>251</sup>Es, <sup>252</sup>Es, <sup>253</sup>Es, <sup>254</sup>Es, <sup>255</sup>Es, <sup>256</sup>Es, <sup>257</sup>Es, <sup>258</sup>Es";
          eleHighlight = "120,0";
          eleCredits =
            preLink +
            "'http://commons.wikimedia.org/wiki/File:Ivy_Mike_-_mushroom_cloud.jpg'>Wikimedia Commons (National Nuclear Security Administration)</a>";
          break;
        case 100:
          eleStable = "-";
          eleUnstable =
            "<sup>241</sup>Fm, <sup>242</sup>Fm, <sup>243</sup>Fm, <sup>244</sup>Fm, <sup>245</sup>Fm, <sup>246</sup>Fm, <sup>247</sup>Fm, <sup>248</sup>Fm, <sup>249</sup>Fm, <sup>250</sup>Fm, <sup>251</sup>Fm, <sup>252</sup>Fm, <sup>253</sup>Fm, <sup>254</sup>Fm, <sup>255</sup>Fm, <sup>256</sup>Fm, <sup>257</sup>Fm, <sup>258</sup>Fm, <sup>259</sup>Fm, <sup>260</sup>Fm";
          eleHighlight = "130,0";
          eleCredits =
            preLink +
            "'http://commons.wikimedia.org/wiki/File:Ivy_Mike_-_mushroom_cloud.jpg'>Wikimedia Commons (National Nuclear Security Administration)</a>";
          break;
        case 101:
          eleStable = "-";
          eleUnstable =
            "<sup>245</sup>Md, <sup>246</sup>Md, <sup>247</sup>Md, <sup>248</sup>Md, <sup>249</sup>Md, <sup>250</sup>Md, <sup>251</sup>Md, <sup>252</sup>Md, <sup>253</sup>Md, <sup>254</sup>Md, <sup>255</sup>Md, <sup>256</sup>Md, <sup>257</sup>Md, <sup>258</sup>Md, <sup>259</sup>Md, <sup>260</sup>Md, <sup>261</sup>Md, <sup>262</sup>Md";
          eleHighlight = "140,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:DIMendeleevCab.jpg'>Wikimedia Commons (Serge Lachinov)</a>";
          break;
        case 102:
          eleStable = "-";
          eleUnstable =
            "<sup>248</sup>No, <sup>249</sup>No, <sup>250</sup>No, <sup>251</sup>No, <sup>252</sup>No, <sup>253</sup>No, <sup>254</sup>No, <sup>255</sup>No, <sup>256</sup>No, <sup>257</sup>No, <sup>258</sup>No, <sup>259</sup>No, <sup>260</sup>No, <sup>261</sup>No, <sup>262</sup>No, <sup>263</sup>No, <sup>264</sup>No";
          eleHighlight = "150,0";
          eleCredits = preLink + "'http://images-of-elements.com/nobelium.php'>Images-of-elements</a>";
          break;
        case 103:
          eleStable = "-";
          eleUnstable =
            "<sup>251</sup>Lr, <sup>252</sup>Lr, <sup>253</sup>Lr, <sup>254</sup>Lr, <sup>255</sup>Lr, <sup>256</sup>Lr, <sup>257</sup>Lr, <sup>258</sup>Lr, <sup>259</sup>Lr, <sup>260</sup>Lr, <sup>261</sup>Lr, <sup>262</sup>Lr, <sup>263</sup>Lr, <sup>264</sup>Lr, <sup>265</sup>Lr, <sup>266</sup>Lr";
          eleHighlight = "160,0";
          eleCredits = preLink + "'http://images-of-elements.com/lawrencium.php'>Images-of-elements</a>";
          break;
        case 104:
          eleStable = "-";
          eleUnstable =
            "<sup>253</sup>Rf, <sup>254</sup>Rf, <sup>255</sup>Rf, <sup>256</sup>Rf, <sup>257</sup>Rf, <sup>258</sup>Rf, <sup>259</sup>Rf, <sup>260</sup>Rf, <sup>261</sup>Rf, <sup>262</sup>Rf, <sup>263</sup>Rf, <sup>264</sup>Rf, <sup>265</sup>Rf, <sup>266</sup>Rf, <sup>267</sup>Rf, <sup>268</sup>Rf";
          eleHighlight = "170,0";
          eleCredits = preLink + "'http://wal.nbed.nb.ca/sciencesettechnologies/pierrebrideau/00311.htm'>wal.nbed.nb.ca</a>";
          break;
        case 105:
          eleStable = "-";
          eleUnstable =
            "<sup>255</sup>Db, <sup>256</sup>Db, <sup>257</sup>Db, <sup>258</sup>Db, <sup>259</sup>Db, <sup>260</sup>Db, <sup>261</sup>Db, <sup>262</sup>Db, <sup>263</sup>Db, <sup>264</sup>Db, <sup>265</sup>Db, <sup>266</sup>Db, <sup>267</sup>Db, <sup>268</sup>Db, <sup>269</sup>Db, <sup>270</sup>Db";
          eleHighlight = "180,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 106:
          eleStable = "-";
          eleUnstable =
            "<sup>258</sup>Sg, <sup>259</sup>Sg, <sup>260</sup>Sg, <sup>261</sup>Sg, <sup>262</sup>Sg, <sup>263</sup>Sg, <sup>264</sup>Sg, <sup>265</sup>Sg, <sup>266</sup>Sg, <sup>267</sup>Sg, <sup>268</sup>Sg, <sup>269</sup>Sg, <sup>270</sup>Sg, <sup>271</sup>Sg, <sup>272</sup>Sg, <sup>273</sup>Sg";
          eleHighlight = "190,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Glenn_Seaborg_-_1964.jpg'>Wikimedia Commons (Atomic Energy Commission)</a>";
          break;
        case 107:
          eleStable = "-";
          eleUnstable =
            "<sup>260</sup>Bh, <sup>261</sup>Bh, <sup>262</sup>Bh, <sup>263</sup>Bh, <sup>264</sup>Bh, <sup>265</sup>Bh, <sup>266</sup>Bh, <sup>267</sup>Bh, <sup>268</sup>Bh, <sup>269</sup>Bh, <sup>270</sup>Bh, <sup>271</sup>Bh, <sup>272</sup>Bh, <sup>273</sup>Bh, <sup>274</sup>Bh, <sup>275</sup>Bh";
          eleHighlight = "200,0";
          eleCredits = preLink + "'http://skepticism.org/timeline/october-history/9209-birth-physicist-niels-bohr.html'>skepticism.org</a>";
          break;
        case 108:
          eleStable = "-";
          eleUnstable =
            "<sup>263</sup>Hs, <sup>264</sup>Hs, <sup>265</sup>Hs, <sup>266</sup>Hs, <sup>267</sup>Hs, <sup>268</sup>Hs, <sup>269</sup>Hs, <sup>270</sup>Hs, <sup>271</sup>Hs, <sup>272</sup>Hs, <sup>273</sup>Hs, <sup>274</sup>Hs, <sup>275</sup>Hs, <sup>276</sup>Hs, <sup>277</sup>Hs";
          eleHighlight = "210,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
          break;
        case 109:
          eleStable = "-";
          eleUnstable =
            "<sup>265</sup>Mt, <sup>266</sup>Mt, <sup>267</sup>Mt, <sup>268</sup>Mt, <sup>269</sup>Mt, <sup>270</sup>Mt, <sup>271</sup>Mt, <sup>272</sup>Mt, <sup>273</sup>Mt, <sup>274</sup>Mt, <sup>275</sup>Mt, <sup>276</sup>Mt, <sup>277</sup>Mt, <sup>278</sup>Mt, <sup>279</sup>Mt";
          eleHighlight = "220,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
          break;
        case 110:
          eleStable = "-";
          eleUnstable =
            "<sup>267</sup>Ds, <sup>268</sup>Ds, <sup>269</sup>Ds, <sup>270</sup>Ds, <sup>271</sup>Ds, <sup>272</sup>Ds, <sup>273</sup>Ds, <sup>274</sup>Ds, <sup>275</sup>Ds, <sup>276</sup>Ds, <sup>277</sup>Ds, <sup>278</sup>Ds, <sup>279</sup>Ds, <sup>280</sup>Ds, <sup>281</sup>Ds";
          eleHighlight = "230,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
          break;
        case 111:
          eleStable = "-";
          eleUnstable =
            "<sup>272</sup>Rg, <sup>273</sup>Rg, <sup>274</sup>Rg, <sup>275</sup>Rg, <sup>276</sup>Rg, <sup>277</sup>Rg, <sup>278</sup>Rg, <sup>279</sup>Rg, <sup>280</sup>Rg, <sup>281</sup>Rg, <sup>282</sup>Rg, <sup>283</sup>Rg";
          eleHighlight = "240,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
          break;
        case 112:
          eleStable = "-";
          eleUnstable =
            "<sup>277</sup>Cn, <sup>278</sup>Cn, <sup>279</sup>Cn, <sup>280</sup>Cn, <sup>281</sup>Cn, <sup>282</sup>Cn, <sup>283</sup>Cn, <sup>284</sup>Cn, <sup>285</sup>Cn";
          eleHighlight = "250,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg'>Wikimedia Commons (Commander-pirx)</a>";
          break;
        case 113:
          eleStable = "-";
          eleUnstable =
            "<sup>278</sup>Nh, <sup>282</sup>Nh, <sup>283</sup>Nh, <sup>284</sup>Nh, <sup>285</sup>Nh, <sup>286</sup>Nh, <sup>287</sup>Nh";
          eleHighlight = "260,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 114:
          eleStable = "-";
          eleUnstable = "<sup>284</sup>Fl, <sup>285</sup>Fl, <sup>286</sup>Fl, <sup>287</sup>Fl, <sup>288</sup>Fl, <sup>289</sup>Fl";
          eleHighlight = "270,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 115:
          eleStable = "-";
          eleUnstable = "<sup>287</sup>Mc, <sup>288</sup>Mc, <sup>289</sup>Mc, <sup>290</sup>Mc, <sup>291</sup>Mc";
          eleHighlight = "280,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 116:
          eleStable = "-";
          eleUnstable = "<sup>289</sup>Lv, <sup>290</sup>Lv, <sup>291</sup>Lv, <sup>292</sup>Lv, <sup>293</sup>Lv";
          eleHighlight = "290,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 117:
          eleStable = "-";
          eleUnstable = "<sup>291</sup>Ts, <sup>292</sup>Ts, <sup>293</sup>Ts, <sup>294</sup>Ts";
          eleHighlight = "300,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
        case 118:
          eleStable = "-";
          eleUnstable = "<sup>293</sup>Og, <sup>294</sup>Og";
          eleHighlight = "310,0";
          eleCredits = preLink + "'http://commons.wikimedia.org/wiki/File:Dubna.house_of_scientiests.jpg'>Wikimedia Commons (Hrustov)</a>";
          break;
      }
      let link2url = eleNum === 113 || eleNum === 115 || eleNum === 117 || eleNum === 118 ? "element-" + eleNum : element.nme;
      let link4url = element.nme;

      if (eleNum === 13) link2url = link4url = "aluminum";
      else if (eleNum === 55) link2url = link4url = "cesium";

      if (
        eleNum === 2 ||
        eleNum === 3 ||
        eleNum === 5 ||
        eleNum === 6 ||
        eleNum === 10 ||
        eleNum === 15 ||
        eleNum === 18 ||
        eleNum === 26 ||
        eleNum === 27 ||
        eleNum === 28 ||
        eleNum === 36 ||
        eleNum === 46 ||
        eleNum === 74 ||
        eleNum === 79 ||
        eleNum === 80 ||
        eleNum === 82 ||
        eleNum === 96
      )
        link2url = link2url + "-chemical-element";

      writeStream.write("<div class='content'>");
      writeStream.write("<div class='content-wrapper'>");
      writeStream.write("<div class='container'>");
      writeStream.write("<div class='masonry'>");

      writeStream.write("<div id='elementName' class='box-content masonry-col text-center'>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write("<h1>" + langValues[element.nme] + "</h1>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      writeStream.write("<div class='elementSqr'>");
      writeStream.write("<div class='flex'>");
      writeStream.write("<div id='firstSquare' class='flex-item masonry-col flex flex-col'>");
      writeStream.write("<div id='resultNumber' class='flex line-height-normal'>" + element.num + "</div>");
      writeStream.write("<div id='resultSymbol' class='text-center flex content-center justify-center line-height-normal'>");
      writeStream.write("<span class='self-center'>" + element.sym + "</span>");
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("<div class='flex'>");
      writeStream.write("<div id='secondSquare' class='flex-item masonry-col grid'>");
      writeStream.write("<div class='grayText'>" + langValues.group + "</div>");
      writeStream.write("<div>");
      if (element.grp === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.grp.toString()));
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.period + "</div>");
      writeStream.write("<div>" + element.prd + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.block + "</div>");
      writeStream.write("<div>" + element.blk + "</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Protons, Electrons, Neutrons
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<div class='grid-3 text-center'>");
      writeStream.write("<div class='grayText truncate'>" + langValues.protons + "</div>");
      writeStream.write("<div class='grayText truncate'>" + langValues.electrons + "</div>");
      writeStream.write("<div class='grayText truncate'>" + langValues.neutrons + "</div>");
      writeStream.write("<div class='font-size-1-5'>" + element.p + "</div>");
      writeStream.write("<div class='font-size-1-5'>" + element.e + "</div>");
      writeStream.write("<div class='font-size-1-5'>" + element.n + "</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // General Properties
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.labelGeneralProp + "</span>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelAtmNoMain + "</div>");
      writeStream.write("<div>" + element.num + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelAtmWtMain + "</div>");
      writeStream.write("<div>" + getNum(element.aWt) + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelMassNum + "</div>");
      writeStream.write("<div>" + element.mNo + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelCategoryMain + "</div>");
      writeStream.write("<div>" + langValues[element.ctg] + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelColorMain + "</div>");
      writeStream.write("<div>" + langValues[element.clr] + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelRadioMain + "</div>");
      writeStream.write("<div>" + langValues[element.rdo] + "</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Name Reason
      writeStream.write("<div class='box-content text-center masonry-col'>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write(post["ele" + eleNum + "Reason"]);
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Crystal Structure
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelStructureMain + "</div>");
      writeStream.write("<div>" + langValues[element.stc] + "</div>");
      writeStream.write("</div>");
      writeStream.write("<div>");

      // console.log(element.stc.replace("crystal", "crs") + "SVG");

      switch (element.stc) {
        case "crystalSH":
          writeStream.write(crsSHSVG);
          break;
        case "crystalFCC":
          writeStream.write(crsFCCSVG);
          break;
        case "crystalBCC":
          writeStream.write(crsBCCSVG);
          break;
        case "crystalBCM":
          writeStream.write(crsBCMSVG);
          break;
        case "crystalFCO":
          writeStream.write(crsFCOSVG);
          break;
        case "crystalBCO":
          writeStream.write(crsBCOSVG);
          break;
        case "crystalSTG":
          writeStream.write(crsSTGSVG);
          break;
        case "crystalTP":
          writeStream.write(crsTPSVG);
          break;
        case "crystalSTC":
          writeStream.write(crsSTCSVG);
          break;
        case "crystalSC":
          writeStream.write(crsSCSVG);
          break;
        case "crystalSO":
          writeStream.write(crsSOSVG);
          break;
        case "crystalSM":
          writeStream.write(crsSMSVG);
          break;
        case "crystalCT":
          writeStream.write(crsCTSVG);
          break;
      }

      writeStream.write("</div>");
      writeStream.write("</div>");

      // History
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.hist + "</span>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write(post["ele" + eleNum + "History"]);
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Electron Configuration
      writeStream.write("<div id='electronConf' class='box-content masonry-col'>");
      writeStream.write("<div class='grid padding-bottom-25'>");
      writeStream.write("<div class='grayText'>" + langValues.labelElectronsMain + "</div>");
      writeStream.write("<div class='ltrText justify-start'>" + element.elc + "</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelConfigMain + "</div>");
      writeStream.write("<div class='ltrText justify-start'>");
      writeStream.write(element.cnf);
      writeStream.write("</div>");
      writeStream.write("</div>");
      // writeStream.write("<Electron num={element.num} sym={element.sym} />");

      writeStream.write("<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='-800 " + val1 + " 1600 " + val2 + "' class='atom pt-6'>");
      writeStream.write("<g class='g'>");
      writeStream.write("<circle class='nucleus' r='130' />");
      writeStream.write(
        "<text class='font-fam' x='0' y='0' fill='#ffffff' alignment-baseline='middle' dominant-baseline='middle' text-anchor='middle'>" +
          sym +
          "</text>"
      );
      if (num > 0) {
        writeStream.write("<g class='one' fill='currentColor'>");
        writeStream.write("<circle r=" + rad1 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad1 + " cy=" + -A0cos * rad1 + " r=" + r + " />");
        if (num > 1) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad1 + " cy=" + A0cos * rad1 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 2) {
        writeStream.write("<g class='two' fill='currentColor'>");
        writeStream.write("<circle r=" + rad2 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad2 + " cy=" + -A0cos * rad2 + " r=" + r + " />");
        if (num > 3) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad2 + " cy=" + A0cos * rad2 + " r=" + r + " />");
        }
        if (num > 4) {
          writeStream.write("<circle class='electron' cx=" + -A90sin * rad2 + " cy=" + A90cos * rad2 + " r=" + r + " />");
        }
        if (num > 5) {
          writeStream.write("<circle class='electron' cx=" + A90sin * rad2 + " cy=" + A90cos * rad2 + " r=" + r + " />");
        }
        if (num > 6) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad2 + " cy=" + -A45 * rad2 + " r=" + r + " />");
        }
        if (num > 7) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad2 + " cy=" + -A45 * rad2 + " r=" + r + " />");
        }
        if (num > 8) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad2 + " cy=" + A45 * rad2 + " r=" + r + " />");
        }
        if (num > 9) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad2 + " cy=" + A45 * rad2 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 10) {
        writeStream.write("<g class='three' fill='currentColor'>");
        writeStream.write("<circle r=" + rad3 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad3 + " cy=" + -A0cos * rad3 + " r=" + r + " />");
        if (num > 11) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad3 + " cy=" + A0cos * rad3 + " r=" + r + " />");
        }
        if (num > 12) {
          writeStream.write("<circle class='electron' cx=" + -A10cos * rad3 + " cy=" + -A10sin * rad3 + " r=" + r + " />");
        }
        if (num > 13) {
          writeStream.write("<circle class='electron' cx=" + A10cos * rad3 + " cy=" + -A10sin * rad3 + " r=" + r + " />");
        }
        if (num > 14) {
          writeStream.write("<circle class='electron' cx=" + -A30cos * rad3 + " cy=" + A30sin * rad3 + " r=" + r + " />");
        }
        if (num > 15) {
          writeStream.write("<circle class='electron' cx=" + A30cos * rad3 + " cy=" + A30sin * rad3 + " r=" + r + " />");
        }
        if (num > 16) {
          writeStream.write("<circle class='electron' cx=" + -A50cos * rad3 + " cy=" + -A50sin * rad3 + " r=" + r + " />");
        }
        if (num > 17) {
          writeStream.write("<circle class='electron' cx=" + A50cos * rad3 + " cy=" + -A50sin * rad3 + " r=" + r + " />");
        }

        if (num > 20) {
          writeStream.write("<circle class='electron' cx=" + -A50cos * rad3 + " cy=" + A50sin * rad3 + " r=" + r + " />");
        }
        if (num > 21) {
          writeStream.write("<circle class='electron' cx=" + A50cos * rad3 + " cy=" + A50sin * rad3 + " r=" + r + " />");
        }
        if (num > 22) {
          writeStream.write("<circle class='electron' cx=" + -A30cos * rad3 + " cy=" + -A30sin * rad3 + " r=" + r + " />");
        }
        if (num > 23) {
          writeStream.write("<circle class='electron' cx=" + A30cos * rad3 + " cy=" + -A30sin * rad3 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A10cos * rad3 + " cy=" + A10sin * rad3 + " r=" + r + " />");
        }

        if (num > 25) {
          writeStream.write("<circle class='electron' cx=" + A10cos * rad3 + " cy=" + A10sin * rad3 + " r=" + r + " />");
        }
        if (num > 26) {
          writeStream.write("<circle class='electron' cx=" + -A70cos * rad3 + " cy=" + -A70sin * rad3 + " r=" + r + " />");
        }
        if (num > 27) {
          writeStream.write("<circle class='electron' cx=" + A70cos * rad3 + " cy=" + -A70sin * rad3 + " r=" + r + " />");
        }
        if (num > 28) {
          writeStream.write("<circle class='electron' cx=" + -A70cos * rad3 + " cy=" + A70sin * rad3 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + A70cos * rad3 + " cy=" + A70sin * rad3 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 18) {
        writeStream.write("<g class='four' fill='currentColor'>");
        writeStream.write("<circle r=" + rad4 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad4 + " cy=" + -A0cos * rad4 + " r=" + r + " />");
        if (num > 19 && num != 24 && num != 29) {
          writeStream.write("<circle class='electron' cx=" + -A0sin * rad4 + " cy=" + A0cos * rad4 + " r=" + r + " />");
        }
        if (num > 30) {
          writeStream.write("<circle class='electron' cx=" + -A90sin * rad4 + " cy=" + A90cos * rad4 + " r=" + r + " />");
        }
        if (num > 31) {
          writeStream.write("<circle class='electron' cx=" + A90sin * rad4 + " cy=" + A90cos * rad4 + " r=" + r + " />");
        }
        if (num > 32) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad4 + " cy=" + -A45 * rad4 + " r=" + r + " />");
        }
        if (num > 33) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad4 + " cy=" + -A45 * rad4 + " r=" + r + " />");
        }
        if (num > 34) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad4 + " cy=" + A45 * rad4 + " r=" + r + " />");
        }
        if (num > 35) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad4 + " cy=" + A45 * rad4 + " r=" + r + " />");
        }
        if (num > 38) {
          writeStream.write("<circle class='electron' cx=" + -A22cos * rad4 + " cy=" + -A22sin * rad4 + " r=" + r + " />");
        }
        if (num > 39) {
          writeStream.write("<circle class='electron' cx=" + A22cos * rad4 + " cy=" + -A22sin * rad4 + " r=" + r + " />");
        }
        if (num > 40) {
          writeStream.write("<circle class='electron' cx=" + A22cos * rad4 + " cy=" + A22sin * rad4 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A22cos * rad4 + " cy=" + A22sin * rad4 + " r=" + r + " />");
        }
        if (num > 41) {
          writeStream.write("<circle class='electron' cx=" + -A22sin * rad4 + " cy=" + -A22cos * rad4 + " r=" + r + " />");
        }
        if (num > 43) {
          writeStream.write("<circle class='electron' cx=" + A22sin * rad4 + " cy=" + -A22cos * rad4 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A22sin * rad4 + " cy=" + A22cos * rad4 + " r=" + r + " />");
        }
        if (num > 44) {
          writeStream.write("<circle class='electron' cx=" + A22sin * rad4 + " cy=" + A22cos * rad4 + " r=" + r + " />");
        }
        if (num > 45) {
          writeStream.write("<circle class='electron' cx=" + -A11cos * rad4 + " cy=" + -A11sin * rad4 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + A11cos * rad4 + " cy=" + -A11sin * rad4 + " r=" + r + " />");
        }
        if (num > 57) {
          writeStream.write("<circle class='electron' cx=" + -A11sin * rad4 + " cy=" + A11cos * rad4 + " r=" + r + " />");
        }
        if (num > 58) {
          writeStream.write("<circle class='electron' cx=" + A33cos * rad4 + " cy=" + A33sin * rad4 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A11sin * rad4 + " cy=" + -A11cos * rad4 + " r=" + r + " />");
        }
        if (num > 59) {
          writeStream.write("<circle class='electron' cx=" + A33sin * rad4 + " cy=" + -A33cos * rad4 + " r=" + r + " />");
        }
        if (num > 60) {
          writeStream.write("<circle class='electron' cx=" + -A33cos * rad4 + " cy=" + A33sin * rad4 + " r=" + r + " />");
        }
        if (num > 61) {
          writeStream.write("<circle class='electron' cx=" + -A33sin * rad4 + " cy=" + -A33cos * rad4 + " r=" + r + " />");
        }
        if (num > 62) {
          writeStream.write("<circle class='electron' cx=" + A11sin * rad4 + " cy=" + A11cos * rad4 + " r=" + r + " />");
        }
        if (num > 64) {
          writeStream.write("<circle class='electron' cx=" + -A11cos * rad4 + " cy=" + A11sin * rad4 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + A11cos * rad4 + " cy=" + A11sin * rad4 + " r=" + r + " />");
        }
        if (num > 65) {
          writeStream.write("<circle class='electron' cx=" + A11sin * rad4 + " cy=" + -A11cos * rad4 + " r=" + r + " />");
        }
        if (num > 66) {
          writeStream.write("<circle class='electron' cx=" + -A33cos * rad4 + " cy=" + -A33sin * rad4 + " r=" + r + " />");
        }
        if (num > 67) {
          writeStream.write("<circle class='electron' cx=" + A33sin * rad4 + " cy=" + A33cos * rad4 + " r=" + r + " />");
        }
        if (num > 68) {
          writeStream.write("<circle class='electron' cx=" + A33cos * rad4 + " cy=" + -A33sin * rad4 + " r=" + r + " />");
        }
        if (num > 69) {
          writeStream.write("<circle class='electron' cx=" + -A33sin * rad4 + " cy=" + A33cos * rad4 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 36 && num != 46) {
        writeStream.write("<g class='five' fill='currentColor'>");
        writeStream.write("<circle r=" + rad5 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad5 + " cy=" + -A0cos * rad5 + " r=" + r + " />");
        if (num > 37 && num != 41 && num != 42 && num != 44 && num != 45 && num != 46 && num != 47) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad5 + " cy=" + A0cos * rad5 + " r=" + r + " />");
        }
        if (num > 48) {
          writeStream.write("<circle class='electron' cx=" + -A90sin * rad5 + " cy=" + A90cos * rad5 + " r=" + r + " />");
        }
        if (num > 49) {
          writeStream.write("<circle class='electron' cx=" + A90sin * rad5 + " cy=" + A90cos * rad5 + " r=" + r + " />");
        }
        if (num > 50) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad5 + " cy=" + -A45 * rad5 + " r=" + r + " />");
        }
        if (num > 51) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad5 + " cy=" + -A45 * rad5 + " r=" + r + " />");
        }
        if (num > 52) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad5 + " cy=" + A45 * rad5 + " r=" + r + " />");
        }
        if (num > 53) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad5 + " cy=" + A45 * rad5 + " r=" + r + " />");
        }
        if (
          num > 56 &&
          num != 59 &&
          num != 60 &&
          num != 61 &&
          num != 62 &&
          num != 63 &&
          num != 65 &&
          num != 66 &&
          num != 67 &&
          num != 68 &&
          num != 69 &&
          num != 70
        ) {
          writeStream.write("<circle class='electron' cx=" + -A22cos * rad5 + " cy=" + -A22sin * rad5 + " r=" + r + " />");
        }
        if (num > 71) {
          writeStream.write("<circle class='electron' cx=" + A22cos * rad5 + " cy=" + -A22sin * rad5 + " r=" + r + " />");
        }
        if (num > 72) {
          writeStream.write("<circle class='electron' cx=" + A22cos * rad5 + " cy=" + A22sin * rad5 + " r=" + r + " />");
        }
        if (num > 73) {
          writeStream.write("<circle class='electron' cx=" + -A22cos * rad5 + " cy=" + A22sin * rad5 + " r=" + r + " />");
        }
        if (num > 74) {
          writeStream.write("<circle class='electron' cx=" + -A22sin * rad5 + " cy=" + -A22cos * rad5 + " r=" + r + " />");
        }
        if (num > 75) {
          writeStream.write("<circle class='electron' cx=" + A22sin * rad5 + " cy=" + -A22cos * rad5 + " r=" + r + " />");
        }
        if (num > 76) {
          writeStream.write("<circle class='electron' cx=" + -A22sin * rad5 + " cy=" + A22cos * rad5 + " r=" + r + " />");
        }
        if (num > 77) {
          writeStream.write("<circle class='electron' cx=" + A22sin * rad5 + " cy=" + A22cos * rad5 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A11cos * rad5 + " cy=" + -A11sin * rad5 + " r=" + r + " />");
        }
        if (num > 78) {
          writeStream.write("<circle class='electron' cx=" + A11cos * rad5 + " cy=" + -A11sin * rad5 + " r=" + r + " />");
        }
        if (num > 90) {
          writeStream.write("<circle class='electron' cx=" + -A11sin * rad5 + " cy=" + A11cos * rad5 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + A33cos * rad5 + " cy=" + A33sin * rad5 + " r=" + r + " />");
        }
        if (num > 91) {
          writeStream.write("<circle class='electron' cx=" + -A11sin * rad5 + " cy=" + -A11cos * rad5 + " r=" + r + " />");
        }
        if (num > 92) {
          writeStream.write("<circle class='electron' cx=" + A33sin * rad5 + " cy=" + -A33cos * rad5 + " r=" + r + " />");
        }
        if (num > 93) {
          writeStream.write("<circle class='electron' cx=" + -A33cos * rad5 + " cy=" + A33sin * rad5 + " r=" + r + " />");
          writeStream.write("<circle class='electron' cx=" + -A33sin * rad5 + " cy=" + -A33cos * rad5 + " r=" + r + " />");
        }
        if (num > 94) {
          writeStream.write("<circle class='electron' cx=" + A11sin * rad5 + " cy=" + A11cos * rad5 + " r=" + r + " />");
        }
        if (num > 96) {
          writeStream.write("<circle class='electron' cx=" + -A11cos * rad5 + " cy=" + A11sin * rad5 + " r=" + r + " />");
        }
        if (num > 96) {
          writeStream.write("<circle class='electron' cx=" + A11cos * rad5 + " cy=" + A11sin * rad5 + " r=" + r + " />");
        }
        if (num > 97) {
          writeStream.write("<circle class='electron' cx=" + A11sin * rad5 + " cy=" + -A11cos * rad5 + " r=" + r + " />");
        }
        if (num > 98) {
          writeStream.write("<circle class='electron' cx=" + -A33cos * rad5 + " cy=" + -A33sin * rad5 + " r=" + r + " />");
        }
        if (num > 99) {
          writeStream.write("<circle class='electron' cx=" + A33sin * rad5 + " cy=" + A33cos * rad5 + " r=" + r + " />");
        }
        if (num > 100) {
          writeStream.write("<circle class='electron' cx=" + A33cos * rad5 + " cy=" + -A33sin * rad5 + " r=" + r + " />");
        }
        if (num > 101) {
          writeStream.write("<circle class='electron' cx=" + -A33sin * rad5 + " cy=" + A33cos * rad5 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 54) {
        writeStream.write("<g class='six' fill='currentColor'>");
        writeStream.write("<circle r=" + rad6 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad6 + " cy=" + -A0cos * rad6 + " r=" + r + " />");
        if (num > 55 && num != 78 && num != 79) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad6 + " cy=" + A0cos * rad6 + " r=" + r + " />");
        }
        if (num > 80) {
          writeStream.write("<circle class='electron' cx=" + -A10cos * rad6 + " cy=" + -A10sin * rad6 + " r=" + r + " />");
        }
        if (num > 81) {
          writeStream.write("<circle class='electron' cx=" + A10cos * rad6 + " cy=" + -A10sin * rad6 + " r=" + r + " />");
        }
        if (num > 82) {
          writeStream.write("<circle class='electron' cx=" + -A30cos * rad6 + " cy=" + A30sin * rad6 + " r=" + r + " />");
        }
        if (num > 83) {
          writeStream.write("<circle class='electron' cx=" + A30cos * rad6 + " cy=" + A30sin * rad6 + " r=" + r + " />");
        }
        if (num > 84) {
          writeStream.write("<circle class='electron' cx=" + -A50cos * rad6 + " cy=" + -A50sin * rad6 + " r=" + r + " />");
        }
        if (num > 85) {
          writeStream.write("<circle class='electron' cx=" + A50cos * rad6 + " cy=" + -A50sin * rad6 + " r=" + r + " />");
        }
        if (num > 88 && num != 94 && num != 95 && num != 97 && num != 98 && num != 99 && num != 100 && num != 101 && num != 102 && num != 103) {
          writeStream.write("<circle class='electron' cx=" + -A50cos * rad6 + " cy=" + A50sin * rad6 + " r=" + r + " />");
        }
        if (
          num > 89 &&
          num != 91 &&
          num != 92 &&
          num != 93 &&
          num != 94 &&
          num != 95 &&
          num != 96 &&
          num != 97 &&
          num != 98 &&
          num != 99 &&
          num != 100 &&
          num != 101 &&
          num != 102 &&
          num != 103
        ) {
          writeStream.write("<circle class='electron' cx=" + A50cos * rad6 + " cy=" + A50sin * rad6 + " r=" + r + " />");
        }
        if (num > 104) {
          writeStream.write("<circle class='electron' cx=" + -A30cos * rad6 + " cy=" + -A30sin * rad6 + " r=" + r + " />");
        }
        if (num > 105) {
          writeStream.write("<circle class='electron' cx=" + A30cos * rad6 + " cy=" + -A30sin * rad6 + " r=" + r + " />");
        }
        if (num > 106) {
          writeStream.write("<circle class='electron' cx=" + -A10cos * rad6 + " cy=" + A10sin * rad6 + " r=" + r + " />");
        }
        if (num > 107) {
          writeStream.write("<circle class='electron' cx=" + A10cos * rad6 + " cy=" + A10sin * rad6 + " r=" + r + " />");
        }
        if (num > 108) {
          writeStream.write("<circle class='electron' cx=" + -A70cos * rad6 + " cy=" + -A70sin * rad6 + " r=" + r + " />");
        }
        if (num > 109) {
          writeStream.write("<circle class='electron' cx=" + A70cos * rad6 + " cy=" + -A70sin * rad6 + " r=" + r + " />");
        }
        if (num > 110) {
          writeStream.write("<circle class='electron' cx=" + -A70cos * rad6 + " cy=" + A70sin * rad6 + " r=" + r + " />");
        }
        if (num > 111) {
          writeStream.write("<circle class='electron' cx=" + A70cos * rad6 + " cy=" + A70sin * rad6 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      if (num > 86) {
        writeStream.write("<g class='seven' fill='currentColor'>");
        writeStream.write("<circle r=" + rad7 + " fill='none' stroke='currentColor' stroke-width=" + ringSize + " />");
        writeStream.write("<circle class='electron' cx=" + -A0sin * rad7 + " cy=" + -A0cos * rad7 + " r=" + r + " />");
        if (num > 87) {
          writeStream.write("<circle class='electron' cx=" + A0sin * rad7 + " cy=" + A0cos * rad7 + " r=" + r + " />");
        }
        if (num > 102 && num != 104 && num != 105 && num != 106 && num != 107 && num != 108 && num != 109 && num != 110 && num != 111 && num != 112) {
          writeStream.write("<circle class='electron' cx=" + -A90sin * rad7 + " cy=" + A90cos * rad7 + " r=" + r + " />");
        }
        if (num > 113) {
          writeStream.write("<circle class='electron' cx=" + A90sin * rad7 + " cy=" + A90cos * rad7 + " r=" + r + " />");
        }
        if (num > 114) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad7 + " cy=" + -A45 * rad7 + " r=" + r + " />");
        }
        if (num > 115) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad7 + " cy=" + -A45 * rad7 + " r=" + r + " />");
        }
        if (num > 116) {
          writeStream.write("<circle class='electron' cx=" + -A45 * rad7 + " cy=" + A45 * rad7 + " r=" + r + " />");
        }
        if (num > 117) {
          writeStream.write("<circle class='electron' cx=" + A45 * rad7 + " cy=" + A45 * rad7 + " r=" + r + " />");
        }
        writeStream.write("</g>");
      }

      writeStream.write("</g>");
      writeStream.write("</svg>");
      writeStream.write("</div>");

      // Facts
      writeStream.write("<div class='box-content masonry-col text-center'>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write(post["ele" + eleNum + "Facts"]);
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Physical Properties
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.labelPhysicalProp + "</span>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelPhaseMain + "</div>");
      writeStream.write("<div>" + langValues[element.phs] + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelDensityMain + "</div>");
      writeStream.write("<div>");
      if (element.dns === "-") writeStream.write("-");
      else writeStream.write(getNum(element.dns) + " " + langValues.labelDensity);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelMeltingMain + "</div>");
      writeStream.write("<div id='outputMeltingMain'>" + getTemp(element.mlt) + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelBoilingMain + "</div>");
      writeStream.write("<div id='outputBoilingMain'>" + getTemp(element.bln) + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelFusionMain + "</div>");
      writeStream.write("<div>");
      if (element.fsn === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.fsn) + " " + langValues.labelFusion);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelVaporizationMain + "</div>");
      writeStream.write("<div>");
      if (element.vpn === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.vpn) + " " + langValues.labelFusion);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelSpecificMain + "</div>");
      writeStream.write("<div>");
      if (element.spc === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.spc) + " " + langValues.labelSpecific);
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Abundance
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelCrustMain + "</div>");
      writeStream.write("<div>");
      if (element.crt === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.crt));
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelUniverseMain + "</div>");
      writeStream.write("<div>");
      if (element.uni === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.uni));
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      let imageSrc = element.sym;
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

      // Image
      writeStream.write("<div class='masonry-col'>");
      writeStream.write("<div class='blog-thumb'>");
      writeStream.write(
        "<img id='elementPic' src='https://periodic-table-io.pages.dev/images/elements/" +
          imageSrc +
          ".jpg' alt=" +
          post["ele" + eleNum + "Desc"] +
          " data-toggle='modal' data-target='#exampleModal' />"
      );
      writeStream.write("</div>");
      writeStream.write("<div class='box-content bottom-rounded line-height-2'>");
      writeStream.write("<span class='grayText'>" + langValues.imgCredits + ": </span>");
      writeStream.write(eleCredits);
      writeStream.write("<div class='pt-4'>");
      writeStream.write(post["ele" + eleNum + "Desc"]);
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Identifiers
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelCASMain + "</div>");
      writeStream.write("<div>" + element.cas + "</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelCIDMain + "</div>");
      writeStream.write("<div>");
      if (element.cid === "na") writeStream.write(langValues.na);
      else writeStream.write(getNum(element.cid));
      writeStream.write("</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Atomic Properties
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.labelAtomicProp + "</span>");
      writeStream.write("<div class='grid'>");
      writeStream.write("<div class='grayText'>" + langValues.labelRadiusMain + "</div>");
      writeStream.write("<div>");
      if (element.aRd === "-") writeStream.write("-");
      else writeStream.write(getNum(element.aRd) + " pm");
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelCovalentMain + "</div>");
      writeStream.write("<div>");
      if (element.cRd === "-") writeStream.write("-");
      else writeStream.write(getNum(element.cRd) + " pm");
      writeStream.write("</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelElectronegativityMain + "</div>");
      writeStream.write("<div>");
      if (element.eNg === "-") writeStream.write("-");
      else writeStream.write(getNum(element.eNg) + " (" + langValues.pauling + ")");
      writeStream.write("</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelIonizationMain + "</div>");
      writeStream.write("<div>");
      if (element.ion === "-") writeStream.write("-");
      else writeStream.write(getNum(element.ion) + " " + langValues.labelIonization);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText'>" + langValues.labelVolumeMain + "</div>");
      writeStream.write("<div>");
      if (element.vol === "-") writeStream.write("-");
      else writeStream.write(getNum(element.vol) + " " + langValues.labelVolume);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelThermalMain + "</div>");
      writeStream.write("<div>");
      if (element.trm === "-") writeStream.write("-");
      else writeStream.write(getNum(element.trm) + " " + langValues.labelThermal);
      writeStream.write("</div>");
      writeStream.write("<div class='grayText hyphen'>" + langValues.labelOxidationMain + "</div>");
      writeStream.write("<div class='ltrText justify-start'>" + element.oxi + "</div>");
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Uses
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper grayText'>" + langValues.uses + "</span>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write(post["ele" + eleNum + "Uses"]);
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Hazards
      writeStream.write("<div class='box-content masonry-col text-center'>");
      writeStream.write("<div class='line-height-2'>");
      writeStream.write(post["ele" + eleNum + "Dangers"]);
      writeStream.write("</div>");
      writeStream.write("</div>");

      // Isotopes
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.isotopes + "</span>");
      writeStream.write("<div class='grayText py-4'>" + langValues.stableIsotopes + "</div>");
      writeStream.write("<span>" + eleStable + "</span>");
      writeStream.write("<div class='grayText py-4'>" + langValues.unstableIsotopes + "</div>");
      writeStream.write("<span>" + eleUnstable + "</span>");
      writeStream.write("</div>");

      // Important Links
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<span class='headerOutline text-upper'>" + langValues.labelLinksMain + "</span>");
      writeStream.write("<div class='webLink'>");
      writeStream.write(
        "<a href='" +
          langValues.wikiLink +
          element.nme +
          "' class='underlineLink' target='_blank' rel='noopener noreferrer'>" +
          langValues.wiki +
          "</a>"
      );

      writeStream.write("</div>");
      writeStream.write("");
      writeStream.write(
        "<a href='https://www.britannica.com/science/" +
          link2url +
          "' class='webLink' target='_blank' rel='noopener noreferrer'><span class='underlineLink'>Encyclopaedia Britannica</span></a>"
      );
      writeStream.write(
        "<a href='http://www.wolframalpha.com/input/?i=" +
          element.nme +
          "+element' class='webLink' target='_blank' rel='noopener noreferrer'><span class='underlineLink'>Wolfram Alpha</span></a>"
      );
      writeStream.write(
        "<a href='http://www.chemicool.com/elements/" +
          link4url +
          ".html' class='webLink' target='_blank' rel='noopener noreferrer'><span class='underlineLink'>Chemicool</span></a>"
      );
      writeStream.write(
        "<a href='http://www.rsc.org/periodic-table/element/" +
          eleNum +
          "/" +
          element.nme +
          "' class='webLink' target='_blank' rel='noopener noreferrer'><span class='underlineLink'>RSC Visual Elements</span></a>"
      );
      writeStream.write(
        "<a href='http://www.webelements.com/" +
          element.nme +
          "/' class='webLink' target='_blank' rel='noopener noreferrer'><span class='underlineLink'>WebElements</span></a>"
      );
      writeStream.write("</div>");

      // Small Table
      writeStream.write("<div class='box-content masonry-col'>");
      writeStream.write("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 325 75' id='tableSVG'>");
      writeStream.write("<g transform='translate(0,-977.3622)'>");
      writeStream.write("<g style='opacity: 0.4;'>");
      writeStream.write("<path transform='translate(0,977.3622)' d='m 162.5,32.5 0,20 10,0 0,20 90,0 0,-40 -90,0 -10,0 z' style='fill: #c76d6d;' />");
      writeStream.write("<path d='m 2.5,989.86218 10,0 0,60.00002 -10,0 z' style='fill: #ba6f9c;' />");
      writeStream.write("<path d='m 12.5,989.86218 10,0 0,60.00002 -10,0 z' style='fill: #5688aa;' />");
      writeStream.write("<path d='m 22.5,1029.8622 150,0 0,10 -150,0 z' style='fill: #a97942;' />");
      writeStream.write("<path d='m 22.5,1039.8622 150,0 0,10 -150,0 z' style='fill: #857d61;' />");
      writeStream.write("<path d='m 312.5,979.8622 10,0 0,70 -10,0 z' style='fill: #529311;' />");
      writeStream.write("<path transform='translate(0,977.3622)' ");
      writeStream.write("d='m 262.5,22.5 0,50 10,0 10,0 10,0 10,0 0,-10 -10,0 0,-10 -10,0 0,-10 -10,0 0,-20 -10,0 z'");
      writeStream.write("style='fill: #8b77c6;' />");
      writeStream.write("<path transform='translate(0,977.3622)' ");
      writeStream.write("d='m 272.5,12.5 0,10 10,0 0,10 10,0 0,10 10,0 0,-30 -10,0 -10,0 -10,0 z'");
      writeStream.write("style='fill: #3f8f67;' />");
      writeStream.write("<path d='m 302.5,989.8622 10,0 0,60 -10,0 z' style='fill: #498dad;' />");
      writeStream.write("<path d='m 2.5,979.86218 10,0 0,10 -10,0 z' style='fill: #3f8f67;' />");
      writeStream.write("<path transform='translate(0,977.3622)' ");
      writeStream.write("d='m 262.5,12.5 0,10 10,0 0,-10 -10,0 z m 10,10 0,20 10,0 0,10 10,0 0,10 10,0 0,-20 -10,0 0,-10 -10,0 0,-10 -10,0 z'");
      writeStream.write("style='fill: #d1744b;' />");
      writeStream.write(
        "<path d='m 0,977.3622 0,2.5 0,70 0,2.5 325,0 0,-2.5 0,-70 0,-2.5 -15,0 0,2.5 0,7.5 -50,0 0,2.5 0,17.5 -100,0 0,2.5 0,17.5 -135,0 0,-37.5 0,-2.5 -10,0 0,-7.49805 -2.5,0 0,7.49805 0,0.002 0,2.498 10,0 0,40 2.5,0 135,0 2.5,0 0,-20 97.5,0 2.5,0 0,-20 50,0 0,-2.5 0,-7.5 10,0 0,70 -320,0 0,-70 12.5,0 0,-2.5 -15,0 z'"
      );
      writeStream.write("style='fill: #808080;' />");
      writeStream.write("</g>");
      writeStream.write("<g id='highlight' transform='translate(" + eleHighlight + ")'>");
      writeStream.write("<path style='fill: #ffffff;' d='m 2.5,1039.8622 10,0 0,10 -10,0 z' />");
      writeStream.write("<path ");
      writeStream.write(
        "d='m 2.5,1039.8622 0,2.9199 2.919922,-2.9199 -2.919922,0 z m 6.455078,0 -6.455078,6.4551 0,3.5371 9.990234,-9.9922 -3.535156,0 z m 3.544922,3.5273 -6.472656,6.4727 3.535156,0 2.9375,-2.9375 0,-3.5352 z'"
      );
      writeStream.write("style='fill: #000000;' />");
      writeStream.write("</g>");
      writeStream.write("</g>");
      writeStream.write("</svg>");

      let previousNum = eleNum - 2;
      let nextNum = eleNum;
      let previousHTML, nextHTML;

      if (eleNum === 1) previousHTML = "-";
      else {
        let previousElement = newRawDataElement[previousNum];
        previousHTML = "<a href='element-" + previousElement.num + ".html' class='underlineLink'>" + langValues[previousElement.nme] + "</a>";
      }

      if (eleNum === 118) nextHTML = "-";
      else {
        let nextElement = newRawDataElement[nextNum];
        nextHTML = "<a href='element-" + nextElement.num + ".html' class='underlineLink'>" + langValues[nextElement.nme] + "</a>";
      }

      writeStream.write("<div id='elementNav' class='text-center'>");
      writeStream.write(previousHTML + "&nbsp;&nbsp;←&nbsp;");
      writeStream.write(element.sym + "&nbsp;&nbsp;→&nbsp;");
      writeStream.write(nextHTML);
      writeStream.write("</div>");
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
        console.log("Created " + lang + "-" + page + "-" + eleNum);
      });

      // close the stream
      writeStream.end();
    }
  });
};
exports.writeFile = writeFile;
