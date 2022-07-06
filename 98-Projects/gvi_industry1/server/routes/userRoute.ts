import express from 'express';
const router = express.Router();

import { addUser, login, getMentors, getUser, getAllRecipients, selectedUser } from '../controllers/userCont'

router
    .post('/add-user', addUser)
    .post('/login', login)
    .post('/get-mentors', getMentors)
    .post('/get-all-recipients', getAllRecipients)
    .get('/get-user', getUser)
    .post('/selected-user', selectedUser)

export default router;

