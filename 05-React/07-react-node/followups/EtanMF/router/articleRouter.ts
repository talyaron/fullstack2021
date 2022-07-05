import express from 'express';
const router = express.Router();

import {createArticle, getArticles, updateArticle, deleteArticle} from '../controller/articleCont';

router.post('/create', createArticle).post('/get-articles', getArticles).put('/update-article', updateArticle)
.post('/delete-article', deleteArticle)
export default router;
