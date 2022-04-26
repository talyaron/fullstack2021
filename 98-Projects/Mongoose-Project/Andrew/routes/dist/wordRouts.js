"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var wordCont_1 = require("../controllers/wordCont");
router
    .post('/add-word', wordCont_1.addWord)
    .get('/get-word', wordCont_1.getWord);
exports["default"] = router;
