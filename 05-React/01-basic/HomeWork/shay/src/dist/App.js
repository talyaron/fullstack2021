"use strict";
exports.__esModule = true;
var react_1 = require("react");
//import './App.css';
var box_1 = require("./view/components/box");
require("./view/styles/global.scss");
var Boxes = [
    {
        img: "https://rukminim2.flixcart.com/image/714/857/kirr24w0-0/watch/1/x/b/pack-of-2-queen-dial-magnetic-strap-luxury-casual-gold-and-black-original-imafyhnqahvfmncb.jpeg?q=50",
        title: "Rose Gold and Black watch",
        price: "$700",
        text: "Rolex watch for woman",
        shipping: "free shipping with 49$ order"
    },
    {
        img: "https://m.media-amazon.com/images/I/51QShp3N57L._AC_.jpg",
        title: "ombre blue and pink pastel watch",
        price: "$600",
        text: "Adi watch for woman",
        shipping: "free shipping with 49$ order"
    },
    {
        img: "https://rukminim2.flixcart.com/image/714/857/ktuewsw0/watch/d/1/z/1-rose-gold-fashion-italian-design-women-analog-watch-for-girls-original-imag73zhdpgbzhgv.jpeg?q=50",
        title: "Rose Gold diamond hart watch",
        price: "$800",
        text: "Casio watch for woman",
        shipping: "free shipping with 49$ order"
    },
    {
        img: "https://cdn2.jomashop.com/media/catalog/product/p/i/piaget-possession-turquoise-dial-turquoise-leather-ladies-watch-g0a43089.jpg",
        title: "Rose Gold and Tourqoize watch",
        price: "$500",
        text: "Michael Kors watch for woman",
        shipping: "free shipping with 49$ order"
    },
];
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("div", { className: "contaner" }, Boxes.map(function (box, i) { return react_1["default"].createElement(box_1["default"], { key: i, img: box.img, title: box.title, price: box.price, text: box.text, shipping: box.shipping }); })),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports["default"] = App;
