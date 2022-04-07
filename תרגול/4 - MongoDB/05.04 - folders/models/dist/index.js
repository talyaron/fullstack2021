"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var textSchema = new mongoose_1["default"].Schema({
    text: String
});
//create a collection 
var Text = mongoose_1["default"].model('text', textSchema);
exports["default"] = Text;
