"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controllers/userController");
router
    .get('/get-users', userController_1.getAllUsers)
    .post("/sign-user", userController_1.logIn)
    .post("/reg-user", userController_1.register);
exports["default"] = router;
