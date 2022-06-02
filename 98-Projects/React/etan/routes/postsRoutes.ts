import express = require("express");
const router = express.Router();

import {
  getPostsList,
  createNewPost,
  searchPosts,
  getOthersPostsList,
} from "../controller/postCont";

router
  .get("/get-posts-list", getPostsList)
  .post("/get-others-posts-list", getOthersPostsList)
  .post("/create-new-post", createNewPost)
  .post("/search-posts", searchPosts);

export default router;
