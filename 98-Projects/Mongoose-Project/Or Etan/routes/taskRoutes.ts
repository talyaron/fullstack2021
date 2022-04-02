import express = require("express");
const router = express.Router();

import { getUsersTasks, addNewTask} from "../controller/taskCont"


router
.get('/getTasks', getUsersTasks)
.post('/new-task', addNewTask)


export default router;