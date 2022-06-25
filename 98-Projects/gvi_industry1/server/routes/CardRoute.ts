import express from 'express';
const router = express.Router();
import {getUser} from "../controllers/cardCont"


router
.get('/get-UserData',getUser)


export default router;