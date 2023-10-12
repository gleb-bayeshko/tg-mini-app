import AppError from './index.js'

export class EntityDoesNotExistError extends AppError {
  constructor(message, entity) {
    super()
    this.name = this.constructor.name

    this.message = `${entity} does not exist`
    this.statusCode = 404
  }
}

