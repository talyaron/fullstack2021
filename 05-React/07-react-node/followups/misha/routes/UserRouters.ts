import express from 'express'
const router = express.Router()
import {addUser, getUsers, deleteUser, getLoginUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/login', getLoginUser)
.post('/addUser', addUser)
.delete('/deleteUser', deleteUser)


export default router
