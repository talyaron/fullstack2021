import express from 'express';
const router = express.Router();
import {addUser, findUser, updateUser, addArtToUser, buyAndSell} from '../conroler/userCont'
import { hasFunds } from '../middleware/hasFunds';



router
.post('/add-user', addUser)
.get('/log-user', findUser)
.patch('/update-user', updateUser)
.patch('/buy-and-sell',hasFunds, buyAndSell)

export default router;