"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hooks_1 = require("./app/hooks");
var taskSlice_1 = require("./features/counter/taskSlice");
var Text_1 = require("./features/counter/Text");
require("./App.css");
function App() {
    var tasks = hooks_1.useAppSelector(taskSlice_1.selectTask);
    var dispatch = hooks_1.useAppDispatch();
    console.log(tasks);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Text_1.Text, null),
        react_1["default"].createElement("div", { className: "" }, tasks.map(function (task) {
            return (react_1["default"].createElement("div", { onClick: function () {
                    dispatch(taskSlice_1.removeTask(task.id));
                }, key: task.id },
                react_1["default"].createElement("p", null, task.text)));
        }))));
}
exports["default"] = App;
