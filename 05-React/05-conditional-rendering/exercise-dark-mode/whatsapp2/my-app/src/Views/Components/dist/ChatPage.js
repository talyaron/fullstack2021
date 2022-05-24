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
var uuid_1 = require("uuid");
require("../styles/global.scss");
var Form_1 = require("./Form");
var Header_1 = require("./Header");
var LowerHeader_1 = require("./LowerHeader");
var MessageArray_1 = require("./MessageArray");
var SearchBar_1 = require("./SearchBar");
var DashBoard_1 = require("./DashBoard");
var Profile_1 = require("./Profile");
var framer_motion_1 = require("framer-motion");
function ChatPage() {
    var _a = react_1.useState([]), messageArray = _a[0], setMessageArray = _a[1];
    function handleSubmit(ev) {
        ev.preventDefault();
        var text = ev.target.text.value;
        var payload = { text: text, id: uuid_1.v4() };
        setMessageArray(__spreadArrays(messageArray, [payload]));
        ev.target.reset();
    }
    return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "container", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: .8 } },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(LowerHeader_1["default"], null),
        react_1["default"].createElement(Profile_1["default"], null),
        react_1["default"].createElement(MessageArray_1["default"], { messageArray: messageArray }),
        react_1["default"].createElement(SearchBar_1["default"], null),
        react_1["default"].createElement(DashBoard_1["default"], null),
        react_1["default"].createElement(Form_1["default"], { handleSubmit: handleSubmit })));
}
exports["default"] = ChatPage;
