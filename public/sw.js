const cache_names = {
    static: 'bookshop-static-v2.5',
    dynamic: 'bookshop-dynamic-v2.5',
};

const cache_urls = [
    './',
    './fonts/font-awesome.css',
    './fonts/vazir.css',
    './fonts/font-awesome/fa-light-300.woff2',
    './fonts/font-awesome/fa-regular-400.woff2',
    './fonts/font-awesome/fa-solid-900.woff2',
    './fonts/vazir/Vazir-Regular-FD.woff2',
    './fonts/vazir/Vazir-Regular-FD.woff',
    './fonts/vazir/Vazir-Regular-FD.ttf',
    './fonts/vazir/Vazir-Regular-FD.eot',
    './fonts/vazir/Vazir-Medium-FD.woff2',
    './fonts/vazir/Vazir-Medium-FD.woff',
    './fonts/vazir/Vazir-Medium-FD.ttf',
    './fonts/vazir/Vazir-Medium-FD.eot',
    './fonts/vazir/Vazir-Bold-FD.woff2',
    './fonts/vazir/Vazir-Bold-FD.woff',
    './fonts/vazir/Vazir-Bold-FD.ttf',
    './fonts/vazir/Vazir-Bold-FD.eot',
    './images/apple-touch-icon.png',
    './images/favicon.ico',
    './images/favicon16.png',
    './images/favicon32.png',
    './images/logo192.png',
    './images/logo512.png',
    './images/maskable.png',
    './images/auth-background.svg',
    './images/coming-soon.svg',
    './images/connection-lost.svg',
    './images/empty-cart.svg',
    './images/no-data.svg',
    './images/not-found.svg',
    './images/placeholder.png',
    './robot.txt',
    './manifest.json',
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

    // offline mode
    if (!navigator.onLine) {

        e.respondWith(caches.match(e.request));

    } else {

        // stale while revalidate
        if (
            e.request.method === 'GET' &&
            !e.request.url.startsWith('https://alireza-bookshop.herokuapp.com/api') &&
            !e.request.url.startsWith('chrome-extension')
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

        // network first
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
                    // .catch(() => {
                    //     return caches.match(e.request);
                    // })
            );
        }

        // network only
        if (
            e.request.method !== "GET" ||
            e.request.url.startsWith('chrome-extension')
        ) {
            e.respondWith(fetch(e.request).then(networkResponse => networkResponse));
        }


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
