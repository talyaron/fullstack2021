"use strict";
exports.__esModule = true;
var frankel_png_1 = require("../images/frankel.png");
var MoreHorizRounded_1 = require("@mui/icons-material/MoreHorizRounded");
var Search_1 = require("@mui/icons-material/Search");
var LowerHeader = function () {
    return (React.createElement("div", { className: 'box lowerHeader' },
        React.createElement("div", { className: "icon" },
            React.createElement(MoreHorizRounded_1["default"], { className: 'dots', fontSize: 'small' }),
            React.createElement(Search_1["default"], { className: 'magnify' })),
        React.createElement("p", { style: { color: 'grey' } }, "\u05DC\u05D7\u05E5 \u05DB\u05D0\u05DF \u05DC\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E7\u05D1\u05D5\u05E6\u05D4"),
        React.createElement("h3", null, "\u05D4\u05E4\u05E8\u05E0\u05E7\u05DC\u05D9\u05DD"),
        React.createElement("img", { src: frankel_png_1["default"], alt: "" })));
};
exports["default"] = LowerHeader;
