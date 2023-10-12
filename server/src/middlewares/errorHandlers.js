import AppError from '../errors'

export const errorLogger = (error, req, res, next) => {
  if (error instanceof AppError) {
    console.error(`\x1b[31m${error.statusCode} [${error.type}]: ${error.message}\x1b[0m`)
    console.error(error.stack)

    return next(error)
  }

  console.error(`\x1b[31m${error.message}\x1b[0m\``)
  console.error(error.stack)

  next(new AppError(error.message, 500))
}

export const errorResponder = (error, req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.status(error.statusCode || 500).send(JSON.stringify(error))
}

