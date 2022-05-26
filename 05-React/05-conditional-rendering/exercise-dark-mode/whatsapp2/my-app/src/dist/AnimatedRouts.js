"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var framer_motion_1 = require("framer-motion");
var ChatPage_1 = require("./Views/Components/ChatPage");
var LoginPage_1 = require("./Views/Components/LoginPage");
var AnimatedRouts = function () {
    var location = react_router_dom_1.useLocation();
    return (React.createElement(framer_motion_1.AnimatePresence, null,
        React.createElement(react_router_dom_1.Routes, { location: location, key: location.pathname },
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(LoginPage_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/ChatPage", element: React.createElement(ChatPage_1["default"], null) }))));
};
exports["default"] = AnimatedRouts;
