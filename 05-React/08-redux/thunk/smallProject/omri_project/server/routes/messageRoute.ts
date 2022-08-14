import express from 'express';
const router = express.Router();

import { addMessage, deleteMessage } from '../controllers/messageCont';

router

.post('/add-message',addMessage)
.delete('/delete-message',deleteMessage)
export default router;