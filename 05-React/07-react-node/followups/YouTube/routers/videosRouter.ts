import express from 'express';
const router = express.Router();
import { getAllVideos, getVideosOfUser } from '../controllers/videosConts'

router
    .post('/get-all-videos', getAllVideos)
    .get('/get-users-videos', getVideosOfUser)

    


export default router;