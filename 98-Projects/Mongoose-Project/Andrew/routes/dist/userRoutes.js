"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../controllers/userCont");
router
    .post('/add-user', userCont_1.addUser)
    .post('/log-user', userCont_1.logUser)
    .patch('/add-user-to-room', userCont_1.addUserToRoom)
    .patch('/add-lie', userCont_1.addLie)
    .patch('/add-points', userCont_1.addPoints)
    .get('/get-lies', userCont_1.getLies);
exports["default"] = router;
