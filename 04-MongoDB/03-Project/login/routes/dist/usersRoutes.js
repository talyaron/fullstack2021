"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controller/userController");
router
    .get('/get-users', userController_1.getAllUsers)
    .post("/add-user", userController_1.addUser)
    .post('/login', userController_1.login)
    .patch("/update-user", userController_1.updateUser);
exports["default"] = router;
