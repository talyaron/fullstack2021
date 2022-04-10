import express from 'express';
const router = express.Router();
import {getImages , addImages} from "../controlers/imagesCont"

router
.get('/get-images',getImages)
.post('/add-images',addImages)



export default router;