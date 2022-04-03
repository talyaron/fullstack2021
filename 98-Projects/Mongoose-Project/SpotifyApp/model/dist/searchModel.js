"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var SearchSchema = new mongoose_1["default"].Schema({
    song: String,
    genre: String
});
var search = mongoose_1["default"].model('searchSongs', SearchSchema);
exports["default"] = search;
