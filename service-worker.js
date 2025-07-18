self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Kott-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './Kottlogo.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
