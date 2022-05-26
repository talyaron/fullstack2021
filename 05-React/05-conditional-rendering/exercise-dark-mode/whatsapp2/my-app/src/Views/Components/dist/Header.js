"use strict";
exports.__esModule = true;
var Close_1 = require("@mui/icons-material/Close");
var Minimize_1 = require("@mui/icons-material/Minimize");
var Header = function () {
    return (React.createElement("div", { className: 'box header' },
        React.createElement("div", { className: "minimize" },
            React.createElement(Close_1["default"], null),
            React.createElement(Minimize_1["default"], { className: 'minimizeIcon' })),
        React.createElement("div", { className: "whatsApp" }, "WhatsApp")));
};
exports["default"] = Header;
