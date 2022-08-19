"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form1 = function (props) {
    var requestUsers = props.requestUsers;
    var handleSend = function (e) {
        // .....
        //axios - post / patch - id+text
    };
    var _a = react_1.useState("none"), display = _a[0], setDisplay = _a[1];
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("h1", null, "EMPLOEE"),
            React.createElement("button", { onClick: function () {
                    setDisplay("block");
                } }, "Send req")),
        React.createElement("div", { style: { display: display, position: "absolute", top: "0" } },
            React.createElement("form", { id: "id-2312312", onSubmit: handleSend },
                React.createElement("input", { type: "text" }),
                React.createElement("button", { type: "submit" }, "Send")))));
};
exports["default"] = Form1;
