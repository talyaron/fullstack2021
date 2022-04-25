"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var roomSchema = new mongoose_1["default"].Schema({
    roomCode: String,
    ownerId: String,
    players: Number,
    answer: String,
    lies: Number,
    status: String
});
var Room = mongoose_1["default"].model('rooms', roomSchema);
exports["default"] = Room;
