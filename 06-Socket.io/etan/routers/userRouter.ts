import express from 'express';
const router = express.Router();

import {checkCookies, register, login} from '../controllers/userCont'

router
.post('/check-cookies', checkCookies)
.post('/register', register)
.post('/login', login)


export default router;