"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
//@ts-ignore
var LinkedIn_1 = require("@mui/icons-material/LinkedIn");
//@ts-ignore
require("../styles/card.scss");
var reactjs_popup_1 = require("reactjs-popup");
var react_1 = require("react");
require("reactjs-popup/dist/index.css");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var MessageForm1_1 = require("../pages/matching/components/MessageForm1");
var MessageForm2_1 = require("../pages/matching/components/MessageForm2");
var react_2 = require("react");
var ReqUserCard = function (props) {
    var requestUsers = props.requestUsers, type = props.type, loggedUser = props.loggedUser;
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(""), message = _a[0], setMessage = _a[1];
    function handleSubmitForm(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                ev.preventDefault();
                message = ev.target.elements.message.value;
                setMessage(message);
                console.log(message);
                return [2 /*return*/];
            });
        });
    }
    function handleMessageReq(userId, message) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setMessage(message);
                        console.log("message:", message);
                        return [4 /*yield*/, axios_1["default"].post("/api/users/requested-messages", { userId: userId, message: message })];
                    case 1:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleAnsReq(userId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].post("/api/users/requested-answered", { userId: userId })];
                    case 1:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    //===========================================
    function Example() {
        return (react_2["default"].createElement(Example, null));
    }
    //==============================================
    var _b = react_1.useState("none"), display = _b[0], setDisplay = _b[1];
    return (react_2["default"].createElement(react_2["default"].Fragment, null, requestUsers.map(function (selectedUser, i) {
        return react_2["default"].createElement("div", { className: "card", key: i },
            react_2["default"].createElement("div", { className: "card__photo" },
                react_2["default"].createElement("img", { src: selectedUser.image ? "" + selectedUser.image : 'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png' })),
            react_2["default"].createElement("div", { className: "card__center" },
                react_2["default"].createElement("p", null,
                    selectedUser['name']['first'],
                    " ",
                    selectedUser['name']['last']),
                react_2["default"].createElement("div", { className: "card__flex" },
                    react_2["default"].createElement("img", { src: selectedUser.country ? "" + selectedUser.country : 'https://flagsweb.com/Flag_Colouring_Page/WEBP/Germany_Flag_Colouring_Page.webp' }),
                    react_2["default"].createElement("a", { href: selectedUser.linkedInProfile ? "" + selectedUser.linkedInProfile : 'https://www.linkedin.com/' },
                        react_2["default"].createElement(LinkedIn_1["default"], { className: "card__flex__linkdIn", style: { fontSize: "30px" } }))),
                react_2["default"].createElement("p", { className: "card__center__company" }, selectedUser.fieldsOfKnowledge),
                react_2["default"].createElement("p", { className: "card__center__profession" }, selectedUser.sector)),
            react_2["default"].createElement("div", { className: 'req_aa_btns' },
                react_2["default"].createElement("button", { id: "right", onClick: function () { {
                        navigate('/mainPage/chat');
                    } {
                        handleAnsReq(selectedUser._id);
                    } }, className: 'req_aa_btn' }, "Start Mentoring"),
                react_2["default"].createElement(reactjs_popup_1["default"], { className: "popUp", trigger: react_2["default"].createElement("button", { id: "left", onClick: function () { return handleAnsReq(selectedUser._id); }, className: 'req_aa_btn' }, "MisMatch") },
                    react_2["default"].createElement(MessageForm1_1["default"], { userId: selectedUser._id })),
                react_2["default"].createElement(reactjs_popup_1["default"], { className: "popUp", trigger: react_2["default"].createElement("button", { id: "envelope", onClick: function () { } },
                        react_2["default"].createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" })) },
                    react_2["default"].createElement(MessageForm2_1["default"], { loggedUser: loggedUser }))));
    })));
};
exports["default"] = ReqUserCard;
