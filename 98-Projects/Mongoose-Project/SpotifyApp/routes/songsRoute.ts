import express from 'express';
const router = express.Router();

import { upload, search } from '../controllers/songsController'


router
.post("/upload-song", upload )
.get("/search",search)
export default router