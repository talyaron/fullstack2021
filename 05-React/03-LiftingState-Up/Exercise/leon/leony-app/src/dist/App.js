"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("./view/components/Box");
require("././App.css");
require(".src/styles/dist/global.css");
function App() {
    var title = "Leon";
    var img = react_1["default"].createElement("img", { src: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg", alt: "" });
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Box_1["default"], { title: title, text: 'asdad', img: img }),
        react_1["default"].createElement(Box_1["default"], { title: title, text: 'asdad', img: img }),
        react_1["default"].createElement(Box_1["default"], { title: title, text: 'asdad', img: img })));
}
exports["default"] = App;
