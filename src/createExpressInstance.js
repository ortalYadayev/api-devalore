import express from 'express'
import cors from 'cors'
import errorHandlerMiddleware from './middlewares/errorHandler.middleware.js'
import unknownEndpointMiddleware from './middlewares/unknownEndpoint.middleware.js'
import personsRouter from "./controllers/persons.js";
import Person from "./models/person.js";

const createExpressInstance = () => {
  const app = express()

  // Middlewares
  app.use(express.json())
  app.use(cors())

  // Routes
  app.get('/info', async (request, response) => {
    const personsCount = await Person.count();

    response.send(`
            <h2>Phonebook has info for ${personsCount} people</h2>
            <p>${new Date()}</p>
    `)
  });

  app.use(personsRouter);

  // Middlewares
  app.use(unknownEndpointMiddleware)
  app.use(errorHandlerMiddleware)

  return app
}

export default createExpressInstance
