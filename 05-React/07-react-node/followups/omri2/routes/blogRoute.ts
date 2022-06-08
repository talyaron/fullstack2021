import  express  from "express";
import { addBlog, getTitles } from "../controllers/blogsCont";
const router = express.Router();

router
.post('/add-blog', addBlog)
.get('/get-titles',getTitles);

export default router;