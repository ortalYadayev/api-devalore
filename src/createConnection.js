import config from './utils/config.js'
import mongoose from 'mongoose'

const createConnection = async () => {
  // try {
  //   await mongoose.connect(config.mongodb_uri);
  //   console.log('Connected to MongoDB');
  // } catch (error) {
  //   console.log('Error connecting to MongoDB:', error.message);
  // }

  return await mongoose.connect(config.mongodb_uri)
}

export default createConnection
