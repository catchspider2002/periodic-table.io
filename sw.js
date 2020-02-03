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
    "revision": "9d888ef76d74d21dccc338933290ef73"
  },
  {
    "url": "about.html",
    "revision": "53409748f0a2635a9c70e5316796a7b5"
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
    "revision": "733015cfdfa8dc8338adfb92525a7376"
  },
  {
    "url": "constants.min.js",
    "revision": "4d72a6527853111a9b80f1c26c365a1c"
  },
  {
    "url": "element.html",
    "revision": "43c8561cec219da7db716bf64fe16048"
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
    "revision": "9a072ed9353d949af320a75fade288aa"
  },
  {
    "url": "list.html",
    "revision": "0f1ca648f4e404e451bd2428d9fa10f7"
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
    "revision": "38fa598a522e6d4ba719d95f6c8b13e3"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "806c46a5a9a3f4b6bcac3067512d3ffa"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "105d1b406edb61b9190a15e49e882b53"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "d032fc3c1e86c446920169d92ff4a216"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "85c7fcbb97be8940753e113f516fc0c6"
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
    "revision": "790d2143e3949f145c5ca4b35608c7cc"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "8e38df2193c46982cf0d400db20e98d3"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "4f0bfe052408dc614cf4f1202364fecd"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "f1cab9f1c2ccdfcccd7aab7783e117a3"
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
    "revision": "cf77ed58cac7c05183bb6be03f579813"
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
    "revision": "5421b4217d6b06ecf7e0859271c06b34"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "a9119ecdc19ab600ad69d0a33e58bbc7"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "4cc483548e85e3403d1d3e182d8b75e8"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "5fb4d7b06d8b353fafd8cbb357e223a5"
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
    "revision": "2ed3fdf7e37f935b4cfbf09a6815e74e"
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
    "revision": "fe756c0f4fddcb9f8bcf24b1f91ce54e"
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
    "revision": "2a0e2225b364185c5f57d6f74c7d3d16"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "store.html",
    "revision": "e251f75b5acfd495208943e86c886907"
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
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=2",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=3",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=4",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=5",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=6",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=7",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=8",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=9",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=10",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=11",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=12",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=13",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=14",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=15",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=16",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=17",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=18",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=19",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=20",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=21",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=22",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=23",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=24",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=25",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=26",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=27",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=28",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=29",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=30",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=31",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=32",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=33",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=34",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=35",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=36",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=37",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=38",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=39",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=40",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=41",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=42",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=43",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=44",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=45",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=46",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=47",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=48",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=49",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=50",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=51",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=52",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=53",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=54",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=55",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=56",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=57",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=58",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=59",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=60",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=61",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=62",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=63",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=64",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=65",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=66",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=67",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=68",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=69",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=70",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=71",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=72",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=73",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=74",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=75",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=76",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=77",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=78",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=79",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=80",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=81",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=82",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=83",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=84",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=85",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=86",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=87",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=88",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=89",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=90",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=91",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=92",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=93",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=94",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=95",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=96",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=97",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=98",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=99",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=100",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=101",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=102",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=103",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=104",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=105",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=106",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=107",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=108",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=109",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=110",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=111",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=112",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=113",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=114",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=115",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=116",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=117",
    "revision": "5a840a76280ee77fdb189e705a185318"
  },
  {
    "url": "/element.html?num=118",
    "revision": "5a840a76280ee77fdb189e705a185318"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
