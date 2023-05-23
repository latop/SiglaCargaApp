'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2c18aabf236ee3d47262b6b22f5e27f1",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "cf46f7f07ad5ec9ea98393b4bd4aa625",
"index.html": "015808df1f88e830fa7eea57806bdb79",
"/": "015808df1f88e830fa7eea57806bdb79",
"main.dart.js": "735d430fc7df3259ac38ad777f67defc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4c3b72a772a5d5648274251b54abd981",
"assets/AssetManifest.json": "98df3a61c6c76e4a41148c80fdf40411",
"assets/NOTICES": "aaf8970f3ea44e8166de7108a04a90ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a2e25f66a1dab643198a90e795d7b0e5",
"assets/fonts/MaterialIcons-Regular.otf": "50b2c1df8f2122e3d48eb308080dee62",
"assets/assets/images/br-flag.png": "038601f1d01d29d9a0a2a69498c0f063",
"assets/assets/images/profile-img.jpeg": "d127e2b041251c617de626e63491cc73",
"assets/assets/images/es-flag.png": "3e3270480f3d0dc88119761e7bc696bb",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/us-flag.png": "7abac6c97d63a28890e688a1fd5a05f8",
"assets/assets/images/logo.png": "de5a6c16a50a980bbb89b22959c6b329",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/list.svg": "11dd3b24f4566be6f86a5b2f655480de",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/DRIVERS/0%20DRIVERS.png": "8b7733ad0b7180fd8be342fb381ea2ac",
"assets/assets/icons/DRIVERS/3%20POSITION%20-removebg.png": "6525c6fdbb24047ea3202f607600e14e",
"assets/assets/icons/DRIVERS/2%20ATTRIBUTION.png": "6da1652958f4890e6ae4ab2a6f92962a",
"assets/assets/icons/DRIVERS/3%20POSITION.png": "f78acd4507f8417708ef7f3b3384be52",
"assets/assets/icons/DRIVERS/2%20ATTRIBUTION%20-removebg.png": "a45e442ef245ce653e116c26ccaebcdc",
"assets/assets/icons/DRIVERS/5%20DOCUMENTS.png": "e3729dafcb9592cbd14c9612cf6c8085",
"assets/assets/icons/DRIVERS/5_DOCUMENTS-removebg.png": "4f4e67162bb27b454ed21e6ea5ed6a96",
"assets/assets/icons/DRIVERS/4%20LICENSES.png": "016b979937a8f258b7299645d5120a6a",
"assets/assets/icons/DRIVERS/0%20DRIVERS-Removebg.png": "2880503131702a75afe63f1a6fa02e17",
"assets/assets/icons/DRIVERS/1_DRIVER-removebg.png": "ea2b9b8e68f493296127a95ed9021c05",
"assets/assets/icons/DRIVERS/1%20DRIVER.png": "317ab633d01650182cc26473b356e1da",
"assets/assets/icons/DRIVERS/4_LICENSES-removebg.png": "647fa30aefcd7691d5ff1e79398dc89d",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/import%2520GMTS-removebg.png": "a778fd5ddda5cd58af2ed7c60fdb2208",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/add_square.svg": "06002e0f5c259a6a783ae01625cc5c17",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/VEHICHES/7%20Container.png": "9311285963f78e327a623ebfa29753c8",
"assets/assets/icons/VEHICHES/7_Container-removebg.png": "c0dca657933ce8743980399d4245664c",
"assets/assets/icons/VEHICHES/5_FLEET_TYPE-removebg.png": "b3e2e22c0173d7e8290911965a1ad963",
"assets/assets/icons/VEHICHES/6_TRUCK-removebg.png": "da891420eaf0aea42ac075daaaa9115b",
"assets/assets/icons/VEHICHES/8%20ACTIVITY%20TRUCK.png": "b19c778c81ba8c64651666c059b0817f",
"assets/assets/icons/VEHICHES/4_FLEET_MODEL-removebg.png": "0c4ff44208035c9a69cf661601521851",
"assets/assets/icons/VEHICHES/0_VEHICHES-removebg.png": "a25f72d4e87578eba849a4fb14d25534",
"assets/assets/icons/VEHICHES/5%20FLEET%20TYPE.png": "72c10b19c4c9c18a382c15606691307e",
"assets/assets/icons/VEHICHES/9_TRUCK_CHECK-removebg.png": "26bc72b58ee72a10ee545e11746294d4",
"assets/assets/icons/VEHICHES/0%20VEHICHES.png": "a11f96ac2e6dfc13c0281d8096ae6c25",
"assets/assets/icons/VEHICHES/4%20FLEET%20MODEL.png": "c3871796e7e56e4707c1aa4fcc949994",
"assets/assets/icons/VEHICHES/1%20FLEET%20(NEW)-removebg.png": "b2d943d1c65a4e2683af25acec9d9523",
"assets/assets/icons/VEHICHES/6%20TRUCK.png": "87f8dd9fc79e8ecd725f54da4107b8b5",
"assets/assets/icons/VEHICHES/3%20FLEET%20GROUP.png": "5358fefd52e17fef39af57afa8af115f",
"assets/assets/icons/VEHICHES/1%20FLEET%20(NEW).png": "07d4f10e72694655b6811f8cde80f2b1",
"assets/assets/icons/VEHICHES/9%20TRUCK%20CHECK.png": "bc508835af39fe52c6c4b4a4783717ba",
"assets/assets/icons/VEHICHES/8_ACTIVITY_TRUCK-removebg.png": "528d97f5b50218cbea028f02bb56cf8f",
"assets/assets/icons/VEHICHES/3%20FLEET%20GROUP-removebg.png": "89ad447fbeb5261080f39d0ee3ebd7bc",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/PARAMETERS/0%20PARAMETERS.svg": "20c75dd4c128afd7428c03663130f1cc",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/TRIPS/12%20CONNECTION%20LINES.png": "1aee22889b986824ed99b47736ec9c52",
"assets/assets/icons/TRIPS/9%20LINE.png": "faffcab50ce203e7590119b760e1e475",
"assets/assets/icons/TRIPS/5%20gantt%20execution.png": "b4d80e215bc8afe70af0da4f80336c47",
"assets/assets/icons/TRIPS/0%20TRIPS%20(NEW).png": "946fa339151aeaf6f9d669355872caed",
"assets/assets/icons/TRIPS/1%20LOCATION.png": "bd878ecd96f1f31ca9a769c3f133c9b0",
"assets/assets/icons/TRIPS/1_LOCATION-removebg.png": "07e23a650971fe876e158c3b9a02aa40",
"assets/assets/icons/TRIPS/10%20CARGO%20TYPE.png": "ba57d8f151edbc4f25d30a32421c8f51",
"assets/assets/icons/TRIPS/4%20Gantt-chart%20PLANNING.png": "41b0c311f4b955138878e9219f2cbf3a",
"assets/assets/icons/TRIPS/7%20BOARDING%20MAP.png": "a0e8a8d5901c98969cebe4b6ea3530e1",
"assets/assets/icons/TRIPS/12%20CONNECTION%20LINES-removebg.png": "d605ae0da4abc36aa279fc8d5880edaa",
"assets/assets/icons/TRIPS/8%20JUSTIFICATION.png": "b35680b4f2abed28365be5a7a7e614f4",
"assets/assets/icons/TRIPS/4%20gantt-chart%20PLANNING-removebg.png": "7dbc19c16b72f8990858e94488f45a20",
"assets/assets/icons/TRIPS/11%20PLANNING%20ROUTS.png": "5e23b5b1c15cfccbd60480fba4f14d6c",
"assets/assets/icons/TRIPS/9_LINE-removebg.png": "7df7574359527aa69de69710dea24be5",
"assets/assets/icons/TRIPS/8_JUSTIFICATION-removebg.png": "0c9120b947241267174adc603b5c0260",
"assets/assets/icons/TRIPS/0%20TRIPS%20(NEW)-removebg.png": "0a815e22b5350b14ee9a2dbb501a0599",
"assets/assets/icons/TRIPS/6%20PLANNING%20REQUEST%20-removebg.png": "485a1af7d7b06117d74aff40dc0e3a9c",
"assets/assets/icons/TRIPS/6%20PLANNING%20REQUEST.png": "ad42acbdb67603ddadbfcf4023d3c63a",
"assets/assets/icons/TRIPS/11%20PLANNING%20ROUTS-removebg.png": "909a34bbb97208b30568ea377a0c2f6c",
"assets/assets/icons/TRIPS/10_CARGO_TYPE-removebg.png": "93a1a66e54adc4ecdb4fc551e83c066f",
"assets/assets/icons/TRIPS/5%20gantt_execution-removebg.png": "8b654a1e618a9640e3ff0fbe56c8bc5d",
"assets/assets/icons/TRIPS/import%20GTMS.png": "faffa0d652f94f9ca1ae5f71e02d743c",
"assets/assets/icons/TRIPS/import%20GMTS-removebg.png": "a778fd5ddda5cd58af2ed7c60fdb2208",
"assets/assets/icons/TRIPS/7%20BOARDING%20MAP-removebg.png": "61a7d5d736c57d815f84c9943f06bfb2",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/REPORTS/REPORTS.png": "9c25e93e0056e200c468dee20e9bd385",
"assets/assets/icons/REPORTS/REPORTS-removebg.png": "d4c62961e347637a7006031784a4ae2d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"canvaskit/skwasm.js": "7313e68a7969003a7d46549330a6bdba",
"canvaskit/skwasm.wasm": "b943ac3902333b76543e1cdb69f35555",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "cacb9bfbc25e150e4eea556351b73ff0",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "ec76639d72ae889a2e7f8e3fe2449dfa",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f"};
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
