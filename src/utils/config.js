import dotenv from 'dotenv'

dotenv.config({
  path: process.env.MODE_ENV !== 'test' ? '.env' : '.env.test',
})

export default {
  port: process.env.APP_PORT,
  mongodb_uri: process.env.MONGODB_URI,
}
