import express from 'express';
const router = express.Router();
import {addUser} from '../Controllers/userCont';

router
.post('/add-user',addUser)


export default router;