import express from 'express';
const router = express.Router();

import { addUser, login, getMentors, getUser, getAllRecipients, selectUser,getSelectingUser,getSelectedUserdata,getSearch } from '../controllers/userCont'
// import { addUser, login, getMentors, getUser, selectUser,getSelectingUser,getSelectedUserdata } from '../controllers/userCont'

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

export default router;

function test(req, res, next){
    console.log('test')
    next()
}
