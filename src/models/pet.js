import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        maxLength: 25,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
})

petSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Pet = mongoose.model('Pet', petSchema)

export default Pet;