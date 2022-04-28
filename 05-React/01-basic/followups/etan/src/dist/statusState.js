"use strict";
exports.__esModule = true;
var react_1 = require("react");
var debounce_1 = require("./ThrottleDebounce/debounce");
function StatusState(props) {
    var updatedStatus = debounce_1["default"](function (text) {
        props.status = text;
    });
    var status = updatedStatus;
    console.dir("hello" + props.status + status);
    return (react_1["default"].createElement("div", null,
        "page load has ",
        props.status));
}
;
exports["default"] = StatusState;
