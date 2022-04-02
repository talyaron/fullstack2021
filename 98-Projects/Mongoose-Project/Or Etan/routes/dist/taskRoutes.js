"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var taskCont_1 = require("../controller/taskCont");
router
    .get('/getTasks', taskCont_1.getUsersTasks)
    .post('/new-task', taskCont_1.addNewTask);
exports["default"] = router;
