import express from 'express'

const router=express.Router()



import {getUsers,login,getLoginUser} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
.get('/getLoginUser',getLoginUser)
export default router