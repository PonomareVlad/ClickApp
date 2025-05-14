globalThis.Telegram?.WebApp?.requestFullscreen()

const { id = 0 } = globalThis.Telegram?.WebApp?.initDataUnsafe?.user || {}
const source = new EventSource('api/source?id=' + id)
const client = document.getElementById('client')
const server = document.getElementById('server')
const bonus = document.getElementById('bonus')

let count = 0

bonus.addEventListener('click', () => bonus.classList.toggle('active', false))

source.addEventListener('bonus', () => bonus.classList.toggle('active', true))

source.addEventListener('message', ({ data }) => {
    server.textContent = data
    if (!count) client.textContent = String((count = parseInt(data)))
})

document.addEventListener('click', () => {
    client.textContent = String(++count)
    navigator.sendBeacon('api/click', String(id))
})
