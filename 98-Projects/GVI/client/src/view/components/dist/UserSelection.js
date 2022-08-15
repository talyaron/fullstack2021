"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserSelection = function (props) {
    var registerWindow = props.registerWindow, setRegisterWindow = props.setRegisterWindow, menteeWindow = props.menteeWindow, setMenteeWindow = props.setMenteeWindow, mentorWindow = props.mentorWindow, setMentorWindow = props.setMentorWindow;
    // function handleCheck(ev:any){
    //     const name= ev.target.value
    //     console.log(name)
    // }
    // const [mentorWindow,setMentorWindow]=useState()
    function handleRegisterWindow() {
        setMenteeWindow(true);
        setRegisterWindow(false);
    }
    function handleMentorRegisterWindow() {
        setMentorWindow(true);
        setRegisterWindow(false);
    }
    return (react_1["default"].createElement("div", { className: registerWindow ? 'backgroungd-overlay' : 'register dontShowRegister' },
        react_1["default"].createElement("div", { className: registerWindow ? 'register showRegister' : 'register dontShowRegister' },
            react_1["default"].createElement("button", { className: 'closeButton', onClick: function () { setRegisterWindow(false); } }, "X"),
            react_1["default"].createElement("div", { className: 'register__text' },
                react_1["default"].createElement("h1", null,
                    "Join Now The GVI ",
                    react_1["default"].createElement("br", null),
                    " ",
                    react_1["default"].createElement("span", null, "Global Accelerator"))),
            react_1["default"].createElement("div", { className: 'register__options' },
                react_1["default"].createElement("input", { type: "button", name: "entreprenuer", value: "Entreprenuer", onClick: handleRegisterWindow }),
                react_1["default"].createElement("input", { type: "button", name: "mentor", value: "Mentor", onClick: handleMentorRegisterWindow }),
                react_1["default"].createElement("input", { type: "button", name: "investor", value: "Investor" }),
                react_1["default"].createElement("input", { type: "button", name: "gviPartner", value: "GVI Partner" })))));
};
exports["default"] = UserSelection;
