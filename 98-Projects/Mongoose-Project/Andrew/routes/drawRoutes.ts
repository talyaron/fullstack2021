import express from 'express';
const router = express.Router();
import { addDrawing, getUserDrawings, setUserAvatar, deleteAvatar, getRoomDrawings } from '../controllers/drawCont'

router
    .post('/add-drawing', addDrawing)
    .get('/get-user-avatars', getUserDrawings)
    .get('/get-room-drawings', getRoomDrawings)
    .patch('/set-user-avatar', setUserAvatar)
    .delete('/delete-user-avatar', deleteAvatar)
export default router;