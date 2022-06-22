import  express  from "express";
const router = express.Router();


import {register , logIn} from '../controller/userController';



router
 .post('/register' , register)
 .post('/log-in' , logIn)

export default router;

