import { Bot } from 'grammy'

export const {
    TELEGRAM_BOT_TOKEN: token,
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(':').pop(),
} = process.env

export const bot = new Bot(token)

bot.on('message:text', ctx => ctx.reply(ctx.msg.text))
