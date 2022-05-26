"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AnimatedRouts_1 = require("./AnimatedRouts");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(AnimatedRouts_1["default"], null)));
}
exports["default"] = App;
