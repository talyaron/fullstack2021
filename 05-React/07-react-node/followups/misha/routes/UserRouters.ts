import express from 'express'
const router = express.Router()
import {addUser, getUsers, deleteUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/addUser', addUser)
.delete('/deleteUser', deleteUser)


export default router
