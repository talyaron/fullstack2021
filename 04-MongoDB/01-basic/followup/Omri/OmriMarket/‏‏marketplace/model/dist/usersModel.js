"use strict";
exports.__esModule = true;
var UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    login: Boolean
});
var User = mongoose.model('users', UserSchema);
exports["default"] = User;
