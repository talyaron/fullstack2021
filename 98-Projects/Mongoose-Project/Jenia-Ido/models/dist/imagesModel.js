"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var imageSchema = new mongoose_1["default"].Schema({
    firstName: String,
    lastName: String,
    profileUrl: String,
    url: [String],
    email: String,
    password: String
});
var Images = mongoose_1["default"].model('images', imageSchema);
exports["default"] = Images;
