"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../conroler/userCont");
var hasFunds_1 = require("../middleware/hasFunds");
router
    .post('/add-user', userCont_1.addUser)
    .get('/log-user', userCont_1.findUser)
    .patch('/update-user', userCont_1.updateUser)
    .patch('/buy-and-sell', hasFunds_1.hasFunds, userCont_1.buyAndSell);
exports["default"] = router;
