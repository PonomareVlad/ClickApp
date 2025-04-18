const { id } = globalThis.Telegram.WebApp.initDataUnsafe.user
const source = new EventSource('api/source?id=' + id)
const button = document.getElementById('send')

source.addEventListener('message', ({ data }) => (button.textContent = data))
button.addEventListener('click', () => navigator.sendBeacon('api/click', id))
