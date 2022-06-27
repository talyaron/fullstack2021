import express from 'express';
const router = express.Router();
import {getUser, addUser, addCompany} from "../controllers/cardCont"


router
.get('/get-UserData',getUser)
.post('/add-user', addUser)
.post('/add-company', addCompany)


export default router;