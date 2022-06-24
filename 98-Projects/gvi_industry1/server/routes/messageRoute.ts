import express from 'express'
const router = express.Router()

import{getMessages} from '../controllers/messageConts'

router
.post('/get-recipients', getMessages)


export default router