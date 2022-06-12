import express from 'express'
const router = express.Router()

import{getUsers, addUser, getLoginUser, getUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/addUser', addUser)
.post('/login', getLoginUser)
.post('/getUser', getUser)

export default router