import express from 'express';
const router = express.Router();
import { addRoom, joinRoom, StartRoomGame, addLie, updateAnswer, checkLie } from '../controllers/roomCont'

router
    .post('/add-room', addRoom)
    .get('/join-room', joinRoom)
    .get('check-lie', checkLie)
    .patch('/start-game', StartRoomGame)
    .patch('/add-lie', addLie)
    .patch('/update-answer', updateAnswer)
export default router;