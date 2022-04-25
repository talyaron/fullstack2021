import express from 'express';
const router = express.Router();
import { addWord, getWord } from '../controllers/wordCont'

router
    .post('/add-word', addWord)
    .get('/get-word', getWord)
export default router;