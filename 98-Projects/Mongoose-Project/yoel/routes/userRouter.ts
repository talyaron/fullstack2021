import { Router } from 'express'
const router = Router();

import {handleGetUsers , handleAddUser , handleReg , handleSign} from '../controller/userController'

router
.get('/get-users' , handleGetUsers)
.post('/add-user' , handleAddUser)
.post('/reg-user' , handleReg)
.post('/sign-in' , handleSign)
export default router;