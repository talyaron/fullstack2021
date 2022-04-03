import express from 'express';
const router = express.Router();
import {getImages , addImages, updateProfilePiC,addPost,getUsersImgs} from "../controlers/imagesCont"

router
.get('/get-images',getImages)
.post('/add-images',addImages)
.patch('/update-profile-img',updateProfilePiC)
.patch('/add-post', addPost)
.patch('/get-users-profieImg',getUsersImgs)


export default router;