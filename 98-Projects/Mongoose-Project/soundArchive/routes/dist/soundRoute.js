"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var soundsController_1 = require("../controllers/soundsController");
router
    .post("/upload-sound", soundsController_1.upload)
    .get("/search", soundsController_1.search);
exports["default"] = router;
