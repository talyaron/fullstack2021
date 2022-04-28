"use strict";
exports.__esModule = true;
var Box = function (props) {
    var text = props.text, title = props.title, img = props.img;
    return (React.createElement("div", { className: "card" },
        React.createElement("img", { src: "" + img, alt: 'Beer picture' }),
        React.createElement("p", { className: "boxP" }, text),
        React.createElement("h1", null, title)));
};
exports["default"] = Box;
