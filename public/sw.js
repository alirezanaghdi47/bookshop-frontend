const cache_name = 'bookshop-v3.4.0';

const cache_urls = [
    './index.html',
    './images/apple-touch-icon.png',
    './images/empty-cart.svg',
    './images/favicon.ico',
    './images/favicon16.png',
    './images/favicon32.png',
    './images/logo192.png',
    './images/logo512.png',
    './images/maskable192.png',
    './images/no-data.svg',
    './images/not-found.svg',
    './images/placeholder.png',
    './manifest.json',
    './robots.txt',
    './sw.js',
];


// install
self.addEventListener('install', (e) => {

    e.waitUntil(
        caches.open(cache_name).then(cache => {
            cache.addAll(cache_urls).then(() => {
                self.skipWaiting();
            });
        })
    );

});

// fetch
self.addEventListener('fetch', (e) => {

    // network first
    if (
        e.request.method === "GET" &&
        !e.request.url.startsWith('chrome-extension') &&
        e.request.destination !== ""
    ) {
        e.respondWith(
            fetch(e.request)
                .then(networkResponse => {
                    return caches.open(cache_name).then(cacheName => {
                        cacheName.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    return caches.match(e.request);
                })
        );
    }

    // network only
    if (e.request.url.startsWith('chrome-extension')) {
        e.respondWith(fetch(e.request).then(networkResponse => networkResponse));
    }

});

// activate
self.addEventListener('activate', (e) => {

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cache_name !== cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );
});
