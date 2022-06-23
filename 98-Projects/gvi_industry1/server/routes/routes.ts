import express from 'express';
const router = express.Router();
import {getMentees,addMentees} from '../controllers/userControllers/MenteeController'


router
.patch('/add-mentee',addMentees)
.get('/get-mentees',getMentees)



export default router;