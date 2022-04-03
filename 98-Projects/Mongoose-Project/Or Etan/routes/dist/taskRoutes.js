"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var taskCont_1 = require("../controller/taskCont");
router
    .get('/getTasks', taskCont_1.getUsersTasks)
    .post('/add-new-task', taskCont_1.addNewTask)
    .patch('/updated-task', taskCont_1.updateTask)
    .post('/task', taskCont_1.getTask)["delete"]('/delete-task', taskCont_1.deleteTask);
exports["default"] = router;
