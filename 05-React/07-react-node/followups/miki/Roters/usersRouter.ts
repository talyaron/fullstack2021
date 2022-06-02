import express from 'express'
const router = express.Router()
import {login} from '../Controllers/usersConts'

router
.post('/users', login)




export default router;