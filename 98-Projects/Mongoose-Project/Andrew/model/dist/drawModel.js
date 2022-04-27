"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var drawingSchema = new mongoose_1["default"].Schema({
    imgData: Buffer,
    ownerId: String,
    ownerName: String,
    type: String,
    dataURL: String
});
var Drawing = mongoose_1["default"].model('drawings', drawingSchema);
exports["default"] = Drawing;
