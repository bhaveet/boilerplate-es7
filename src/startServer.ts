'use strict'

import {
  SERVER_CONFIG,
  // MONGO_CONFIG
} from './configs'
// import taskRunner from './api/crons'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    // Connect to MongoDB
    // await MONGO_CONFIG.mongoConnect()
    // console.log('[Info] MongoDB Connected')

    await app.listen(PORT)
    console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)

    // console.log('[Task] running tasks initiator started')
    // taskRunner()
    // console.log('[Task] running tasks initiator ended')

  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
