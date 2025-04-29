// noinspection JSUnusedGlobalSymbols

import { bot, secretToken } from '../src/bot.mjs'
import { webhookCallback } from 'grammy'

export const config = { runtime: 'edge' }

export const POST = webhookCallback(bot, 'std/http', {
    secretToken,
})
