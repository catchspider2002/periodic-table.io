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
    "revision": "43992bedea0bd66d79efeb95baf8290e"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "aac6def789f48d15a3376a9bcec4a0c7"
  },
  {
    "url": "compare.html",
    "revision": "6490e45d0d6e00dd890e4ba7ac404358"
  },
  {
    "url": "constants.min.js",
    "revision": "f297af596812c82e65e6b9ba2ebbbef2"
  },
  {
    "url": "credits.html",
    "revision": "967c21f78a6d7856db276f6e38173007"
  },
  {
    "url": "element.html",
    "revision": "9a842638c98510f091a203412664f1f5"
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
    "revision": "28183c8262d998b4a32568e8daea023c"
  },
  {
    "url": "list.html",
    "revision": "69f09ffc8b0136fbf456ffd20c1a1a21"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "3b0d220bade361ee8724d833e6529de8"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "73c94164b85f03b39683d1eca892eef9"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "63b15da63de7b91bc8c14fcff22b3a86"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "42c19be7784d21ae2efcfcea31a23c62"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "08f1674d1e50470527b73dd48c17fed1"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "e664562f6a958fcdac48eeb479d9b4b1"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "60fb4605f6c2b434999f358e8a2e6773"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "5e54fccd8fcf0e07aaf14a66af04c3e2"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "6fbcfcc629cb4bb02f5ecfb1faedc3f5"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "f40f069792cb08725b201fc742fe851d"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "8ef42a74d0a05d563e838fbfbb116c3e"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "fefee7c2dab19b2cca8cb69eb55c3e7f"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "e33224e8794ffd05a1f7b2d6b6c49484"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "530323feb0600c6dc4abcb387181e16e"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "88391f0c2ef1ce5678f7acaae635cdd8"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "9fe9abfacc33bddb85eb2fd22fe67437"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "60d1b8bc2465ae8297dad99735c80efb"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "e2bac4bdd08f3e9301cf62ff9b8ebcfb"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "a7ffcce238856e13f74ce32ea6d2c5aa"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "2c4d7cfcce420f6cce7e9c04f595c250"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "a9587394d7f814a73702f4544d02066a"
  },
  {
    "url": "locales/locale.ms.js",
    "revision": "f47293acddcb7decfc5ff1ad921807b4"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "7e7f4e0fdd7908e59b85d7e645717648"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "de8fc1925efe9e479060f949a043650c"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "b3a7e452dc5fcff037eb182ea429bf8e"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "30aece2a4ca1838bf80032abe6fb7c7a"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "353c3d79d43e2fe1161406b1ad59146c"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "a7eb3e8dd008ac13f3fd60abeebd78b4"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "8f1f29593a0e3f264bd82d6700f84705"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "b98cc7e815d1f6164299cd4fc9cf3266"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "d689ac0ce7f34d190f94c2ddfbe86764"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "9ec6b5775801c038c273ecb4afd48089"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "0cabd97e885c43fdf9437a0bc511f470"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "9a6666330c0c3ad33809aab5c2185565"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "4b77a6af0f46ac49600d3757fa00883c"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "82292643c47a38a54284bf285bb03f56"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "866149719a0bed884bd34093445da62a"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "f56854c0620422c8dc11c5f96580599c"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "c23d1493ef38450b09e64ef36b601aa6"
  },
  {
    "url": "package-lock.json",
    "revision": "ca2e2a641c510b24a39afa6ca5a22eb3"
  },
  {
    "url": "package.json",
    "revision": "8be7867a94923374b849024a80c83f63"
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
    "revision": "d63921a54bea7525fd97b68dedb4348d"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "a9966ac29253478ee5c59e69f7941cdc"
  },
  {
    "url": "translation.html",
    "revision": "5ab6a54dc84e9760ff40b8a42e70d344"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=2",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=3",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=4",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=5",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=6",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=7",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=8",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=9",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=10",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=11",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=12",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=13",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=14",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=15",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=16",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=17",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=18",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=19",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=20",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=21",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=22",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=23",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=24",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=25",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=26",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=27",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=28",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=29",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=30",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=31",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=32",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=33",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=34",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=35",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=36",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=37",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=38",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=39",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=40",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=41",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=42",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=43",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=44",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=45",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=46",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=47",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=48",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=49",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=50",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=51",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=52",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=53",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=54",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=55",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=56",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=57",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=58",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=59",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=60",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=61",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=62",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=63",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=64",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=65",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=66",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=67",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=68",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=69",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=70",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=71",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=72",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=73",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=74",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=75",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=76",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=77",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=78",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=79",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=80",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=81",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=82",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=83",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=84",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=85",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=86",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=87",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=88",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=89",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=90",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=91",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=92",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=93",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=94",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=95",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=96",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=97",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=98",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=99",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=100",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=101",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=102",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=103",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=104",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=105",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=106",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=107",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=108",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=109",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=110",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=111",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=112",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=113",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=114",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=115",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=116",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=117",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  },
  {
    "url": "/element.html?num=118",
    "revision": "a42807cfd15765abc51c2bb351739b22"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
