import config from './utils/config.js'
import createConnection from './createConnection.js'
import createExpressInstance from './createExpressInstance.js'

const startApp = async () => {
  const app = createExpressInstance()

  await createConnection()

  try {
    await app.listen(config.port)
    console.log(`Server running on port ${config.port}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }

  return app
}

export default startApp
