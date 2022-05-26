"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("./View/Components/Box");
require("./View/styles/Global.scss");
function App() {
    var _a = react_1.useState([]), arr = _a[0], setarr = _a[1];
    var _b = react_1.useState(""), img = _b[0], setimg = _b[1];
    var _c = react_1.useState(""), name = _c[0], setname = _c[1];
    var _d = react_1.useState(""), fhone = _d[0], setfhone = _d[1];
    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    function handladd(ev) {
        var obj = { img: img, name: name, fhone: fhone, id: uid() };
        setarr(__spreadArrays(arr, [obj]));
        console.log(arr);
    }
    // function handlearry(){
    //   const obj = { name, fhone, id: uid() };
    //   setarr([...arr,obj])
    //   console.log(arr);
    // }
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "App__header" },
            React.createElement("button", { className: "App__log" }, "\u05D4\u05D9\u05DB\u05E0\u05E1"),
            React.createElement("div", { className: "App__img" },
                React.createElement("img", { src: "https://www.freepnglogos.com/uploads/netflix-logo-0.png" }))),
        React.createElement("div", { className: "card" }),
        React.createElement(Box_1["default"], { handleaddone: handladd, setfhone: setfhone, setname: setname, setimg: setimg })));
}
exports["default"] = App;
{
    /* <div className="App__card">
    <div className="App__card">
      <p>
        {" "}
        <img src={img} />
      </p>
    </div>
    <div className="App__name">
      <h2>{name}</h2>
    </div>
    <div className="App__fhone">
      <h2>{fhone}</h2>
    </div>
  </div>; */
}
