import express from 'express';
const router = express.Router();

//import {getText} from '../../client/src/features/text/textApi'
import {addText, updateText, deleteText,getText} from '../controller/textCont'

router
.get('/get-text', getText)
   .post('/add-text', addText)
   .patch('/delete-text', deleteText)
   .patch('/update-text', updateText)

export default router;