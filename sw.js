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
    "revision": "c2752fa7a7a2f0fe21ee6dfac72348cc"
  },
  {
    "url": "about.html",
    "revision": "3f883c3ddaae100270bddd1244bf249a"
  },
  {
    "url": "browserconfig.xml",
    "revision": "9c48727593ae5bf042cabfb783b4de14"
  },
  {
    "url": "btstrp.list.iso.min.js",
    "revision": "7f70b6eec4ee6959b1ec26648deae5b9"
  },
  {
    "url": "bundle.js",
    "revision": "ca7efca8c19b384cd88e55af52456b8c"
  },
  {
    "url": "compare.html",
    "revision": "ee43eeadaba8aa80f99bf1af5bcea19b"
  },
  {
    "url": "constants.min.js",
    "revision": "990eec6c17140f0c53831d118647b120"
  },
  {
    "url": "credits.html",
    "revision": "a998b78744d6885d859923672e856057"
  },
  {
    "url": "element.html",
    "revision": "0629ea8d413c8e6305352abb6019f6a6"
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
    "revision": "b5f7e54154386f95e3c3efe9050d972d"
  },
  {
    "url": "list.html",
    "revision": "d7cd56f64e10b4dc272dee68c98aa90f"
  },
  {
    "url": "locales/locale.ar.js",
    "revision": "fd6136b6f55d8b6c2be56a26c224a2e4"
  },
  {
    "url": "locales/locale.bg.js",
    "revision": "e33dc0588b99c6750216b40b0c7d058e"
  },
  {
    "url": "locales/locale.ca.js",
    "revision": "bd65e4d73591dfa2a7cd3ae6f9f47876"
  },
  {
    "url": "locales/locale.cs.js",
    "revision": "3bb8cace438ea0094f2bdcc05b60aa4c"
  },
  {
    "url": "locales/locale.da.js",
    "revision": "29f0c1576026ff82fcefb940554f0d2a"
  },
  {
    "url": "locales/locale.de.js",
    "revision": "9fb95aeded82bc22b35c9210898355db"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "bc4bbd66480d103221a79d0ebbbc0b67"
  },
  {
    "url": "locales/locale.en.js",
    "revision": "e37a2fb112afa1ff5b929556b1c09346"
  },
  {
    "url": "locales/locale.es.js",
    "revision": "11e0fceddd16dc0818291f0e3532de59"
  },
  {
    "url": "locales/locale.fa.js",
    "revision": "ddf01805123a460687c2b56e87f608dd"
  },
  {
    "url": "locales/locale.fi.js",
    "revision": "b040e364122a0d9e473ab78943f3e051"
  },
  {
    "url": "locales/locale.fr.js",
    "revision": "1988d655e1ed66178c5d100f4ce4f5fe"
  },
  {
    "url": "locales/locale.gb.js",
    "revision": "aa71dd80b102718fdf46dfd0f42dfa4f"
  },
  {
    "url": "locales/locale.he.js",
    "revision": "434f6d82deae01d7a2604b7b71b7e881"
  },
  {
    "url": "locales/locale.hi.js",
    "revision": "b5e23ac251db9845eccb5dd8105c0f9c"
  },
  {
    "url": "locales/locale.hr.js",
    "revision": "0a04aca8c74bb6fc34ccde7ce80c5322"
  },
  {
    "url": "locales/locale.hu.js",
    "revision": "25448d8ac7f027d06d3779dfd0bcd83e"
  },
  {
    "url": "locales/locale.id.js",
    "revision": "b7b418f6b8f106c1180fd3bf7802fdcc"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "dd0a98d31d513c88573db18ebf5f0917"
  },
  {
    "url": "locales/locale.ja.js",
    "revision": "d904689f1d7c8afe47ac101399051529"
  },
  {
    "url": "locales/locale.ko.js",
    "revision": "e05f46eed0afc742172e5113f82edc38"
  },
  {
    "url": "locales/locale.nb.js",
    "revision": "7f7cde42db4163b7bc5f6ff969a6e6fa"
  },
  {
    "url": "locales/locale.nl.js",
    "revision": "33cb2b1fa487012bc77ef74d7952cab0"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "5f3deb91ecee994afaa09ad944a93c77"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "1c1f1e0c6f260f2c72c6fdf7d34c04a5"
  },
  {
    "url": "locales/locale.pt.js",
    "revision": "e557c7cf6f200114749e8c1d8a4d0c8d"
  },
  {
    "url": "locales/locale.ro.js",
    "revision": "eb1eeba135f3966532398eb84b9b8d6d"
  },
  {
    "url": "locales/locale.ru.js",
    "revision": "5b329b110107e41eceea9c21bed9f20c"
  },
  {
    "url": "locales/locale.sk.js",
    "revision": "2e1d087e139e55ec2f10662c4bba3de3"
  },
  {
    "url": "locales/locale.sl.js",
    "revision": "d6b977c8d9f728cac626a4b7487aa3ca"
  },
  {
    "url": "locales/locale.sr.js",
    "revision": "3f8b072a478a5bc595affcd403280caa"
  },
  {
    "url": "locales/locale.sv.js",
    "revision": "c94542dfd6b1b57c912dc069ecf027ce"
  },
  {
    "url": "locales/locale.th.js",
    "revision": "0147d2d553f2eaaa7c518a699fcfb55f"
  },
  {
    "url": "locales/locale.tr.js",
    "revision": "552dc92630215564c514bcca8665d43c"
  },
  {
    "url": "locales/locale.uk.js",
    "revision": "638dd7fd3f1020e82f12ab86d2a6999d"
  },
  {
    "url": "locales/locale.vi.js",
    "revision": "4b08c912adebb6cb7c4e175cefafd8a7"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "27ca49dca4fa71137a6fafeca2a70537"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "4f629b1e5f6f0875240341334dd95d36"
  },
  {
    "url": "manifest.json",
    "revision": "9e3c7e66290f2bcf35601b6b59554658"
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
    "revision": "3058c49dabbb04922af809cdd4b404e8"
  },
  {
    "url": "privacy-policy.html",
    "revision": "49b22707f976cc1610040e43137a13a1"
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
    "revision": "3c82c24a0d961fcfa263978f3567fdc5"
  },
  {
    "url": "style.min.css",
    "revision": "28f2697837240f8fb791852725760ef6"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "a1a413a373e0307740302c0600adc89c"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=2",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=3",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=4",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=5",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=6",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=7",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=8",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=9",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=10",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=11",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=12",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=13",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=14",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=15",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=16",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=17",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=18",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=19",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=20",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=21",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=22",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=23",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=24",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=25",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=26",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=27",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=28",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=29",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=30",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=31",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=32",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=33",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=34",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=35",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=36",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=37",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=38",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=39",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=40",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=41",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=42",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=43",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=44",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=45",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=46",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=47",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=48",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=49",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=50",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=51",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=52",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=53",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=54",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=55",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=56",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=57",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=58",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=59",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=60",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=61",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=62",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=63",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=64",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=65",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=66",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=67",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=68",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=69",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=70",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=71",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=72",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=73",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=74",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=75",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=76",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=77",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=78",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=79",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=80",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=81",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=82",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=83",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=84",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=85",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=86",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=87",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=88",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=89",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=90",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=91",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=92",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=93",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=94",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=95",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=96",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=97",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=98",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=99",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=100",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=101",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=102",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=103",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=104",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=105",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=106",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=107",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=108",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=109",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=110",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=111",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=112",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=113",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=114",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=115",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=116",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=117",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  },
  {
    "url": "/element.html?num=118",
    "revision": "cbcd41b338ba9dbce2eb64df64c45633"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
