"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_1 = require("./Home");
var FromMentee = function () {
    return (react_1["default"].createElement("h1", null, "Sent Today")
        ,
            (react_1["default"].createElement("div", { className: 'Top-Card' },
                react_1["default"].createElement(Home_1["default"], null),
                react_1["default"].createElement(Home_1["default"], null),
                react_1["default"].createElement(Home_1["default"], null))
                ,
                    (react_1["default"].createElement("h1", null, "Sent Last Week")
                        ,
                            react_1["default"].createElement("div", { className: 'Bottom-Card' },
                                react_1["default"].createElement(Home_1["default"], null),
                                react_1["default"].createElement(Home_1["default"], null),
                                react_1["default"].createElement(Home_1["default"], null)))));
};
exports["default"] = FromMentee;
