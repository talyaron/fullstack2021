import express = require("express");
const router = express.Router();

import {getTextList, addTextLine, deleteTextLine, updateTextLine} from '../controllers/textCont'


router
.post('/fetchTextList', getTextList)
.post('/addTextLine', addTextLine)
.post('/updateTextLine', updateTextLine)
.post('/deleteTextLine', deleteTextLine)


export default router;