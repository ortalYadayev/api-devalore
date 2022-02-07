import express from 'express';
import Person from '../models/person.js';

const personsRouter = express.Router();

personsRouter.get('/api/persons', async (request, response) => {
  const persons = await Person.find()

  response.json(persons);
});

personsRouter.post('/api/persons', async (request, response, next) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name or Number is missing...' });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  try {
    const savedPerson = await person.save();
    response.json(savedPerson);
  } catch (e) {
    next(e.message);
  }
});

personsRouter.get('/api/persons/:id', async (request, response, next) => {
  try {
    const person = await Person.findById(request.params.id).orFail();
    response.json(person);
  } catch (e) {
    next('Person does not exist...');
  }
});

personsRouter.put('/api/persons/:id', async (request, response, next) => {
  const body = request.body;

  if (!body.number) {
    return response.status(400).json({ error: 'Number is missing...' });
  }

  const person = {
    number: body.number,
  };

  try {
    const updatedPerson = await Person.findByIdAndUpdate(body.id, person, { new: true }).orFail();
    response.json(updatedPerson);
  } catch (e) {
    next('Person does not exist...');
  }
});

personsRouter.delete('/api/persons/:id', async (request, response, next) => {
  try {
    await Person.findByIdAndDelete(request.params.id).orFail();
    response.status(204).end();
  } catch (e) {
    next('Person already got deleted...');
  }
});

export default personsRouter;