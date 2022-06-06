import express from "express";
const router = express.Router();

import { createArticle, getArticles } from "../controller/articleCont";

router
  .post("/create", createArticle)
  .post("/get-articles", getArticles)


  
export default router;