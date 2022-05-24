"use strict";
exports.__esModule = true;
var LoginForm = function (props) {
    var handleLogin = props.handleLogin;
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleLogin },
            React.createElement("input", { type: "text", name: "name", placeholder: 'name' }),
            React.createElement("input", { type: "password", name: "password", placeholder: 'password' }),
            React.createElement("input", { type: "submit", value: "LOGIN" }))));
};
exports["default"] = LoginForm;
