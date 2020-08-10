var CACHE_NAME = "mtg-life-counter";

var urlsToCache = [
  "/mtg-life-counter/",
  "/mtg-life-counter/static/js/bundle.js",
  "/mtg-life-counter/static/js/main.chunk.js",
  "/mtg-life-counter/static/js/1.chunk.js",
  "/mtg-life-counter/static/js/0.chunk.js",
  "/mtg-life-counter/favicon.ico",
  "/mtg-life-counter/css?family=MTG",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
