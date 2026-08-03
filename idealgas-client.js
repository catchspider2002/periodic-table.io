// Ideal gas law calculator (PV = nRT). Fill any three of P, V, n, T and it
// solves the fourth, with R = 0.082057 L·atm·mol⁻¹·K⁻¹. Use atm, L, mol, K.
// Pure arithmetic → fully unit-testable.
//
// Browser: window.IdealGas. Node (tests): module.exports.

(function (root) {
  "use strict";

  var R = 0.0820573; // L·atm·mol⁻¹·K⁻¹
  var KEYS = ["p", "v", "n", "t"];
  var LABEL = { p: "P", v: "V", n: "n", t: "T" };

  // o: { p, v, n, t } with one value blank. Returns { ok, solveFor, value } | { ok:false, error }.
  function solve(o) {
    o = o || {};
    var blank = function (x) { return x === null || x === undefined || x === "" || !isFinite(+x); };
    var unknown = KEYS.filter(function (k) { return blank(o[k]); });
    if (unknown.length !== 1) {
      return { ok: false, error: unknown.length > 1 ? "Leave exactly one field blank" : "Leave one field blank to solve for it" };
    }
    if (KEYS.some(function (k) { return unknown.indexOf(k) < 0 && !(+o[k] > 0); })) {
      return { ok: false, error: "Values must be positive" };
    }
    var p = +o.p, v = +o.v, n = +o.n, t = +o.t, u = unknown[0], val;
    if (u === "p") val = (n * R * t) / v;
    else if (u === "v") val = (n * R * t) / p;
    else if (u === "n") val = (p * v) / (R * t);
    else val = (p * v) / (n * R);
    if (!isFinite(val)) return { ok: false, error: "Cannot solve with those values" };
    return { ok: true, solveFor: u, value: val };
  }

  function initIdealGas(container, opts) {
    opts = opts || {};
    var t = opts.t || {};
    if (!container) return;
    var L = {
      p: t.p || "Pressure (atm)", v: t.v || "Volume (L)",
      n: t.n || "Moles (mol)", t: t.t || "Temperature (K)",
    };
    function field(id, label) {
      return "<div class='dilField'><label class='molarLabel' for='gas_" + id + "'>" + label +
        "</label><input id='gas_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' /></div>";
    }
    container.innerHTML =
      "<div class='dilGrid'>" + field("p", L.p) + field("v", L.v) + field("n", L.n) + field("t", L.t) + "</div>" +
      "<div class='dilNote grayText'>" + (t.note || "Leave one field blank. R = 0.082057 L·atm·mol⁻¹·K⁻¹ (use atm, L, mol, K).") + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var ins = {};
    KEYS.forEach(function (k) { ins[k] = container.querySelector("#gas_" + k); });
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

  var api = { R: R, solve: solve, initIdealGas: initIdealGas };
  root.IdealGas = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
