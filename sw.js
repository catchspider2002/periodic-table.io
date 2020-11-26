importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "212d0cd84bd8b9864953aa9f60224690"
  },
  {
    "url": "about.html",
    "revision": "15c48a4ba7383a5889a771dbbea3f26f"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "8c32a7458a30bf65931651aaf654243d"
  },
  {
    "url": "compare.html",
    "revision": "6490e45d0d6e00dd890e4ba7ac404358"
  },
  {
    "url": "constants.min.js",
    "revision": "3e970b00c94dbdc647b6cf7b2aadc622"
  },
  {
    "url": "credits.html",
    "revision": "26a06a98222c2994f18eb84b5508d544"
  },
  {
    "url": "element.html",
    "revision": "4a4f206e35883d4bd9b438de716e765b"
  },
  {
    "url": "favicon.ico",
    "revision": "a9b5f2fab52a36f35d3684ba85afd86d"
  },
  {
    "url": "fonts/Lato-Heavy.woff2",
    "revision": "c9cbbdc3762c340d5d37073a54971487"
  },
  {
    "url": "fonts/Lato-Regular.woff2",
    "revision": "bd03a2cc277bbbc338d464e679fe9942"
  },
  {
    "url": "fonts/LatoLatin-Heavy.woff2",
    "revision": "913305344fd127206274f133b7b9ce46"
  },
  {
    "url": "fonts/LatoLatin-Regular.woff2",
    "revision": "3cd36578026d6c12eddf9a5c671a251d"
  },
  {
    "url": "fonts/NotoSansArmenian-Bold.woff2",
    "revision": "bcc1a6cf48b2b219867e0d487fad10f0"
  },
  {
    "url": "fonts/NotoSansArmenian-Regular.woff2",
    "revision": "9619c60a96e565ca2cd6d5eddaacc817"
  },
  {
    "url": "fonts/NotoSansHebrew-Bold.woff2",
    "revision": "823f479845977d35d54e6313b3814ccd"
  },
  {
    "url": "fonts/NotoSansHebrew-Regular.woff2",
    "revision": "603cf2c5d99cd696b97466fe266af9b3"
  },
  {
    "url": "fonts/NotoSansThai-Bold.woff2",
    "revision": "a9babbcb069bb8d64f394b7b15eb7387"
  },
  {
    "url": "fonts/NotoSansThai-Regular.woff2",
    "revision": "ff960060fff3384f551f2b27456592be"
  },
  {
    "url": "images/qr-code.svg",
    "revision": "0e097d0b3ef0672e8b6dc6ab62535acb"
  },
  {
    "url": "index.html",
    "revision": "28183c8262d998b4a32568e8daea023c"
  },
  {
    "url": "list.html",
    "revision": "69f09ffc8b0136fbf456ffd20c1a1a21"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "9aa9df266d2d215b1e03aa37c089a628"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "da6315a5aaffd4b5b95316ae9476e562"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "ac3b9006c8dc6c7dc759ec5cf0456fb9"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "891c734818dbc99771dd9d2e3c92cb6b"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "12bb46345f40c3d81504777cd9f4a1ec"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "8d0a9d237ae987b57dd547ef73b10720"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "df98689cee00273dfcb156edbe842e52"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "f997a9bc4f5cf85b10724471c0a111b9"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "d0d5979a6c8659e02db5fd00e5570fda"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "655d7f872ad5b814eafbf7c693249205"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "503148a8a85b7ef0318a4ad72e30675c"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "ff03cf2022c980b172670ae0d8664f02"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "371188ee6c26edafd99345dc8b989af4"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "ed90a2e765e8eb3343a1c5d61d0b6121"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "24383e53b451bf3517da9d68a7bc74f2"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "8ca537306760d8794b866fd4cfc2ed55"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "141b623ce22a73d37814d9cf8b82e1d0"
  },
  {
    "url": "locales/locale.hy.js",
    "revision": "8c5a9b346761f6ec22308eef895fc7ca"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "c83203bb2c4448cd3502b54288d4bb14"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "90cc497637f39dc4426a9a62ee58fe1d"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "7bf4099a5864ab5d8ed6556a4959e206"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "91c93dd5face1baa456ff67020f4d9ed"
  },
  {
    "url": "locales/locale.mk.js",
    "revision": "a4c0d8e69ff5ba35dbe79495d4fb4605"
  },
  {
    "url": "locales/locale.ms.js",
    "revision": "f7ed0d16883444d74434e0602dec2c14"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "0e8cdca3c54d51449d95259892624a49"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "8d9d92485cc84b2c7f167b737cf4d889"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "05ac8897cf3c56cd3c6227c2b72cdb70"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "315c3ad12ccf690e3991f14818815a8f"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "1b8bccd0a26ac55b11b3ee13e5620ec2"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "e1389a9bebaaa67ab7c9343fdbc181fe"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "2789543b3c00a64dbe6fe61a7fd0e8bc"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "464fdcafb74a13981480a15ba4a19ecf"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "f0249379008792537800c907e082947e"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "fa96d188b9f0a4e3e566163fffd325e0"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "8611532c3057ba23f31dfdfe5172ed11"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "e500ecbfc76e5c7ec9e3756c2dd97b1f"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "29a772e56445446beeffbcc90ccfbf0f"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "2460455e617348fea9a285a42f837765"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "a760c41d306718f2baa3a10c2ef2d4c8"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "fc6a0911b1019f744dc7a5fc19c20337"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "4129d10335b25b0253be22e3104d7de2"
  },
  {
    "url": "package-lock.json",
    "revision": "3e93612e6afdd618ac4c273ecb4c2425"
  },
  {
    "url": "package.json",
    "revision": "f6560447509758033aa5dfce66f8c307"
  },
  {
    "url": "printables.html",
    "revision": "28fd1baeab4832d4da6fd2319dcb547d"
  },
  {
    "url": "privacy-policy.html",
    "revision": "721c190fae3a0dfd824594a8a55fe586"
  },
  {
    "url": "reactivity-series.html",
    "revision": "081ea358a63da5372995332f1ac1a9e6"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "sitemap_old.xml",
    "revision": "9a74d7414b8b865c91a5fcc3595f860e"
  },
  {
    "url": "solubility-chart.html",
    "revision": "2dbde5682817e5c7ff7a9bd750410f54"
  },
  {
    "url": "store.html",
    "revision": "ea2c2c4934b20170f9123a6f49531c9a"
  },
  {
    "url": "style.min.css",
    "revision": "0c894495a75091e78bf328a082d46c2b"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "d453d9fb7e1eab23468a0f93ab735815"
  },
  {
    "url": "translation.html",
    "revision": "3d1de95bc632dd4b286ed863d0f6f9f1"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=2",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=3",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=4",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=5",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=6",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=7",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=8",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=9",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=10",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=11",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=12",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=13",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=14",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=15",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=16",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=17",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=18",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=19",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=20",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=21",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=22",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=23",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=24",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=25",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=26",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=27",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=28",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=29",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=30",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=31",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=32",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=33",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=34",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=35",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=36",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=37",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=38",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=39",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=40",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=41",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=42",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=43",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=44",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=45",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=46",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=47",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=48",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=49",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=50",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=51",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=52",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=53",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=54",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=55",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=56",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=57",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=58",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=59",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=60",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=61",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=62",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=63",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=64",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=65",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=66",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=67",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=68",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=69",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=70",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=71",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=72",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=73",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=74",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=75",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=76",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=77",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=78",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=79",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=80",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=81",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=82",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=83",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=84",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=85",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=86",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=87",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=88",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=89",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=90",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=91",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=92",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=93",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=94",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=95",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=96",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=97",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=98",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=99",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=100",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=101",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=102",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=103",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=104",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=105",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=106",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=107",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=108",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=109",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=110",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=111",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=112",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=113",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=114",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=115",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=116",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=117",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  },
  {
    "url": "/element.html?num=118",
    "revision": "8c21896de24cb7ee36143b68fe62c774"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
