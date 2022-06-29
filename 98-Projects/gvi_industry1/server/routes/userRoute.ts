import express from 'express'
const router = express.Router()

import { getMentors, getUser } from '../control/userCont'

router
.post('/get-mentors', getMentors)
.get('/get-user', getUser)


export default router