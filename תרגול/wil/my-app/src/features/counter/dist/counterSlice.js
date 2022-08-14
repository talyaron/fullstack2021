"use strict";
exports.__esModule = true;
exports.textSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: [{ text: '', id: '1' }]
};
exports.textSlice = toolkit_1.createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {}
});
exports["default"] = exports.textSlice.reducer;
