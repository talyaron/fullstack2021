"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userSlice_1 = require("../features/user/userSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        user: userSlice_1["default"]
    }
});
