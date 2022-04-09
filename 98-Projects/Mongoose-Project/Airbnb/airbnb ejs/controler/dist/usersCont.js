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
exports.getUsers = exports.registerUser = exports.login = void 0;
var usersModel_1 = require("../model/usersModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, role, user, payload, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, username = _a.username, password = _a.password, role = _a.role;
                if (!(typeof username === "string" && typeof password === "string" && typeof role === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, usersModel_1["default"].findOne({ username: username, password: password, role: role })];
            case 1:
                user = _b.sent();
                if (user) {
                    if (user.password === password) {
                        payload = { username: username, id: user._id, role: role };
                        token = jwt_simple_1["default"].encode(payload, secret);
                        res.cookie('userInfo', token, { maxAge: 120000 });
                        if (user.role == "host" || user.role == "guest") {
                            res.render('index', {
                                title: "Airbnb",
                                user: user
                            });
                        }
                        else if (user.role == "admin") {
                            res.render('owner', {
                                title: "Owner",
                                user: user
                            });
                        }
                        return [2 /*return*/];
                    }
                }
                throw new Error('username or password or role are incorrect');
            case 2: throw new Error("username or password or role is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1.message);
                res.send({ error: error_1.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, role, newUser, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password, role = _a.role;
                if (!(typeof username === "string" && typeof password === "string" && typeof role === "string")) return [3 /*break*/, 2];
                newUser = new usersModel_1["default"]({ username: username, password: password, role: role });
                return [4 /*yield*/, newUser.save()];
            case 1:
                result = _b.sent();
                res.send({ ok: true, register: true });
                _b.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2.message);
                res.send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, decoded, users, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.log(req.cookies);
                userInfo = req.cookies.userInfo;
                decoded = jwt_simple_1["default"].decode(userInfo, secret);
                console.log(decoded);
                if (!(decoded && decoded.role === "admin")) return [3 /*break*/, 2];
                return [4 /*yield*/, usersModel_1["default"].find({})];
            case 1:
                users = _a.sent();
                res.send({ ok: true, users: users });
                res.render('owner', {
                    title: "Owner",
                    users: users
                });
                return [2 /*return*/];
            case 2: throw new Error("user is not allowed ");
            case 3:
                error_3 = _a.sent();
                console.error(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
