const https = require("https");
const { JSDOM } = require("jsdom");
const fs = require("fs");

const slugToZ = {actinium:89,aluminum:13,americium:95,antimony:51,argon:18,arsenic:33,astatine:85,barium:56,berkelium:97,beryllium:4,bismuth:83,boron:5,bromine:35,cadmium:48,calcium:20,californium:98,carbon:6,cerium:58,cesium:55,chlorine:17,chromium:24,cobalt:27,copper:29,curium:96,dysprosium:66,einsteinium:99,erbium:68,europium:63,fluorine:9,francium:87,gadolinium:64,gallium:31,germanium:32,gold:79,hafnium:72,helium:2,holmium:67,hydrogen:1,indium:49,iodine:53,iridium:77,iron:26,krypton:36,lanthanum:57,lead:82,lithium:3,lutetium:71,magnesium:12,manganese:25,mercury:80,molybdenum:42,neodymium:60,neon:10,neptunium:93,nickel:28,niobium:41,nitrogen:7,osmium:76,oxygen:8,palladium:46,phosphorus:15,platinum:78,plutonium:94,polonium:84,potassium:19,praseodymium:59,promethium:61,protactinium:91,radium:88,radon:86,rhenium:75,rhodium:45,rubidium:37,ruthenium:44,samarium:62,scandium:21,selenium:34,silicon:14,silver:47,sodium:11,strontium:38,sulfur:16,tantalum:73,technetium:43,tellurium:52,terbium:65,thallium:81,thorium:90,thulium:69,tin:50,titanium:22,tungsten:74,uranium:92,vanadium:23,xenon:54,ytterbium:70,yttrium:39,zinc:30,zirconium:40};

function fetch(url){return new Promise((res)=>{const req=https.get(url,{headers:{"User-Agent":"Mozilla/5.0"}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>res({status:r.statusCode,body:d}));});req.on("error",e=>res({status:"ERR",body:""}));req.setTimeout(20000,()=>{req.destroy();res({status:"TIMEOUT",body:""});});});}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

// Curate the strongest visible lines from parsed rows.
function curate(rows){
  const vis = rows.filter(r=>r.wl>=3800 && r.wl<=7500);
  if(!vis.length) return [];
  const withI = vis.filter(r=>r.I!=null);
  let chosen;
  if(withI.length){
    const maxI = Math.max(...withI.map(r=>r.I));
    chosen = withI.filter(r=>r.I >= 0.03*maxI).sort((a,b)=>b.I-a.I).slice(0,24);
  } else {
    chosen = vis.slice(0,24);
  }
  // to nm, sort, dedupe within 0.15 nm
  const nm = chosen.map(r=>+(r.wl/10).toFixed(2)).sort((a,b)=>a-b);
  const out=[];
  for(const w of nm){ if(!out.length || w-out[out.length-1]>0.15) out.push(w); }
  return out;
}

function parseTable(body){
  const doc=new JSDOM(body).window.document;
  const tables=[...doc.querySelectorAll("table")];
  let best=null,n=0; for(const t of tables){const r=t.querySelectorAll("tr").length; if(r>n){n=r;best=t;}}
  if(!best) return [];
  const rows=[];
  for(const tr of best.querySelectorAll("tr")){
    const c=[...tr.querySelectorAll("td")].map(x=>x.textContent.replace(/\s+/g," ").trim());
    if(c.length<2) continue;
    const wl=parseFloat(c[1]);
    if(!isFinite(wl)) continue;
    const im=(c[0]||"").match(/^(\d+)/);
    rows.push({I: im?parseInt(im[1],10):null, wl});
  }
  return rows;
}

(async()=>{
  const entries = Object.entries(slugToZ);
  const SPECTRA={}; const report=[];
  for(let i=0;i<entries.length;i++){
    const [slug,z]=entries[i];
    const {status,body}=await fetch(`https://physics.nist.gov/PhysRefData/Handbook/Tables/${slug}table2.htm`);
    let lines=[];
    if(status===200 && /Wavelength/i.test(body)) lines=curate(parseTable(body));
    if(lines.length) SPECTRA[z]=lines;
    report.push({z,slug,status,n:lines.length});
    process.stdout.write(`\r${i+1}/99 ${slug.padEnd(14)} lines=${lines.length}   `);
    await sleep(120);
  }
  console.log("\n");
  fs.writeFileSync("spectra-raw.json", JSON.stringify(SPECTRA));
  // coverage
  const covered=Object.keys(SPECTRA).length;
  const totalLines=Object.values(SPECTRA).reduce((a,b)=>a+b.length,0);
  console.log(`Coverage: ${covered}/99 elements, ${totalLines} total lines`);
  const empties=report.filter(r=>r.n===0);
  if(empties.length) console.log("No visible lines:", empties.map(e=>e.slug+"("+e.status+")").join(", "));
  // validate known
  const nmOf=z=>SPECTRA[z]||[];
  const near=(arr,t,tol=0.5)=>arr.some(w=>Math.abs(w-t)<tol);
  console.log("\nValidation:");
  console.log(" H  656.3/486.1:", near(nmOf(1),656.3)&&near(nmOf(1),486.1), nmOf(1).slice(0,6));
  console.log(" Na 589.0:", near(nmOf(11),589.0), nmOf(11));
  console.log(" Hg 546.1/435.8:", near(nmOf(80),546.1)&&near(nmOf(80),435.8), nmOf(80));
  console.log(" Ca 422.7:", near(nmOf(20),422.7), nmOf(20).slice(0,8));
  console.log(" He 587.6:", near(nmOf(2),587.6), nmOf(2));
  console.log(" Ne (red 585-703):", nmOf(10).filter(w=>w>585&&w<705).length, "lines");
})();
