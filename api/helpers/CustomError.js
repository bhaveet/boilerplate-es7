'use strict'

import http from 'http'

// Error Object Standard Data Structure Class
class CustomError extends Error {
  constructor (statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message !== undefined ? message : http.STATUS_CODES[statusCode]
  }
}

export default CustomError
