// Periodic-table quiz (feedback #102924) — a Pro-gated practice mode.
//
// Runs on the quiz page: reads a baked `window.QUIZ_DATA` (elements for the
// current language) and generates randomized multiple-choice questions from
// data already on the site (symbol / name / atomic number). No new dataset.
//
// This file is written to be usable two ways:
//   • In the browser  -> exposes window.Quiz with generateQuestion + initQuiz.
//   • In Node (tests)  -> module.exports the same, with a seeded RNG so the
//     pure question-generation logic is deterministically testable.
//
// Pro gate: the quiz itself is gated on the `ptio_pro=1` cookie (same signal
// the ad loader uses). Non-Pro visitors get a subscribe/login prompt instead.

(function (root) {
  "use strict";

  // --- deterministic PRNG (mulberry32) so tests are reproducible ------------
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(rng, arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // Pick k distinct elements from `pool` (by reference) excluding `exclude`.
  function pickDistinct(rng, pool, k, exclude) {
    const out = [];
    const seen = new Set([exclude]);
    let guard = 0;
    while (out.length < k && guard++ < pool.length * 8) {
      const el = pool[Math.floor(rng() * pool.length)];
      if (seen.has(el)) continue;
      seen.add(el);
      out.push(el);
    }
    return out;
  }

  function fmt(tpl, val) { return String(tpl).replace("{0}", val); }

  // Question types. `key` is the element field being asked for; symbol, name
  // and atomic number are all unique per element, so distractors never collide.
  const TYPES = [
    { id: "name2sym", key: "sym",  q: (t, el) => fmt(t.nameToSymbol || "What is the chemical symbol for {0}?", el.name) },
    { id: "sym2name", key: "name", q: (t, el) => fmt(t.symbolToName || "Which element has the symbol {0}?", el.sym) },
    { id: "num2name", key: "name", q: (t, el) => fmt(t.numberToName || "Which element has atomic number {0}?", el.n) },
    { id: "name2num", key: "n",    q: (t, el) => fmt(t.nameToNumber || "What is the atomic number of {0}?", el.name) },
  ];

  // Pure: build one question. Returns { type, prompt, options[4], answer }.
  function generateQuestion(data, rng, t) {
    t = t || {};
    const type = TYPES[Math.floor(rng() * TYPES.length)];
    const el = data[Math.floor(rng() * data.length)];
    const wrong = pickDistinct(rng, data, 3, el);
    const optionEls = shuffle(rng, [el].concat(wrong));
    return {
      type: type.id,
      prompt: type.q(t, el),
      options: optionEls.map((x) => String(x[type.key])),
      answer: optionEls.indexOf(el),
    };
  }

  function isProUser() {
    try {
      return /(?:^|;\s*)ptio_pro=1(?:;|$)/.test(document.cookie);
    } catch (e) { return false; }
  }

  // --- UI controller --------------------------------------------------------
  // opts: { data, t, isPro (override), onSubscribe, rng (override for tests) }
  function initQuiz(container, opts) {
    opts = opts || {};
    const data = opts.data || (root.QUIZ_DATA || []);
    const t = opts.t || {};
    const rng = opts.rng || Math.random;
    const isPro = opts.isPro != null ? opts.isPro : isProUser();

    if (!container) return;

    if (!isPro) {
      container.innerHTML =
        "<div class='quizGate'><div class='quizGateTitle'>" +
        (t.proTitle || "Quiz is a Pro feature") + "</div><div class='quizGateText'>" +
        (t.proText || "Practice with unlimited questions, ad-free.") + "</div></div>";
      const btn = document.createElement("button");
      btn.className = "quizGateCta";
      btn.textContent = t.proCta || "Go Pro";
      btn.addEventListener("click", function () { if (opts.onSubscribe) opts.onSubscribe(); });
      container.querySelector(".quizGate").appendChild(btn);
      return { gated: true };
    }

    if (!data.length) {
      container.textContent = t.noData || "Quiz unavailable.";
      return { gated: false, empty: true };
    }

    let score = 0, asked = 0, streak = 0, best = 0, answered = false;
    container.innerHTML =
      "<div class='quizHead'><span class='quizScore'></span><span class='quizStreak'></span></div>" +
      "<div class='quizPrompt'></div><div class='quizOptions'></div>" +
      "<div class='quizFeedback' aria-live='polite'></div>" +
      "<button class='quizNext' hidden></button>";
    const $ = (s) => container.querySelector(s);

    function updateHead() {
      $(".quizScore").textContent = (t.score || "Score") + ": " + score + "/" + asked;
      $(".quizStreak").textContent = (t.streak || "Streak") + ": " + streak + (best ? " (" + (t.best || "best") + " " + best + ")" : "");
    }

    function next() {
      answered = false;
      const q = generateQuestion(data, rng, t);
      $(".quizPrompt").textContent = q.prompt;
      $(".quizFeedback").textContent = "";
      const next = $(".quizNext"); next.hidden = true;
      const opts_ = $(".quizOptions"); opts_.innerHTML = "";
      q.options.forEach(function (opt, i) {
        const b = document.createElement("button");
        b.className = "quizOption";
        b.textContent = opt;
        b.addEventListener("click", function () { answer(i, q, opts_, next); });
        opts_.appendChild(b);
      });
    }

    function answer(i, q, opts_, next) {
      if (answered) return;
      answered = true;
      asked++;
      const buttons = opts_.querySelectorAll(".quizOption");
      buttons[q.answer].classList.add("correct");
      if (i === q.answer) {
        score++; streak++; best = Math.max(best, streak);
        $(".quizFeedback").textContent = t.correct || "Correct!";
      } else {
        streak = 0;
        buttons[i].classList.add("wrong");
        $(".quizFeedback").textContent = t.wrong || "Not quite.";
      }
      buttons.forEach(function (b) { b.disabled = true; });
      next.hidden = false;
      updateHead();
    }

    $(".quizNext").textContent = t.next || "Next question";
    $(".quizNext").addEventListener("click", next);
    updateHead();
    next();
    return { gated: false };
  }

  const api = { mulberry32, generateQuestion, initQuiz, isProUser, TYPES };
  root.Quiz = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
