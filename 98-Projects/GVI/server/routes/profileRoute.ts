import express from 'express';
const router = express.Router();

import { changePofilePic,saveImage } from '../controllers/profileCont'

router
.post('/changeProfileImage',changePofilePic)
.post('/saveImage',saveImage)


export default router;