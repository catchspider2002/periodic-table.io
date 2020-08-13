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
    "revision": "dccd461f5e5afe916c9a9a70d0b434c0"
  },
  {
    "url": "about.html",
    "revision": "c8f6af1c3487ca1a5a2ee28018153628"
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
    "url": "compare.html",
    "revision": "02b54ec92cf3793c45060f35e9fe1683"
  },
  {
    "url": "constants.min.js",
    "revision": "1df57d84d6e714455f1738b5cf67347d"
  },
  {
    "url": "credits.html",
    "revision": "8b4a346580d7bf98ff2207520087b97b"
  },
  {
    "url": "element.html",
    "revision": "24ff698e320045275a9cf2372680a814"
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
    "revision": "e1ae0e614cb4f062196938db9b7bd34c"
  },
  {
    "url": "list.html",
    "revision": "129d118f8b0ebe9fd84767a1147ddf06"
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
    "revision": "39a6f23d29247fce78502539bd1497cc"
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
    "revision": "8f92344813530a7ce097ad1a7cc5d266"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "651b265443ccaf20e1b085739a610a5c"
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
    "url": "locales/locale.nb.js",
    "revision": "15140730452f09ee844c5d6fa1b81d04"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "df48a70941aa12dd6e293c3d10686d68"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "b3a7e452dc5fcff037eb182ea429bf8e"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "1f7221411095fd03a70e775728bf2402"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "353c3d79d43e2fe1161406b1ad59146c"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "9076529072626c3de45de32483d4a89a"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "8f1f29593a0e3f264bd82d6700f84705"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "1c51c50aa3ceb26df26a4988689610e2"
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
    "revision": "7818b9da08052e6c6ca49df7ea387336"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "f56854c0620422c8dc11c5f96580599c"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "d297633b545bbead2dd316bf97cf3f7c"
  },
  {
    "url": "manifest.json",
    "revision": "501aac9a4fb94b73de7e018dbf795c48"
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
    "revision": "6bb73624fe668f8db8a133f60b620e42"
  },
  {
    "url": "privacy-policy.html",
    "revision": "dd86b189aceaa65d9421686a7ce176f9"
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
    "revision": "5fe142cc0e73ff03851153e67447964a"
  },
  {
    "url": "style.min.css",
    "revision": "e7a12a4e4ffd8f49a0b1c3fa0b921fb3"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "40c8c6ad493010c636c93193b202171b"
  },
  {
    "url": "translation.html",
    "revision": "c46fabc295124aac070004472e931e58"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=2",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=3",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=4",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=5",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=6",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=7",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=8",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=9",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=10",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=11",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=12",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=13",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=14",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=15",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=16",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=17",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=18",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=19",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=20",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=21",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=22",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=23",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=24",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=25",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=26",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=27",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=28",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=29",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=30",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=31",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=32",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=33",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=34",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=35",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=36",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=37",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=38",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=39",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=40",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=41",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=42",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=43",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=44",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=45",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=46",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=47",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=48",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=49",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=50",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=51",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=52",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=53",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=54",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=55",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=56",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=57",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=58",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=59",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=60",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=61",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=62",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=63",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=64",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=65",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=66",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=67",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=68",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=69",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=70",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=71",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=72",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=73",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=74",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=75",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=76",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=77",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=78",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=79",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=80",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=81",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=82",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=83",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=84",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=85",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=86",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=87",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=88",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=89",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=90",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=91",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=92",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=93",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=94",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=95",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=96",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=97",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=98",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=99",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=100",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=101",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=102",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=103",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=104",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=105",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=106",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=107",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=108",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=109",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=110",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=111",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=112",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=113",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=114",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=115",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=116",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=117",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  },
  {
    "url": "/element.html?num=118",
    "revision": "666c5683bb83dfa6177b1b22febbe41f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
