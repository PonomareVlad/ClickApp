import { bot, secretToken as secret_token } from '../src/bot.mjs'

const {
    CI,
    VERCEL_URL = 'localhost',
    VERCEL_BRANCH_URL: hostname = VERCEL_URL,
} = process.env

if (!CI) process.exit()

await bot.init()

console.info('Info:', bot.botInfo)
console.info('Secret token:', secret_token)

const url = new URL('api/webhook', `https://${hostname}`)

if (await bot.api.setWebhook(url.href, { secret_token })) {
    const { url } = await bot.api.getWebhookInfo()
    console.info('Webhook set to URL:', url)
}
