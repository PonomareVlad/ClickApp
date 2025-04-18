// noinspection JSUnusedGlobalSymbols

export const config = { runtime: 'edge' }

export const POST = () => Response.json({ date: Date.now() })
