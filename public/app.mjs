const source = new EventSource('api/source')

source.addEventListener('message', console.log)

document
    .querySelector('button')
    .addEventListener('click', () => navigator.sendBeacon('api/click'))
