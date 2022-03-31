import  express  from 'express';
const router = express.Router();
import {getUser , addUser,deleteUser} from "../controlers/userCont"

router
.get('/get-user',getUser)
.post('/add-user',addUser)
.delete('/delete-user', deleteUser)



export default router;