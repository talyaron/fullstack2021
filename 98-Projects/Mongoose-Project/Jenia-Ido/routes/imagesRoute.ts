import express from 'express';
const router = express.Router();
import {getImages , addImages,updateProfilePiC,addPost,getUsersImgs,deleteImages} from "../controlers/imagesCont"

router
.get('/get-images',getImages)
.post('/add-images',addImages)
.patch('/update-profile-img',updateProfilePiC)
.patch('/add-post', addPost)
.patch('/get-users-profileImg',getUsersImgs)
.delete('/delete-images', deleteImages)



export default router;