"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
//styling imports:
//mui ->
var material_1 = require("@mui/material");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function CaretDownAvatar(props) {
    var AvatarStyling = props.AvatarStyling, setPopoverButton = props.setPopoverButton, setArrowAnchor = props.setArrowAnchor;
    function handleOpenNavPopover(ev) {
        var button = ev.currentTarget.firstChild;
        var icon = ev.currentTarget;
        setPopoverButton(icon);
        setArrowAnchor(button);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    return (React.createElement(framer_motion_1.motion.div, null,
        React.createElement(material_1.Avatar, { style: AvatarStyling, onClick: function (ev) { return handleOpenNavPopover(ev); } },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "xs", icon: ["fas", "caret-down"] }))));
}
exports["default"] = CaretDownAvatar;
