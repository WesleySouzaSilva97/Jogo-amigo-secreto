/**
 * Service worker
 * @author Wesley Souza
 */

// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('./Jogo-amigo-secreto/')
                cache.add('./Jogo-amigo-secreto/index.html')
                cache.add('./Jogo-amigo-secreto/style.css')
                cache.add('./Jogo-amigo-secreto/app.js')
                cache.add('./Jogo-amigo-secreto/assets/amigo-secreto.png')
                cache.add('./Jogo-amigo-secreto/assets/play_circle_outline.png')
            })
    )
})
// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
})
// Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})