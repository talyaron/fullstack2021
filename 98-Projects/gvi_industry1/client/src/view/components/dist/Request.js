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
require("../styles/request.scss");
require("../styles/requestPage.scss");
var axios_1 = require("axios");
var ReqUserCardPending_1 = require("./ReqUserCardPending");
var Request = function () {
    var _a = react_1.useState([]), requestUsers = _a[0], setRequestUsers = _a[1];
    var _b = react_1.useState(''), type = _b[0], setType = _b[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, _id, type, users, chosen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/users/get-selecteing-user")];
                    case 1:
                        data = (_a.sent()).data;
                        _id = data._id, type = data.type;
                        return [4 /*yield*/, axios_1["default"].post("/api/users/get-sent-request-users", { _id: _id, type: type })];
                    case 2:
                        users = _a.sent();
                        chosen = users.data.chosen;
                        setRequestUsers(chosen);
                        if (type === 'mentee') {
                            setType('Mentors');
                        }
                        else {
                            setType('Entrepreneurs');
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    //============================================================================================
    return (
    // <div className="requestPage">
    //   <h5 className="requestPage__title"></h5>
    //   <div className="requestPage__wrapper">
    //     <RequestCard requestUsers={requestUsers} />
    React.createElement("div", { className: "requestedPage" },
        React.createElement("h3", { className: "requestedPage__title" }, " "),
        React.createElement("div", { className: "requestedPage__wrapper" },
            React.createElement(ReqUserCardPending_1["default"], { requestUsers: requestUsers }))));
};
exports["default"] = Request;
