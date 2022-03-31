"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var taskCont_1 = require("../controller/taskCont");
router
    .post('/nav', taskCont_1.renderPage)
    .get('/getTasks', taskCont_1.getUsersTasks);
exports["default"] = router;
