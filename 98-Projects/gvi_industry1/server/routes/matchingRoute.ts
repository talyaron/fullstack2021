import { Router } from 'express'
import {searchMatches,getMatches, selectedAccording} from '../Controllers/matchingCont'
const router = Router();

router
.post('/select-mentors' , selectedAccording)
.post('/get-matches', getMatches)
.post('/search-matches', searchMatches)
.post('/select-according-mentors' ,selectedAccording )

export default router