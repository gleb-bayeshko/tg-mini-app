import CryptoJS from 'crypto-js'
import { TelegramAuthorisationError } from '../errors/AuthorisationError.js'

const tgAuth = (req, res, next) => {
  const authData = req.body.authData

  console.log(req.cookies)

  const initData = new URLSearchParams(authData)
  const userHash = initData.get('hash')

  initData.sort()

  const dataCheckString = Array.from(initData)
    .filter(([key]) => key !== 'hash')
    .map(field => field.join('='))
    .join('\n')

  const secret = CryptoJS.HmacSHA256(process.env.BOT_TOKEN, 'WebAppData')
  const hexHash = CryptoJS.HmacSHA256(dataCheckString, secret).toString(CryptoJS.enc.Hex)

  if (hexHash !== userHash) {
    throw new TelegramAuthorisationError()
  }

  next()
}

export default tgAuth
