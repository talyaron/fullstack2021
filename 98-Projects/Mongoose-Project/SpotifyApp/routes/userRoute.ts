import express from 'express';
const router = express.Router();

import{ logIn, Register } from '../controllers/userController'


router
.post("/sign-user",logIn)
.post("/reg-user",Register)


export default router;