"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var User = mongoose_1["default"].model('spotifyUser', UserSchema);
exports["default"] = User;
