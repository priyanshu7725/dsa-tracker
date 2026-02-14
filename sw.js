const CACHE_NAME = "dsa-tracker-v1";

const FILES_TO_CACHE = [
  "./",
  "./dsa_progress.html",
  "./a2z.json",
  "./manifest.json",
  "./assets/logo/yt.svg",
  "./assets/logo/lc.svg",
  "./assets/logo/gfg.svg",
  "./assets/logo/cn.svg",
  "./assets/logo/tuf.svg",
  "./assets/logo/post.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
