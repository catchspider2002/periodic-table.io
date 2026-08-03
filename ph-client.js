// pH / pOH calculator at 25 °C (Kw = 1.0×10⁻¹⁴). Enter any ONE of
// { pH, pOH, [H⁺], [OH⁻] } and it derives the other three.
//   [H⁺] = 10^-pH,  pH = -log₁₀[H⁺],  pH + pOH = 14,  [H⁺][OH⁻] = Kw
// Pure arithmetic → fully unit-testable.
//
// Browser: window.PH. Node (tests): module.exports.

(function (root) {
  "use strict";

  var KW = 1e-14;
  var KEYS = ["ph", "poh", "h", "oh"];
  var log10 = Math.log10 || function (x) { return Math.log(x) / Math.LN10; };

  // o: { ph, poh, h, oh } with exactly one value filled.
  // Returns { ok, ph, poh, h, oh } | { ok:false, error }.
  function solve(o) {
    o = o || {};
    var blank = function (x) { return x === null || x === undefined || x === "" || !isFinite(+x); };
    var given = KEYS.filter(function (k) { return !blank(o[k]); });
    if (given.length !== 1) {
      return { ok: false, error: given.length === 0 ? "Enter one value" : "Enter only one value" };
    }
    var g = given[0], h;
    if (g === "h") { h = +o.h; if (!(h > 0)) return { ok: false, error: "[H⁺] must be positive" }; }
    else if (g === "oh") { var oh = +o.oh; if (!(oh > 0)) return { ok: false, error: "[OH⁻] must be positive" }; h = KW / oh; }
    else if (g === "ph") { h = Math.pow(10, -(+o.ph)); }
    else { h = Math.pow(10, -(14 - (+o.poh))); } // poh -> ph -> h
    if (!(h > 0) || !isFinite(h)) return { ok: false, error: "Cannot solve with that value" };
    var ohc = KW / h;
    var ph = -log10(h), poh = -log10(ohc);
    return { ok: true, ph: ph, poh: poh, h: h, oh: ohc };
  }

  function initPH(container, opts) {
    opts = opts || {};
    var t = opts.t || {};
    if (!container) return;
    var L = {
      ph: t.ph || "pH", poh: t.poh || "pOH",
      h: t.h || "[H⁺] (mol/L)", oh: t.oh || "[OH⁻] (mol/L)",
    };
    function field(id, label) {
      return "<div class='dilField'><label class='molarLabel' for='ph_" + id + "'>" + label +
        "</label><input id='ph_" + id + "' class='molarInput' type='text' inputmode='decimal' autocomplete='off' /></div>";
    }
    container.innerHTML =
      "<div class='dilGrid'>" + field("ph", L.ph) + field("poh", L.poh) + field("h", L.h) + field("oh", L.oh) + "</div>" +
      "<div class='dilNote grayText'>" + (t.note || "Enter any one value to get the rest. Assumes 25 °C (Kw = 1.0×10⁻¹⁴).") + "</div>" +
      "<div class='molarResult' aria-live='polite'></div>";
    var ins = {};
    KEYS.forEach(function (k) { ins[k] = container.querySelector("#ph_" + k); });
    var out = container.querySelector(".molarResult");
    function fmtP(x) { return (Math.round(x * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 }); }
    function fmtC(x) { return x.toExponential(3); }
    function update(src) {
      var vals = {};
      KEYS.forEach(function (k) { var s = ins[k].value.trim(); vals[k] = s === "" ? null : parseFloat(s); });
      if (!KEYS.some(function (k) { return vals[k] !== null; })) { out.innerHTML = ""; return; }
      // Only the field being typed in counts as the input; clear the others.
      if (src) { KEYS.forEach(function (k) { if (k !== src) vals[k] = null; }); }
      var r = solve(vals);
      out.innerHTML = r.ok
        ? "<div class='molarMass'>pH = " + fmtP(r.ph) + " &nbsp; pOH = " + fmtP(r.poh) +
          "</div><div class='molarBreakdown'>[H⁺] = " + fmtC(r.h) + " mol/L &nbsp; [OH⁻] = " + fmtC(r.oh) + " mol/L</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    KEYS.forEach(function (k) { ins[k].addEventListener("input", function () { update(k); }); });
    return { update: update };
  }

  var api = { KW: KW, solve: solve, initPH: initPH };
  root.PH = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
