import  express  from 'express';
const router = express.Router();
import {getUser , addUser} from "../controlers/userCont"

router
.get('/get-user',getUser)
.post('/add-user',addUser)



export default router;