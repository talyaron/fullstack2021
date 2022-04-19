"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var index_1 = require("../controlers/index");
router
    .get('/get-data', index_1.hendeSend)
    .post('/get-text', index_1.hendleSave);
exports["default"] = router;
