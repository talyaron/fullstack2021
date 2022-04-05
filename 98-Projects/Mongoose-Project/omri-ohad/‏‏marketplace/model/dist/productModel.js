"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1["default"].Schema({
    pic: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    userName: String
});
var ProductUser = mongoose_1["default"].model('productsUser', productSchema);
exports["default"] = ProductUser;
