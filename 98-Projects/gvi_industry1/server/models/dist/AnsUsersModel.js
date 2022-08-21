"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ansUserSchema = new mongoose_1["default"].Schema({
    selectingUserId: {
        type: String,
        required: true
    },
    selectedUser: {
        email: String,
        name: {
            first: String,
            last: String
        },
        image: String
    },
    selected: Boolean
});
var ansUsersModel = mongoose_1["default"].model("answers", ansUserSchema);
exports["default"] = ansUsersModel;
