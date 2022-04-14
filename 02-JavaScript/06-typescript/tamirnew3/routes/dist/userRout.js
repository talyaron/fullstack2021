"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
// מייבא את הפונקציות מהתייקיה של הקונטרולרים
var userCont_1 = require("../controlers/userCont");
router
    .post('/login', userCont_1.login)
    .post('/add-user', userCont_1.adduser);
exports["default"] = router;
