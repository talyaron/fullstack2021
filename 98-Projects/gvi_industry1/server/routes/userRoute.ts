import express from 'express'
const router = express.Router()

import{getUsers} from '../controllers/userConts'

router
.post('/get-recipients', getUsers)


export default router