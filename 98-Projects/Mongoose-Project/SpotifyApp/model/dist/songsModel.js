"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var SongsSchema = new mongoose_1["default"].Schema({
    song: String,
    picture: String,
    genre: String,
    youtube: String
});
var songs = mongoose_1["default"].model('songsOwner', SongsSchema);
var searches = mongoose_1["default"].model('searches', SongsSchema);
exports["default"] = songs && searches;
