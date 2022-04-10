"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var songsController_1 = require("../controllers/songsController");
router
    .post("/upload-song", songsController_1.upload)
    .get("/search", songsController_1.search);
exports["default"] = router;
