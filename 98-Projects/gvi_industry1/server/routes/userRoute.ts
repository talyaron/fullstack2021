import express from 'express'

const router=express.Router()

//in the next page before navigating to the types home page it will go through check type is admin

import {login} from '../controllers/userController'

router
.post('/login',login)

export default router
