import express from 'express'
const router = express.Router()
import {addUser, getUsers} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/addUser', addUser)


export default router
