import { Bot, InlineKeyboard } from 'grammy'

export const {
    TELEGRAM_BOT_TOKEN: token,
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(':').pop(),
} = process.env

export const bot = new Bot(token)

const safe = bot.errorBoundary(console.error)

safe.command('start', ctx => ctx.reply(`Send WebApp URL starting with https://`))

safe.on(':text', ctx => {
    const url = new URL(ctx.msg.text.trim())
    return ctx.reply(`Click button to open WebApp`, {
        reply_markup: new InlineKeyboard().webApp(url.hostname, url.href),
    })
})
