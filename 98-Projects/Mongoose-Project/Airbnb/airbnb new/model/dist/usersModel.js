"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String,
    role: String
});
var Users = mongoose_1["default"].model("users", userSchema);
exports["default"] = Users;
