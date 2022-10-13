"use strict";
exports.__esModule = true;
exports.Text = void 0;
var react_1 = require("react");
var hooks_1 = require("../../app/hooks");
function Text() {
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState("bla bla"), text = _a[0], settext = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null, text),
        react_1["default"].createElement("input", { type: "text", name: "text", onChange: function (e) { return settext(e.target.value); } })));
}
exports.Text = Text;
exports["default"] = Text;
