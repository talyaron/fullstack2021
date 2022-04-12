"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    email: String,
    password: String,
    role: String,
    firstName: String,
    lastName: String,
    gender: String
});
var user = mongoose_1["default"].model("users", UserSchema);
exports["default"] = user;
