import express from "express";
import { addPost, getPosts, getUserPosts, getPost, getPostSearch } from '../controllers/postCont';
const router = express.Router();

router
    .post('/add-post', addPost)
    .get('/get-posts', getPosts)
    .get('/get-post', getPost)
    .get('/get-user-posts', getUserPosts)
    .get('/get-posts-by-search', getPostSearch)
export default router