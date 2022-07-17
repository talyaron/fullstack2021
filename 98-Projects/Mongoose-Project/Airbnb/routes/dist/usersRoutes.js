"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userMid_1 = require("../middleware/userMid");
var usersCont_1 = require("../controler/usersCont");
var usersCont_2 = require("../controler/usersCont");
var usersCont_3 = require("../controler/usersCont");
var usersCont_4 = require("../controler/usersCont");
var usersCont_5 = require("../controler/usersCont");
router
    .get('/get-Users', userMid_1.isAdmin, usersCont_1.getUsers)
    .post('/add-User', usersCont_2.registerUser)
    .post('/login', usersCont_3.login)
    .patch('/update-user', userMid_1.isAdmin, usersCont_4.updateUser)["delete"]('/delete-user', userMid_1.isAdmin, usersCont_5.deleteUser);
exports["default"] = router;
