"use strict";
exports.__esModule = true;
exports.Task = void 0;
var react_1 = require("react");
var hooks_1 = require("../../app/hooks");
var textSlice_1 = require("./textSlice");
function Task() {
    var dispatch = hooks_1.useAppDispatch();
    var handleSend = function (e) {
        e.preventDefault();
        var text = e.target.elements.text.value;
        console.log(text);
        dispatch(textSlice_1.addNewTask(text));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: handleSend },
            react_1["default"].createElement("input", { type: "text", name: "", placeholder: 'Enter message here..' }),
            react_1["default"].createElement("button", { type: 'submit' }, "Send"))));
}
exports.Task = Task;
