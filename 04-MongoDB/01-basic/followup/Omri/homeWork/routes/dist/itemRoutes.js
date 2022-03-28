"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var itemController_1 = require("../controllers/itemController");
router
    .get("/getItems", itemController_1.getItems);
exports["default"] = router;
