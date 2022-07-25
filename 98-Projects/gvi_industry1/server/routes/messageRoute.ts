import express from 'express';
const router = express.Router();

import {getMessages, uploadFile} from '../controllers/messageConts';

router.post('/get-messages', getMessages);
router.post('/upload-file', uploadFile);

export default router;
