import  express  from 'express';
const router = express.Router();
import {getUser , addUser,deleteUser,updateUser} from "../controlers/userCont"

router
.get('/get-user',getUser)
.post('/add-user',addUser)
.patch('/update-user', updateUser)
.delete('/delete-user', deleteUser)



export default router;