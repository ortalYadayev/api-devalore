import express from 'express'
import cors from 'cors'
import errorHandlerMiddleware from './middlewares/errorHandler.middleware.js'
import unknownEndpointMiddleware from './middlewares/unknownEndpoint.middleware.js'
import petsRouter from './controllers/pets.js';
import Pet from './models/pet.js';

const createExpressInstance = () => {
    const app = express()

    // Middlewares
    app.use(express.json())
    app.use(cors())

    // Routes
    app.get('/info', async (request, response) => {
        const petsCount = await Pet.count();

        response.send(`
            <h2>Phonebook has info for ${petsCount} people</h2>
            <p>${new Date()}</p>
    `)
    });

    app.use(petsRouter);

    // Middlewares
    app.use(unknownEndpointMiddleware)
    app.use(errorHandlerMiddleware)

    return app
}

export default createExpressInstance
