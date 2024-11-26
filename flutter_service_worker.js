'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3755d3981e55422a09348681b218e9d2",
".git/config": "94f03eb2bdc49b982e4b6fed01ae1f79",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9b370d9e7e8fe45b47c2dfa2fbbbe45c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f442a6810bcc5481e5a913e7c680c0bd",
".git/logs/refs/heads/master": "f442a6810bcc5481e5a913e7c680c0bd",
".git/logs/refs/remotes/demo/master": "60d4ae8d571d77f5d0e47f4739bc340f",
".git/objects/01/1a5e771022f76dedfeacaf1a730bbf1e499236": "e79f3c709a2f95b905ddb09b774a2c0b",
".git/objects/04/c8fde367e04b0ee68b6354587e05cb14c33a60": "9b58e1de9927637e8e8a9bba6c18c6f1",
".git/objects/05/3ffc71328e9742a5b4b38a51d7f676b66ac22d": "e944e270bd6f846021ab2a992f6c7148",
".git/objects/08/6b7b8660c0d6ce933a52974db436656e2de6ca": "d495a61e9bbf2b9175a4482945a96584",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/0e/0dcd235c4973becf25f38eb4e5bb26e154c86a": "13e3d699f54c273cb85da397b0df9a2d",
".git/objects/0e/987061ad789ec941d57d47d70af9535a3e2944": "414678757386d110f55796f7478e6209",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1a/a4422278d1c803ee15ef15810d5d6f9e20066f": "448dfdab669dbf9d77150e6e9c606105",
".git/objects/1b/31f3f17cd140551e00b3d65e95bede70ca085d": "5a926f81f34800c294dc422fc0863bd1",
".git/objects/1b/c06fef45126d2f10af670a512e838a3b4d03b1": "3f12e1c979ce33d49f0cc1ab6aca41e6",
".git/objects/2c/f34951ff3679950e6f4c1c3d33bcdc820e2908": "849f104af199f32bfddb78fd47d6f4f1",
".git/objects/2d/d62efa34c2ba28f89e1482bb6096e5fb97e739": "9090c5693695c477b5fd37abb64e7432",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/73d3d54797d2b2ce68ee78429f0613120588f4": "167cd0109eab0653a9fe211d1d08b3a7",
".git/objects/37/ec9e64ef1df3c41d2a46d3faf9f62eab8aa88b": "1316125feaf18e486ada7e3b40123f7f",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3b/88c4df98c2592f18f32dfbcd170103edd6d0cb": "83b29a666fd6cbc57c7ec5e778c39893",
".git/objects/3e/bc1959c2db9ab15aacba1e1948fb2a13306041": "9ee2423da049a8ab67793bf9e980752f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/159595a4e4bd85ba6c50495e07d930dc10fd28": "51ea1c888334806d5664b90ee5440402",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/53/72505b03486ff6be001e95a395be85a6723713": "ea3ce6a434a5445ca96f9608116b119b",
".git/objects/58/a7f1e01742bbb12929155374284e6946c480bd": "03c735a95197341d4c9220a83e508a54",
".git/objects/69/dede29d1265113a3ae10e2dbb030ef00c24b96": "1637632c3e6c311b90a9bf6bed611e41",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/f9ff3ed64aaf15e34dcdc481e3b1644f05c62e": "817cfc9377c0c8984fdad582e20a1363",
".git/objects/6f/65402fcd510023912e51658c4a1f63ee5a99ea": "e1c8b12d2f99e0be0598189a50ebba16",
".git/objects/71/56ec6c8c4737d12ca3d05ecb8b79386cfd2e1b": "cb148aeddb4225f2f45cc30d56872bc3",
".git/objects/74/1f031777296fe34e2798f4fc324221fc701d32": "ba84249b93fc363be335576975f92b9e",
".git/objects/78/6a35973d3e82829bc9cbb2620b1379a609be2f": "23d0748fe9f19ee6e217e38d395c571a",
".git/objects/79/2a6d46bffc94ecffb9e76a83c8a1c31551f9ad": "103cd81bd0d441c7002266e65e670ac9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/bdd52f4bf11e828aca8a397556187370a71880": "a423d829589aa0cea75f24c3e3f2e07c",
".git/objects/7b/dab5b73a001e1b3a589f3d70102851c1948a00": "6ecbc175fa81c1d30401093068bf9844",
".git/objects/80/1b7428e76fc2def5ef4ccb1704b327b3e8d112": "f46b7dd54a48da4d30c9170fb94e4e0b",
".git/objects/84/ac5237261ccef1c43c1c4c9e3be59b895c74c7": "7059b29b4643087f1be5865e7cf3bed7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/4681dddfae37de8af6f457d3e8c3dc2e9736ee": "d76c861f6d5b3f7703611514ee241c30",
".git/objects/9c/a4d29ceba1b27f858783e9864eb018d6380868": "98727533af770d515d942f3d4c5dfb9b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a9/9d03420ab1d433ec766dc386e442d13375a677": "1c7476328d850160cef66ecc2b328872",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b0/7dced1ab161ef335997bd7114c4aaf299a5804": "6b3e4795266a8e80863f9de3ad37418c",
".git/objects/b4/4ca8df4ff479c818dd90a7ef361e4e6575ca05": "86339938a947a09ff260b4c4ec4e10a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cb/31bab7df07910bc0ee13ef8b5fc4a06c01fee1": "d7ac83452f41407333094119a211d77f",
".git/objects/d0/4b3efb579147a73cf80f386843592b6029443c": "e087b98229721887ce161a5286e2834c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/09eadb3927d426c5193cb0e87ccdd08ee2c5bb": "5d1e443e2bdf2c8f2fcb13c87d2bcaa3",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/c04b4dadb471c3989fd5f1f99b3a405db03e5c": "dbea2bd2c0e2bab92a5ca787fa899971",
".git/refs/heads/master": "c1b856eb27872948157c3f71cf4a2e57",
".git/refs/remotes/demo/master": "c1b856eb27872948157c3f71cf4a2e57",
"assets/AssetManifest.bin": "4e484c890a7efc35fe7ddc76e12155eb",
"assets/AssetManifest.json": "6bd7ad90d5cb33f2ce6dfb1a12d741dd",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/Kalameh-Medium.ttf": "c0e307b202c3d4c640c030369fad07c9",
"assets/assets/images/1.jpg": "c0ecf3d64aa0c15d6a75b21e12c0e0bf",
"assets/assets/images/2.jpg": "bbaf0ab1d7e4d051fb5e81715de49d7e",
"assets/assets/images/3.jpeg": "76dc3b1017b750ffa0ec887f63d4f275",
"assets/assets/images/4.jpg": "25743758e08a54d074ebcd34c07d0ec6",
"assets/assets/images/5.png": "6f5892e005f376e549b158359ac59a41",
"assets/assets/images/6.jpg": "1ff3f6ccd699d392c0355eddc1cd4ab8",
"assets/assets/images/7.jpg": "00b6abe0c5123a609715a3ec58f69302",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/me.png": "0da9e14751c1e268e5bf298d6dbde7a3",
"assets/assets/images/send.png": "91572e31999f1c83c006f5037db02be3",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/translations/en-US.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/assets/translations/fa-IR.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/FontManifest.json": "df2abca8938cd8c863a393180bd903b2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1098c907b1432a1e7287c3b3b264d95d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e035653d2f9a603517209cea2c053a5f",
"/": "e035653d2f9a603517209cea2c053a5f",
"main.dart.js": "ba4c039a37e929a33ca17cd7369708d8",
"manifest.json": "8cf6bb53411de64f7476accbee58a6ef",
"version.json": "0611ec9a45e391e766beb8ac47564deb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
