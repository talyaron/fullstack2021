"use strict";
exports.__esModule = true;
var ansUserSchema = new mongoose.Schema({
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
var mongoose, model;
("answers", ansUserSchema);
exports["default"] = ansUsersModel;
