"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Modal_1 = require("react-bootstrap/Modal");
var Example = function () {
    return (react_1["default"].createElement(Modal_1["default"].Dialog, null,
        react_1["default"].createElement(Modal_1["default"].Header, { closeButton: true },
            react_1["default"].createElement(Modal_1["default"].Title, null, "Modal title")),
        react_1["default"].createElement(Modal_1["default"].Body, null,
            react_1["default"].createElement("p", null, "Modal body text goes here.")),
        react_1["default"].createElement(Modal_1["default"].Footer, null,
            react_1["default"].createElement(Button_1["default"], { variant: "secondary" }, "Close"),
            react_1["default"].createElement(Button_1["default"], { variant: "primary" }, "Save changes"))));
};
exports["default"] = Example;
