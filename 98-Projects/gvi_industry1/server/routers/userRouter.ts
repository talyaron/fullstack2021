import express from 'express'
const router = express.Router()

import{getAllRecipients} from '../controllers/userConts'

router
.post('/get-all-recipients', getAllRecipients)


export default router