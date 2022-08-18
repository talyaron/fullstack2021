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
var StarSvg_1 = require("./StarSvg");
var axios_1 = require("axios");
var react_1 = require("react");
var CardProfile_1 = require("../../../components/CardProfile");
var MatchingCard = function (props) {
    var usersList = props.usersList;
    var _a = react_1.useState(false), cardClicked = _a[0], setcardClicked = _a[1];
    var _b = react_1.useState(""), ClassName = _b[0], setClassName = _b[1];
    var _c = react_1.useState({}), userClicked = _c[0], setuserClicked = _c[1];
    function handleSelectUser(selectedUserId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].post("/api/users/selected-user", { selectedUserId: selectedUserId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleCardProfile(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, data, userFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = ev.target.id;
                        return [4 /*yield*/, axios_1["default"].post("/api/users/get-userById", { userId: userId })];
                    case 1:
                        data = (_a.sent()).data;
                        userFound = data.user;
                        setcardClicked(!cardClicked);
                        return [4 /*yield*/, setuserClicked(userFound)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    try {
        return (React.createElement("div", { className: cardClicked ? "opacityZero" : "matching__wrapper" },
            cardClicked ? (React.createElement(CardProfile_1["default"], { userClicked: userClicked, setcardClicked: setcardClicked })) : null,
            React.createElement("div", { className: "matching__wrapper" }, usersList
                ? usersList.map(function (user) { return (React.createElement("div", { className: "matching__wrapper_card", key: user._id },
                    React.createElement(StarSvg_1["default"], { handleSelectUser: handleSelectUser, userId: user._id }),
                    React.createElement("img", { className: "matching__wrapper_card_pic", id: user._id, src: user.image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", onClick: handleCardProfile }),
                    React.createElement("p", { className: "matching__wrapper_card_seen" }, "Last Seen"),
                    React.createElement("div", { className: "matching__wrapper_card_description" },
                        React.createElement("p", null,
                            user.name.first,
                            " ",
                            user.name.last),
                        React.createElement("p", null, user.sector),
                        React.createElement("div", { className: "matching__wrapper_card_footer " },
                            React.createElement("a", { href: user.linkedInProfile },
                                React.createElement("img", { className: "matching__wrapper_card_footer_linkedin", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png", alt: "" })),
                            React.createElement("button", { className: "matching__wrapper_card_footer_request" }, "Send Request"))))); })
                : null)));
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports["default"] = MatchingCard;
