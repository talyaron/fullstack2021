import express from 'express';
const router = express.Router();

import{ logIn, register } from '../controllers/userController'


router
.post("/sign-user",logIn)
.post("/reg-user",register)


export default router;