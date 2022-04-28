"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./Views/styles/global.scss");
var Box_1 = require("./Views/Componants/Box");
var boxes = [
    { img: logo_svg_1["default"], title: 'aaa', text: 'aaa' },
    { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM", title: 'bbb', text: 'bbb' },
    { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM", title: 'cc', text: 'cc' },
    { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM", title: 'dddd', text: 'dddd' }
];
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("div", { className: 'container' }, boxes.map(function (box, i) { return react_1["default"].createElement(Box_1["default"], { key: i, img: box.img, text: box.text, title: box.title }); })))));
}
exports["default"] = App;
