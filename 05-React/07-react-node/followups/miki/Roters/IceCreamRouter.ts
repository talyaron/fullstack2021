import express from 'express'
const router = express.Router()
import {getIceCream} from '../Controllers/IceCreamConts'

router
.get('/taste', getIceCream)




export default router;