"use strict";
exports.__esModule = true;
var Box = function (props) {
    var text = props.text, title = props.title, img = props.img;
    return (React.createElement("div", null,
        React.createElement("h4", null, title),
        React.createElement("img", { src: img }),
        React.createElement("p", null, text)));
};
exports["default"] = Box;
