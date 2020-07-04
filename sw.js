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
    "revision": "8ccfd9264d024e3ad5d206c846470038"
  },
  {
    "url": "about.html",
    "revision": "96ec26d2011445f8c4397122dc7d021d"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "4d7ff2e193d58274bc95bff71d3bb46e"
  },
  {
    "url": "bundle.js",
    "revision": "ca7efca8c19b384cd88e55af52456b8c"
  },
  {
    "url": "compare.html",
    "revision": "509f61210768876d62d5061392caeca9"
  },
  {
    "url": "constants.min.js",
    "revision": "c7fd044c13c9ac0f0dc56617ed6994f3"
  },
  {
    "url": "credits.html",
    "revision": "64460cbad9ec4718dd2d6fa58a252aaa"
  },
  {
    "url": "element.html",
    "revision": "280a086cc9702ac399d525cf369150e3"
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
    "revision": "221b9fe519c363b314bc74d58bc8dfbb"
  },
  {
    "url": "list.html",
    "revision": "9a065595d7cf7ea8ac9948092b663028"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "265a9409746f9f0cecfc6e8091d3f093"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "1d64f99f18efcf6cac36f55e2c53bc08"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "cc881b117532bf702d5e1e25408aa77d"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "54ef268083d41f0450523a548085b4c8"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "10e8c9a647a94846fbdc6f75b7e1db3a"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "ebadfef1eb680647a59139db5f83dc20"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "5194e2d32e2702ce9e8d9b318f9f5326"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "9e92c5e6a3fc5745fdab7bc45666ef28"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "6fbcfcc629cb4bb02f5ecfb1faedc3f5"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "66fed6c57a43ba5b6359655213960352"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "7191feb032d9937e217c5aef04c5d06c"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "fefee7c2dab19b2cca8cb69eb55c3e7f"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "49438151684106f84c3af0190ef6be0c"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "c7d3b9cb716a3ca5aad89ce233e884c7"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "c6f31b8f482c6e647076e4a873600171"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "250750b683a4cf2d6c47e2c12562004b"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "daeda33bdb2386b9fab843423da4788a"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "e87d03cefbadbcdcaed8e0c220fcecde"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "233f3b85e4e94ca3cd5badc55611c871"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "8b0044a72ce2e01f454d302fa20b1148"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "a9587394d7f814a73702f4544d02066a"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "16c0bd383d167145f6565001a2d1b115"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "049fc5143a01d549ac40c8d95e4bbfa8"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "2ace843b719edfd11defed78d827eefb"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "22bdacfe9c210ce2942b547be1e520f4"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "b9ba2cf7caacf4a0e32042487d8dd87c"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "d4e4af289bd9c193ac5b6af6c18e5550"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "8f1f29593a0e3f264bd82d6700f84705"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "6fc714549c464cf9a4cde39e02f153a6"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "db98b06e2154d72a39cbb0c381e2773e"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "04c55a48ab15d784524e39f512172199"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "1676e1e6e6b4c6040f455505b1ca7bf9"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "81ecf149f77c783bbb98a1dd251668b4"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "2cdfad64d5042d034890460d1e830750"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "44a6892cfb1a20cc11b44a47d41740c4"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "bc1d49830dd27722bca71822cf181bb1"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "62fea2e6e12970bb14bbfaab1df66f76"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "c83a4299eb039102ad7ecf19c2cd9392"
  },
  {
    "url": "manifest.json",
    "revision": "501aac9a4fb94b73de7e018dbf795c48"
  },
  {
    "url": "package-lock.json",
    "revision": "903b5a12b2e02c2e7f8bc6da51caf689"
  },
  {
    "url": "package.json",
    "revision": "420b2321de1260fb31c446799b8a68fa"
  },
  {
    "url": "printables.html",
    "revision": "eee13c3da9d3da819ae43938df72a4f8"
  },
  {
    "url": "privacy-policy.html",
    "revision": "1d75cc04f37c97cad22a70f1cfbd7ffe"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "sitemap.xml",
    "revision": "9a74d7414b8b865c91a5fcc3595f860e"
  },
  {
    "url": "store.html",
    "revision": "d015f3ed3619767905741303e19740d2"
  },
  {
    "url": "style.min.css",
    "revision": "bba935598a82fa047e4782b13061f206"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "12590a80769f278ae7268c6d3daffe1f"
  },
  {
    "url": "translation.html",
    "revision": "58abc2d65e1f7a5d9c1611cea64d14f5"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=2",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=3",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=4",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=5",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=6",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=7",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=8",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=9",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=10",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=11",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=12",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=13",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=14",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=15",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=16",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=17",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=18",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=19",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=20",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=21",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=22",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=23",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=24",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=25",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=26",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=27",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=28",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=29",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=30",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=31",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=32",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=33",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=34",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=35",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=36",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=37",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=38",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=39",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=40",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=41",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=42",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=43",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=44",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=45",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=46",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=47",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=48",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=49",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=50",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=51",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=52",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=53",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=54",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=55",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=56",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=57",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=58",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=59",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=60",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=61",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=62",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=63",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=64",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=65",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=66",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=67",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=68",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=69",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=70",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=71",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=72",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=73",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=74",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=75",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=76",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=77",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=78",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=79",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=80",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=81",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=82",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=83",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=84",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=85",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=86",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=87",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=88",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=89",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=90",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=91",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=92",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=93",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=94",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=95",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=96",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=97",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=98",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=99",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=100",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=101",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=102",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=103",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=104",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=105",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=106",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=107",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=108",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=109",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=110",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=111",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=112",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=113",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=114",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=115",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=116",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=117",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  },
  {
    "url": "/element.html?num=118",
    "revision": "722ac098b455088c6564cc87e55b66f4"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
