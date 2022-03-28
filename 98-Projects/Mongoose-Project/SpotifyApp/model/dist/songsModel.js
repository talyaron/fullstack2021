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
exports["default"] = songs;
