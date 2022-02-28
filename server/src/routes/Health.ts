'use strict'

import Express from 'express'
import { routerUtils, asyncWrapper } from '../helpers'

import { HealthController } from '../controllers'

const HealthRouter = Express.Router()
const { get } = HealthController
const { routeSanity } = routerUtils

HealthRouter.get('/', routeSanity, asyncWrapper(get))


export default HealthRouter
