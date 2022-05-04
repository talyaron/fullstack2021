"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./view/styles/global.scss");
function App() {
    var _a = react_1.useState('Start writing somthing'), text = _a[0], setText = _a[1];
    var _b = react_1.useState(''), image = _b[0], setImage = _b[1];
    var _c = react_1.useState([]), arr = _c[0], setArr = _c[1];
    function handleAddImage(ev) {
        ev.preventDefault();
        var text = ev.target.text.value;
        var img = ev.target.img.value;
        var obj = { text: text, img: img };
        setArr(__spreadArrays(arr, [obj]));
    }
    function handleText(ev) {
        setText(ev.target.value);
    }
    function handleDelete(ev) {
        var id = ev.target.id;
        var newArr = arr.filter(function (item, index) { return index !== id; });
        setArr(newArr);
    }
    function handleImage(ev) {
        setImage(ev.target.value);
    }
    return (react_1["default"].createElement("header", { className: "App-header" },
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("form", { onSubmit: handleAddImage },
                react_1["default"].createElement("p", null,
                    "img:",
                    react_1["default"].createElement("input", { type: "text", name: 'img', onKeyUp: handleImage, required: true })),
                react_1["default"].createElement("p", null,
                    " text:",
                    react_1["default"].createElement("input", { type: "text", name: 'text', onKeyUp: handleText, required: true })),
                react_1["default"].createElement("input", { type: "submit", value: "Add Image" })),
            react_1["default"].createElement("div", { className: 'arr' }, arr.map(function (img, i) {
                return (react_1["default"].createElement("div", { key: i },
                    react_1["default"].createElement("h3", null, img.text),
                    react_1["default"].createElement("img", { src: img.img, title: img.text, alt: img.text }),
                    react_1["default"].createElement("button", { id: "" + img.id, onClick: handleDelete }, "Delete")));
            })))));
}
exports["default"] = App;
