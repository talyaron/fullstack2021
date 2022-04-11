import express = require("express");
const router = express.Router();

import { getUsersTasks, addNewTask, updateTask, deleteTask, getTask, checkTask, getUrgencies} from "../controller/taskCont"
import {requireAuth} from "../middleware/authMiddleware"


router
.get('/getTasks', requireAuth ,getUsersTasks)
.post('/add-new-task', requireAuth, addNewTask)
.patch('/updated-task', requireAuth, updateTask)
.post('/task',requireAuth, getTask)
.patch('/check-task',requireAuth, checkTask)
.delete('/delete-task',requireAuth, deleteTask)
.get('/get-urgencies', requireAuth ,getUrgencies)

export default router;
