import  express  from "express";
import { getUser,addUser } from "../Controlers/UserControl";
const router = express.Router();


router
.get('/get-user',getUser)
.post('/add-user',addUser)

export default router;