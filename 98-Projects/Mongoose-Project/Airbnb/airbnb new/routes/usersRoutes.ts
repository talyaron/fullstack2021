import express from 'express';
const router = express.Router();
import { getUsers } from '../controler/usersCont'
import { addUser} from '../controler/usersCont'
import { login} from '../controler/usersCont'

router
.get('/get-Users',getUsers)
.post('/add-User',addUser)
.post('/login',login)

export default router;