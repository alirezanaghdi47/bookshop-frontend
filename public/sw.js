const cache_names = {
    static: 'bookshop-static-v3.2',
    dynamic: 'bookshop-dynamic-v3.2',
};

const cache_urls = [
    './index.html',
    './images/apple-touch-icon.png',
    './images/favicon.ico',
    './images/favicon16.png',
    './images/favicon32.png',
    './images/logo192.png',
    './images/logo512.png',
    './images/maskable192.png',
    './images/placeholder.png',
    './images/empty-cart.svg',
    './images/no-data.svg',
    './images/not-found.svg',
    './manifest.json',
    './robots.txt',
    './sw.js',
];


// install
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cache_names["static"]).then(cache => {
            cache.addAll(cache_urls).then(() => {
                self.skipWaiting();
            });
        })
    );

});

// fetch
self.addEventListener('fetch', (e) => {

    // stale while revalidate first ( get static files )
    if (
        e.request.method === 'GET' &&
        (
            e.request.url.startsWith('https://bookshop-alirezanaghdi.ir') ||
            e.request.url.startsWith('http://localhost:3000')
        )
    ) {
        e.respondWith(
            caches.match(e.request).then(cache => {
                return (
                    cache || fetch(e.request).then(networkResponse => {
                        return caches.open(cache_names['dynamic']).then(cache => {
                            cache.put(e.request, networkResponse.clone());
                            return networkResponse;
                        });
                    })
                );
            })
        );
    }

    // network first ( get cdn files )
    if (
        e.request.method === "GET" && (
            e.request.url.startsWith("https://cdn.jsdelivr.net") ||
            e.request.url.startsWith("https://cdnjs.cloudflare.com")
        )
    ) {
        e.respondWith(
            fetch(e.request)
                .then(networkResponse => {
                    return caches.open(cache_names['dynamic']).then(cache => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
        );
    }

    // network first ( get apis )
    if (
        e.request.method === 'GET' &&
        e.request.url.startsWith('https://alireza-bookshop.herokuapp.com/api')
    ) {
        e.respondWith(
            fetch(e.request)
                .then(networkResponse => {
                    return caches.open(cache_names['dynamic']).then(cache => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
        );
    }

    // network only ( get chrome extension )
    if (
        e.request.method !== "GET" ||
        e.request.url.startsWith('chrome-extension')
    ) {
        e.respondWith(fetch(e.request).then(networkResponse => networkResponse));
    }

});

// activate
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!Object.values(cache_names).includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );
});