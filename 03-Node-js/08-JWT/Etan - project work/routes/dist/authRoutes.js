"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var authController = require("../controller/authCont");
router.get('/login', authController.login_get);
exports["default"] = router;
