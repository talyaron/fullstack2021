"use strict";
exports.__esModule = true;
exports.changetext = exports.TextSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: "",
    status: "idle"
};
exports.TextSlice = toolkit_1.createSlice({
    name: "Text",
    initialState: initialState,
    reducers: {
        changetext: function (state, action) {
            console.log("12312");
            state.value = action.payload;
        }
    }
});
exports.changetext = exports.TextSlice.actions.changetext;
exports["default"] = exports.TextSlice.reducer;
