import * as path from 'path'
import * as https from 'https'
import * as fs from 'fs'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import bot from './tg'

import { router as invoiceRouter } from './api/routes/invoice'
import { router as productsRouter } from './api/routes/products'

import requestsLogger from './middlewares/requestsLogger.js'
import tgAuth from './middlewares/tgAuth'
import { errorLogger, errorResponder } from './middlewares/errorHandlers'

import { getIPAddress } from './utils'

import corsOptions from './config/corsOptions'

const PORT = process.env.PORT ?? 8000
const CLIENT_DIST_PATH = path.resolve(process.cwd(), '..', 'client', 'dist')
const SSL_PATH = path.resolve(process.cwd())

const app = express()

app.use(cors(corsOptions))
app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(requestsLogger)

app.use('/invoice', tgAuth, invoiceRouter)
app.use('/products', productsRouter)

app.use(express.static(CLIENT_DIST_PATH))

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(CLIENT_DIST_PATH, 'index.html'))
})

app.use(errorLogger)
app.use(errorResponder)

if (!process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    const ip = getIPAddress()
    console.log('Listening on port:\t', PORT)
    console.log(`URL:\t\t\t http://${ip}:${PORT}`)
  })
} else {
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
}


bot.launch()
