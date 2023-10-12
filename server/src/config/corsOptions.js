import { CORSError } from '../errors/CORSError.js'

const whitelist = ['https://192.168.0.103:5173']

const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new CORSError('Not allowed by CORS'))
    }
  }
}

export default corsOptions
