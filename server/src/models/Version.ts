'use strict'

import { APP } from '../constants'

const { VERSION, DESCRIPTION, NAME } = APP

const VersionModel = {
  get
}

export default VersionModel

async function get () {
  const response = {
    name: NAME,
    description: DESCRIPTION,
    version: VERSION
  }

  return response
}
