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
    "revision": "e82e596e0d7624a08767a345862f8af4"
  },
  {
    "url": "about.html",
    "revision": "773a84fe6669528df8399e8bd6846462"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "4e5f4d495464808b4a51ed15bd4e6b4c"
  },
  {
    "url": "compare.html",
    "revision": "b4466a082911de9dfe9f802a80438ccc"
  },
  {
    "url": "constants.min.js",
    "revision": "2b8256db03ff58f961ef155aacb5fa96"
  },
  {
    "url": "element.html",
    "revision": "9e725beb0926d6d93208966a91171180"
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
    "url": "index.html",
    "revision": "23e65141a11edc45983b93a4cb847a53"
  },
  {
    "url": "list.html",
    "revision": "64a322202173196f4366cf36bbf1c50e"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "7effcaf0d4830585d75c8a286e6c48aa"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "b0e5935ea735f9a621a19db2bc44901c"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "eb679f398f5830e8cd70ecf8f32e8a5a"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "21958d1553ad0717c281a93fe42f1bb2"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "12c5a88cde2f98cb3ff1af9a201fbec4"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "a0620d4b2a7ab62429f2cc0b9dfac82c"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "d9ed5fb5a0b51e307ab6b632b78824fe"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "105d1b406edb61b9190a15e49e882b53"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "89336f7d40d125fa074933929e3f7d12"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "ce75c68fe876c9edabd12519eb4deb72"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "0229501177335af641c9012f2f654ef2"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "f652bc8fea603dac6a01b648112c4bc9"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "03e613fb7617720e86305b4a78bfa1ba"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "78a8f69544c0b5e4e76db96935f0c6b8"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "8e38df2193c46982cf0d400db20e98d3"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "0ec586e50289c6ec31c7492123d44412"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "3bc1f4dc80df7c4ac539257d7da3a4b4"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "0caade06968f3b445b6c719cecfcb777"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "86c9a5d3720577a2d2a67b47bb8f6d8b"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "aede59b02a86a96cb5a082d68479fd38"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "9527aef0b6f76b62012f73a41023cffb"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "5e27d328f1bc693de446cea60f28077c"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "fb765eefc1b7c5017de6a50ee81437a1"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "ad8422863670c85b7a6c86e47f4103fa"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "9b3e0f055cd651a402dcfe69806c256a"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "e4b4c30cb2c470ced3475dd63965bf2d"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "4cc483548e85e3403d1d3e182d8b75e8"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "3bd148dfafa47a15b67c623f95f0252f"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "12fdf623eaf062fda8e351a394b2e97a"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "4b467bfedd342b528ed86284f0782b78"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "167ddca980da9318ca0074e65910ab37"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "05e9636483fe7f449a3e6b8e0afa5b52"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "041b1c3f1e3ee326481d32bdec53889c"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "02c64f10d238b4634465bde6082cc230"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "801932b939e34bb40d9f72d82aef7557"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "089390927d36aacbdfc8f352fba2bdaf"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "352aad04906ed1318b7598f694873e0f"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "1caedecf872f1bf8e641d6dabf1824c0"
  },
  {
    "url": "manifest.json",
    "revision": "f8ad020d0393eb2048fba4af74065c2e"
  },
  {
    "url": "package-lock.json",
    "revision": "3378e4be9df6dc2ab31dbdfb5b1040e0"
  },
  {
    "url": "privacy-policy.html",
    "revision": "64ede080ba1c40542cbf917fe6121311"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "store.html",
    "revision": "1a4142272847800916c48cab2ebf4c39"
  },
  {
    "url": "style.css",
    "revision": "eb7d6fe7c15b7e1587a5e40fa48ac656"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=2",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=3",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=4",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=5",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=6",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=7",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=8",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=9",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=10",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=11",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=12",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=13",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=14",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=15",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=16",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=17",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=18",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=19",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=20",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=21",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=22",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=23",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=24",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=25",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=26",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=27",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=28",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=29",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=30",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=31",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=32",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=33",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=34",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=35",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=36",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=37",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=38",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=39",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=40",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=41",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=42",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=43",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=44",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=45",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=46",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=47",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=48",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=49",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=50",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=51",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=52",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=53",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=54",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=55",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=56",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=57",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=58",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=59",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=60",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=61",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=62",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=63",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=64",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=65",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=66",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=67",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=68",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=69",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=70",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=71",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=72",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=73",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=74",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=75",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=76",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=77",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=78",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=79",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=80",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=81",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=82",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=83",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=84",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=85",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=86",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=87",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=88",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=89",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=90",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=91",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=92",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=93",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=94",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=95",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=96",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=97",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=98",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=99",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=100",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=101",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=102",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=103",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=104",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=105",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=106",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=107",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=108",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=109",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=110",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=111",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=112",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=113",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=114",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=115",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=116",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=117",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  },
  {
    "url": "/element.html?num=118",
    "revision": "f14469cbe2457643f22e191fee86eaf2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
