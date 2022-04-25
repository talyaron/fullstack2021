import express from 'express';
const router = express.Router();
import { addUser, logUser, addUserToRoom, addLie, getLies, addPoints } from '../controllers/userCont'

router
    .post('/add-user', addUser)
    .post('/log-user', logUser)
    .patch('/add-user-to-room', addUserToRoom)
    .patch('/add-lie', addLie)
    .patch('/add-points', addPoints)
    .get('/get-lies', getLies)
export default router;