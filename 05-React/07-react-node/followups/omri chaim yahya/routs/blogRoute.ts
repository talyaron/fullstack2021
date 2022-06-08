import  express  from "express";
import { addBlog } from "../controler/blogControler";
const router= express.Router();

router.post('/add-Blog', addBlog )

export default router;
