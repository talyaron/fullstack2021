import express from 'express'
const router = express.Router()
import {addMessage} from '../Conts/messagesCont'


router
.post('/add-message', addMessage);


export default router;