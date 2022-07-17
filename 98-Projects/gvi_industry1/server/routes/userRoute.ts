import express from 'express';
const router = express.Router();
import {isAdmin} from'../middlewares/loginMiddleware'

import { addUser, login, getMentors, getUser, getAllRecipients, selectUser,getSelectingUser,getSelectedUserdata , getLoggedInProfile,adminGetAllUsers} from '../controllers/userCont'

router
     
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-mentors', getMentors)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-selected-users',getSelectedUserdata)
    .post('/get-LoggedIn-Profile', getLoggedInProfile)
    .get('/admin-getAllUsers',adminGetAllUsers)
    //post for theType
export default router;

