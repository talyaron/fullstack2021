"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var artSchema = new mongoose_1["default"].Schema({
    artName: String,
    url: String,
    author: String,
    ownerId: String
});
var Art = mongoose_1["default"].model("newArt", artSchema);
exports["default"] = Art;
//למה לא אקספורט
