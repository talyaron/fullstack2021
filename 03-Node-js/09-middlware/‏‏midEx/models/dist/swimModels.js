"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var swimSchema = new mongoose_1["default"].Schema({
    userName: String,
    email: String,
    password: String,
    role: String
});
var Swimer = mongoose_1["default"].model('swimMember', swimSchema);
exports["default"] = Swimer;
