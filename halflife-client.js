// Half-life / radioactive decay calculator: N = N0 · (1/2)^(t / t½).
// Fill any three of { N0 (initial), N (remaining), t (elapsed), half (half-life) }
// and it solves the fourth. Keep t and half in the same time unit.
// Pure arithmetic → fully unit-testable.
//
// Browser: window.HalfLife. Node (tests): module.exports.

(function (root) {
  "use strict";

  var LN2 = Math.log(2);
  var KEYS = ["n0", "n", "t", "half"];
  var LABEL = { n0: "N₀", n: "N", t: "t", half: "t½" };

  // o: { n0, n, t, half } with one value blank.
  // Returns { ok, solveFor, value } | { ok:false, error }.
  function solve(o) {
    o = o || {};
    var blank = function (x) { return x === null || x === undefined || x === "" || !isFinite(+x); };
    var unknown = KEYS.filter(function (k) { return blank(o[k]); });
    if (unknown.length !== 1) {
      return { ok: false, error: unknown.length > 1 ? "Leave exactly one field blank" : "Leave one field blank to solve for it" };
    }
    var n0 = +o.n0, n = +o.n, t = +o.t, half = +o.half, u = unknown[0];
    // Amounts and half-life must be positive; elapsed time may be 0 but not negative.
    var pos = { n0: true, n: true, t: false, half: true };
    if (KEYS.some(function (k) {
      if (unknown.indexOf(k) >= 0) return false;
      return pos[k] ? !(+o[k] > 0) : !(+o[k] >= 0);
    })) {
      return { ok: false, error: "Amounts and half-life must be positive; time cannot be negative" };
    }
    var val;
    if (u === "n") {
      val = n0 * Math.pow(0.5, t / half);
    } else if (u === "n0") {
      val = n / Math.pow(0.5, t / half);
    } else if (u === "t") {
      if (n >= n0) return { ok: false, error: "Remaining must be less than initial to find elapsed time" };
      val = half * Math.log(n0 / n) / LN2;
    } else { // half
      if (n >= n0) return { ok: false, error: "Remaining must be less than initial to find half-life" };
      if (!(t > 0)) return { ok: false, error: "Elapsed time must be positive to find half-life" };
      val = t * LN2 / Math.log(n0 / n);
    }
    if (!isFinite(val)) return { ok: false, error: "Cannot solve with those values" };
    return { ok: true, solveFor: u, value: val };
  }

  function isProUser() {
    try {
      return /(?:^|;\s*)ptio_pro=1(?:;|$)/.test(document.cookie);
    } catch (e) { return false; }
  }

  function initHalfLife(container, opts) {
    opts = opts || {};
    var t = opts.t || {};
    if (!container) return;
    var isPro = opts.isPro != null ? opts.isPro : isProUser();

    if (!isPro) {
      container.innerHTML =
        "<div class='quizGate'><div class='quizGateTitle'>" + (t.proTitle || "Half-life calculator is a Pro feature") +
        "</div><div class='quizGateText'>" + (t.proText || "Solve decay problems instantly, ad-free.") + "</div></div>";
      var btn = document.createElement("button");
      btn.className = "quizGateCta";
      btn.textContent = t.proCta || "Go Pro";
      btn.addEventListener("click", function () { if (opts.onSubscribe) opts.onSubscribe(); });
      container.querySelector(".quizGate").appendChild(btn);
      return { gated: true };
    }

    var L = {
      n0: t.n0 || "Initial amount (N₀)", n: t.n || "Remaining amount (N)",
      t: t.t || "Elapsed time", half: t.half || "Half-life (same time unit)",
    };
    function field(id, label) {
      return "<div class='dilField'><label class='molarLabel' for='hl_" + id + "'>" + label +
        "</label><input id='hl_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' /></div>";
    }
    container.innerHTML =
      "<div class='dilGrid'>" + field("n0", L.n0) + field("n", L.n) + field("t", L.t) + field("half", L.half) + "</div>" +
      "<div class='dilNote grayText'>" + (t.note || "Leave one field blank. Use the same time unit for elapsed time and half-life.") + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var ins = {};
    KEYS.forEach(function (k) { ins[k] = container.querySelector("#hl_" + k); });
    var out = container.querySelector(".molarResult");
    function fmt(x) { return (Math.round(x * 1e6) / 1e6).toLocaleString(undefined, { maximumFractionDigits: 6 }); }
    function update() {
      var vals = {};
      KEYS.forEach(function (k) { var s = ins[k].value.trim(); vals[k] = s === "" ? null : parseFloat(s); });
      if (!KEYS.some(function (k) { return vals[k] !== null; })) { out.innerHTML = ""; return; }
      var r = solve(vals);
      out.innerHTML = r.ok
        ? "<div class='molarMass'>" + (L[r.solveFor] || LABEL[r.solveFor]) + " = " + fmt(r.value) + "</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    KEYS.forEach(function (k) { ins[k].addEventListener("input", update); });
    return { update: update };
  }

  var api = { solve: solve, initHalfLife: initHalfLife, isProUser: isProUser };
  root.HalfLife = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
