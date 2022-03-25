"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var artSchema = new mongoose_1["default"].Schema({
    userName: String,
    email: String,
    password: String,
    url: String,
    fund: Number
});
var User = mongoose_1["default"].model('newUser', artSchema);
exports["default"] = User;
