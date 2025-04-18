// noinspection JSUnusedGlobalSymbols

let balance = 12345

export const config = { runtime: 'edge' }

export const GET = () =>
    new Response(
        new ReadableStream({
            start: controller =>
                setInterval(() => {
                    const data = JSON.stringify({
                        date: Date.now(),
                        balance,
                    })
                    controller.enqueue(`data: ${data}\n\n`)
                }, 1000),
        }),
        {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive',
            },
        }
    )
