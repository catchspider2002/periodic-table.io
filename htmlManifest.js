const fs = require("fs");

const writeFile = (lang, langValues, page) => {
  let writeStream = fs.createWriteStream(lang + "/manifest.json");

  writeStream.write("{\n");
  writeStream.write('  "short_name": "' + langValues.homeHeader + '",\n');
  writeStream.write('  "name": "' + langValues.homeHeader + '",\n');
  writeStream.write('  "background_color": "#0078d7",\n');
  writeStream.write('  "theme_color": "#0078d7",\n');
  writeStream.write('  "display": "standalone",\n');
  writeStream.write('  "categories": ["education", "books"],\n');
  writeStream.write('  "description": "' + langValues.line1 + " " + langValues.line2 + '",\n');
  writeStream.write('  "icons": [\n');
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-36x36.png",\n');
  writeStream.write('      "sizes": "36x36",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-48x48.png",\n');
  writeStream.write('      "sizes": "48x48",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-72x72.png",\n');
  writeStream.write('      "sizes": "72x72",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-96x96.png",\n');
  writeStream.write('      "sizes": "96x96",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-144x144.png",\n');
  writeStream.write('      "sizes": "144x144",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/apple-touch-icon-152x152.png",\n');
  writeStream.write('      "sizes": "152x152",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-192x192.png",\n');
  writeStream.write('      "sizes": "192x192",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-256x256.png",\n');
  writeStream.write('      "sizes": "256x256",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-384x384.png",\n');
  writeStream.write('      "sizes": "384x384",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    },\n");
  writeStream.write("    {\n");
  writeStream.write('      "src": "/images/icons/android-chrome-512x512.png",\n');
  writeStream.write('      "sizes": "512x512",\n');
  writeStream.write('      "type": "image/png"\n');
  writeStream.write("    }\n");
  writeStream.write("  ],\n");
  writeStream.write('  "start_url": "index.html"\n');
  writeStream.write("}\n");

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
