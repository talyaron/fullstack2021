"use strict";
exports.__esModule = true;
var Buttons = function (props) {
    var text = props.text;
    return (React.createElement("div", null,
        React.createElement("div", { className: "button" }, text),
        React.createElement("button", null, "Increment")));
};
exports["default"] = Buttons;
