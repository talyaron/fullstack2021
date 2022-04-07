"use strict";
exports.__esModule = true;
exports.searches = exports.sounds = void 0;
var mongoose_1 = require("mongoose");
var SoundsSchema = new mongoose_1["default"].Schema({
    title: String,
    type: String,
    location: String,
    description: String,
    duration: Number,
    file: String
});
exports.sounds = mongoose_1["default"].model('sounds', SoundsSchema);
exports.searches = mongoose_1["default"].model('searches', SoundsSchema);
