import express from 'express';
const router = express.Router();

import { addInitiative,getInitiative} from '../controllers/initiativeCont'

router
.post('/add-initiative',addInitiative)
.post('/get-initiative',getInitiative)

export default router;