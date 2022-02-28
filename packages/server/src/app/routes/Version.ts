'use strict'

import Express from 'express'
import { routerUtils, asyncWrapper } from '../helpers'
import { VersionController } from '../controllers'

const VersionRouter = Express.Router()
const { get } = VersionController
const { routeSanity } = routerUtils

VersionRouter.get('/', routeSanity, asyncWrapper(get))


export default VersionRouter
