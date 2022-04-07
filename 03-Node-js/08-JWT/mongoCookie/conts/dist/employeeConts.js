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
exports.getDecodedEmp = exports.getEmployees = exports.addEmployee = void 0;
var jwt_simple_1 = require("jwt-simple");
var employeeModels_1 = require("../models/employeeModels");
exports.addEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, email, newEmployee, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, password = _a.password, email = _a.email;
                newEmployee = new employeeModels_1["default"]({ name: name, password: password, email: email });
                return [4 /*yield*/, newEmployee.save()];
            case 1:
                result = _b.sent();
                res.cookie('addEmployee', { name: name, password: password, email: email }, { maxAge: 30000 });
                res.send({ ok: true, result: result });
                if (!req.body)
                    throw new Error("no req.bodt in addEmployee");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1.messeage);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function getEmployees(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var secret, _a, name, password, result, payload, token, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    secret = "tamirRs";
                    _a = req.body, name = _a.name, password = _a.password;
                    if (!(typeof name === 'string' && typeof password === 'string')) return [3 /*break*/, 2];
                    return [4 /*yield*/, employeeModels_1["default"].findOne({ name: name, password: password })];
                case 1:
                    result = _b.sent();
                    if (result) {
                        if (result.password === password) {
                            if (result.role === 'admin') {
                                payload = { name: name, id: result._id, role: result.role };
                                token = jwt_simple_1["default"].encode(payload, secret);
                                //const allEmployees = await Employee.find({})
                                res.cookie('adminEmployee', token, { maxAge: 30000 });
                                //res.send({ ok: true, allEmployees })
                                res.send({ ok: true, result: result });
                                return [2 /*return*/];
                            }
                            throw new Error("employee is not admin, therefor will not get all users in getEmployees");
                        }
                        throw new Error("password is not matched");
                    }
                    throw new Error("No employee found in getEmployees");
                case 2: throw new Error("Name || password are inncorect in getEmployees");
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getEmployees = getEmployees;
exports.getDecodedEmp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminEmployee, secret, decoded, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminEmployee = req.cookies.adminEmployee;
                secret = "tamirRs";
                decoded = jwt_simple_1["default"].decode(adminEmployee, secret);
                if (!(decoded && decoded.role === "admin")) return [3 /*break*/, 2];
                return [4 /*yield*/, employeeModels_1["default"].find({})];
            case 1:
                result = _a.sent();
                console.log(result);
                res.send({ ok: true, result: result });
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
