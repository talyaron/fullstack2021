import express from "express";
import { addBlog, getTitles, getArticle } from "../controllers/blogsCont";
const router = express.Router();

router
    .post('/add-blog', addBlog)
    .get('/get-titles', getTitles)
    .post('/get-article',getArticle);

export default router;
