import express from 'express';
const router = express.Router();

import{ logIn, register, getAllUsers} from '../controllers/userController'


router
.get('/get-users',getAllUsers)
.post("/sign-user",logIn)
.post("/reg-user",register)


export default router;