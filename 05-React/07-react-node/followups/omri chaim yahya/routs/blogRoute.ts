import  express  from "express";
import { addBlog } from "../controler/blogControler";
const router= express.Router();


router.post('/add-blog', addBlog )

export default router;
