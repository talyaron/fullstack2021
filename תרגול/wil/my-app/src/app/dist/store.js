"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var taskSlice_1 = require("../features/counter/taskSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        task: taskSlice_1["default"]
    }
});
