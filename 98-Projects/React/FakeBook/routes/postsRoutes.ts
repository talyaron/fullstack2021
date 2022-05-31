import express = require("express");
const router = express.Router();

import {getPostsList, createNewPost} from '../controller/postCont'


router
.get('/get-posts-list', getPostsList)
.post('/create-new-post', createNewPost)

export default router;