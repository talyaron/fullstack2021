import  express  from "express";
const router = express.Router();


import {register} from '../controller/userController'


router
 .post('/user/register' , register);

export default router;