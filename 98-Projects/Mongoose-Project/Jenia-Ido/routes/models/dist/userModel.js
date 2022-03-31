"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    firstName: String,
    lastName: String,
    birthday: String,
    country: String,
    password: String,
    email: String,
    gender: String
});
var User = mongoose_1["default"].model('User', userSchema);
exports["default"] = User;
