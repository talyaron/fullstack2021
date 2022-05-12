"use strict";
exports.__esModule = true;
var Form = function (props) {
    var setBackgroundColor = props.setBackgroundColor, setTextColor = props.setTextColor;
    function handleUpdateColor(ev) {
        ev.preventDefault();
        var backgroundcolor = ev.target.elements.backgroundColor.value;
        var textcolor = ev.target.elements.textColor.value;
        setBackgroundColor(backgroundcolor);
        setTextColor(textcolor);
        console.log(backgroundcolor, textcolor);
    }
    return (React.createElement("form", { onSubmit: handleUpdateColor },
        React.createElement("p", null, "select background and text Colors"),
        React.createElement("input", { type: "color", className: "backgroundColor" }),
        React.createElement("input", { type: "color", className: "textColor" }),
        React.createElement("input", { type: "submit", value: "Update Colors" })));
};
exports["default"] = Form;
