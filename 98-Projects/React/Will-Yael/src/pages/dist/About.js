"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_1 = require("./Home");
var About = function () {
    return (react_1["default"].createElement("div", { className: 'about' },
        "About",
        react_1["default"].createElement(Home_1["default"], null),
        react_1["default"].createElement(Home_1["default"], null),
        react_1["default"].createElement(Home_1["default"], null)));
};
exports["default"] = About;
