"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router
    .post('/login', login);
exports["default"] = router;
