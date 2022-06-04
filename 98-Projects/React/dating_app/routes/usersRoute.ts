import express from 'express'

const router=express.Router()



import {getUsers} from '../controller/usersController'
import {getUsersProfile} from '../controller/usersController'
import {updateUser} from '../controller/usersController'
router
.get('/users',getUsers)
.get('/:ProfilesId', getUsersProfile)
.patch('/updateUsers', updateUser)
export default router