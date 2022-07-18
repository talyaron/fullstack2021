import express from 'express';
const router = express.Router();
import {isAdmin} from'../middlewares/loginMiddleware'

import { addUser, login, getUsers, getUser,getFilter, getAllRecipients,getSearch,getLoggedInProfile,adminGetAllUsers,
     selectUser,getSelectingUser,getSelectedUser ,getUserProfile,updateUserDetails,addFlags} from '../controllers/userCont'

router
     
    .post('/add-user', addUser)
    .post('/login', login)
    .get('/get-filter', getFilter)
    .post('/get-users', getUsers)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/get-search', getSearch)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-LoggedIn-Profile', getLoggedInProfile)
    .get('/admin-getAllUsers',isAdmin,adminGetAllUsers)
    .post('/get-selected-users',getSelectedUser)
    .post('/get-userById',getUserProfile)
    .post('/updateUserDetails',updateUserDetails)
    .post('/flags',addFlags)
    
    
    

export default router;


