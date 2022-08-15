import  express  from 'express';
const router = express.Router();
import {addText} from '../controllers/textCont'

router
.get('/editText',addText)




export default router;