"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    username: String,
    password: String,
    email: String,
    played: Number,
    wins: Number,
    current_strike: Number,
    max_strike: Number
});
var FundleUser = mongoose_1["default"].model('FundleUsers', UserSchema);
exports["default"] = FundleUser;
