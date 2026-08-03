// Percent yield calculator: percent yield = actual / theoretical × 100.
// Fill any two of { actual, theoretical, percent } and it solves the third.
// Pure arithmetic → fully unit-testable.
//
// Browser: window.PercentYield. Node (tests): module.exports.

(function (root) {
  "use strict";

  var KEYS = ["actual", "theoretical", "percent"];

  // o: { actual, theoretical, percent } with one value blank.
  // Returns { ok, solveFor, value } | { ok:false, error }.
  function solve(o) {
    o = o || {};
    var blank = function (x) { return x === null || x === undefined || x === "" || !isFinite(+x); };
    var unknown = KEYS.filter(function (k) { return blank(o[k]); });
    if (unknown.length !== 1) {
      return { ok: false, error: unknown.length > 1 ? "Leave exactly one field blank" : "Leave one field blank to solve for it" };
    }
    // Given values must be positive (a 0% or 0 g yield is degenerate here).
    if (KEYS.some(function (k) { return unknown.indexOf(k) < 0 && !(+o[k] > 0); })) {
      return { ok: false, error: "Values must be positive" };
    }
    var a = +o.actual, th = +o.theoretical, p = +o.percent, u = unknown[0], val;
    if (u === "percent") val = (a / th) * 100;
    else if (u === "actual") val = (p * th) / 100;
    else val = (a * 100) / p; // theoretical
    if (!isFinite(val)) return { ok: false, error: "Cannot solve with those values" };
    return { ok: true, solveFor: u, value: val };
  }

  function initYield(container, opts) {
    opts = opts || {};
    var t = opts.t || {};
    if (!container) return;
    var L = {
      actual: t.actual || "Actual yield (g)",
      theoretical: t.theoretical || "Theoretical yield (g)",
      percent: t.percent || "Percent yield (%)",
    };
    function field(id, label) {
      return "<div class='dilField'><label class='molarLabel' for='yld_" + id + "'>" + label +
        "</label><input id='yld_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' /></div>";
    }
    container.innerHTML =
      "<div class='dilGrid'>" + field("actual", L.actual) + field("theoretical", L.theoretical) + field("percent", L.percent) + "</div>" +
      "<div class='dilNote grayText'>" + (t.note || "Leave one field blank to solve for it.") + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var ins = {};
    KEYS.forEach(function (k) { ins[k] = container.querySelector("#yld_" + k); });
    var out = container.querySelector(".molarResult");
    function fmt(x) { return (Math.round(x * 1e6) / 1e6).toLocaleString(undefined, { maximumFractionDigits: 6 }); }
    function update() {
      var vals = {};
      KEYS.forEach(function (k) { var s = ins[k].value.trim(); vals[k] = s === "" ? null : parseFloat(s); });
      if (!KEYS.some(function (k) { return vals[k] !== null; })) { out.innerHTML = ""; return; }
      var r = solve(vals);
      out.innerHTML = r.ok
        ? "<div class='molarMass'>" + L[r.solveFor] + " = " + fmt(r.value) + (r.solveFor === "percent" ? "%" : "") + "</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    KEYS.forEach(function (k) { ins[k].addEventListener("input", update); });
    return { update: update };
  }

  var api = { solve: solve, initYield: initYield };
  root.PercentYield = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
