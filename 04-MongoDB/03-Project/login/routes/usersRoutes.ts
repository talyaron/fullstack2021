import express from 'express';
const router = express.Router();

import{login,getAllUsers,addUser,updateUser} from '../controller/userController';

router 

.get('/get-users',getAllUsers)
.post("/add-user",addUser)
.post('/login',login)
.patch("/update-user", updateUser)



export default router;