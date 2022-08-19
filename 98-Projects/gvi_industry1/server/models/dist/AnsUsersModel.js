"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ansUserSchema = new mongoose_1["default"].Schema({
    selectingUserId: {
        type: String,
        required: true
    },
    answeredUser: {
        email: String,
        name: {
            first: String,
            last: String
        },
        image: String
    },
    selected: Boolean
});
var ansModel = mongoose_1["default"].model("users-answers", ansUserSchema);
exports["default"] = ansModel;
