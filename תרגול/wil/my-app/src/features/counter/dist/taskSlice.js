"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.removeTask = exports.addNewTask = exports.selectTask = exports.taskSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var uuid_1 = require("uuid");
var initialState = {
    value: [{ text: 'Hi', id: uuid_1.v4() }]
};
exports.taskSlice = toolkit_1.createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addNewTask: function (state, action) {
            state.value = __spreadArrays(state.value, [{ text: action.payload, id: uuid_1.v4() }]);
        },
        removeTask: function (state, action) {
            state.value = state.value.filter(function (item) { return item.id !== action.payload; });
        }
    }
});
exports.selectTask = function (state) { return state.task.value; };
exports.addNewTask = (_a = exports.taskSlice.actions, _a.addNewTask), exports.removeTask = _a.removeTask;
exports["default"] = exports.taskSlice.reducer;
