"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
// import './App.css';
require("./view/styles/global.scss");
var Box_1 = require("./view/components/Box");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement(Box_1["default"], { text: 'aaa', title: 'bbb' }),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports["default"] = App;
