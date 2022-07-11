import express from 'express';
const router = express.Router();

import { addInitiative} from '../controllers/initiativeCont'

router
.post('/add-initiative',addInitiative)

export default router;