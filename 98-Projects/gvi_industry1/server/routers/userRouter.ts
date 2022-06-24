import express from 'express'
const router = express.Router()

import{getRecipients} from '../controllers/userConts'

router
.post('/get-recipients', getRecipients)


export default router