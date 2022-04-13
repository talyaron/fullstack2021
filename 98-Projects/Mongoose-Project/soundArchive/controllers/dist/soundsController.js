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
exports.search = exports.upload = void 0;
var soundsModel_1 = require("../model/soundsModel");
var soundsModel_2 = require("../model/soundsModel");
exports.upload = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, type, location, description, duration, file, newSong, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, type = _a.type, location = _a.location, description = _a.description, duration = _a.duration, file = _a.file;
                newSong = new soundsModel_1.sounds({ title: title, type: type, location: location, description: description, duration: duration, file: file });
                console.log(newSong);
                return [4 /*yield*/, newSong.save()];
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
exports.search = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, searching, foundSearch, newSearch, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                searchTerm = req.query.searchTerm;
                searching = req.query.searching;
                return [4 /*yield*/, soundsModel_1.sounds.find({ title: searchTerm })
                    // const {hello} = searchTerm;
                    // console.log(hello);
                    // , type, location, description, duration, file 
                    // const { hello} = req.body;
                ];
            case 1:
                foundSearch = _a.sent();
                newSearch = new soundsModel_2.searches({ foundSearch: searching });
                console.log(newSearch);
                if (!newSearch) return [3 /*break*/, 3];
                return [4 /*yield*/, newSearch.save()];
            case 2:
                result = _a.sent();
                console.log(searchTerm);
                console.log({ foundSearch: foundSearch });
                res.send({ searchTerm: searchTerm, foundSearch: foundSearch, result: result });
                return [2 /*return*/];
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
