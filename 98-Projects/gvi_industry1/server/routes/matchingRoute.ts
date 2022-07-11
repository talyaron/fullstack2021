import { Router } from 'express'
import {searchMatches,getMatches} from '../Controllers/matchingCont'
const router = Router();

router
.post('/get-matches', getMatches)
.post('/search-matches', searchMatches)

export default router