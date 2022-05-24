"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Switch_1 = require("@mui/material/Switch");
function App() {
    var _a = react_1.useState(true), boo = _a[0], setBoo = _a[1];
    return (react_1["default"].createElement("div", { className: boo ? "App" : "App AppDark" },
        react_1["default"].createElement("div", { className: 'container ' },
            react_1["default"].createElement("p", null, "TOGGLE DARK MODE"),
            react_1["default"].createElement(Switch_1["default"], { onClick: function () { return setBoo(!boo); } }))));
}
exports["default"] = App;
