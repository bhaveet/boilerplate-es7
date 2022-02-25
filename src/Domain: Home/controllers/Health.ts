'use strict'

import { ResponseBody } from '../helpers'
import { HealthModel } from '../models'

const HealthController = {
  get
}

export default HealthController

async function get (request: any, response: any, next: any) {
  const data = await HealthModel.get()
  const responseBody = new ResponseBody(200, 'Health Check Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
