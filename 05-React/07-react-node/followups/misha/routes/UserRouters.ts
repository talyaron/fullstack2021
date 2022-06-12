import express from 'express'
const router = express.Router()
import {addUser, getUsers, deleteUser, getLoginUser, updateUser, getOneUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/login', getLoginUser)
.post('/addUser', addUser)
.patch('/getOneUser', getOneUser)
.delete('/deleteUser', deleteUser)
.patch('/updateUser', updateUser)


export default router
