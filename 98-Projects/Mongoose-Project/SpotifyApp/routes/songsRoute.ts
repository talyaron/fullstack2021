import express from 'express';
const router = express.Router();

import { Upload } from '../controllers/songsController'

router
.post("/upload-song", Upload )

export default router