import  express  from "express";
import { addBlog } from "../controllers/blogsCont";
const router = express.Router();

router
.post('/add-blog', addBlog);

export default router;