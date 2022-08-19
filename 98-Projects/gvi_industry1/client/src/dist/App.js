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
var Profile_1 = require("./view/pages/mentee/Profile");
// import Card from "./view/pages/mentee/Card"//
var react_1 = require("react");
require("./view/styles/global.scss");
var Matching_1 = require("./view/pages/matching/Matching");
var Request_1 = require("./view/Components/Request");
var Chat_1 = require("./view/pages/Chat/Chat");
var react_2 = require("react");
var AdminLayout_1 = require("./view/pages/AdminLayout");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var SelctedUsers_1 = require("./view/Components/SelctedUsers");
var Layout_1 = require("./view/pages/Layout");
var HomePage_1 = require("./view/Components/HomePage");
var WelcomePage_1 = require("./view/Components/WelcomePage");
var AdminPage_1 = require("./view/Components/AdminPage");
var RequestLayout_1 = require("./view/pages/RequestLayout");
var Answered_1 = require("./view/Components/Answered");
var FromMentee_1 = require("./view/Components/FromMentee");
var FromMentors_1 = require("./view/Components/FromMentors");
function App() {
    var _this = this;
    var _a = react_2.useState([]), usersList = _a[0], setUsersList = _a[1];
    var _b = react_2.useState({}), currentUser = _b[0], setCurrentUser = _b[1];
    var _c = react_2.useState([]), currentSearch = _c[0], setCurrentSearch = _c[1];
    var _d = react_2.useState([]), filterOptions = _d[0], setFilterOptions = _d[1];
    var _e = react_2.useState(false), checked = _e[0], setChecked = _e[1];
    var _f = react_2.useState(false), myProfile = _f[0], setMyProfile = _f[1];
    var _g = react_2.useState({}), loggedInUser = _g[0], setloggedInUser = _g[1];
    var _h = react_2.useState(""), currentUserType = _h[0], setCurrentUserType = _h[1];
    var userId = react_router_dom_1.useParams().userId;
    react_2.useEffect(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var data, user, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/users/get-user")];
                    case 1:
                        data = (_a.sent()).data;
                        user = data.user;
                        setCurrentUser(user);
                        type = user.type;
                        if (type) {
                            setCurrentUserType(type);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(HomePage_1["default"], { setCurrentUserType: setCurrentUserType, setloggedInUser: setloggedInUser }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "mainPage", element: react_1["default"].createElement(Layout_1["default"], { loggedInUser: loggedInUser, currentUserType: currentUserType }) },
                react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(WelcomePage_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "profile", element: react_1["default"].createElement(Profile_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "chat", element: react_1["default"].createElement(Chat_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "matching", element: react_1["default"].createElement(Matching_1["default"], { usersList: usersList, setUsersList: setUsersList, currentUser: currentUser, setCurrentUser: setCurrentUser, currentSearch: currentSearch, setCurrentSearch: setCurrentSearch, filterOptions: filterOptions, setFilterOptions: setFilterOptions, checked: checked, setChecked: setChecked }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "matching/selected-users", element: react_1["default"].createElement(SelctedUsers_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "request", element: react_1["default"].createElement(RequestLayout_1["default"], { loggedInUser: loggedInUser, currentUserType: currentUserType }) },
                    currentUserType === 'mentor',
                    "?(",
                    react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(FromMentee_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "from-mentee", element: react_1["default"].createElement(FromMentee_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "answered", element: react_1["default"].createElement(Answered_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "pending", element: react_1["default"].createElement(Request_1["default"], null) }),
                    "):(",
                    react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(FromMentors_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "from-mentor", element: react_1["default"].createElement(FromMentors_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "answered", element: react_1["default"].createElement(Answered_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "pending", element: react_1["default"].createElement(Request_1["default"], null) }),
                    ")")),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "mainPageAdmin", element: react_1["default"].createElement(AdminLayout_1["default"], { loggedInUser: loggedInUser }) },
                react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(AdminPage_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "chat", element: react_1["default"].createElement(Chat_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "request", element: react_1["default"].createElement(Request_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "profile", element: react_1["default"].createElement(Profile_1["default"], null) })))));
}
exports["default"] = App;
