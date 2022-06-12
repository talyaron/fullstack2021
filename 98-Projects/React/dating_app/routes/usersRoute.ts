import express from 'express'

const router=express.Router()



import {getUsers,login, getUsersProfile, updateUser,showLoggedInCookie} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
.get('/:ProfilesId', getUsersProfile)
.patch('/updateUsers', updateUser)
.post('/loggedInUser',showLoggedInCookie)
export default router
