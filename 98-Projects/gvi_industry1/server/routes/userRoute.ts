import express from 'express';
const router = express.Router();
import {addUser} from '../controllers/userController';
import {login} from '../controllers/userController';
// import{getUsers, addUser} from '../controllers/userController'
router
// .get('/getUsers', getUsers)
// .post('/addUser', addUser)
.post('/add-user',addUser)
.post('/login',login)


export default router;