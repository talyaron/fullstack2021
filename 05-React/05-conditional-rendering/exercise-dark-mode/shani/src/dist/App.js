"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var material_1 = require("@mui/material");
function App() {
    var _a = react_1.useState(true), mode = _a[0], setMode = _a[1];
    return (react_1["default"].createElement("div", { className: mode ? 'dark' : 'light' },
        react_1["default"].createElement("header", { className: 'App-header' },
            mode ? react_1["default"].createElement("p", null, "DARK MODE") : react_1["default"].createElement("p", null, "LIGHT MODE"),
            react_1["default"].createElement("button", { onClick: function () { return setMode(!mode); } }, "SWITCH"),
            react_1["default"].createElement(material_1.Switch, { color: 'primary', onChange: function () { return setMode(!mode); } }),
            react_1["default"].createElement(material_1.Switch, { color: 'secondary', onChange: function () { return setMode(!mode); } }),
            react_1["default"].createElement(material_1.Switch, { color: 'error', onChange: function () { return setMode(!mode); } }),
            react_1["default"].createElement("input", { type: "checkbox", onChange: function () { return setMode(!mode); } }))));
}
exports["default"] = App;
