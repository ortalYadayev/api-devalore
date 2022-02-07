import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minLength: 2,
    required: true,
  },
  number: {
    type: String,
    minLength: 2,
    required: true,
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)

export default Person;


// notes...
// const mongoose = require('mongoose')
//
// const noteSchema = new mongoose.Schema({
//   content: {
//     type: String,
//     required: true,
//     minlength: 5
//   },
//   date: Date,
//   important: Boolean,
// })
//
// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })
//
// module.exports = mongoose.model('Note', noteSchema)