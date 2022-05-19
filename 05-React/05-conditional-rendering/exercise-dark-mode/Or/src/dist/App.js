"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var dark_logo_svg_1 = require("./dark-logo.svg");
var light_logo_svg_1 = require("./light-logo.svg");
require("./App.css");
function App() {
    var _a = react_1.useState(true), theme = _a[0], setTheme = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: theme ? "App-header-dark" : 'App-header-light' },
            React.createElement("img", { src: theme ? dark_logo_svg_1["default"] : light_logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            React.createElement(material_1.Switch, { onChange: function () { setTheme(!theme); } }))));
}
exports["default"] = App;
