import 'dotenv/config'

import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const BOT_TOKEN = process.env.BOT_TOKEN

if (!BOT_TOKEN) {
  throw new Error('Bot token not provided')
}

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply(
    'Hello! It\'s time to make your cat happy! Click on the "Shop" button'
  )
} )

bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true))

bot.on(message('successful_payment'), async (ctx) => {
  await ctx.reply('Thank you for making your cat happy, and us too!')
})

export default bot
