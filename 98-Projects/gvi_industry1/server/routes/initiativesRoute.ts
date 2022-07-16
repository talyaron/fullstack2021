import express from 'express';
const router = express.Router();

import { addInitiative,getInitiative,updateInitiative} from '../controllers/initiativeCont'

router
.post('/add-initiative',addInitiative)
.post('/get-initiative',getInitiative)
.post('/update-initiative',updateInitiative)

export default router;