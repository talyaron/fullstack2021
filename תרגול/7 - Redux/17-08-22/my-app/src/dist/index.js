"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store");
var App_1 = require("./App");
require("./index.css");
var container = document.getElementById("root");
var root = client_1.createRoot(container);
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(App_1["default"], null))));
