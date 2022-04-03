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
exports.getUsersImgs = exports.addPost = exports.updateProfilePiC = exports.addImages = exports.getImages = void 0;
var imagesModel_1 = require("../models/imagesModel");
exports.getImages = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                return [4 /*yield*/, imagesModel_1["default"].find({ email: email })];
            case 1:
                result = _a.sent();
                res.send({ ok: true, result: result });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.send({ error: err_1.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addImages = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, newImgs, userImgs, result, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                newImgs = { email: email, password: password, profileUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' };
                userImgs = new imagesModel_1["default"](newImgs);
                return [4 /*yield*/, userImgs.save()];
            case 1:
                result = _b.sent();
                res.send({ result: result });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                console.error(err_2);
                res.send({ error: err_2.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProfilePiC = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, newImg, images, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, newImg = _a.newImg;
                return [4 /*yield*/, imagesModel_1["default"].updateOne({ email: email }, { profileUrl: newImg })];
            case 1:
                images = _b.sent();
                res.send({ images: images, ok: true });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                console.error(err_3);
                res.send({ error: err_3.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, url, result, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, url = _a.url;
                return [4 /*yield*/, imagesModel_1["default"].updateOne({ email: email }, { $push: { url: url } })];
            case 1:
                result = _b.sent();
                if (email) {
                    res.send({ ok: true });
                }
                else
                    throw new Error("err");
                return [3 /*break*/, 3];
            case 2:
                err_4 = _b.sent();
                console.error(err_4);
                res.send({ error: err_4.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsersImgs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profileImgs_1, email_1, usersList, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profileImgs_1 = [];
                email_1 = req.body.email;
                return [4 /*yield*/, imagesModel_1["default"].find({})
                    //    console.log(usersList);
                ];
            case 1:
                usersList = _a.sent();
                //    console.log(usersList);
                usersList.forEach(function (user) {
                    if (user.email !== email_1) {
                        var img = user.profileUrl;
                        var userEmail = user.email;
                        profileImgs_1.push({ img: img, userEmail: userEmail });
                    }
                });
                console.log(profileImgs_1);
                if (email_1) {
                    res.send({ ok: true, profileImgs: profileImgs_1 });
                }
                else
                    throw new Error("cant get email in browse page");
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.error(err_5);
                res.send({ error: err_5.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
