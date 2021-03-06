"use strict";
exports.__esModule = true;
exports.searches = exports.songs = void 0;
var mongoose_1 = require("mongoose");
var SongsSchema = new mongoose_1["default"].Schema({
    band: String,
    album: String,
    song: String,
    genre: String,
    image: String
});
exports.songs = mongoose_1["default"].model('songs', SongsSchema);
exports.searches = mongoose_1["default"].model('searches', SongsSchema);
