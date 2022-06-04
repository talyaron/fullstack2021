import express from 'express'

const router=express.Router()



import {getUsers,login} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
export default router