// Decode the five predefined XML entities that XLSX shared-strings escape.
//
// Excel stores authored rich text (e.g. "<br>", "<sup>2</sup>", "<a href=…>")
// in sharedStrings.xml as "&lt;br&gt;" etc. read-excel-file <= 9.2.0 decoded
// these back on read; 9.3.x returns them raw, which then shows as literal tags
// on the page. We reproduce the 9.2.0 behaviour here so the generators keep
// getting real HTML. `&amp;` is decoded last so cases like "&amp;lt;" (a literal
// "&lt;") survive correctly. Numeric character references are intentionally
// left alone (the browser decodes them in the HTML context, matching before).
function decodeEntities(v) {
  if (typeof v !== "string" || v.indexOf("&") === -1) return v;
  return v
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

module.exports = decodeEntities;
