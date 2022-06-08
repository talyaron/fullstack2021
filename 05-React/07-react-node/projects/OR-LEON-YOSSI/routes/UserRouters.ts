import express from 'express'
const router = express.Router()

import{getUsers, addUser, getLoginUser, getSelectedUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/addUser', addUser)
.post('/login', getLoginUser)
.post('/get-selected-user',getSelectedUser)

export default router