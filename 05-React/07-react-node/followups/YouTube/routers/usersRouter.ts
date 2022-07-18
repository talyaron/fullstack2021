import express from 'express';
const router = express.Router();
import { login } from '../controllers/usersConts'

router
    .post('/login', login)



export default router;