import express from "express";
import { addUser, getUser, getProfile,getPostUser } from '../controllers/userCont';
const router = express.Router();

router
    .post('/add-user', addUser)
    .post('/get-user', getUser)
    .get('/get-profile', getProfile)
    .get('/get-post-user', getPostUser)
export default router