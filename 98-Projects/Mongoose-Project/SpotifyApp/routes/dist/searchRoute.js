"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var searchControllers_1 = require("../controllers/searchControllers");
router
    .post("/getSearch", searchControllers_1.Search);
exports["default"] = router;
