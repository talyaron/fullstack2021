import express from 'express';
const router = express.Router();
import { getIndexPage } from '../controler/indexCont'

router
    .get('/', getIndexPage)


export default router;