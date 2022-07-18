import express from 'express';
const router = express.Router();

import { getFilter, addUser, login, getMentors, getSearch, getUser, getAllRecipients, selectUser,getSelectingUser,getSelectedUserdata } from '../controllers/userCont'

router
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-mentors', getMentors)
    .get('/get-filter', getFilter)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/get-search', getSearch)
    .post('/selected-user', selectUser)
    .get('/get-selecteing-user',getSelectingUser)
    .post('/get-selected-users',getSelectedUserdata)

export default router;

