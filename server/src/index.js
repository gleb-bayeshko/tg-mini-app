import 'dotenv/config'
import express from 'express'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const PORT = process.env.PORT ?? 8000
const BOT_TOKEN = process.env.BOT_TOKEN

if (!BOT_TOKEN) {
  throw new Error('Bot token not provided')
}

const bot = new Telegraf(BOT_TOKEN)
const app = express()

bot.on(message('text'), ctx => ctx.reply('Hello'))

app.listen(PORT, () => {
  console.log('Listening on port:\t', PORT)
})

bot.launch()
