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
var react_1 = require("react");
require("../styles/selectedPage.scss");
require("../styles/requestPage.scss");
var axios_1 = require("axios");
var ReqMenteeUserCard_1 = require("./ReqMenteeUserCard");
var FromMentee = function () {
    var _a = react_1.useState([]), selectedUsers = _a[0], setSelectedUsers = _a[1];
    var _b = react_1.useState([]), requestedUsers = _b[0], setRequestedUsers = _b[1];
    var _c = react_1.useState(''), type = _c[0], setType = _c[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, _id, type, users, chosenMentors, chosenMentees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/users/get-selecteing-user")];
                    case 1:
                        data = (_a.sent()).data;
                        _id = data._id, type = data.type;
                        return [4 /*yield*/, axios_1["default"].post('/api/users/get-mentee-mentor-requests', { _id: _id, type: type })];
                    case 2:
                        users = _a.sent();
                        //const users = await axios.post('/api/users/get-menteeMentor-requests', { _id, type });
                        if (type === 'mentee') {
                            chosenMentors = users.data.chosenMentors;
                            setRequestedUsers(chosenMentors);
                        }
                        else {
                            chosenMentees = users.data.chosenMentees;
                            setRequestedUsers(chosenMentees);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (React.createElement("div", { className: "requestedPage" },
        React.createElement("h3", { className: "requestedPage__title" }, " "),
        React.createElement("div", { className: "requestedPage__wrapper" },
            React.createElement(ReqMenteeUserCard_1["default"], { requestUsers: requestedUsers, type: type }))));
};
exports["default"] = FromMentee;
