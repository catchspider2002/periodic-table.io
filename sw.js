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
    "revision": "2b24131558831a56662b35b3063a25cf"
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
    "revision": "f70381369828248ae05a6b5fade3763b"
  },
  {
    "url": "credits.html",
    "revision": "64460cbad9ec4718dd2d6fa58a252aaa"
  },
  {
    "url": "element.html",
    "revision": "ab55aad8bec73aefd9f55071f504a993"
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
    "revision": "e87175599305ffbb68f3547a60f2deb0"
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
    "revision": "d3f01ded92815c51bfba8998e34a125a"
  },
  {
    "url": "locales/locale.el.js",
    "revision": "a25f19bbc23ad319e37a7326c1bf5035"
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
    "revision": "156b4de2282a2eed883e0e170692a7c8"
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
    "revision": "9d2b2d726adafa5ca998838d9415c578"
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
    "revision": "f6f5b6f936afc0ca4eecf17e8e49d223"
  },
  {
    "url": "locales/locale.it.js",
    "revision": "233f3b85e4e94ca3cd5badc55611c871"
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
    "revision": "156a67dc57c10435340d2266ed6bd675"
  },
  {
    "url": "locales/locale.nn.js",
    "revision": "b3a7e452dc5fcff037eb182ea429bf8e"
  },
  {
    "url": "locales/locale.ph.js",
    "revision": "875f51909a0ae7f0abb11ac0477f9408"
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
    "revision": "bc1d49830dd27722bca71822cf181bb1"
  },
  {
    "url": "locales/locale.zs.js",
    "revision": "62fea2e6e12970bb14bbfaab1df66f76"
  },
  {
    "url": "locales/locale.zt.js",
    "revision": "b66000005037536f6231a2fd8015d5e2"
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
    "revision": "d25cf57cf2c9371d883890b2ccfc837c"
  },
  {
    "url": "svelte-bundle.css",
    "revision": "5d9030657c3b8480bab61a1ccd822ffc"
  },
  {
    "url": "svelte-bundle.js",
    "revision": "40ca005ad6a7d3d51bc0a72e7cca170a"
  },
  {
    "url": "translation.html",
    "revision": "4cad793c10a1bbd751e09f2bfc0a9074"
  },
  {
    "url": "images/placeholder.png",
    "revision": "afd54a6889c16e59da7d6398afe2ca5e"
  },
  {
    "url": "/element.html?num=1",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=2",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=3",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=4",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=5",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=6",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=7",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=8",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=9",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=10",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=11",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=12",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=13",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=14",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=15",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=16",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=17",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=18",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=19",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=20",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=21",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=22",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=23",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=24",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=25",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=26",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=27",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=28",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=29",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=30",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=31",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=32",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=33",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=34",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=35",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=36",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=37",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=38",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=39",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=40",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=41",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=42",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=43",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=44",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=45",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=46",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=47",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=48",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=49",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=50",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=51",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=52",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=53",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=54",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=55",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=56",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=57",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=58",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=59",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=60",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=61",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=62",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=63",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=64",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=65",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=66",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=67",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=68",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=69",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=70",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=71",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=72",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=73",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=74",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=75",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=76",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=77",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=78",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=79",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=80",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=81",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=82",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=83",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=84",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=85",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=86",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=87",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=88",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=89",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=90",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=91",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=92",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=93",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=94",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=95",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=96",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=97",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=98",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=99",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=100",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=101",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=102",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=103",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=104",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=105",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=106",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=107",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=108",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=109",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=110",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=111",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=112",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=113",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=114",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=115",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=116",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=117",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  },
  {
    "url": "/element.html?num=118",
    "revision": "2a0cb9042c433fd509104c65844757fb"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
