import express from 'express'
const router = express.Router()

import { getMentors } from '../control/userCont'

router
.get('/get-mentors', getMentors)

export default router