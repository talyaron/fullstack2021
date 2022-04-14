import express from 'express';
const router = express.Router();

// מייבא את הפונקציות מהתייקיה של הקונטרולרים
import {adduser,login} from '../controlers/userCont';

router
.post('/login',login)
.post('/add-user', adduser);

export default router