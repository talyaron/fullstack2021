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
exports.addArtToUser = exports.updateUser = exports.findUser = exports.addUser = void 0;
var userModel_1 = require("../model/userModel");
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email, password, url, userFind, fund, artCollection, newUser, users, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, userName = _a.userName, email = _a.email, password = _a.password, url = _a.url;
                return [4 /*yield*/, userModel_1["default"].find({ email: email })
                    //if no - it adds his name to mongo
                ];
            case 1:
                userFind = _b.sent();
                if (!(userFind.length > 0)) return [3 /*break*/, 2];
                res.send('Already registered in the past, please log in'); //needs to initiate pop up login
                return [3 /*break*/, 4];
            case 2:
                if (!(userFind.length === 0)) return [3 /*break*/, 4];
                fund = 20;
                artCollection = [];
                newUser = new userModel_1["default"]({ userName: userName, email: email, password: password, url: url, fund: fund, artCollection: artCollection });
                return [4 /*yield*/, newUser.save()];
            case 3:
                users = _b.sent();
                res.send({ ok: true, users: users });
                _b.label = 4;
            case 4:
                if (!req.body)
                    throw new Error("no req.body in app.post'/users/add-user'");
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error(error_1.message);
                res.send({ error: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.findUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, loginEmail, loginPassword, oldUser, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, loginEmail = _a.loginEmail, loginPassword = _a.loginPassword;
                return [4 /*yield*/, userModel_1["default"].find({ email: loginEmail, password: loginPassword })];
            case 1:
                oldUser = _b.sent();
                if (oldUser.length === 0) {
                    res.send('Wrong email/password');
                }
                else if (oldUser.length > 0) {
                    res.send({ oldUser: oldUser });
                }
                if (!req.body)
                    throw new Error("no req.body in app.post'/users/log-user'");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2.message);
                res.send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body.user;
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: user._id }, user)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.addArtToUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newArt, user, r;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, newArt = _a.newArt, user = _a.user;
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: user._id }, {
                        $push: { artCollection: newArt }
                    })];
            case 1:
                r = _b.sent();
                console.log(r);
                return [2 /*return*/];
        }
    });
}); };
