"use strict";
exports.__esModule = true;
exports.Book = void 0;
var mongoose_1 = require("mongoose");
var BookSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ownerId: String
});
exports.Book = mongoose_1["default"].model('books', BookSchema);
