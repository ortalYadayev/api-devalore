const unknownEndpointMiddleware = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

export default unknownEndpointMiddleware
