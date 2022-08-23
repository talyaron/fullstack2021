"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.selectMessageStatus = exports.selectMessage = exports.getPassText = exports.deleteText = exports.addText = exports.chatSlice = exports.Status = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var chatApi_1 = require("./chatApi");
//the thunk i use here in order to get the data
var Status;
(function (Status) {
    Status["IDLE"] = "idle";
    Status["LOADING"] = "loading";
    Status["FAILED"] = "failed";
})(Status = exports.Status || (exports.Status = {}));
var initialState = {
    value: [],
    status: Status.IDLE
};
exports.chatSlice = toolkit_1.createSlice({
    //messages is the name we will get for this route of reducer :messages/getText
    name: "messages",
    initialState: initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addText: function (state, action) {
            //the old messages saved,then the new one added
            //how doesnt _id here now get the text as payload ????
            state.value = __spreadArrays(state.value, [
                { text: action.payload, _id: action.payload.id, img: action.payload },
            ]);
        },
        deleteText: function (state, action) {
            state.value = state.value.filter(function (item) { return item._id !== action.payload; });
        },
        // editText: (state, action: PayloadAction<any>) => {
        //   state.value = state.value.map((item) =>
        //     item._id === action.payload._id
        //       ? { ...item, text: action.payload.updatedText }
        //       : item
        //   );
        // },
        getPassText: function (state, action) {
            state.value = action.payload;
            console.log(state.value);
        }
    },
    //builder creates the thunks/extra reducers that are async
    extraReducers: function (builder) {
        builder
            .addCase(chatApi_1.getMessages.pending, function (state) {
            state.status = Status.LOADING;
        })
            .addCase(chatApi_1.getMessages.fulfilled, function (state, action) {
            state.status = Status.IDLE;
            state.value = action.payload;
        })
            .addCase(chatApi_1.getMessages.rejected, function (state) {
            state.status = Status.FAILED;
        })
            .addCase(chatApi_1.editMessage.pending, function (state) {
            state.status = Status.LOADING;
        })
            .addCase(chatApi_1.editMessage.fulfilled, function (state, action) {
            state.status = Status.IDLE;
            state.value = state.value.map(function (item) {
                return item._id === action.payload._id
                    ? __assign(__assign({}, item), { text: action.payload.updatedText }) : item;
            });
        })
            .addCase(chatApi_1.editMessage.rejected, function (state) {
            state.status = Status.FAILED;
        });
    }
});
exports.addText = (_a = exports.chatSlice.actions, _a.addText), exports.deleteText = _a.deleteText, exports.getPassText = _a.getPassText;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//chat is an object and inside text and status
exports.selectMessage = function (state) { return state.chat.value; };
exports.selectMessageStatus = function (state) { return state.chat.status; };
//state.chat the chat is from the store
exports["default"] = exports.chatSlice.reducer;
