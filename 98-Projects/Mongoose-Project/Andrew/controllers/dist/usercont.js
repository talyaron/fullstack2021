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
exports.addPoints = exports.getLies = exports.addLie = exports.addUserToRoom = exports.logUser = exports.addUser = void 0;
var bcrypt_1 = require("bcrypt");
var userModel_1 = require("../model/userModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
// export const updateUser = async (req, res) => {
//     const { user } = req.body;
//     await User.updateOne({ _id: user._id }, user);
// }
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, salt, _a, existing, r;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                newUser = new userModel_1["default"](req.body);
                return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
            case 1:
                salt = _b.sent();
                _a = newUser;
                return [4 /*yield*/, bcrypt_1["default"].hash(newUser.password, salt)];
            case 2:
                _a.password = _b.sent();
                return [4 /*yield*/, userModel_1["default"].find({ $or: [{ username: newUser.username }, { email: newUser.email }] }, 'username')];
            case 3:
                existing = _b.sent();
                if (!!existing.length) return [3 /*break*/, 5];
                return [4 /*yield*/, newUser.save()];
            case 4:
                r = _b.sent();
                if (newUser == r)
                    res.send({ result: 'user created' });
                else
                    res.send({ result: 'DB error' });
                return [3 /*break*/, 6];
            case 5:
                if (existing[0].username == newUser.username)
                    res.send({ result: 'username already exists' });
                else
                    res.send({ result: 'email already exists' });
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.logUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, user, v, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.body;
                return [4 /*yield*/, userModel_1["default"].findOne({ email: params.email })];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt_1["default"].compare(params.password, user.password)];
            case 2:
                v = _a.sent();
                if (v) {
                    token = setUserCookie(user);
                    res.cookie("userInfo", token, { maxAge: 3600000 });
                    res.send({ result: 'authorized' });
                }
                else
                    res.send({ result: 'wrong password' });
                return [3 /*break*/, 4];
            case 3:
                res.send({ result: 'user not found' });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addUserToRoom = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var roomId, userInfo, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roomId = req.body.roomId;
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate({ _id: userInfo.userId }, { inRoom: roomId })];
            case 1:
                user = _a.sent();
                res.send({ pk: true });
                return [2 /*return*/];
        }
    });
}); };
exports.addLie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lie, userInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lie = req.body.lie;
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate({ _id: userInfo.userId }, { lie: lie })];
            case 1:
                _a.sent();
                res.send({ ok: true });
                return [2 /*return*/];
        }
    });
}); };
exports.getLies = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var roomId, users, lies, _i, users_1, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roomId = req.query.roomId;
                return [4 /*yield*/, userModel_1["default"].find({ inRoom: roomId })];
            case 1:
                users = _a.sent();
                lies = [];
                for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                    user = users_1[_i];
                    lies.push(user.lie);
                }
                res.send(lies);
                return [2 /*return*/];
        }
    });
}); };
exports.addPoints = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, lie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                lie = req.body.lie;
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate({ _id: userInfo.userId }, { $inc: { points: 1000 } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate({ word: lie }, { $inc: { points: 1000 } })];
            case 2:
                _a.sent();
                res.send({ ok: true });
                return [2 /*return*/];
        }
    });
}); };
function setUserCookie(user) {
    var payload = { username: user.username, userId: user._id };
    var token = jwt_simple_1["default"].encode(payload, secret);
    return token;
}
