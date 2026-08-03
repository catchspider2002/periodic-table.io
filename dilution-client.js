// Dilution calculator (C1V1 = C2V2). Fill any three of C1, V1, C2, V2 and it
// solves for the fourth. Pure arithmetic (no element data), so it's fully
// unit-testable. Keep concentration units consistent, and volume units
// consistent — the relation is unit-agnostic.
//
// Browser: window.Dilution. Node (tests): module.exports.

(function (root) {
  "use strict";

  var KEYS = ["c1", "v1", "c2", "v2"];
  var LABEL = { c1: "C₁", v1: "V₁", c2: "C₂", v2: "V₂" };

  // vals: { c1, v1, c2, v2 } with numbers, and one value null/undefined/"".
  // Returns { ok:true, solveFor, value } or { ok:false, error }.
  function solve(vals) {
    vals = vals || {};
    var known = [], unknown = [];
    KEYS.forEach(function (k) {
      var v = vals[k];
      (v === null || v === undefined || v === "" || (typeof v === "number" && !isFinite(v)) ? unknown : known).push(k);
    });
    if (unknown.length !== 1) {
      return { ok: false, error: unknown.length > 1 ? "Leave exactly one field blank" : "Leave one field blank to solve for it" };
    }
    var c1 = +vals.c1, v1 = +vals.v1, c2 = +vals.c2, v2 = +vals.v2;
    // all provided values must be > 0 (concentrations/volumes are positive)
    var bad = known.some(function (k) { return !(+vals[k] > 0); });
    if (bad) return { ok: false, error: "Values must be positive numbers" };
    var u = unknown[0], value;
    if (u === "c1") value = (c2 * v2) / v1;
    else if (u === "v1") value = (c2 * v2) / c1;
    else if (u === "c2") value = (c1 * v1) / v2;
    else value = (c1 * v1) / c2;
    if (!isFinite(value)) return { ok: false, error: "Cannot solve with those values" };
    return { ok: true, solveFor: u, value: value };
  }

  function initDilution(container, opts) {
    opts = opts || {};
    var t = opts.t || {};
    if (!container) return;
    function field(id) {
      return "<div class='dilField'><label class='molarLabel' for='dil_" + id + "'>" + (t[id] || LABEL[id]) +
        "</label><input id='dil_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' " +
        "placeholder='" + (t[id + "ph"] || "") + "' /></div>";
    }
    container.innerHTML =
      "<div class='dilGrid'>" + field("c1") + field("v1") + field("c2") + field("v2") + "</div>" +
      "<div class='dilNote grayText'>" + (t.note || "Leave one field blank. Keep concentration units the same, and volume units the same.") + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var inputs = {};
    KEYS.forEach(function (k) { inputs[k] = container.querySelector("#dil_" + k); });
    var out = container.querySelector(".molarResult");
    function fmt(x) { return (Math.round(x * 1e6) / 1e6).toLocaleString(undefined, { maximumFractionDigits: 6 }); }
    function update() {
      var vals = {};
      KEYS.forEach(function (k) { var s = inputs[k].value.trim(); vals[k] = s === "" ? null : parseFloat(s); });
      var anyFilled = KEYS.some(function (k) { return vals[k] !== null; });
      if (!anyFilled) { out.innerHTML = ""; return; }
      var r = solve(vals);
      out.innerHTML = r.ok
        ? "<div class='molarMass'>" + (t[r.solveFor] || LABEL[r.solveFor]) + " = " + fmt(r.value) + "</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    KEYS.forEach(function (k) { inputs[k].addEventListener("input", update); });
    return { update: update };
  }

  var api = { solve, initDilution };
  root.Dilution = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
