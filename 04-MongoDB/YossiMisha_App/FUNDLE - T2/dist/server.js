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
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var wordsDictionary = require('./dictionary.json');
var app = express_1["default"]();
var port = process.env.PORT || 5000;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
mongoose_1["default"].connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// function shuffleDictionary(wordsDictionary){
//   let R = Math.floor(Math.random() * wordsDictionary.length)
//   let X = wordsDictionary[R]
//   let Y = 
//   wordsDictionary[] = 
// }
shuffleDictionary(wordsDictionary);
function shuffleDictionary(Dictionary) {
    for (var i = 0; i < Dictionary.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = Dictionary[i];
        Dictionary[i] = Dictionary[j];
        Dictionary[j] = temp;
    }
}
var UserSchema = new mongoose_1["default"].Schema({
    username: String,
    password: String,
    email: String,
    played: Number,
    wins: Number,
    current_strike: Number,
    max_strike: Number
});
var WordSchema = new mongoose_1["default"].Schema({
    word: String,
    wordNumber: Number
});
var FundleWord = mongoose_1["default"].model('FundleWords', WordSchema);
var FundleUser = mongoose_1["default"].model('FundleUsers', UserSchema);
addToDB();
function addToDB() {
    return __awaiter(this, void 0, void 0, function () {
        var dictionaryTest, i, i, newWord, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, FundleWord.find({ wordNumber: 1 })];
                case 1:
                    dictionaryTest = _a.sent();
                    if (!(dictionaryTest.length > 0)) return [3 /*break*/, 2];
                    console.log('ok');
                    i = 0;
                    return [3 /*break*/, 6];
                case 2:
                    console.log('null');
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < wordsDictionary.length)) return [3 /*break*/, 6];
                    newWord = new FundleWord({ word: wordsDictionary[i], wordNumber: i });
                    return [4 /*yield*/, newWord.save()];
                case 4:
                    result = _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
app.post("/add-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, email, played, wins, current_strike, max_strike, newFundleUser, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, email = _a.email;
                played = 0;
                wins = 0;
                current_strike = 0;
                max_strike = 0;
                newFundleUser = new FundleUser({ username: username, password: password, email: email, played: played, wins: wins, current_strike: current_strike, max_strike: max_strike });
                return [4 /*yield*/, newFundleUser.save()];
            case 1:
                result = _b.sent();
                console.log(result);
                res.send({ result: result });
                return [2 /*return*/];
        }
    });
}); });
app.post("/add-word", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
app.get("/get-word", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dayOffset, dailyWord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dayOffset = req.query.dayOffset;
                console.log(dayOffset);
                return [4 /*yield*/, FundleWord.find({ wordNumber: dayOffset })];
            case 1:
                dailyWord = _a.sent();
                res.send(dailyWord);
                return [2 /*return*/];
        }
    });
}); });
app.get("/get-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, userMatch, noPass;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, username = _a.username, password = _a.password;
                console.log(username, password);
                return [4 /*yield*/, FundleUser.find({ username: username, password: password })];
            case 1:
                userMatch = _b.sent();
                console.log(userMatch);
                if (!userMatch) return [3 /*break*/, 2];
                res.send({ user: userMatch });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, FundleUser.find({ username: username })];
            case 3:
                noPass = _b.sent();
                if (noPass) {
                    res.send("password doesn't match");
                }
                else {
                    res.send("username doesn't exist");
                }
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
