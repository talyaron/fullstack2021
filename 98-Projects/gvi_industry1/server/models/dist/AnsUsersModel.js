"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var AnsUserSchema = new mongoose_1["default"].Schema({
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
var AnsUsersModel = mongoose_1["default"].model("requested-answereds", AnsUserSchema);
exports["default"] = AnsUsersModel;
