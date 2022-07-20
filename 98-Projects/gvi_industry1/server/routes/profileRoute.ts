import express from 'express';
const router = express.Router();

import { changePofilePic } from '../controllers/profileCont'

router
.post('/changeProfileImage',changePofilePic)


export default router;