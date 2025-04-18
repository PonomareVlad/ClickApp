// noinspection JSUnusedGlobalSymbols

export const config = { runtime: 'edge' }

export const GET = () => Response.json({ date: Date.now() })
