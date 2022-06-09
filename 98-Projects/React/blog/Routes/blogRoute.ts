import express from 'express';
const router = express.Router();
import {getBlogs,addBlog,getBlog,} from '../controllers/blogCon'

router
.get('/get-blogs',getBlogs)
.patch('/get-blog',getBlog)
.patch('/get-addBlog',addBlog)


export default router;