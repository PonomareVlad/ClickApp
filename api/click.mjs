// noinspection JSUnusedGlobalSymbols

import { waitUntil } from '@vercel/functions'
import { balance } from '../src/mongo.mjs'

export const config = { runtime: 'edge' }

const update = { $inc: { value: 1 } }
const options = { upsert: true }

export const POST = req => {
    waitUntil(req.text().then(id => balance.updateOne({ id }, update, options)))
    return new Response()
}
