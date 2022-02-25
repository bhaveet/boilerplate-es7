'use strict'

function asyncWrapper (fn: (request: any, response: any, next: any)=>any) {
  return (request: any, response: any, next: any) => {
    return Promise.resolve(fn(request, response, next)).catch(next)
  }
}

export default asyncWrapper
