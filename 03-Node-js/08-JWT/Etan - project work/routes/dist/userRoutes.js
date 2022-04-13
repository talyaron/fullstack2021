"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var userCont_1 = require("../controller/userCont");
var authMiddleware_1 = require("../middleware/authMiddleware");
router
    .post('/add-user', userCont_1.addUser)
    .post('/log-in', userCont_1.login)
    .get("/logged-in-user", authMiddleware_1.requireAuth, userCont_1.renderUser)
    .post('/nav', authMiddleware_1.requireAuth, userCont_1.renderPage)
    .patch('/settings', authMiddleware_1.requireAuth, userCont_1.updateUser);
// .post('/passwordCheck', passwordCheck)
exports["default"] = router;
