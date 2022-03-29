"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var userCont_1 = require("../controller/userCont");
router
    .post('/add-user', userCont_1.addUser)
    .post('/log-in', userCont_1.login);
exports["default"] = router;
