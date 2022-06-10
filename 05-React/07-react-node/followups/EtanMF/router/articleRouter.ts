import express from 'express';
const router = express.Router();

import {createArticle, getArticles, updateArticle} from '../controller/articleCont';

router.post('/create', createArticle).post('/get-articles', getArticles).put('/update-article', updateArticle);

export default router;
