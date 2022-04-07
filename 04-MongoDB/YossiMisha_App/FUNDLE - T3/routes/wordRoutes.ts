import express from 'express';
const router = express.Router();

import {addToDB, getDailyWord} from "../controllers/wordsCont"

router
.get('/get-word', getDailyWord)

addToDB()

export default router;