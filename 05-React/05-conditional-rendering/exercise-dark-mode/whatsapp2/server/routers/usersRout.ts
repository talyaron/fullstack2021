import express from 'express'
const router = express.Router()
import {login} from '../Conts/usersCont'


router
.post('/login', login)


export default router;