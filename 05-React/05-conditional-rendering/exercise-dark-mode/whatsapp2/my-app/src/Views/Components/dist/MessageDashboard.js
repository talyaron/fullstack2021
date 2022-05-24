"use strict";
exports.__esModule = true;
var Message_1 = require("./Message");
var MessageArray = function (props) {
    var messageArray = props.messageArray;
    console.log(messageArray);
    return (React.createElement("div", { className: 'messageGrid' }, messageArray.map(function (message, i) {
        return (React.createElement(Message_1["default"], { key: i, message: message }));
    })));
};
exports["default"] = MessageArray;
