"use strict";
exports.__esModule = true;
var Message = function (props) {
    var message = props.message;
    return (React.createElement("div", { className: 'box message' },
        React.createElement("p", null, message.text)));
};
exports["default"] = Message;
