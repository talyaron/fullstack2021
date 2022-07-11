import { Router } from 'express'
import {getMatches} from '../controllers/matchingCont'
const router = Router();

router
.get('/get-matches', getMatches)

export default router