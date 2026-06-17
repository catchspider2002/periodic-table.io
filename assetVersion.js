// Single source of truth for cache-busting asset filenames.
// Hashes the minified build outputs so the filename changes only when the
// content changes — giving safe far-future caching across the browser cache,
// the service worker (keyed on URL) and Cloudflare without manual file cycling.

const fs = require("fs");
const crypto = require("crypto");

function fileHash(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex").slice(0, 8);
}

const cssFileName = `global.${fileHash("global.css")}.css`;
const jsFileName = `htmlJS.${fileHash("htmlJS.js")}.js`;

module.exports = { cssFileName, jsFileName };
