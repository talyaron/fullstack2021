import express from 'express';
const router = express.Router();

import { addInitiative,getInitiative,updateInitiative,getAllRecipients} from '../controllers/initiativeCont'

router
.post('/add-initiative',addInitiative)
.post('/get-all-recipients',getAllRecipients)
.post('/get-initiative',getInitiative)
.post('/update-initiative',updateInitiative)

export default router;