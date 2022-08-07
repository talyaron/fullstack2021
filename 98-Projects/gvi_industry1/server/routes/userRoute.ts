import express from 'express';
const router = express.Router();
import {isAdmin} from'../middlewares/loginMiddleware'

import { addUser, login, getUsers, getUser,getFilter, getAllRecipients,getSearch,getLoggedInProfile,adminGetAllUsers,
     selectUser,getSelectingUser,getSelectedUser ,getUserProfile,updateUserDetails,addFlags, requestUser, getRequestedUser, mentee_mentor_users_req, getRequestUsers, requestAnsUser} from '../controllers/userCont'
import { requestMessage } from '../controllers/reqMessageCont';

router
     
    .post('/add-user', addUser)
    .post('/login', login)
    .get('/get-filter', getFilter)
    .post('/get-users', getUsers)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/get-search', getSearch)
    .post('/selected-users', selectUser)
    .post('/requested-users', requestUser)

    .post('/requested-messages', requestMessage)
    .post('/requested-answered',requestAnsUser )

 

    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-LoggedIn-Profile', getLoggedInProfile)
    .get('/admin-getAllUsers',isAdmin,adminGetAllUsers)
    .post('/get-selected-users',getSelectedUser)
    .post('/get-sent-request-users',getRequestedUser)
    .post('/get-mentee-mentor-requests',mentee_mentor_users_req)
    .post('/get-menteeMentor-requests',getRequestUsers)
   
    //.post ('/request-answer',requestAnsUser )
    
    
    .post('/get-userById',getUserProfile)
    .post('/updateUserDetails',updateUserDetails)
    .post('/flags',addFlags)
    // .post('/changeProfileImage',changeProfileImage)
    
    

export default router;


      