'use strict'

import ResponseBody from './ResponseBody'

const routerUtils = {
  sendResponse,
  routeSanity
}

export default routerUtils

function sendResponse (request:any, response:any, next:any) {
  let { body } = response
  const { statusCode } = body || {}

  if (!body || !statusCode) {
    body = new ResponseBody(500, 'Response Data Not Found!')
  }

  response.status(body.statusCode).json(body)
}

function routeSanity (request: any, response: any, next: any) {
  request.isMatched = true
  process.nextTick(next)
}
