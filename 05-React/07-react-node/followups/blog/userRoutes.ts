import experss from 'express';
import { appendFile } from 'fs';
import { getUser,addUser} from '../controllers/userController';
const router = experss.Router();





//==============================================================================/////
router
.get('/get-user', getUser)
.get('/get-user', getUser)

.post('/add-user', addUser);

//==============================================================================/////
export default router;
//module.exports=router;