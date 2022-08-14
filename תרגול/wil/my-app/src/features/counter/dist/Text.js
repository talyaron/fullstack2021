"use strict";
exports.__esModule = true;
exports.Text = void 0;
var hooks_1 = require("../../app/hooks");
var taskSlice_1 = require("./taskSlice");
function Text() {
    var dispatch = hooks_1.useAppDispatch();
    var handleSend = function (e) {
        e.preventDefault();
        var text = e.target.elements.text.value;
        dispatch(taskSlice_1.addNewTask(text));
    };
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSend },
            React.createElement("input", { type: "text", name: "text", placeholder: "Text" }),
            React.createElement("button", { type: "submit" }, "Send"))));
}
exports.Text = Text;
