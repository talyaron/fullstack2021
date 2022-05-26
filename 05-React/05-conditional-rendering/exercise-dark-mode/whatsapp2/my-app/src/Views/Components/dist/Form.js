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
var AttachFile_1 = require("@mui/icons-material/AttachFile");
var TagFaces_1 = require("@mui/icons-material/TagFaces");
var PopUpsAttach_1 = require("./PopUpsAttach");
var Form = function (props) {
    var handleSubmit = props.handleSubmit;
    var _a = react_1.useState(true), attach = _a[0], setAttach = _a[1];
    var _b = react_1.useState([]), imging = _b[0], setImging = _b[1];
    var _c = react_1.useState(50), position = _c[0], setPosition = _c[1];
    function handleImg(e) {
        var newImg = { img: URL.createObjectURL(e.target.files[0]) };
        setImging(__spreadArrays(imging, [newImg]));
        // const bottom = 150;
        setPosition(position);
    }
    // useEffect(() => {
    //   const objectUrl = URL.createObjectURL(imging);
    //   setPreview(objectUrl)
    // }, [imging])
    return (react_1["default"].createElement("div", { className: "box form" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "submit", value: "\u2AA2" }),
            react_1["default"].createElement("input", { type: "text", name: "text", placeholder: "\u05D4\u05E7\u05DC\u05D3\u05EA \u05D4\u05D4\u05D5\u05D3\u05E2\u05D4", required: true }),
            attach ? react_1["default"].createElement("div", { className: 'wrapper1' },
                react_1["default"].createElement(AttachFile_1["default"], { className: 'attach', onClick: function () { return setAttach(!attach); } })) :
                react_1["default"].createElement("div", { className: 'wrapper2' },
                    react_1["default"].createElement(PopUpsAttach_1["default"], { handleImg: handleImg }),
                    react_1["default"].createElement(AttachFile_1["default"], { className: 'attach', onClick: function () { return setAttach(!attach); } })),
            react_1["default"].createElement("div", { className: "atan" }, imging.map(function (img, i) {
                return (react_1["default"].createElement("div", { className: "containerImgs" },
                    react_1["default"].createElement("img", { key: i, src: img.img })));
            })),
            react_1["default"].createElement(TagFaces_1["default"], { className: 'smiley' }))));
};
exports["default"] = Form;
