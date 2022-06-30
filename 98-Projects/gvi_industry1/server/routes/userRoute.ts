import express from 'express';
const router = express.Router();

import { addUser,login,getMentors, getUser } from '../controllers/userCont'
// import{getUsers, addUser} from '../controllers/userController'
router
// .get('/getUsers', getUsers)
// .post('/addUser', addUser)
.post('/add-user',addUser)
.post('/login',login)
.post('/get-mentors', getMentors)
.get('/get-user', getUser)

export default router;

