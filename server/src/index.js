import 'dotenv/config'
import express from 'express'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

import logger from './api/middlewares/loggerMiddleware'

const PORT = process.env.PORT ?? 8000
const BOT_TOKEN = process.env.BOT_TOKEN

if (!BOT_TOKEN) {
  throw new Error('Bot token not provided')
}

const bot = new Telegraf(BOT_TOKEN)
const app = express()

app.use(logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log('Listening on port:\t', PORT)
})

bot.on(message('text'), ctx => ctx.reply('Hello from bot!'))
bot.launch()
