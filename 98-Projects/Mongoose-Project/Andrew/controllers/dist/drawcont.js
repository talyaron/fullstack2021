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
exports.getRoomDrawings = exports.deleteAvatar = exports.setUserAvatar = exports.getUserDrawings = exports.addDrawing = void 0;
var jwt_simple_1 = require("jwt-simple");
var buffer_1 = require("buffer");
var drawModel_1 = require("../model/drawModel");
var userModel_1 = require("../model/userModel");
var secret = process.env.JWT_SECRET;
exports.addDrawing = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, userInfo, drawing;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                secret = process.env.JWT_SECRET;
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                drawing = new drawModel_1["default"](req.body);
                drawing.ownerId = userInfo.userId;
                drawing.ownerName = userInfo.username;
                if (!drawing.type) {
                    drawing.type = 'avatar';
                }
                return [4 /*yield*/, drawing.save()];
            case 1:
                _a.sent();
                res.send({ ok: true });
                return [2 /*return*/];
        }
    });
}); };
exports.getUserDrawings = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, userInfo, avatars;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                secret = process.env.JWT_SECRET;
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                return [4 /*yield*/, drawModel_1["default"].find({ $or: [{ ownerId: userInfo.userId, type: 'avatar' }, { ownerId: userInfo.userId, type: 'currentAvatar' }] })];
            case 1:
                avatars = _a.sent();
                avatars = BSONtoString(avatars);
                res.send({ avatars: avatars, user: userInfo.username });
                return [2 /*return*/];
        }
    });
}); };
exports.setUserAvatar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                id = req.body.id;
                return [4 /*yield*/, drawModel_1["default"].findOneAndUpdate({ ownerId: userInfo.userId, type: "currentAvatar" }, { type: "avatar" })];
            case 1:
                _a.sent();
                return [4 /*yield*/, drawModel_1["default"].findOneAndUpdate({ _id: id }, { type: "currentAvatar" })];
            case 2:
                _a.sent();
                res.send({ ok: true });
                return [2 /*return*/];
        }
    });
}); };
exports.deleteAvatar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                return [4 /*yield*/, drawModel_1["default"].findOneAndDelete({ _id: id })];
            case 1:
                _a.sent();
                res.send({ ok: true });
                return [2 /*return*/];
        }
    });
}); };
exports.getRoomDrawings = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var roomCode, userInfo, drawings, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roomCode = req.query.roomCode;
                userInfo = req.cookies.userInfo;
                userInfo = jwt_simple_1["default"].decode(userInfo, secret);
                return [4 /*yield*/, drawModel_1["default"].find({ type: roomCode })];
            case 1:
                drawings = _a.sent();
                return [4 /*yield*/, userModel_1["default"].find({ _id: userInfo.userId })];
            case 2:
                user = _a.sent();
                drawings = BSONtoString(drawings);
                res.send({ drawings: drawings, id: userInfo.userId, answer: user.word });
                return [2 /*return*/];
        }
    });
}); };
function BSONtoString(arr) {
    arr.forEach(function (img) {
        if (img.imgData) {
            img.dataURL = 'data:image/jpeg;base64,' + buffer_1.Buffer.from(img.imgData).toString();
            img.imgData = 0;
        }
    });
    return arr;
}
