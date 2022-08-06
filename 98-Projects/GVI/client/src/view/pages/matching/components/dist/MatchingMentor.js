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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
function loopHndred() {
    return (__spreadArrays(Array(101)).map(function (something, i) {
        return react_1["default"].createElement("option", { value: i, key: i },
            " stage  ",
            i);
    }));
}
function handleMatch(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, i, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    for (_i = 0, _a = ev.target; _i < _a.length; _i++) {
                        i = _a[_i];
                        match[i.name] = i.value; // name : value 
                    }
                    console.log(match); // get the write elements 
                    return [4 /*yield*/, axios_1["default"].post("/api/matching/select-mentors", { match: match })];
                case 1:
                    data = (_b.sent()).data;
                    if (data === [])
                        throw new Error('we dont have a match for your choices');
                    if (data.ok) {
                        console.log('your match according to your choices ', data.matchings);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var match = {};
var MatchingMentor = function () {
    return (react_1["default"].createElement("form", { onSubmit: handleMatch },
        react_1["default"].createElement("div", { className: 'matching' },
            react_1["default"].createElement("div", { className: 'matching--wrapper' },
                react_1["default"].createElement("h1", null, "Mentor Matching"),
                react_1["default"].createElement("p", null, "First , you are In"),
                react_1["default"].createElement("select", { className: 'matching__btn', name: "stage", required: true },
                    react_1["default"].createElement("option", { value: "100 tasks stage", disabled: true }, "100 tasks stage"),
                    (loopHndred)()),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("h3", null, "Find a GVI Mentor"),
                react_1["default"].createElement("select", { className: 'matching__btn', name: "mentor", required: true },
                    react_1["default"].createElement("option", { value: "sector", disabled: true }, "sector"),
                    react_1["default"].createElement("option", { value: "education" }, "education "),
                    react_1["default"].createElement("option", { value: "digital health" }, "digital-health "),
                    react_1["default"].createElement("option", { value: "buisness" }, "buisness ")),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("select", { className: 'matching__btn', name: "speciality", required: true },
                    react_1["default"].createElement("option", { value: "speciality", disabled: true }, "speciality"),
                    react_1["default"].createElement("option", { value: "gaming" }, "gaming")),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("button", { type: "submit", className: 'matching__btn' }, "Match")))));
};
exports["default"] = MatchingMentor;
