const CACHE_NAME = 'cache_v1';
const urlsToCache = [
    '/',
    '/api/v1/config',
    '/api/v1/example',
    '/build/common.min.js',
    // '/build/index.min.css',
    '/build/index.min.js',
    '/favicon.ico',
    '/index.html',
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('activate', (e) => {
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => {
        if (response) {
            return response;
        }

        return fetch(e.request)
    }));
});
