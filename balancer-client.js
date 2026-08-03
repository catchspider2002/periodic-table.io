// Chemical equation balancer (feedback #192759) - a Pro-gated tool.
//
// Balances a typed equation (e.g. "H2 + O2 -> H2O") by solving M·x = 0 over the
// element-count matrix, using exact rational arithmetic (no floating error).
// Element compositions come from the molar parser (Molar.parse), so unknown
// symbols and bad formulas are rejected the same way.
//
// Browser: window.Balancer. Node (tests): module.exports.

(function (root) {
  "use strict";

  // --- exact fractions ------------------------------------------------------
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function mk(n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; return { n: n / g, d: d / g }; }
  function add(a, b) { return mk(a.n * b.d + b.n * a.d, a.d * b.d); }
  function sub(a, b) { return mk(a.n * b.d - b.n * a.d, a.d * b.d); }
  function mul(a, b) { return mk(a.n * b.n, a.d * b.d); }
  function div(a, b) { return mk(a.n * b.d, a.d * b.n); }
  function isZero(a) { return a.n === 0; }

  function rref(M) {
    var mat = M.map(function (r) { return r.slice(); });
    var rows = mat.length, cols = rows ? mat[0].length : 0;
    var pivotCols = [], r = 0;
    for (var c = 0; c < cols && r < rows; c++) {
      var piv = -1;
      for (var i = r; i < rows; i++) { if (!isZero(mat[i][c])) { piv = i; break; } }
      if (piv < 0) continue;
      var tmp = mat[r]; mat[r] = mat[piv]; mat[piv] = tmp;
      var pv = mat[r][c];
      for (var j = 0; j < cols; j++) mat[r][j] = div(mat[r][j], pv);
      for (var k = 0; k < rows; k++) {
        if (k !== r && !isZero(mat[k][c])) {
          var f = mat[k][c];
          for (var j2 = 0; j2 < cols; j2++) mat[k][j2] = sub(mat[k][j2], mul(f, mat[r][j2]));
        }
      }
      pivotCols.push(c); r++;
    }
    return { mat: mat, pivotCols: pivotCols, rank: r, cols: cols };
  }

  function lcm(a, b) { return Math.abs(a / gcd(a, b) * b); }

  // Split an equation string into { left:[species], right:[species] } or null.
  function splitEquation(eq) {
    var sides = String(eq == null ? "" : eq).split(/=+|-+>|→|⟶|⇒/);
    if (sides.length !== 2) return null;
    var clean = function (side) {
      return side.split("+").map(function (s) { return s.trim().replace(/^\d+\s*/, ""); }).filter(Boolean);
    };
    var left = clean(sides[0]), right = clean(sides[1]);
    if (!left.length || !right.length) return null;
    return { left: left, right: right };
  }

  // balance(eq, parse) where parse(formula) -> composition map (throws on bad).
  // Returns { ok:true, coefficients, left, right, equation } or { ok:false, error }.
  function balance(eq, parse) {
    var parts = splitEquation(eq);
    if (!parts) return { ok: false, error: "Use one arrow, e.g. H2 + O2 -> H2O" };
    var species = parts.left.concat(parts.right);
    var signs = parts.left.map(function () { return 1; }).concat(parts.right.map(function () { return -1; }));
    var comps = [], elements = [];
    for (var i = 0; i < species.length; i++) {
      var c;
      try { c = parse(species[i]); } catch (e) { return { ok: false, error: e.message }; }
      comps.push(c);
      for (var el in c) if (elements.indexOf(el) < 0) elements.push(el);
    }
    var S = species.length;
    var M = elements.map(function (el) {
      return comps.map(function (cm, j) { return mk((cm[el] || 0) * signs[j], 1); });
    });
    var rr = rref(M);
    var nullity = S - rr.rank;
    if (nullity === 0) return { ok: false, error: "This equation cannot be balanced" };
    if (nullity > 1) return { ok: false, error: "Ambiguous - looks like more than one reaction" };

    var freeCol = -1;
    for (var col = 0; col < S; col++) if (rr.pivotCols.indexOf(col) < 0) { freeCol = col; break; }
    var x = new Array(S);
    for (var q = 0; q < S; q++) x[q] = mk(0, 1);
    x[freeCol] = mk(1, 1);
    for (var pr = 0; pr < rr.pivotCols.length; pr++) {
      x[rr.pivotCols[pr]] = sub(mk(0, 1), rr.mat[pr][freeCol]);
    }
    // scale to smallest positive integers
    var L = 1;
    for (var a = 0; a < S; a++) L = lcm(L, x[a].d);
    var ints = x.map(function (fr) { return fr.n * (L / fr.d); });
    var g = 0;
    for (var b = 0; b < S; b++) g = gcd(g, ints[b]);
    if (g) ints = ints.map(function (v) { return v / g; });
    // all coefficients must share one sign; normalize to positive
    var anyPos = ints.some(function (v) { return v > 0; });
    var anyNeg = ints.some(function (v) { return v < 0; });
    if (anyPos && anyNeg) return { ok: false, error: "This equation cannot be balanced" };
    if (anyNeg) ints = ints.map(function (v) { return -v; });
    if (ints.some(function (v) { return v === 0; })) return { ok: false, error: "This equation cannot be balanced" };

    return {
      ok: true,
      coefficients: ints,
      left: parts.left,
      right: parts.right,
      equation: format(ints, parts.left, parts.right),
    };
  }

  function format(coeffs, left, right) {
    var nL = left.length;
    var term = function (co, sp) { return (co === 1 ? "" : co + " ") + sp; };
    var l = left.map(function (sp, i) { return term(coeffs[i], sp); }).join(" + ");
    var r = right.map(function (sp, i) { return term(coeffs[nL + i], sp); }).join(" + ");
    return l + " → " + r;
  }

  function isProUser() {
    try {
      return /(?:^|;\s*)ptio_pro=1(?:;|$)/.test(document.cookie);
    } catch (e) { return false; }
  }

  // Build a parse(formula)->composition fn from Molar + a weights table.
  function parserFor(weights) {
    return function (formula) {
      var M = root.Molar;
      if (!M) throw new Error("parser unavailable");
      var res = M.parse(formula, weights);
      if (!res.ok) throw new Error(res.error);
      return res.composition;
    };
  }

  // --- UI controller --------------------------------------------------------
  function initBalancer(container, opts) {
    opts = opts || {};
    var weights = opts.weights || root.MOLAR_WEIGHTS || {};
    var t = opts.t || {};
    var isPro = opts.isPro != null ? opts.isPro : isProUser();
    if (!container) return;

    if (!isPro) {
      container.innerHTML =
        "<div class='quizGate'><div class='quizGateTitle'>" + (t.proTitle || "Equation balancer is a Pro feature") +
        "</div><div class='quizGateText'>" + (t.proText || "Balance any equation instantly, ad-free.") + "</div></div>";
      var btn = document.createElement("button");
      btn.className = "quizGateCta";
      btn.textContent = t.proCta || "Remove ads & unlock - $1/month";
      btn.addEventListener("click", function () { if (opts.onSubscribe) opts.onSubscribe(); });
      container.querySelector(".quizGate").appendChild(btn);
      return { gated: true };
    }

    var parse = parserFor(weights);
    container.innerHTML =
      "<label class='molarLabel' for='balInput'>" + (t.label || "Enter an unbalanced equation") + "</label>" +
      "<input id='balInput' class='molarInput' type='text' autocomplete='off' autocapitalize='off' spellcheck='false' " +
      "placeholder='" + (t.placeholder || "e.g. C3H8 + O2 -> CO2 + H2O") + "' />" +
      "<div class='molarResult' aria-live='polite'></div>";
    var input = container.querySelector("#balInput");
    var out = container.querySelector(".molarResult");
    function update() {
      var v = input.value;
      if (!v.trim()) { out.innerHTML = ""; return; }
      var r = balance(v, parse);
      out.innerHTML = r.ok
        ? "<div class='balEquation'>" + r.equation + "</div>"
        : "<span class='molarError'>" + r.error + "</span>";
    }
    input.addEventListener("input", update);
    return { update: update };
  }

  var api = { balance, format, splitEquation, parserFor, initBalancer, isProUser };
  root.Balancer = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
