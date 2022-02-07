const errorHandlerMiddleware = (error, request, response, next) => {
  if (error.name === 'CaseError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'DocumentNotFoundError') {
    return response.status(404).send({ error: 'Not Found' })
  } else if (error.name === 'ValidationError') {
    return response.status(422).json({ error: error.errors })
  }

  next()
}

export default errorHandlerMiddleware
