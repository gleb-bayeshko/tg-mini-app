import * as path from 'path'
import * as https from 'https'
import * as fs from 'fs'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import bot from './tg.js'

import { router as invoiceRouter } from './api/routes/invoice.js'

import logger from './api/middlewares/loggerMiddleware'
import tgAuth from './api/middlewares/tgAuthModdleware.js'

import { getIPAddress } from './utils.js'

const PORT = process.env.PORT ?? 8000

const CLIENT_DIST_PATH = path.resolve(process.cwd(), '..', 'client', 'dist')
const SSL_PATH = path.resolve(process.cwd())

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logger)

app.use('/invoice', tgAuth, invoiceRouter)

app.use(express.static(CLIENT_DIST_PATH))

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(CLIENT_DIST_PATH, 'index.html'))
})


https
  .createServer(
    {
      key: fs.readFileSync(path.resolve(SSL_PATH, 'key.pem')),
      cert: fs.readFileSync(path.resolve(SSL_PATH, 'cert.pem')),
    },
    app
  )
  .listen(PORT, () => {
    const ip = getIPAddress()
    console.log('Listening on port:\t', PORT)
    console.log(`URL:\t\t\t https://${ip}:${PORT}`)
  })


bot.launch()
