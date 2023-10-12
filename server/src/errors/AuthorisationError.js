import AppError from './index.js'

export class AuthorisationError extends AppError {
  constructor(message) {
    super()
    this.name = this.constructor.name

    this.message = message || 'User is not authorized'
    this.statusCode = 401
  }
}

export class TelegramAuthorisationError extends AuthorisationError {}
