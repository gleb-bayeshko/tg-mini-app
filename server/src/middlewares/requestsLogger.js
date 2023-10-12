const requestsLogger = (req, res, next) => {
  res.on('finish', () => {
    console.log(
      `[${req.protocol}]`,
      req.method,
      res.statusCode,
      req.ip,
      req.url,
    )
  })
  next()
}

export default requestsLogger
