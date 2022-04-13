import express from 'express';
const router = express.Router();

import {adduser} from '../controlers/userCont';

router
.post('/login',login)
.post('/add-user', adduser);

export default router