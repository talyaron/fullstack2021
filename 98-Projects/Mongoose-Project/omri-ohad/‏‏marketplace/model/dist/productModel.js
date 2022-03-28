"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1["default"].Schema({
    pic: String,
    title: String,
    description: String,
    price: Number,
    category: String
});
var Product = mongoose_1["default"].model('products', productSchema);
exports["default"] = Product;
