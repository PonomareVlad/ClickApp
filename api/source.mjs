// noinspection JSUnusedGlobalSymbols

import { balance } from '../src/mongo.mjs'

export const config = { runtime: 'edge' }

const headers = {
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
}

export const GET = ({ url }) => {
    const encoder = new TextEncoder()
    const signal = AbortSignal.timeout(180 * 1000)
    const id = new URL(url).searchParams.get('id')
    const stream = new ReadableStream({
        pull: async controller => {
            const data = await balance.findOne({ id })
            const chunk = `data: ${data?.value || 0}\n\n`
            controller.enqueue(encoder.encode(chunk))
        },
        start: controller => {
            controller.enqueue(encoder.encode('retry: 0\n\n'))
            signal.addEventListener('abort', () => controller.close())
        },
    })
    return new Response(stream, { headers })
}
