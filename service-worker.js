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
    "revision": "877b2a85b4ed5e61460f1a7cfbdc8eef"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "4066dfc8a0634ad55310eff40b13a906"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "552f0052f04eaee64511df49eb2dfdbb"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "81679f25f8594fa5f51121c549f9a37a"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "6c04f13e499cc902f6a658e1e74459da"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "aec04093b6dbfd0af3538e598708b1b0"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "f487894b2459e900b6f098bbc8562aef"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "0d808e97f458924c0671b126486769df"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "a09ad1bddea67e983d6e4339b2aab0fe"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "4066dfc8a0634ad55310eff40b13a906"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "45cc834ac50178ad47e3daffd5c90c5b"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "4fae5489a316cc136aaf2766a3b76124"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "7704f36fd08a272b03d193fc22a2f825"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "66b17fa9ad0c274a08d0326f950f5a7b"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "aec04093b6dbfd0af3538e598708b1b0"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "7e7c995bf0e74380111f2b20d896c626"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "ff991dd73d7a465aaa16e3a3e0e20394"
  },
  {
    "url": "apple-icon.png",
    "revision": "ff991dd73d7a465aaa16e3a3e0e20394"
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
    "url": "assets/js/0.a3c18be7.js",
    "revision": "41a7a28055ce8c4756a04922f9a7b76b"
  },
  {
    "url": "assets/js/1.ff6b7a08.js",
    "revision": "cd0d1382a83c50257cb73c3a00bac7c1"
  },
  {
    "url": "assets/js/2.05821edc.js",
    "revision": "f25560fb14bd96dc9c9d679d9314288e"
  },
  {
    "url": "assets/js/3.1b7fe7de.js",
    "revision": "2cf8986f9c3effc38fd134dccd6f9ac4"
  },
  {
    "url": "assets/js/4.f05470b5.js",
    "revision": "dd79d4472ade2d9f3ac673c4aae11f0c"
  },
  {
    "url": "assets/js/5.01dc49ad.js",
    "revision": "384e642f92640a00dd97aee5165050d1"
  },
  {
    "url": "assets/js/6.ce61625c.js",
    "revision": "02d909446c68f5af4dc2874ec1962951"
  },
  {
    "url": "assets/js/app.2bcbce80.js",
    "revision": "12855ca9ba0d9875d8376292a4182092"
  },
  {
    "url": "experience/index.html",
    "revision": "ee165af14d0a6926161dee394f493917"
  },
  {
    "url": "experience/window-install-gitflow.html",
    "revision": "9c49842aed5cfaeef1d5d2f6f580da53"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "0dfcbe7e5375fc2894e2304c96ac18dc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "545e2048162f111b05ad90f34375d916"
  },
  {
    "url": "favicon-960x960.png",
    "revision": "77415f3b9917aa107c176994d77f6e20"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "f487894b2459e900b6f098bbc8562aef"
  },
  {
    "url": "index.html",
    "revision": "a5a2d295ac6956bb42f3cdf665e1973c"
  },
  {
    "url": "laboratory/index.html",
    "revision": "f14cd211e3b9da3396896cf59b1b2aee"
  },
  {
    "url": "list.html",
    "revision": "a921851a089c0cb9ae86d48719246e30"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "4066dfc8a0634ad55310eff40b13a906"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "5160320004a509eb326a4c23a0feec11"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "6f50a8657ee3b02a7abe2ce02e053e0f"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "78e01bb9fed3378630869bdb4eb72bf7"
  },
  {
    "url": "trivia/index.html",
    "revision": "3a7f42750e42fa8b235b0c8a775318d0"
  },
  {
    "url": "tutorials/index.html",
    "revision": "f4b6cab2841c2dc9258428f63d457aae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
