import express from 'express'

const router=express.Router()



import {getUsers} from '../controller/usersController'

router
.get('/users',getUsers)
export default router