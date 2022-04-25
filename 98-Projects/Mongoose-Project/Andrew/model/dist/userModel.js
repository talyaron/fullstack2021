"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    username: String,
    email: String,
    password: String,
    inRoom: String,
    word: String,
    lie: String,
    points: Number
});
var User = mongoose_1["default"].model('users', userSchema);
exports["default"] = User;
