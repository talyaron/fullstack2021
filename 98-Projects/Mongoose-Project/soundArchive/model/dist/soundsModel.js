"use strict";
exports.__esModule = true;
exports.searches = exports.sounds = void 0;
var mongoose_1 = require("mongoose");
var SoundsSchema = new mongoose_1["default"].Schema({
    title: {
        type: String
    },
    type: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    duration: {
        type: Number
    },
    file: {
        type: String
    }
});
exports.sounds = mongoose_1["default"].model('sounds', SoundsSchema);
exports.searches = mongoose_1["default"].model('searches', SoundsSchema);
