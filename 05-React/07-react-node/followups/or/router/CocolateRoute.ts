import express from 'express'
const router = express.Router()
import {getFlavour} from '../control/ChocolateCont'

router
.get('/flavour', getFlavour)




export default router;