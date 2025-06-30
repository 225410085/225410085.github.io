self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/login.html',
                '/register.html',
                '/matematika.html',
                '/bahasa_inggris.html',
                '/statistika.html',
                '/workshop.html',
                '/styles.css', // atau file CSS Anda
                '/script.js'    // atau file JS Anda
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});