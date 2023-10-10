import 'dotenv/config'
import express from 'express'
import { fileURLToPath } from 'url'

import cors from 'cors'
import bot from './tg.js'
import { router as makeOrderRouter } from './api/routes/makeOrder.js'

import logger from './api/middlewares/loggerMiddleware'
import tgAuth from './api/middlewares/tgAuthModdleware.js'
import * as path from 'path'

const PORT = process.env.PORT ?? 8000


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(tgAuth)
app.use(logger)

app.use('/makeOrder', makeOrderRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log('Listening on port:\t', PORT)
})

bot.launch()
