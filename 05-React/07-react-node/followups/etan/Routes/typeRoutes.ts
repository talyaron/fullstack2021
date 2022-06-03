import express from 'express';
const router = express.Router();

import {addType, getIceCreamTypes} from '../Controllers/typeConts'

router
.post('/add-type' ,addType)
.post('/get-ice-cream-types', getIceCreamTypes)


export default router;