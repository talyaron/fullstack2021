"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var userController_1 = require("../controller/userController");
router
    .get('/get-users', userController_1.handleGetUsers)
    .post('/add-user', userController_1.handleAddUser)
    .post('/reg-user', userController_1.handleReg)
    .post('/sign-in', userController_1.handleSign);
exports["default"] = router;
