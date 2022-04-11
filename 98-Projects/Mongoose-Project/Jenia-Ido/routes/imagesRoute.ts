import express from 'express';
const router = express.Router();
import {getImages , addImages} from "../controlers/imagesCont"

router
.get('/get-images',getImages)
.post('/add-images',addImages)
<<<<<<< HEAD
.patch('/update-profile-img',updateProfilePiC)
.patch('/add-post', addPost)
.patch('/get-users-profileImg',getUsersImgs)
.delete('/delete-images', deleteImages)
=======

>>>>>>> 8881d693fe73cc0eae954a985912d9150d582b20


export default router;