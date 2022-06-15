import  express  from "express";
import { getUser } from "../Controlers/UserControl";
const router = express.Router();


router.get('/get-user',getUser)

export default router;