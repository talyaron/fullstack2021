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
exports.handleDelete = exports.handleSort = exports.handleUpdateBook = exports.handleAddBook = exports.handleGetAllBooks = void 0;
var bookModel_1 = require("../models/bookModel");
exports.handleGetAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bookModel_1.Book.find({})
                // console.log(books);
            ];
            case 1:
                books = _a.sent();
                // console.log(books);
                res.send(books);
                return [2 /*return*/];
        }
    });
}); };
exports.handleAddBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var book, newBook, books, error_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                book = req.body.book;
                if (!book) return [3 /*break*/, 6];
                newBook = new bookModel_1.Book(book);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, newBook.save()];
            case 2:
                _a.sent();
                return [4 /*yield*/, bookModel_1.Book.find({})];
            case 3:
                books = _a.sent();
                res.send(books); //N render it 
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1.message);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6: throw new Error("book is und");
            case 7: return [3 /*break*/, 9];
            case 8:
                error_2 = _a.sent();
                console.error(res.send(error_2.message));
                res.send(error_2.message);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.handleUpdateBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, value, bookId, books, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, value = _a.value, bookId = _a.bookId;
                if (!(value && bookId)) return [3 /*break*/, 2];
                return [4 /*yield*/, bookModel_1.Book.updateOne({ id: bookId }, { username: value })];
            case 1:
                books = _b.sent();
                console.log(books);
                res.send({ ok: true }, books);
                return [3 /*break*/, 3];
            case 2: throw new Error('id or value is missing');
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.log(error_3.error);
                res.send({ error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handleSort = function (req, res) {
    // try {
    //   let { value } = req.body;
    //   if (value) {
    //     if (value === "descent") {
    //       booksSite.sortDes();
    //       res.send({ ok: true, booksSite })
    //     }
    //     else {
    //       booksSite.sortAsc();
    //       res.send({ ok: true, booksSite })
    //     }
    //   }
    // } catch (error) {
    //   res.send({ error })
    // }
};
exports.handleDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, bookId, id, books, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, bookId = _a.bookId, id = _a.id;
                console.log(bookId, id);
                return [4 /*yield*/, bookModel_1.Book.deleteOne({ id: bookId })];
            case 1:
                books = _b.sent();
                console.log(books);
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.send(error_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
