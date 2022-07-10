"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
//components
var Home_1 = require("./pages/Home");
var FromMentee_1 = require("./pages/FromMentee");
var Answered_1 = require("./pages/Answered");
var Layout_1 = require("./Layout");
var Pending_1 = require("./pages/Pending");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
                react_1["default"].createElement(react_router_dom_1.Route, { path: "home", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "from-mentee", element: react_1["default"].createElement(FromMentee_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "answered", element: react_1["default"].createElement(Answered_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "pending", element: react_1["default"].createElement(Pending_1["default"], null) })))));
}
exports["default"] = App;
