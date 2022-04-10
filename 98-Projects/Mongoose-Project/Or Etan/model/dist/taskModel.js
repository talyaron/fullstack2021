"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1["default"].Schema({
    title: String,
    description: String,
    urgency: String,
    location: String,
    date: Date,
    ownerId: String
});
var task = mongoose_1["default"].model("tasks", TaskSchema);
exports["default"] = task;
