import AppError from './index.js'

export class CORSError extends AppError {
  constructor(message) {
    super()
    this.name = this.constructor.name

    this.message = message || 'Not allowed by CORS'
    this.statusCode = 405
  }
}

