import express from 'express';
const router = express.Router();


import {isAdmin} from'../middleware/userMid'
import { getUsers } from '../controler/usersCont'
import { registerUser} from '../controler/usersCont'
import { login} from '../controler/usersCont'
import { updateUser} from '../controler/usersCont'
import { deleteUser} from '../controler/usersCont'

router
.get('/get-Users',isAdmin,getUsers)
.post('/add-User',registerUser)
.post('/login',login)
.patch('/update-user',isAdmin,updateUser)
.delete('/delete-user',isAdmin,deleteUser)

export default router;