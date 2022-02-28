'use strict'

import http from 'http'

export default class ResponseBody {
  statusCode: number;
  status?: string;
  message?: string;
  data?: any;
  error?: any;

  constructor (statusCode:number, message?:string, data?:any, error?:any) {
    this.statusCode = statusCode
    this.status = http.STATUS_CODES[statusCode]
    this.message = message
    this.data = data
    this.error = error
  }
}
