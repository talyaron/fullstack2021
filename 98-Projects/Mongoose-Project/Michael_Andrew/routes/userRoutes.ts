import express from 'express';
const router = express.Router();
import {addUser, findUser, updateUser, addArtToUser, buyAndSell, adminGetUser} from '../conroler/userCont'



router
.post('/add-user', addUser)
.get('/log-user', findUser)
.patch('/update-user', updateUser)
.patch('/buy-and-sell', buyAndSell)
.get('/admin-get-users', adminGetUser)

export default router;