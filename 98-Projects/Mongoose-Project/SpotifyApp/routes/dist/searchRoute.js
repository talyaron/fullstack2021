"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var songsController_1 = require("../controllers/songsController");
router
    .post("/getSearch", search)
    .post("/upload-song", songsController_1.Upload)
    .get("/getSearch", search);
exports["default"] = router;
