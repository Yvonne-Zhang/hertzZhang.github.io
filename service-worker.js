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
    "revision": "aa68b40e1cdb187a4a9e39301fffcf66"
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
    "url": "assets/css/5.styles.1d6de0dd.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ec042e9f.js",
    "revision": "138e4a3ce94f15d3da7d3d365300cac3"
  },
  {
    "url": "assets/js/1.5fe89dfa.js",
    "revision": "765e86e30eeaed17b5e4b430decb5c6d"
  },
  {
    "url": "assets/js/2.aa11e088.js",
    "revision": "2c08258af4f83ac7c6ca49ed64da5d8e"
  },
  {
    "url": "assets/js/3.405c4ecc.js",
    "revision": "69e591f70ee92dc3d99b8e74462bfbb3"
  },
  {
    "url": "assets/js/4.8f39b352.js",
    "revision": "2c14856e6140ae2023bbe3c5e76f8869"
  },
  {
    "url": "assets/js/app.e1de0447.js",
    "revision": "26cd2ff384f1156f6a81503f0f1a0949"
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
    "revision": "6d69c2d2b7af5b9c6ff414d2e55f3d7a"
  },
  {
    "url": "laboratory/index.html",
    "revision": "320e11e7f8ac1048997bf8c2d438e527"
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
    "revision": "67daabffac52cd4c31541f6aa38347ef"
  },
  {
    "url": "tutorials/index.html",
    "revision": "7c661151b037b8e948459fc39c91f695"
  },
  {
    "url": "update.html",
    "revision": "97bebc47607e488664c9efece2aa8500"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
