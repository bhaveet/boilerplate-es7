"use strict"

import { ResponseBody } from "../helpers"
import HealthRouter from "./Health"
import VersionRouter from "./Version"


const Routes = [
	{ path: "/health", router: HealthRouter },
	{ path: "/version", router: VersionRouter },
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  // Custom Routes
  Routes.forEach(route => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', (request, response, next) => {
    if (!request.isMatched) {
      const { method, originalUrl } = request
      const message = `Cannot ${method} ${originalUrl}`
      const error = new ResponseBody(404, message)
      response.body = error
    }

    return _sendResponse(request, response, next)
  })

  // Route Error Handler
  app.use((error, request, response, next) => {
    if (!error) { return process.nextTick(next) }
    console.log(error)

    let { statusCode = 500, message } = error
    let responseBody

    if (error.constructor.name === 'ResponseBody') {
      responseBody = error
    } else {
      responseBody = new ResponseBody(statusCode, message, error)
    }

    response.body = responseBody
    return _sendResponse(request, response, next)
  })
}

function _sendResponse (request, response, next) {
  let resBody = response.body || {}
  const { statusCode } = resBody

  if (!resBody || !statusCode) {
    resBody = new ResponseBody(500, 'Response Data Not Found!')
  }

  response.status(resBody.statusCode).json(resBody)
}

export default Routes
