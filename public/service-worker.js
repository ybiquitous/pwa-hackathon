const cacheName = 'pwa-hackathon'
const filesToCache = [
  '/',
  '/?homescreen=1',
  '/index.html',
  '/index.html?homescreen=1',
  '/images/icon.png',
]

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install')
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] fetch')
  event.respondWith(
    caches.match(event.request)
  )
})
