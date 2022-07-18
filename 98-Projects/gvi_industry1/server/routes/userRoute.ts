import express from 'express';
const router = express.Router();
import {isAdmin} from'../middlewares/loginMiddleware'

import { addUser, login, getMentors, getUser, getAllRecipients,
     selectUser,getSelectingUser,getSelectedUserdata ,getUserProfile,updateUserDetails} from '../controllers/userCont'

router
     
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-mentors',test, getMentors)
    .get('/get-mentors',getSearch)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .get('/get-search', getSearch)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-selected-users',getSelectedUserdata)
    .post('/get-LoggedIn-Profile', getLoggedInProfile)
    .get('/admin-getAllUsers',adminGetAllUsers)
    //post for theType
    .post('/get-userById',getUserProfile)
    .post('/updateUserDetails',updateUserDetails)
    
    
    

export default router;

function test(req, res, next){
    console.log('test')
    next()
}
