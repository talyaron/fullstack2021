import express from 'express';
const router = express.Router();

import { upload, search } from '../controllers/soundsController'


router
.post("/upload-sound", upload )
.get("/search",search)

export default router