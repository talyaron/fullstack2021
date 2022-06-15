import  Express  from "express";
import { getUser } from "../Controlers/UserControl";
const routr = Express.Router();

routr.get('/get-user',getUser)

export default routr;