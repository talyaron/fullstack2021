import express from 'express';
const router = express.Router();

import { Upload, search } from '../controllers/songsController'


router
.post("/upload-song", Upload )
.get("/search",search)
export default router