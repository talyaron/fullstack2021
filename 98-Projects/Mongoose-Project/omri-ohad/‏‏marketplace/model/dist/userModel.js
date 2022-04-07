"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    userName: String,
    email: String,
    password: String,
    login: Boolean
});
var User = mongoose_1["default"].model('users', UserSchema);
exports["default"] = User;
