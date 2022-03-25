"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../conroler/userCont");
var userCont_2 = require("../conroler/userCont");
router
    .post('/add-user', userCont_1.addUser)
    .get('/log-user', userCont_2.findUser);
exports["default"] = router;
