import express = require("express");
const router = express.Router();

const {getTextList} =


router
.post('/fetchTextList', getTextList)
.get('/getTasks', getUsersTasks)
.post('/add-new-task', addNewTask)
.patch('/updated-task', updateTask)
.post('/task', getTask)
.patch('/check-task', checkTask)
.delete('/delete-task', deleteTask)
.get('/get-urgencies', getUrgencies)


export default router;