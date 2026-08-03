// Property Rankings ("periodic trends"): pick a numeric element property and
// rank every element by it, with a min-max heat bar (same look as the
// electronegativity chart). Data (window.TRENDS_DATA) is baked at build time.
// Pure ranking logic is unit-tested; initTrends wires the DOM.
//
// Browser: window.Trends. Node (tests): module.exports.

(function (root) {
  "use strict";

  // data: { props:[{key,label,unit}], elements:[{s,n,z,v:{key:number|null}}] }
  // Returns rows sorted by the chosen property, each with a 0..100 bar percent.
  function rank(data, key, dir) {
    var rows = (data.elements || [])
      .map(function (e) { return { s: e.s, n: e.n, z: e.z, value: e.v[key] }; })
      .filter(function (r) { return r.value != null && isFinite(r.value); });
    if (!rows.length) return [];
    var vals = rows.map(function (r) { return r.value; });
    var min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
    rows.sort(function (a, b) {
      return dir === "asc" ? a.value - b.value || a.z - b.z : b.value - a.value || a.z - b.z;
    });
    rows.forEach(function (r) {
      r.pct = max === min ? 100 : Math.round(((r.value - min) / (max - min)) * 100);
    });
    return rows;
  }

  function fmt(x) {
    var a = Math.abs(x);
    if (a !== 0 && (a < 0.001 || a >= 1e5)) return x.toExponential(3);
    return x.toLocaleString(undefined, { maximumSignificantDigits: 5 });
  }

  function initTrends(container, opts) {
    opts = opts || {};
    var data = opts.data || { props: [], elements: [] };
    var t = opts.t || {};
    if (!container) return;
    var dir = "desc";
    var current = (data.props[0] && data.props[0].key) || "";

    var options = data.props.map(function (p) {
      return "<option value='" + p.key + "'>" + p.label + (p.unit ? " (" + p.unit + ")" : "") + "</option>";
    }).join("");

    container.innerHTML =
      "<div class='trendControls'>" +
      "<label class='molarLabel' for='trendProp'>" + (t.rankBy || "Rank by") + "</label>" +
      "<div class='trendControlsRow'>" +
      "<select id='trendProp' class='select-css trendSelect'>" + options + "</select>" +
      "<button id='trendSort' class='trendSort' type='button' aria-label='" + (t.toggleOrder || "Toggle order") + "'></button>" +
      "</div></div>" +
      "<div class='refTableWrap'><table class='refTable'><thead><tr>" +
      "<th>#</th><th>" + (t.element || "Element") + "</th><th>" + (t.symbol || "Symbol") + "</th>" +
      "<th id='trendValHead'></th></tr></thead><tbody id='trendBody'></tbody></table></div>";

    var sel = container.querySelector("#trendProp");
    var sortBtn = container.querySelector("#trendSort");
    var body = container.querySelector("#trendBody");
    var valHead = container.querySelector("#trendValHead");

    function propByKey(k) {
      for (var i = 0; i < data.props.length; i++) if (data.props[i].key === k) return data.props[i];
      return null;
    }

    function render() {
      var p = propByKey(current) || {};
      valHead.innerHTML = p.label ? p.label + (p.unit ? " (" + p.unit + ")" : "") : "";
      sortBtn.innerHTML = dir === "desc" ? "&#9660;" : "&#9650;"; // ▼ / ▲
      var rows = rank(data, current, dir);
      var html = "";
      rows.forEach(function (r, i) {
        html += "<tr><td>" + (i + 1) + "</td><td>" + r.n + "</td><td>" + r.s + "</td>" +
          "<td><span class='engCell'><span class='engVal'>" + fmt(r.value) +
          "</span><span class='engBarWrap'><span class='engBar' style='width:" + r.pct + "%'></span></span></span></td></tr>";
      });
      body.innerHTML = html;
    }

    sel.addEventListener("change", function () { current = sel.value; render(); });
    sortBtn.addEventListener("click", function () { dir = dir === "desc" ? "asc" : "desc"; render(); });
    render();
    return { render: render };
  }

  var api = { rank: rank, initTrends: initTrends };
  root.Trends = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
