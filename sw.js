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
    "revision": "302014e0adab36f757d9b5a67e71264e"
  },
  {
    "url": "about.html",
    "revision": "335790e97acb5d8f9a635688995ec6e1"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "ab49703d314fd98164cd48de26f5fa1c"
  },
  {
    "url": "compare.html",
    "revision": "0e1241907ee5ea059530485fd72917c3"
  },
  {
    "url": "constants.min.js",
    "revision": "67497eeeaa028088419ff8047226995d"
  },
  {
    "url": "credits.html",
    "revision": "a49380671953103ad1baad6c213adf3a"
  },
  {
    "url": "element.html",
    "revision": "b3a94f305d0d869edf8aa68eff3dfdda"
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
    "revision": "8564ffccdc56ada55976961a91f54f22"
  },
  {
    "url": "list.html",
    "revision": "033f78574f983bbb16db75938db42932"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "87f1f327ec7927b8cc9572210b4d4cf2"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "fe0b63f37b4fe958b9fa17952d27d9ca"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "de9efcab450dd831ae60496b8cd3d70f"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "d5dd397934233296bf331d466f3b6a39"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "29f71e5d2e656ead85decd78fbef6394"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "7fc5e7402204e266176bdcc5a77fd51a"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "1e5594691b29de4ea70832979c57523d"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "a589237812e3be65fbfeea003cd15cd2"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "d81757e2482129c8f78ced783aa455a7"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "d3684f283cb6bb7b8e91faf704616079"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "605631f619a57046a3199939ea6f5357"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "807fa2ee357c38c6f5267dfa102ba907"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "a222593838848c5893ccf2f6d7dc8eb3"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "8c268571402dd1b689906c7d4b52d86e"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "e05a6836abd76d02b4b5856b8e68743a"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "1fd4ca9538ce0d41ab30cc9578982667"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "595c261e13d47c81a079d46d60ffeec5"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "197b00d84ae5e90af07a5ea73d5e7707"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "8dbf4271aef1a0c4df60395b610ea3ff"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "f4ccf4d85a3e5b05b6d43dbe4ef2df48"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "01c9dbe67828a7b165bd43b72bf96764"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "c82e06191059160202166af8ea81e978"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "ba54fd0dc189027102289113ce8f4de8"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "b9d5ce078779c211f24eca51227d4cf9"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "5d2a5981d62eaf3f0b912527b2d257e9"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "8046eeb8a89243ef062eba36ac91f244"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "ad2a273f76cb9e8c9c47b19f6dc4c1fc"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "392c20ff2b214c54bab2823576fd5846"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "dcb1a878736ee184829230f8c5410c88"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "77ef54d7c4f914591874d56eba3c0b13"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "ec998f4a8f8db99bf47ade10be7746c7"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "0acce345afb1070978038f0ffa2fa555"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "dbddfbec8ab83b32076e623090dd426c"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "216de7e401d2b4b7eae31d4edfd4d1a4"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "780ff789dac7ef91ec8ca9fda4d4e20a"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "c7ad30deaadffb24802ad9072698acd2"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "c4742c925bd13cd37f4b2794d4ddd515"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "2d180896b2139a1883e0aec336c1514f"
  },
  {
    "url": "manifest.json",
    "revision": "f8ad020d0393eb2048fba4af74065c2e"
  },
  {
    "url": "package-lock.json",
    "revision": "62241ca386b3d14010192d6f6395d14e"
  },
  {
    "url": "package.json",
    "revision": "ce25ff9c120e37ddd7132e1fed784003"
  },
  {
    "url": "printables.html",
    "revision": "f170994b75ba66dcab12bde85804c8ec"
  },
  {
    "url": "privacy-policy.html",
    "revision": "c671015536932037cd9622bc4aa368cb"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "sitemap.xml",
    "revision": "55dd6ff0c4224057250c15476f4f5e78"
  },
  {
    "url": "store.html",
    "revision": "e6afb4aabe5d04e8dc6e731efb2b872c"
  },
  {
    "url": "style.min.css",
    "revision": "6d2276398a2f8a0594506c187c283931"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "82bf35dbbb4bb8cf6497c5f038a075e1"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=2",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=3",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=4",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=5",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=6",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=7",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=8",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=9",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=10",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=11",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=12",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=13",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=14",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=15",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=16",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=17",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=18",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=19",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=20",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=21",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=22",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=23",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=24",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=25",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=26",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=27",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=28",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=29",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=30",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=31",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=32",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=33",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=34",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=35",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=36",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=37",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=38",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=39",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=40",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=41",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=42",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=43",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=44",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=45",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=46",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=47",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=48",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=49",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=50",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=51",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=52",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=53",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=54",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=55",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=56",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=57",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=58",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=59",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=60",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=61",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=62",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=63",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=64",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=65",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=66",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=67",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=68",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=69",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=70",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=71",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=72",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=73",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=74",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=75",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=76",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=77",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=78",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=79",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=80",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=81",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=82",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=83",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=84",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=85",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=86",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=87",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=88",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=89",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=90",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=91",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=92",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=93",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=94",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=95",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=96",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=97",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=98",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=99",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=100",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=101",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=102",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=103",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=104",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=105",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=106",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=107",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=108",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=109",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=110",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=111",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=112",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=113",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=114",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=115",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=116",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=117",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  },
  {
    "url": "/element.html?num=118",
    "revision": "a994569e5b5f8a506c56d715c56b342b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
