"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
function Layout() {
    return (React.createElement("div", { className: "layout" },
        React.createElement("header", { className: "menuHeader" },
            React.createElement(react_router_dom_1.Link, { className: "menu", to: "/from-mentee" }, "From Mentee"),
            React.createElement(react_router_dom_1.Link, { className: "menu", to: "/answered" }, "Answered"),
            React.createElement(react_router_dom_1.Link, { className: "menu", to: "/pending" }, "Pending")),
        React.createElement(react_router_dom_1.Outlet, null)));
}
exports["default"] = Layout;
