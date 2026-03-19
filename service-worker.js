const CACHE_NAME = "laporan-v1";

const urlsToCache = [
  "/Laporan-harian/",
  "/Laporan-harian/index.html",
  "/Laporan-harian/manifest.json",
  "/Laporan-harian/icon.png",
  "/Laporan-harian/html2pdf.js"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
  );
});