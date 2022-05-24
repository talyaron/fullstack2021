"use strict";
exports.__esModule = true;
var MoreHorizRounded_1 = require("@mui/icons-material/MoreHorizRounded");
var AddSharp_1 = require("@mui/icons-material/AddSharp");
var couple_png_1 = require("../images/couple.png");
var Profile = function () {
    return (React.createElement("div", { className: 'box profile' },
        React.createElement("div", null,
            React.createElement(MoreHorizRounded_1["default"], { className: 'dots', fontSize: 'small' }),
            React.createElement(AddSharp_1["default"], { className: 'sharp' })),
        React.createElement("img", { src: couple_png_1["default"] })));
};
exports["default"] = Profile;
