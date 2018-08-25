/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a2889e3fe61f16eedbb200f8f746731d"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "cd7021a5d895cfa1a021e8bed7500e5d"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "d88f83792f7dc62794f6f31f96a0d3aa"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "56065f5df1889429cbc6fbbb149eaab5"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "c66f03eca978a74cccb308e5815fd7ed"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "6ecf29de4f2ac41d88d67534e90eb1bf"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "02498cce30e3f3502d930796e6eeb107"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "3cc1434840dd8669470e80082edd8920"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "1ef0353b09a4345875fb44d278b08821"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "cd7021a5d895cfa1a021e8bed7500e5d"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "dc5cb93325113ba0a9adbc592d8c52d8"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "5d5f046cbab60646af697094098bfde8"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "2825311d0bdd6ba38eac425c2c635515"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "a4711c67f4c6abaaf39ac4e696b7b480"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "6ecf29de4f2ac41d88d67534e90eb1bf"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "11ca2c87ef2f8e067198efacad538dd4"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "7f16d9ae30cf0ae40903a9efa9ae9fb2"
  },
  {
    "url": "apple-icon.png",
    "revision": "7f16d9ae30cf0ae40903a9efa9ae9fb2"
  },
  {
    "url": "assets/css/6.styles.3ef2e184.css",
    "revision": "83254265ef551a95a666797ffadc2fa3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.002bba91.js",
    "revision": "603cb8b5c15345c4da08205fdda35e52"
  },
  {
    "url": "assets/js/1.91fc476f.js",
    "revision": "cd0d1382a83c50257cb73c3a00bac7c1"
  },
  {
    "url": "assets/js/2.cb92154e.js",
    "revision": "40ef7c10df8763b38ac99f3c5bfe315b"
  },
  {
    "url": "assets/js/3.143cf341.js",
    "revision": "3d51734674b28d8cedffe86d78e69be5"
  },
  {
    "url": "assets/js/4.daffb30a.js",
    "revision": "7f9e2527bc526f5b514bb759cb8690d0"
  },
  {
    "url": "assets/js/5.f56acbba.js",
    "revision": "eb6a6cd0f668bb755e8d0a880bf1aeef"
  },
  {
    "url": "assets/js/app.6ad65e6f.js",
    "revision": "9bb245a8aefaedc49f7f56f0f326090b"
  },
  {
    "url": "experience/index.html",
    "revision": "7ae111688fe235b6bca7c3f391360049"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "e765729a8f90c6e315d199e10734372a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "83d126b2562ff65707aa0c7af913aea3"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "02498cce30e3f3502d930796e6eeb107"
  },
  {
    "url": "index.html",
    "revision": "7e84f8f94b4dc488965f007837db1171"
  },
  {
    "url": "laboratory/index.html",
    "revision": "2c7079ddf4ae6cb0c595aef284b48070"
  },
  {
    "url": "list.html",
    "revision": "b4f8a60e5de7f761d7f9edbe382e153a"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "cd7021a5d895cfa1a021e8bed7500e5d"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "710cbeaf0366e8f5a8158537a1caeeae"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "dcfa383683b42b9896860769e826da46"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "1dadd9c202632e7b2185f8c088128785"
  },
  {
    "url": "trivia/index.html",
    "revision": "f6e9ad91dbe595fecf77aa9de2ff348e"
  },
  {
    "url": "tutorials/index.html",
    "revision": "f970da8cde8cfe55dd146882af040235"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
