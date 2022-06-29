import express from 'express'
const router = express.Router()

import{getUsers, addUser} from '../controllers/UsersController'

router
.get('/getUsers', getUsers)
.post('/addUser', addUser)


export default router