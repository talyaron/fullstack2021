import express from 'express'
const router = express.Router()

import { addSwimer, login, getAllSwimers } from '../conts/swimConts'
import { isAdmin, decodeAdmin } from '../middleWare/swimerMid'

router
    .post('/swimers', addSwimer)
    .post('/login', isAdmin, login)
    .post('/get-all-swimers', decodeAdmin, getAllSwimers)


export default router;

