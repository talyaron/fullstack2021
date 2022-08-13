import express from 'express';
const router = express.Router();


import {addMessage,deleteMessage,updateMessage,getMessages} from '../controllers/chatCont'
//import {getMessages} from '../../client/src/features/reducers/chatAPI'


router
.get('/get-allMessages',getMessages)
.post('/add-message',addMessage)
.patch('/edit-message',updateMessage)
.delete('/delete-message',deleteMessage)

export default router;