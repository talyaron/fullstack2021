import express from 'express';
const router = express.Router();
import {login} from '../Controllers/employeeCont'


router
.post('/login', login)

export default router;