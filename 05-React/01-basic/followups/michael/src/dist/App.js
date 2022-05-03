"use strict";
exports.__esModule = true;
var react_1 = require("react");
//css
require("./styles/dist/App.css");
require("./styles/dist/Buttons.css");
require("./styles/dist/TodoList.css");
//components
var Buttons_1 = require("./Buttons");
var TodoList_1 = require("./TodoList");
function App() {
    var _a = react_1.useState(['todo1', 'todo2']), todos = _a[0], setTodos = _a[1];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(Buttons_1["default"], { text: "Zero" }),
            react_1["default"].createElement(TodoList_1["default"], { todos: todos }))));
}
exports["default"] = App;
