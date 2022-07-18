import express from 'express';
const router = express.Router();

import { addUser, login, getMentors, getUser, getAllRecipients,
     selectUser,getSelectingUser,getSelectedUser ,getUserProfile,updateUserDetails,addFlags} from '../controllers/userCont'

router
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-mentors', getMentors)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-selected-users',getSelectedUser)
    .post('/get-userById',getUserProfile)
    .post('/updateUserDetails',updateUserDetails)
    .post('/flags',addFlags)
    
    
    

export default router;

