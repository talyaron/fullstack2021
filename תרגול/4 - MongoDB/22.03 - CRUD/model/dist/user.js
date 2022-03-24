"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.User = mongoose_1.model('Users', UserSchema);
