"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var marketSechma = new mongoose_1["default"].Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});
var User = mongoose_1["default"].model('userItems', marketSechma);
exports["default"] = (User);
