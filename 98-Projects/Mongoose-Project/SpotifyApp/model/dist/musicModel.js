"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Songs = new mongoose_1["default"].Schema({
    song: String,
    albume: String,
    picture: String
});
var songs = mongoose_1["default"].model('songsdata', songs);
exports["default"] = songs;
