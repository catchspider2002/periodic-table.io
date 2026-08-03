// Molar-mass / molecular-weight calculator (feedback #139736).
//
// Parses a chemical formula and sums atomic weights that are already on the
// site (baked as window.MOLAR_WEIGHTS from htmlConstants `aWt`). Handles
// nested parentheses/brackets and hydrate dots, e.g. Ca(OH)2, (NH4)2SO4,
// CuSO4·5H2O. Deterministic, so it's fully unit-testable.
//
// Browser: exposes window.Molar. Node (tests): module.exports the same.

(function (root) {
  "use strict";

  var SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };

  function normalize(s) {
    return String(s == null ? "" : s)
      .replace(/\s+/g, "")
      .replace(/[₀-₉]/g, function (d) { return SUB[d] || d; })
      .replace(/[（）]/g, function (d) { return d === "（" ? "(" : ")"; }); // full-width parens
  }

  // Parse a single segment (no hydrate dots). Returns { composition, mass } or
  // throws Error with a human-readable message.
  function parseSegment(str, weights) {
    var stack = [{}];
    var i = 0, n = str.length;
    function add(map, sym, cnt) { map[sym] = (map[sym] || 0) + cnt; }
    function readInt() {
      var num = 0, has = false;
      while (i < n && str[i] >= "0" && str[i] <= "9") { num = num * 10 + (+str[i]); i++; has = true; }
      return has ? num : 1;
    }
    while (i < n) {
      var c = str[i];
      if (c === "(" || c === "[" || c === "{") { stack.push({}); i++; }
      else if (c === ")" || c === "]" || c === "}") {
        i++;
        var mult = readInt();
        if (stack.length < 2) throw new Error("Unbalanced parentheses");
        var top = stack.pop();
        var parent = stack[stack.length - 1];
        for (var s in top) add(parent, s, top[s] * mult);
      } else if (c >= "A" && c <= "Z") {
        var sym = c; i++;
        while (i < n && str[i] >= "a" && str[i] <= "z") { sym += str[i]; i++; }
        var cnt = readInt();
        if (!Object.prototype.hasOwnProperty.call(weights, sym)) throw new Error("Unknown element: " + sym);
        add(stack[stack.length - 1], sym, cnt);
      } else {
        throw new Error("Unexpected character: " + c);
      }
    }
    if (stack.length !== 1) throw new Error("Unbalanced parentheses");
    var comp = stack[0], mass = 0;
    for (var k in comp) mass += comp[k] * weights[k];
    return { composition: comp, mass: mass };
  }

  // Public: parse a full formula (with hydrates). Returns a result object:
  //   { ok:true, mass, composition:{sym:count}, breakdown:[{sym,count,weight,subtotal}] }
  //   { ok:false, error }
  function parse(input, weights) {
    weights = weights || root.MOLAR_WEIGHTS || {};
    var str = normalize(input);
    if (!str) return { ok: false, error: "Enter a formula" };
    try {
      var segs = str.split(/[·•*.]/);
      var comp = {}, mass = 0;
      for (var q = 0; q < segs.length; q++) {
        var seg = segs[q];
        if (!seg) continue;
        var coef = 1, m = seg.match(/^(\d+)/);
        if (m) { coef = parseInt(m[1], 10); seg = seg.slice(m[1].length); }
        if (!seg) throw new Error("Invalid formula");
        var r = parseSegment(seg, weights);
        mass += r.mass * coef;
        for (var s in r.composition) comp[s] = (comp[s] || 0) + r.composition[s] * coef;
      }
      if (!Object.keys(comp).length) return { ok: false, error: "Enter a formula" };
      var breakdown = Object.keys(comp).map(function (s) {
        return { sym: s, count: comp[s], weight: weights[s], subtotal: comp[s] * weights[s] };
      }).sort(function (a, b) { return b.subtotal - a.subtotal; });
      return { ok: true, mass: mass, composition: comp, breakdown: breakdown };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  // Percent composition by mass: parse a formula, then each element's share of
  // the total molar mass. Returns { ok, mass, rows:[{sym,count,subtotal,percent}] }.
  function percentComposition(input, weights) {
    var r = parse(input, weights);
    if (!r.ok) return r;
    return {
      ok: true,
      mass: r.mass,
      rows: r.breakdown.map(function (b) {
        return { sym: b.sym, count: b.count, subtotal: b.subtotal, percent: (b.subtotal / r.mass) * 100 };
      }),
    };
  }

  // --- UI controllers -------------------------------------------------------
  function initMolar(container, opts) {
    opts = opts || {};
    var weights = opts.weights || root.MOLAR_WEIGHTS || {};
    var t = opts.t || {};
    if (!container) return;
    container.innerHTML =
      "<label class='molarLabel' for='molarInput'>" + (t.label || "Enter a chemical formula") + "</label>" +
      "<input id='molarInput' class='molarInput' type='text' autocomplete='off' autocapitalize='off' spellcheck='false' " +
      "placeholder='" + (t.placeholder || "e.g. Ca(OH)2, CuSO4·5H2O") + "' />" +
      "<div class='molarResult' aria-live='polite'></div>";
    var input = container.querySelector("#molarInput");
    var out = container.querySelector(".molarResult");

    function fmt(x) { return (Math.round(x * 1000) / 1000).toLocaleString(undefined, { maximumFractionDigits: 3 }); }

    function update() {
      var v = input.value;
      if (!v.trim()) { out.innerHTML = ""; return; }
      var r = parse(v, weights);
      if (!r.ok) { out.innerHTML = "<span class='molarError'>" + r.error + "</span>"; return; }
      var rows = r.breakdown.map(function (b) {
        return "<tr><td>" + b.sym + "</td><td>" + b.count + " &times; " + fmt(b.weight) +
          "</td><td>" + fmt(b.subtotal) + "</td></tr>";
      }).join("");
      out.innerHTML =
        "<div class='molarMass'>" + fmt(r.mass) + " <span class='molarUnit'>" + (t.unit || "g/mol") + "</span></div>" +
        "<table class='molarBreakdown'>" + rows + "</table>";
    }
    input.addEventListener("input", update);
    return { update: update };
  }

  function initPercent(container, opts) {
    opts = opts || {};
    var weights = opts.weights || root.MOLAR_WEIGHTS || {};
    var t = opts.t || {};
    if (!container) return;
    container.innerHTML =
      "<label class='molarLabel' for='pctInput'>" + (t.label || "Enter a chemical formula") + "</label>" +
      "<input id='pctInput' class='molarInput' type='text' autocomplete='off' autocapitalize='off' spellcheck='false' " +
      "placeholder='" + (t.placeholder || "e.g. C6H12O6") + "' />" +
      "<div class='molarResult' aria-live='polite'></div>";
    var input = container.querySelector("#pctInput");
    var out = container.querySelector(".molarResult");
    function fmt(x) { return (Math.round(x * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 }); }
    function update() {
      var v = input.value;
      if (!v.trim()) { out.innerHTML = ""; return; }
      var r = percentComposition(v, weights);
      if (!r.ok) { out.innerHTML = "<span class='molarError'>" + r.error + "</span>"; return; }
      var rows = r.rows.map(function (b) {
        return "<tr><td>" + b.sym + "</td><td>" + b.count + "</td><td>" + fmt(b.percent) + "%</td></tr>";
      }).join("");
      out.innerHTML = "<table class='molarBreakdown'>" + rows + "</table>";
    }
    input.addEventListener("input", update);
    return { update: update };
  }

  var api = { parse, normalize, percentComposition, initMolar, initPercent };
  root.Molar = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
