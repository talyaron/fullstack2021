"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../controler/usersCont");
var usersCont_2 = require("../controler/usersCont");
var usersCont_3 = require("../controler/usersCont");
router
    .get('/get-Users', usersCont_1.getUsers)
    .post('/add-User', usersCont_2.addUser)
    .post('/login', usersCont_3.login);
exports["default"] = router;
