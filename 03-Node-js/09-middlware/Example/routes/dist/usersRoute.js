"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../controlers/usersCont");
var usersMid_1 = require("../middlewares/usersMid");
router
    .get('/get-users', usersMid_1.isAdmin, usersCont_1.getAllUsers)
    .post("/add-user", usersCont_1.addUser)
    .post('/login', usersCont_1.login)
    .patch("/update-user", usersMid_1.isAdmin, usersCont_1.updateUser)["delete"]("/delete-user", usersMid_1.isAdmin, usersCont_1.deleteUser);
exports["default"] = router;
