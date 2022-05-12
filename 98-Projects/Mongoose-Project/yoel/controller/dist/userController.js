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
exports.handleSign = exports.handleReg = exports.handleAddUser = void 0;
var userModel_1 = require("../models/userModel");
var secret = process.env.JWT_SECRET; // 24/4/2022
// export const handleGetUsers = async (req, res) => {
//   let name = req.query;
//   const { userInfo } = req.cookies//deconstractor // it's also important to add securety /24/4/2022
//   const users = await User.find({});
//   res.send({ users, name , userInfo })
// }
exports.handleAddUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, newUser, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, username = _a.username, password = _a.password;
                if (!(username && password)) return [3 /*break*/, 2];
                newUser = new userModel_1.User({ username: username, password: password });
                return [4 /*yield*/, newUser.save()];
            case 1:
                result = _b.sent();
                res.send({ result: result, ok: true });
                return [3 /*break*/, 3];
            case 2: throw new Error("username or password are unfedined");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(res.send(error_1.message));
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handleReg = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, users, payload, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = req.body, username = _a.username, password = _a.password;
                if (!(username && password)) return [3 /*break*/, 5];
                return [4 /*yield*/, userModel_1.User.find({ username: username })]; // not work
            case 1:
                user = _b.sent() // not work
                ;
                if (!(user.length > 0)) return [3 /*break*/, 2];
                res.send({ error: 'user existed' });
                return [3 /*break*/, 4];
            case 2:
                users = new userModel_1.User({ username: username, password: password });
                return [4 /*yield*/, users.save()];
            case 3:
                _b.sent();
                payload = users;
                // const token = jwt.encode(payload, secret)
                res.cookie('userInfo ', users, { maxAge: 800000, httpOnly: true });
                res.send({ users: users, ok: true });
                return [2 /*return*/];
            case 4: return [3 /*break*/, 6];
            case 5: throw new Error("username or password is und");
            case 6: return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                res.send(error_2.message);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.handleSign = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, username = _a.username, password = _a.password;
                if (!(username && password)) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1.User.findOne({ username: username })
                    // he will locking for username in the MongoDB that have the same username that we send to him 
                    //and he will return the "ALL" "object" 
                ]; //what is the different (find//findone ) // ask Katya //25/4/2022
            case 1:
                user = _b.sent() //what is the different (find//findone ) // ask Katya //25/4/2022
                ;
                // he will locking for username in the MongoDB that have the same username that we send to him 
                //and he will return the "ALL" "object" 
                if (user) {
                    if (user.password === password) {
                        // const payload = { user };//24/4/2022 
                        //24/4/2022 //only with them we can change in the JWT
                        //  const token = jwt.encode(payload, secret)//24/4/2022 // we encode our code "hide"
                        res.cookie('userInfo', user, { maxAge: 70000000, httpOnly: true }); //24/4/2022 
                        res.send({ ok: true, user: user });
                        return [2 /*return*/];
                    }
                }
                else {
                    res.send({ error: 'user not exist' });
                }
                return [3 /*break*/, 3];
            case 2: throw new Error("username or password is und");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                res.send(error_3.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
