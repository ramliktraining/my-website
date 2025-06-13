self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  // Basic offline fallback
  event.respondWith(
    fetch(event.request).catch(() => new Response('You are offline.'))
  );
});
