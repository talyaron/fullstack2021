"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var spotifyApi = new mongoose_1["default"].Schema({
    song: String,
    albume: String,
    picture: String
});
var spotify = mongoose_1["default"].model('spotifydata', spotifyApi);
exports["default"] = spotify;
