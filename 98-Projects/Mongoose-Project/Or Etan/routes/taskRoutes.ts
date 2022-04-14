import express = require("express");
const router = express.Router();

import { getUsersTasks} from "../controller/taskCont"


router

.get('/getTasks', getUsersTasks)



export default router;