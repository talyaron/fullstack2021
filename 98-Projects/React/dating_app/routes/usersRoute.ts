import express from 'express'

const router=express.Router()



import {getUsers,login, getUsersProfile, updateUser} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
.get('/:ProfilesId', getUsersProfile)
.patch('/updateUsers', updateUser)
export default router
