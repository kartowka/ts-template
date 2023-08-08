import { Router } from 'express'
const router = Router()
import { test } from '@controllers/index'
import { test2 } from '@models/index'
router.get('/', test)
router.get('/test', test2)
