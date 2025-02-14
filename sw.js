/**
 * Service worker
 * @author Wesley Souza
 */

// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('./amigoSecreto/')
                cache.add('./amigoSecreto/index.html')
                cache.add('./amigoSecreto/style.css')
                cache.add('./amigoSecreto/app.js')
                cache.add('./amigoSecreto/img/amigo-secreto.png')
                cache.add('./amigoSecreto/img/play_circle_outline.png')
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