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
exports.decodeAdmin = exports.isAdmin = exports.userInputEvent = void 0;
var jwt_simple_1 = require("jwt-simple");
var swimModels_1 = require("../models/swimModels");
var secert = process.env.JWT_SECRET;
exports.userInputEvent = function (req, res, next) {
    try {
        var _a = req.body, userName = _a.userName, password = _a.password;
        req.name = userName;
        req.password = password;
        if (!req.name || !req.password)
            throw new Error("no name or password in req.body in userInputEvent middleware");
        console.log('swimer in middware is: ', req.name + " " + req.password);
        next();
    }
    catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
        next();
    }
};
function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userName, password, result, payload, token;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, userName = _a.userName, password = _a.password;
                    return [4 /*yield*/, swimModels_1["default"].findOne({ userName: userName, password: password })];
                case 1:
                    result = _b.sent();
                    if (result) {
                        console.log(result.userName);
                        if (result.userName === userName) {
                            if (result.role === 'admin') {
                                payload = { name: userName, password: password, role: result.role };
                                token = jwt_simple_1["default"].encode(payload, secert);
                                res.cookie('swimers', token, { maxAge: 180000, httpOnly: true });
                                next();
                            }
                        }
                        else {
                            res.send({ error: 'name or password are not found in login' });
                        }
                    }
                    else {
                        res.send({ error: 'name or password are not found in login' });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.isAdmin = isAdmin;
exports.decodeAdmin = function (req, res, next) {
    var swimers = req.cookies.swimers;
    var decoded = jwt_simple_1["default"].decode(swimers, secert);
    var name = decoded.name, role = decoded.role, password = decoded.password;
    if (role === 'admin') {
        req.name = decoded.name;
        req.password = decoded.password;
        req.role === 'admin';
        next();
    }
};
