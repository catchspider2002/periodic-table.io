const fs = require("fs");
const Constants = require("./htmlConstants.js");

// The client engine is inlined into each quiz page (it only runs on the quiz
// page, so no need to bloat the shared htmlJS bundle). Read once at load.
const quizEngine = fs.readFileSync(__dirname + "/quiz-client.js", "utf8");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  const writeStream = fs.createWriteStream(`${lang}/${page}.html`);

  defaultHead.forEach((h) => writeStream.write(h));
  metaTags.forEach((t) => writeStream.write(t));
  defaultNav.forEach((n) => writeStream.write(n));

  writeStream.write(`<h1 class='truncate'>${langValues[page] || "Quiz"}</h1>`);

  nav4.forEach((n) => writeStream.write(n));

  // Element dataset for the quiz: atomic number, symbol, localized name.
  // Dedupe the two decimal-variant copies in rawData by atomic number.
  const seen = new Set();
  const quizData = [];
  Constants.rawData.forEach((e) => {
    const n = parseInt(e.num, 10);
    if (seen.has(n) || !e.sym || !e.nme) return;
    seen.add(n);
    quizData.push({ n, sym: e.sym, name: langValues[e.nme] || e.nme });
  });

  // Localized UI strings (English fallback until added to the Excel). The Pro
  // CTA reuses the existing, already-localized "remove ads" string.
  const t = {
    nameToSymbol: langValues.quizNameToSymbol || "What is the chemical symbol for {0}?",
    symbolToName: langValues.quizSymbolToName || "Which element has the symbol {0}?",
    numberToName: langValues.quizNumberToName || "Which element has atomic number {0}?",
    nameToNumber: langValues.quizNameToNumber || "What is the atomic number of {0}?",
    correct: langValues.quizCorrect || "Correct!",
    wrong: langValues.quizWrong || "Not quite.",
    next: langValues.quizNext || "Next question",
    score: langValues.quizScore || "Score",
    streak: langValues.quizStreak || "Streak",
    best: langValues.quizBest || "best",
    proTitle: langValues.quizProTitle || "Quiz is a Pro feature",
    proText: langValues.quizProText || "Practice with unlimited questions, ad-free.",
    proCta: langValues.removeAds || "Remove ads - $1/month",
    noData: langValues.quizNoData || "Quiz unavailable.",
  };

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write(`<div class='quizIntro grayText'>${langValues.quizIntro || "Test yourself on the elements. A Pro feature."}</div>`);
  writeStream.write("<div id='quizApp' class='quizApp'></div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  // Baked data + engine + init (inline; run in order, #quizApp already in DOM).
  writeStream.write(`<script>window.QUIZ_DATA=${JSON.stringify(quizData)};</script>`);
  writeStream.write(`<script>${quizEngine}</script>`);
  writeStream.write(
    `<script>window.__quizT=${JSON.stringify(t)};(function(){var el=document.getElementById('quizApp');` +
      `if(el&&window.Quiz){window.Quiz.initQuiz(el,{data:window.QUIZ_DATA,t:window.__quizT,` +
      `onSubscribe:function(){if(window.sideBar){window.sideBar();}else{location.href='https://periodictabio.gumroad.com/l/pro';}}});}})();</script>`
  );

  defaultFooter.forEach((f) => writeStream.write(f));

  writeStream.on("finish", () => console.log(`Created ${lang}-${page}`));
  writeStream.end();
};

exports.writeFile = writeFile;
