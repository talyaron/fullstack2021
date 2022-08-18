"use strict";
exports.__esModule = true;
exports.selectUser = exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userAsync_1 = require("./userAsync");
var initialState = {
    value: {},
    status: 'idle'
};
exports.userSlice = toolkit_1.createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(userAsync_1.sendUserData.pending, function (state) {
            state.status = 'loading';
        })
            .addCase(userAsync_1.sendUserData.fulfilled, function (state, action) {
            state.status = 'idle';
            state.value = action.payload;
        })
            .addCase(userAsync_1.sendUserData.rejected, function (state) {
            state.status = 'failed';
        });
    }
});
exports.selectUser = function (state) { return state.user.value; };
exports["default"] = exports.userSlice.reducer;
