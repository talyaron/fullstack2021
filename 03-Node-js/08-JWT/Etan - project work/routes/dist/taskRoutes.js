"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var taskCont_1 = require("../controller/taskCont");
var authMiddleware_1 = require("../middleware/authMiddleware");
router
    .get('/getTasks', authMiddleware_1.requireAuth, taskCont_1.getUsersTasks)
    .post('/add-new-task', authMiddleware_1.requireAuth, taskCont_1.addNewTask)
    .patch('/updated-task', authMiddleware_1.requireAuth, taskCont_1.updateTask)
    .post('/task', authMiddleware_1.requireAuth, taskCont_1.getTask)
    .patch('/check-task', authMiddleware_1.requireAuth, taskCont_1.checkTask)["delete"]('/delete-task', authMiddleware_1.requireAuth, taskCont_1.deleteTask)
    .get('/get-urgencies', authMiddleware_1.requireAuth, taskCont_1.getUrgencies);
exports["default"] = router;
