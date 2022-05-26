"use strict";
exports.__esModule = true;
var Fab_1 = require("@mui/material/Fab");
var Add_1 = require("@mui/icons-material/Add");
var Edit_1 = require("@mui/icons-material/Edit");
var Favorite_1 = require("@mui/icons-material/Favorite");
var PopUpsAttach = function (props) {
    var handleImg = props.handleImg;
    return (React.createElement("div", null,
        React.createElement("input", { type: "file", name: "img", className: 'imgInput', onChange: function (event) { handleImg(event); } }),
        React.createElement(Fab_1["default"], { className: 'add', color: "primary", "aria-label": "add" },
            React.createElement(Add_1["default"], null)),
        React.createElement(Fab_1["default"], { className: 'edit', color: "secondary", "aria-label": "edit" },
            React.createElement(Edit_1["default"], null)),
        React.createElement(Fab_1["default"], { className: 'like', color: "success", name: "like", "aria-label": "like" },
            React.createElement(Favorite_1["default"], null))));
};
exports["default"] = PopUpsAttach;
