"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var imagesCont_1 = require("../controlers/imagesCont");
router
    .get('/get-images', imagesCont_1.getImages)
    .post('/add-images', imagesCont_1.addImages);
exports["default"] = router;
