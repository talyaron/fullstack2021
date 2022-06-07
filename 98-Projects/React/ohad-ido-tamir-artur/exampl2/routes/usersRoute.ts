import experss from 'express';
import { getUser,addUser} from '../control/usersCont';
const router = experss.Router();

router.get('/get-user', getUser)
.post('/add-user', addUser);

export default router;