import express from 'express';
const router = express.Router();

import { Search } from '../controllers/searchControllers'

router
.post("/getSearch", Search)

export default router
