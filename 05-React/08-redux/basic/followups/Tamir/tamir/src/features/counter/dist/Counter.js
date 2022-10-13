"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var react_1 = require("react");
var hooks_1 = require("../../app/hooks");
var counterSlice_1 = require("./counterSlice");
var Counter_module_css_1 = require("./Counter.module.css");
function Counter() {
    var count = hooks_1.useAppSelector(counterSlice_1.selectCount);
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState('2'), incrementAmount = _a[0], setIncrementAmount = _a[1];
    var incrementValue = Number(incrementAmount) || 0;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: Counter_module_css_1["default"].row },
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].button, "aria-label": "Decrement value", onClick: function () { return dispatch(counterSlice_1.decrement()); } }, "-"),
            react_1["default"].createElement("span", { className: Counter_module_css_1["default"].value }, count),
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].button, "aria-label": "Increment value", onClick: function () { return dispatch(counterSlice_1.increment()); } }, "+")),
        react_1["default"].createElement("div", { className: Counter_module_css_1["default"].row },
            react_1["default"].createElement("input", { className: Counter_module_css_1["default"].textbox, "aria-label": "Set increment amount", value: incrementAmount, onChange: function (e) { return setIncrementAmount(e.target.value); } }),
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].button, onClick: function () { return dispatch(counterSlice_1.incrementByAmount(incrementValue)); } }, "Add Amount"),
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].button, onClick: function () { return dispatch(counterSlice_1.downByAmount(incrementValue)); } }, "down Amount"),
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].asyncButton, onClick: function () { return dispatch(counterSlice_1.incrementAsync(incrementValue)); } }, "Add Async"),
            react_1["default"].createElement("button", { className: Counter_module_css_1["default"].button, onClick: function () { return dispatch(counterSlice_1.incrementIfOdd(incrementValue)); } }, "Add If Odd"))));
}
exports.Counter = Counter;
