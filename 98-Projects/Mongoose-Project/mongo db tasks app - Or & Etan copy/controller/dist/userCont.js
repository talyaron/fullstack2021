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
exports.updateUser = exports.passwordCheck = exports.renderPage = exports.renderUser = exports.login = exports.addUser = void 0;
var userModel_1 = require("../model/userModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, password, role, gender, aUser, newUser, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, role = _a.role, gender = _a.gender;
                if (!(firstName && lastName && email && password && role && gender)) return [3 /*break*/, 4];
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email })];
            case 1:
                aUser = _b.sent();
                if (!!aUser) return [3 /*break*/, 3];
                newUser = new userModel_1["default"]({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    role: role,
                    gender: gender
                });
                return [4 /*yield*/, newUser.save()];
            case 2:
                result = _b.sent();
                res.send({ result: result });
                return [2 /*return*/];
            case 3:
                res.send({ aUser: aUser });
                return [3 /*break*/, 5];
            case 4: throw new Error("You've missed something");
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, currentLogin, userEmail, userVerification, verifiedUser, userId, userRole, payload, information, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                return [4 /*yield*/, userModel_1["default"]
                        .findOne({ email: email })
                        .collation({ locale: "en_US", strength: 1 })];
            case 2:
                currentLogin = _b.sent();
                if (!currentLogin) return [3 /*break*/, 7];
                return [4 /*yield*/, currentLogin.email];
            case 3:
                userEmail = _b.sent();
                return [4 /*yield*/, userModel_1["default"].findOne({
                        email: userEmail,
                        password: password
                    })];
            case 4:
                userVerification = _b.sent();
                if (!userVerification) return [3 /*break*/, 6];
                return [4 /*yield*/, userModel_1["default"].find({
                        email: userEmail,
                        password: password
                    })];
            case 5:
                verifiedUser = _b.sent();
                if (verifiedUser.length === 1) {
                    userId = userVerification._id.toString();
                    userRole = userVerification.role;
                    payload = { userId: userId, userRole: userRole };
                    information = jwt_simple_1["default"].encode(payload, secret);
                    res.cookie("currentUser", information, {});
                    res.send({ ok: true, currentLogin: currentLogin, verifiedUser: verifiedUser, userId: userId });
                    return [2 /*return*/];
                }
                res.send({ aUser: true });
                return [2 /*return*/];
            case 6:
                res.send({ aUser: true });
                return [3 /*break*/, 8];
            case 7:
                res.send({ aUser: false });
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _b.sent();
                console.log("error in login:");
                console.log(error_2.message);
                res.send({ error: error_2.message });
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.renderUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentUser, decoded, userId, userRole, userInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.cookies.currentUser;
                decoded = jwt_simple_1["default"].decode(currentUser, secret);
                userId = decoded.userId, userRole = decoded.userRole;
                return [4 /*yield*/, userModel_1["default"].find({ _id: userId })];
            case 1:
                userInfo = _a.sent();
                res.send({ userInfo: userInfo, decoded: decoded });
                return [2 /*return*/];
        }
    });
}); };
exports.renderPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userURL, requestedPage, appURL, userId, currentUser, newURL, _b, firstName, lastName, gender, role, email, password;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, userURL = _a.userURL, requestedPage = _a.requestedPage;
                appURL = userURL.split("/")[2];
                userId = userURL.slice(-24);
                return [4 /*yield*/, userModel_1["default"].find({ _id: userId })];
            case 1:
                currentUser = _c.sent();
                newURL = "/" + requestedPage + ".html?id=" + userId;
                _b = currentUser[0], firstName = _b.firstName, lastName = _b.lastName, gender = _b.gender, role = _b.role, email = _b.email, password = _b.password;
                if (requestedPage === "home") {
                    try {
                        res.send({
                            firstName: firstName,
                            lastName: lastName,
                            gender: gender,
                            role: role,
                            newURL: newURL
                        });
                    }
                    catch (error) {
                        console.log("error in renderPage: home");
                        console.log(error.message);
                        res.send({ error: error.message });
                        // }
                    }
                    return [2 /*return*/];
                }
                if (requestedPage === "settings") {
                    try {
                        res.send({
                            firstName: firstName,
                            lastName: lastName,
                            gender: gender,
                            role: role,
                            email: email,
                            password: password,
                            newURL: newURL
                        });
                    }
                    catch (error) {
                        console.log("error in renderPage: settings");
                        console.log(error.message);
                        res.send({ error: error.message });
                        // }
                    }
                    return [2 /*return*/];
                }
                if (requestedPage === "info") {
                    try {
                        res.send({
                            newURL: newURL
                        });
                    }
                    catch (error) {
                        console.log("error in renderPage: info");
                        console.log(error.message);
                        res.send({ error: error.message });
                        // }
                    }
                    return [2 /*return*/];
                }
                if (requestedPage === "RecentlyCreated") {
                    try {
                        res.send({
                            newURL: newURL
                        });
                    }
                    catch (error) {
                        console.log("error in renderPage: RecentlyCreated");
                        console.log(error.message);
                        res.send({ error: error.message });
                        // }
                    }
                    return [2 /*return*/];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.passwordCheck = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, password, userId, isRightPassword, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, password = _a.password, userId = _a.userId;
                return [4 /*yield*/, userModel_1["default"].find({
                        _id: userId,
                        password: password
                    })];
            case 1:
                isRightPassword = _b.sent();
                res.send({ isRightPassword: isRightPassword });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.log("error in renderPage: RecentlyCreated");
                console.log(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstNameUpdate, lastNameUpdate, emailUpdate, genderUpdate, roleUpdate, passwordUpdate, passwordConfirmation, userId, updateUser_1, updateStatus, updatedUser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, firstNameUpdate = _a.firstNameUpdate, lastNameUpdate = _a.lastNameUpdate, emailUpdate = _a.emailUpdate, genderUpdate = _a.genderUpdate, roleUpdate = _a.roleUpdate, passwordUpdate = _a.passwordUpdate, passwordConfirmation = _a.passwordConfirmation, userId = _a.userId;
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: userId, password: passwordConfirmation }, {
                        firstName: firstNameUpdate,
                        lastName: lastNameUpdate,
                        email: emailUpdate,
                        gender: genderUpdate,
                        role: roleUpdate,
                        password: passwordUpdate
                    })];
            case 1:
                updateUser_1 = _b.sent();
                return [4 /*yield*/, updateUser_1.matchedCount];
            case 2:
                updateStatus = _b.sent();
                if (!(updateStatus === 1)) return [3 /*break*/, 4];
                return [4 /*yield*/, userModel_1["default"].find({ _id: userId })];
            case 3:
                updatedUser = _b.sent();
                res.send({ updatedUser: updatedUser });
                return [2 /*return*/];
            case 4:
                if (updateStatus === 0) {
                    res.send({ updateStatus: updateStatus });
                }
                return [3 /*break*/, 6];
            case 5:
                error_4 = _b.sent();
                console.log("error in updateUser");
                console.log(error_4.message);
                res.send({ error: error_4.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
