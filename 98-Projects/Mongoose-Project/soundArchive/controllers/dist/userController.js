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
exports.getAllUsers = exports.logIn = exports.register = void 0;
var userModel_1 = require("../model/userModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, newUser, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, password = _a.password;
                newUser = new userModel_1["default"]({ name: name, password: password });
                console.log(newUser);
                return [4 /*yield*/, newUser.save()];
            case 1:
                result = _b.sent();
                res.send({ result: result });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, user1, payload, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, name = _a.name, password = _a.password;
                console.log(name, password);
                if (!(typeof name === "string" && typeof password === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1["default"].findOne({ name: name })];
            case 1:
                user1 = _b.sent();
                if (user1) {
                    if (user1.password === password) {
                        payload = { name: name, id: user1._id, role: user1.role };
                        token = jwt_simple_1["default"].encode(payload, secret);
                        res.cookie("userInfo", token, { maxAge: 120000 });
                        res.send({ ok: true, login: true });
                        return [2 /*return*/];
                    }
                }
                throw new Error("username or password are inncorect");
            case 2: throw new Error("user name or password are missing or role is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userInfo, secret_1, decode, user1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(req.cookies);
                    userInfo = req.cookies.userInfo;
                    secret_1 = "12345";
                    decode = jwt_simple_1["default"].decode(userInfo, secret_1);
                    console.log(decode);
                    if (!(decode && decode.role === "admin")) return [3 /*break*/, 2];
                    return [4 /*yield*/, userModel_1["default"].find({})];
                case 1:
                    user1 = _a.sent();
                    res.send({ ok: true, user1: user1 });
                    return [2 /*return*/];
                case 2: throw new Error("user is not allowed");
                case 3:
                    error_3 = _a.sent();
                    console.log("Error on getAllUsers:", error_3.message);
                    res.send({ error: error_3.message });
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getAllUsers = getAllUsers;
