import express = require("express");
const router = express.Router();

import { getUsersTasks, addNewTask, updateTask, deleteTask, getTask} from "../controller/taskCont"


router
.get('/getTasks', getUsersTasks)
.post('/add-new-task', addNewTask)
.patch('/updated-task', updateTask)
.post('/task', getTask)
.delete('/delete-task', deleteTask)


export default router;