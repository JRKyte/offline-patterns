importScripts("scripts/serviceworker-cache-polyfill.js"),self.addEventListener("install",function(t){t.waitUntil(caches.open("v1:0:2").then(function(t){return t.addAll(["./","styles/style.css","scripts/script.js","fonts/"])}))}),self.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))});