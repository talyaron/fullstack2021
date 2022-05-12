"use strict";
exports.__esModule = true;
var Box = function (props) {
    var text = props.text, title = props.title, img = props.img, price = props.price, shipping = props.shipping;
    return (React.createElement("div", null,
        React.createElement("img", { src: img, alt: "" }),
        React.createElement("h2", null, title),
        React.createElement("p", { className: "price" }, price),
        React.createElement("p", { className: "text" }, text),
        React.createElement("p", { className: "shipping" }, shipping)));
};
exports["default"] = Box;
