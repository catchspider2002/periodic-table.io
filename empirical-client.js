// Empirical-formula calculator (feedback cluster: compounds) — Pro-gated.
//
// Given element percentages (or masses), finds the simplest whole-number
// formula: moles = amount / atomic weight, divide by the smallest, then scale
// to integers. Atomic weights come from window.MOLAR_WEIGHTS. Deterministic,
// so the solver is fully unit-testable.
//
// Browser: window.Empirical. Node (tests): module.exports.

(function (root) {
  "use strict";

  // Parse "C 40, H 6.7, O 53.3" / "C:40 H:6.7 O:53.3" / "Fe=70 O=30" into
  // [{sym, amount}]. Numbers may be integers or decimals.
  function parseAmounts(input) {
    var re = /([A-Z][a-z]?)\s*[:=]?\s*(\d+(?:\.\d+)?)/g;
    var out = [], m;
    while ((m = re.exec(String(input == null ? "" : input)))) {
      out.push({ sym: m[1], amount: parseFloat(m[2]) });
    }
    return out;
  }

  // Returns { ok:true, formula, parts:[{sym,count}], approximate } or { ok:false, error }.
  function solve(input, weights) {
    weights = weights || root.MOLAR_WEIGHTS || {};
    var pairs = parseAmounts(input);
    if (!pairs.length) return { ok: false, error: "Enter element amounts, e.g. C 40, H 6.7, O 53.3" };
    var moles = [];
    for (var i = 0; i < pairs.length; i++) {
      var p = pairs[i];
      if (!Object.prototype.hasOwnProperty.call(weights, p.sym)) return { ok: false, error: "Unknown element: " + p.sym };
      if (!(p.amount > 0)) return { ok: false, error: "Amounts must be positive" };
      moles.push({ sym: p.sym, mol: p.amount / weights[p.sym] });
    }
    var minMol = Infinity;
    for (var a = 0; a < moles.length; a++) if (moles[a].mol < minMol) minMol = moles[a].mol;
    var ratios = moles.map(function (m) { return m.mol / minMol; });

    // Smallest multiplier k that makes every ratio near a whole number.
    var best = null;
    for (var k = 1; k <= 10; k++) {
      var err = 0, counts = [], bad = false;
      for (var r = 0; r < ratios.length; r++) {
        var v = ratios[r] * k, rd = Math.round(v);
        if (rd < 1) { bad = true; break; }
        err += Math.abs(v - rd);
        counts.push(rd);
      }
      if (bad) continue;
      if (best === null || err < best.err) best = { k: k, counts: counts, err: err };
      if (err < 0.08) break;
    }
    if (!best) return { ok: false, error: "Could not determine a formula" };

    var parts = moles.map(function (m, idx) { return { sym: m.sym, count: best.counts[idx] }; });
    var formula = parts.map(function (p) { return p.sym + (p.count === 1 ? "" : p.count); }).join("");
    return { ok: true, formula: formula, parts: parts, approximate: best.err >= 0.08 };
  }

  function isProUser() {
    try {
      return /(?:^|;\s*)ptio_pro=1(?:;|$)/.test(document.cookie);
    } catch (e) { return false; }
  }

  function initEmpirical(container, opts) {
    opts = opts || {};
    var weights = opts.weights || root.MOLAR_WEIGHTS || {};
    var t = opts.t || {};
    var isPro = opts.isPro != null ? opts.isPro : isProUser();
    if (!container) return;

    if (!isPro) {
      container.innerHTML =
        "<div class='quizGate'><div class='quizGateTitle'>" + (t.proTitle || "Empirical formula is a Pro feature") +
        "</div><div class='quizGateText'>" + (t.proText || "Find formulas from composition, ad-free.") + "</div></div>";
      var btn = document.createElement("button");
      btn.className = "quizGateCta";
      btn.textContent = t.proCta || "Go Pro";
      btn.addEventListener("click", function () { if (opts.onSubscribe) opts.onSubscribe(); });
      container.querySelector(".quizGate").appendChild(btn);
      return { gated: true };
    }

    container.innerHTML =
      "<label class='molarLabel' for='empInput'>" + (t.label || "Enter element percentages or masses") + "</label>" +
      "<input id='empInput' class='molarInput' type='text' autocomplete='off' autocapitalize='off' spellcheck='false' " +
      "placeholder='" + (t.placeholder || "e.g. C 40, H 6.7, O 53.3") + "' />" +
      "<div class='molarResult' aria-live='polite'></div>";
    var input = container.querySelector("#empInput");
    var out = container.querySelector(".molarResult");
    function update() {
      var v = input.value;
      if (!v.trim()) { out.innerHTML = ""; return; }
      var r = solve(v, weights);
      if (!r.ok) { out.innerHTML = "<span class='molarError'>" + r.error + "</span>"; return; }
      out.innerHTML = "<div class='balEquation'>" + r.formula + "</div>" +
        (r.approximate ? "<div class='grayText'>" + (t.approx || "Approximate - check your inputs.") + "</div>" : "");
    }
    input.addEventListener("input", update);
    return { update: update };
  }

  var api = { parseAmounts, solve, initEmpirical, isProUser };
  root.Empirical = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
