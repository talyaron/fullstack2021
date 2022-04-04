import express from 'express';
const router = express.Router();

import {addUser,getUser, updateUser} from "../controllers/usersCont"

router
.get('/get-user',getUser)
.post('/add-user',addUser)
.patch('/update-user',updateUser)


export default router;