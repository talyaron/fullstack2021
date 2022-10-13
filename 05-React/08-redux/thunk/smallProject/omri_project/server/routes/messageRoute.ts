import express from 'express';
const router = express.Router();

import { addMessage, deleteMessage,getMesaages } from '../controllers/messageCont';

router

.post('/add-message',addMessage)
.delete('/delete-message',deleteMessage)
.get('/get-mesaages', getMesaages)
export default router;