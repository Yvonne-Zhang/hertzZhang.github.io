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
    "revision": "686856fa91dcea7b7e9fdf1799084169"
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
    "url": "assets/css/7.styles.c055e3d3.css",
    "revision": "83254265ef551a95a666797ffadc2fa3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f93ce05e.js",
    "revision": "41a7a28055ce8c4756a04922f9a7b76b"
  },
  {
    "url": "assets/js/1.91fc476f.js",
    "revision": "cd0d1382a83c50257cb73c3a00bac7c1"
  },
  {
    "url": "assets/js/2.7e6f0948.js",
    "revision": "f25560fb14bd96dc9c9d679d9314288e"
  },
  {
    "url": "assets/js/3.70c2102f.js",
    "revision": "2cf8986f9c3effc38fd134dccd6f9ac4"
  },
  {
    "url": "assets/js/4.65c9d8e5.js",
    "revision": "dd79d4472ade2d9f3ac673c4aae11f0c"
  },
  {
    "url": "assets/js/5.cb497b1f.js",
    "revision": "384e642f92640a00dd97aee5165050d1"
  },
  {
    "url": "assets/js/6.9899f1bc.js",
    "revision": "02d909446c68f5af4dc2874ec1962951"
  },
  {
    "url": "assets/js/app.13c1fd56.js",
    "revision": "5802a55af9b2d6935de0aba44c36dc04"
  },
  {
    "url": "experience/index.html",
    "revision": "3387fe991247f2c536bbbbc825095ac6"
  },
  {
    "url": "experience/window-install-gitflow.html",
    "revision": "a77dc13fbccf7c9a51f66709b68dd655"
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
    "revision": "75b3814cf52eb804ebde6d89ba894f0d"
  },
  {
    "url": "laboratory/index.html",
    "revision": "d01d9d7b301cfb2355b4f7ff0c4f6798"
  },
  {
    "url": "list.html",
    "revision": "7d25bf253f7c1b758187587a90da7a78"
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
    "revision": "acaaa531052deb4526cb6c3526afe10c"
  },
  {
    "url": "tutorials/index.html",
    "revision": "03a1299d2db99f90967b09dc92e13a54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
