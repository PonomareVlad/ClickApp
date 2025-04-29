const { id = 0 } = globalThis.Telegram?.WebApp?.initDataUnsafe?.user || {}
const source = new EventSource('api/source?id=' + id)
const client = document.getElementById('client')
const server = document.getElementById('server')

let count = 0

source.addEventListener('message', ({ data }) => {
    server.textContent = data
    if (!count) client.textContent = String((count = parseInt(data)))
})

document.addEventListener('click', () => {
    client.textContent = String(++count)
    navigator.sendBeacon('api/click', String(id))
})
