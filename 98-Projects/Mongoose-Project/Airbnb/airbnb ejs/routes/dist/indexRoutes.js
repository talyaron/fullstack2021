"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var indexCont_1 = require("../controler/indexCont");
router
    .get('/', indexCont_1.getIndexPage);
exports["default"] = router;
