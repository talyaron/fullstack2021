"use strict";
exports.__esModule = true;
exports.art = void 0;
var mongoose_1 = require("mongoose");
var artSchema = new mongoose_1["default"].Schema({
    artName: String,
    url: String,
    author: String
});
var Art = mongoose_1["default"].model('newArt', artSchema);
exports.art = Art;
var userSchema = new mongoose_1["default"].Schema({
    userName: String,
    email: String,
    password: String,
    url: String,
    fund: Number,
    artCollection: [artSchema]
});
var User = mongoose_1["default"].model('newUser', userSchema);
exports["default"] = User;
