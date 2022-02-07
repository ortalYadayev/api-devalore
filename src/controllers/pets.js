import express from 'express';
import Pet from '../models/pet.js';

const petsRouter = express.Router();

petsRouter.get('/api/pets', async (request, response) => {
    const pets = await Pet.find()

    response.json(pets);
});

petsRouter.post('/api/pets', async (request, response, next) => {
    const body = request.body;

    if (!body.name || !body.number || !body.type || !body.color) {
        return response.status(400).json({ error: 'data is missing...' });
    }

    const pet = new Pet({
        name: body.name,
        number: body.number,
        type: body.type,
        color: body.color,
    });

    try {
        const savedPet = await pet.save();
        response.json(savedPet);
    } catch (e) {
        next(e.message);
    }
});

export default petsRouter;