"use strict";
exports.__esModule = true;
exports.addNewTask = exports.selectText = exports.textSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var uuid_1 = require("uuid");
var initialState = {
    value: [{ text: 'hi', id: uuid_1.v4() }]
};
exports.textSlice = toolkit_1.createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        addNewTask: function (state, action) {
            console.log(action);
        }
    }
});
exports.selectText = function (state) { return state.text.value; };
exports.addNewTask = exports.textSlice.actions.addNewTask;
exports["default"] = exports.textSlice.reducer;
