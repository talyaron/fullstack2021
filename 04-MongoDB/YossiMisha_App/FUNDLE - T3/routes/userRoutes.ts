import express from 'express';
const router = express.Router();

import {addUser,getUser} from "../controllers/usersCont"

router
.get('/get-user',getUser)
.post('/add-user',addUser)



export default router;