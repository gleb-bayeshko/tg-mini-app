export default class AppError extends Error {
  constructor(message, statusCode) {
    super()
    this.name = this.constructor.name

    this.message = message || 'Something went wrong'
    this.statusCode = statusCode || 500
  }
}
