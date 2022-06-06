import  express  from "express";
import { addBlog } from "../controllers/blogsCont";
const router = express.Router();

router
.put('/add-blog', addBlog);

export default router;