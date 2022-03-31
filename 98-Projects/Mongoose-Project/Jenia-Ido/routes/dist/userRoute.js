"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../controlers/userCont");
router
    .get('/get-user', userCont_1.getUser)
    .post('/add-user', userCont_1.addUser);
exports["default"] = router;
