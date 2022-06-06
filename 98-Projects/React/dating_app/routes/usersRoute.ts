import express from 'express'

const router=express.Router()



import {getUsers,login,getLoginUser, getUsersProfile, updateUser} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
.get('/getLoginUser',getLoginUser)
.get('/:ProfilesId', getUsersProfile)
.patch('/updateUsers', updateUser)
export default router
