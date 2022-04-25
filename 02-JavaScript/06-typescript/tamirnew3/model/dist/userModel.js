"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String
});
var User = mongoose_1["default"].model('userDb', UserSchema);
exports["default"] = User;
