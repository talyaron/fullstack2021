"use strict";
exports.__esModule = true;
var Box_1 = require("./View/Components/Box");
require("./View/styles/Global.scss");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Box_1["default"], { title: 'new title', text: 'new text' })));
}
exports["default"] = App;
