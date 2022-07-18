import express from 'express';
const router = express.Router();
import {isAdmin} from'../middlewares/loginMiddleware'

import { addUser, login, getUsers, getUser, getAllRecipients,getSearch,getLoggedInProfile,adminGetAllUsers,
     selectUser,getSelectingUser,getSelectedUser ,getUserProfile,updateUserDetails,addFlags} from '../controllers/userCont'

router
     
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-users', getUsers)
    .get('/get-mentors',getSearch)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .get('/get-search', getSearch)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-LoggedIn-Profile', getLoggedInProfile)
    .get('/admin-getAllUsers',adminGetAllUsers)
    .post('/get-selected-users',getSelectedUser)
    .post('/get-userById',getUserProfile)
    .post('/updateUserDetails',updateUserDetails)
    .post('/flags',addFlags)
    
    
    

export default router;


