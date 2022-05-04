"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controller/userController");
router
    .get('/add-user', userController_1.handleAddUser)
    //.get('/get-users' , handleGetUsers)
    .post('/reg-user', userController_1.handleReg)
    .post('/sign-in', userController_1.handleSign);
exports["default"] = router;
