"use strict";
exports.__esModule = true;
function TodoList(_a) {
    var todos = _a.todos;
    return (React.createElement("div", null,
        React.createElement("form", null,
            React.createElement("input", { type: "text" }),
            React.createElement("button", null, "Add Todo"),
            React.createElement("button", null, "Clear complete"),
            React.createElement("div", null, "0 left to do"),
            React.createElement("div", null, todos.length))));
}
exports["default"] = TodoList;
