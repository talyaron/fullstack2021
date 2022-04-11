import express from 'express';
const router = express.Router();
import {getAllUsers, addUser, updateUser, deleteUser,login} from '../controlers/usersCont';

import {isAdmin} from '../middlewares/isAdmin'

router
.get('/get-users',isAdmin,  getAllUsers)
.post("/add-user", addUser)
.post('/login',login)
.patch("/update-user", isAdmin, updateUser)
.delete("/delete-user",isAdmin, deleteUser)

export default router;