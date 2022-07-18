import express from 'express';
const router = express.Router();

import { addInitiative, getAllRecipients} from '../controllers/initiativeCont'

router
.post('/add-initiative',addInitiative)
.post('/get-all-recipients',getAllRecipients)

export default router;