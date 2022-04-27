import { Router } from 'express'
const router = Router();

import {handleGetUsers , handleAddUser , handleUpdateUser} from '../controller/userController'

router
.get('/get-users' , handleGetUsers)
.post('/add-user' , handleAddUser)
.patch('/update-user',handleUpdateUser)
export default router;