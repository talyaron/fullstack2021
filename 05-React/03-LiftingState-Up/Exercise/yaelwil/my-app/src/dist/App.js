"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form_1 = require("./Form");
require("./App.css");
function App() {
    var _a = react_1.useState(""), backgroundColor = _a[0], setBackgroundColor = _a[1];
    var _b = react_1.useState(""), textColor = _b[0], setTextColor = _b[1];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header", style: { backgroundColor: backgroundColor } },
            react_1["default"].createElement("h1", { style: { color: textColor } }, "Example text"),
            react_1["default"].createElement(Form_1["default"], { setBackgroundColor: setBackgroundColor, setTextColor: setTextColor }))));
}
exports["default"] = App;
