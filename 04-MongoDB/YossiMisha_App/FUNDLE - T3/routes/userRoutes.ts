import express from 'express';
const router = express.Router();

import {addUser,getUser} from "../controllers/usersCont"

router
.get('/get-user',addUser)
.post('/add-user',getUser)



export default router;