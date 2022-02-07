import config from './utils/config.js'
import mongoose from 'mongoose'

const createConnection = async () => {
    return await mongoose.connect(config.mongodb_uri)
}

export default createConnection
