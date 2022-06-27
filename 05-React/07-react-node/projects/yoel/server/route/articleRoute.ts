import  express  from "express";
const router = express.Router();


import {saveArticle , getArticle} from '../controller/articleController';



router
 .post('/get-article' , getArticle)
 .post('/save-article' , saveArticle) // it's without a point .!!


export default router;

