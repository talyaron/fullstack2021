import express from 'express';
const router = express.Router();

import { changePofilePic,saveImage ,updateMentorProf} from '../controllers/profileCont'

router
.post('/changeProfileImage',changePofilePic)
.post('/saveImage',saveImage)
.patch('/Update-MentorProfDet',updateMentorProf)




export default router;