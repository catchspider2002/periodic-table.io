// Molarity calculator. Enter a formula (or a molar mass directly), then fill
// two of Mass / Volume / Molarity to solve the third, via
//   molarity = mass / (molarMass · volume).
// Reuses the molar parser (window.Molar) to turn a formula into a molar mass.
//
// Browser: window.Molarity. Node (tests): module.exports.

(function (root) {
  "use strict";

  // Resolve the first field to a molar mass: a bare number is used as-is,
  // otherwise it's parsed as a chemical formula. { ok, mass, formula } | { ok:false, error }.
  function resolveMolarMass(input, weights) {
    var s = String(input == null ? "" : input).trim();
    if (!s) return { ok: false, error: "Enter a formula or molar mass" };
    if (/^\d+(\.\d+)?$/.test(s)) return { ok: true, mass: parseFloat(s) };
    var M = root.Molar;
    if (!M) return { ok: false, error: "parser unavailable" };
    var r = M.parse(s, weights || root.MOLAR_WEIGHTS || {});
    if (!r.ok) return { ok: false, error: r.error };
    return { ok: true, mass: r.mass, formula: true };
  }

  // o: { molarMass, mass, volume, molarity } — molarMass required, exactly one
  // of mass/volume/molarity blank. Volume in litres, mass in grams.
  function solve(o) {
    o = o || {};
    var Mw = +o.molarMass;
    if (!(Mw > 0)) return { ok: false, error: "Enter a valid formula or molar mass" };
    var keys = ["mass", "volume", "molarity"];
    var blank = function (v) { return v === null || v === undefined || v === "" || !isFinite(+v); };
    var unknown = keys.filter(function (k) { return blank(o[k]); });
    if (unknown.length !== 1) {
      return { ok: false, error: unknown.length > 1 ? "Leave one of mass / volume / molarity blank" : "Leave one field blank to solve for it" };
    }
    if (keys.some(function (k) { return unknown.indexOf(k) < 0 && !(+o[k] > 0); })) {
      return { ok: false, error: "Values must be positive" };
    }
    var mass = +o.mass, volume = +o.volume, molarity = +o.molarity, u = unknown[0], val;
    if (u === "mass") val = molarity * Mw * volume;
    else if (u === "volume") val = mass / (Mw * molarity);
    else val = mass / (Mw * volume);
    if (!isFinite(val)) return { ok: false, error: "Cannot solve with those values" };
    return { ok: true, solveFor: u, value: val, molarMass: Mw };
  }

  function initMolarity(container, opts) {
    opts = opts || {};
    var weights = opts.weights || root.MOLAR_WEIGHTS || {};
    var t = opts.t || {};
    if (!container) return;
    var LABEL = { mass: t.mass || "Mass (g)", volume: t.volume || "Volume (L)", molarity: t.molarity || "Molarity (mol/L)" };
    function field(id, label) {
      return "<div class='dilField'><label class='molarLabel' for='mol_" + id + "'>" + label +
        "</label><input id='mol_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' /></div>";
    }
    container.innerHTML =
      "<label class='molarLabel' for='mol_formula'>" + (t.formula || "Formula or molar mass (g/mol)") + "</label>" +
      "<input id='mol_formula' class='molarInput' type='text' autocomplete='off' autocapitalize='off' spellcheck='false' placeholder='" + (t.formulaPh || "e.g. NaCl or 58.44") + "' />" +
      "<div class='molarMassReadout grayText'></div>" +
      "<div class='dilNote grayText'>" + (t.note || "Then leave one of the three blank to solve for it.") + "</div>" +
      "<div class='dilGrid'>" + field("mass", LABEL.mass) + field("volume", LABEL.volume) + field("molarity", LABEL.molarity) + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var fEl = container.querySelector("#mol_formula");
    var readout = container.querySelector(".molarMassReadout");
    var out = container.querySelector(".molarResult");
    var ins = { mass: container.querySelector("#mol_mass"), volume: container.querySelector("#mol_volume"), molarity: container.querySelector("#mol_molarity") };
    function fmt(x) { return (Math.round(x * 1e6) / 1e6).toLocaleString(undefined, { maximumFractionDigits: 6 }); }
    function update() {
      var mm = resolveMolarMass(fEl.value, weights);
      readout.innerHTML = fEl.value.trim() ? (mm.ok ? (t.molarMassLabel || "Molar mass") + ": " + fmt(mm.mass) + " g/mol" : "<span class='molarError'>" + mm.error + "</span>") : "";
      var vals = { molarMass: mm.ok ? mm.mass : null };
      ["mass", "volume", "molarity"].forEach(function (k) { var s = ins[k].value.trim(); vals[k] = s === "" ? null : parseFloat(s); });
      var anyNum = ["mass", "volume", "molarity"].some(function (k) { return vals[k] !== null; });
      if (!mm.ok || !anyNum) { out.innerHTML = ""; return; }
      var r = solve(vals);
      out.innerHTML = r.ok
        ? "<div class='molarMass'>" + LABEL[r.solveFor] + " = " + fmt(r.value) + "</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    [fEl, ins.mass, ins.volume, ins.molarity].forEach(function (el) { el.addEventListener("input", update); });
    return { update: update };
  }

  var api = { resolveMolarMass, solve, initMolarity };
  root.Molarity = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
