import express from 'express';
const router = express.Router();
import { hendeSend, hendleSave } from '../controlers/index'

router
    .get('/get-data', hendeSend)
    .post('/get-text', hendleSave)

export default router;