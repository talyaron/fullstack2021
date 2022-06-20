import  express  from "express";
import { getUser,addUser,Login } from "../Controlers/UserControl";
const router = express.Router();


router
.get('/get-user',getUser)
.post('/add-user',addUser)
.post('/Login', Login)

export default router;