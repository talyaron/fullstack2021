import express from 'express';
const router = express.Router();

import {getMessages} from '../controllers/messageConts';

router.post('/get-messages', getMessages);

export default router;
