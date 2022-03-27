"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var marketSechma = new mongoose_1["default"].Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});
var Market = mongoose_1["default"].model('marketPlaces', marketSechma);
exports["default"] = (Market);
