"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var socketCont_1 = require("../controllers/socketCont");
router
    .post('/add-user', socketCont_1.addUser)
    .post('/log-user', socketCont_1.logUser);
exports["default"] = router;
