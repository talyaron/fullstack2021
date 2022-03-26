import express from 'express';
const router = express.Router();
import {addUser} from '../conroler/userCont'
import {findUser} from '../conroler/userCont'
import {updateUser} from '../conroler/userCont'

router
.post('/add-user', addUser)
.get('/log-user', findUser)
.patch('/update-user', updateUser)

export default router;