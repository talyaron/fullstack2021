import express from 'express';
const router = express.Router();
import {getBlogs,addBlog} from '../controllers/blogCon'

router
.get('/get-blogs',getBlogs)
.patch('/get-addBlog',addBlog)


export default router;