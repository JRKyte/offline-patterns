// Polyfill Chrome's cache methods
importScripts('serviceworker-cache-polyfill.js');

// Install the service worker
self.addEventListener('install', function(event) {
  // Pass a promise to event.waitUntil
  event.waitUntil(
    caches.open('v1:0:2').then(function(cache) {
      return cache.addAll([
        './',
        'styles/style.css',
        'scripts/script.js'
      ]);
    })
  );
});

// Fetch assets from the cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Check if the request match something in the cache
    caches.match(event.request).then(function(response) {
      // If theres a match in the cache - return it, if not, fire off the request to the server
      return response || fetch(event.request);
    })
  );
});
