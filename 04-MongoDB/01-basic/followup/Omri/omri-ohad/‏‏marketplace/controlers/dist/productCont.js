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
exports.login = exports.register = exports.sortDescending = exports.sortAscending = exports.filterByCategory = exports.deleteProduct = exports.updatePrice = exports.updateTitle = exports.updatePic = exports.addProduct = exports.getAllProducts = exports.getProductsMain = void 0;
var userProductsModel_1 = require("../model/userProductsModel");
var productMain_1 = require("../model/productMain");
var userModel_1 = require("../model/userModel");
function getProductsMain(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var marketItems, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 1:
                    marketItems = _a.sent();
                    res.send({ ok: true, marketItems: marketItems });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1.error);
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProductsMain = getProductsMain;
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, ownerId_1, products, filterdProducts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = req.cookies.data;
                    ownerId_1 = data.id;
                    return [4 /*yield*/, userProductsModel_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    filterdProducts = products.filter(function (product) { return product.ownerId === ownerId_1; });
                    res.send({ filterdProducts: filterdProducts });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2.error);
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllProducts = getAllProducts;
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, ownerId, _a, pic, title, description, price, category, newProduct, result, itemId, newProductMarket, resultMarket, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    data = req.cookies.data;
                    ownerId = data.id;
                    _a = req.body, pic = _a.pic, title = _a.title, description = _a.description, price = _a.price, category = _a.category;
                    newProduct = new userProductsModel_1["default"]({ pic: pic, title: title, description: description, price: price, category: category, ownerId: ownerId });
                    return [4 /*yield*/, newProduct.save()];
                case 1:
                    result = _b.sent();
                    itemId = newProduct._id;
                    newProductMarket = new productMain_1["default"]({ pic: pic, title: title, description: description, price: price, category: category, ownerId: ownerId, itemId: itemId });
                    return [4 /*yield*/, newProductMarket.save()];
                case 2:
                    resultMarket = _b.sent();
                    res.send({ result: result });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    console.error(error_3);
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.addProduct = addProduct;
function updatePic(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId, newImg, result, resultMarket, products, productsMarket, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    productId = req.body.gameId;
                    newImg = req.body.newImg;
                    if (!{ productId: productId }) return [3 /*break*/, 5];
                    return [4 /*yield*/, userProductsModel_1["default"].updateOne({ _id: productId }, { pic: newImg })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].updateOne({ ownerId: productId }, { pic: newImg })];
                case 2:
                    resultMarket = _a.sent();
                    return [4 /*yield*/, userProductsModel_1["default"].find({})];
                case 3:
                    products = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 4:
                    productsMarket = _a.sent();
                    res.send({ ok: true, result: result, products: products });
                    return [3 /*break*/, 6];
                case 5: throw new Error("Something went wrong");
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.send({ error: error_4.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.updatePic = updatePic;
function updateTitle(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId, newTitle, result, resultMarket, products, productsMarket, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    productId = req.body.gameId;
                    newTitle = req.body.newTitle;
                    if (!{ productId: productId }) return [3 /*break*/, 5];
                    return [4 /*yield*/, userProductsModel_1["default"].updateOne({ _id: productId }, { title: newTitle })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].updateOne({ ownerId: productId }, { title: newTitle })];
                case 2:
                    resultMarket = _a.sent();
                    return [4 /*yield*/, userProductsModel_1["default"].find({})];
                case 3:
                    products = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 4:
                    productsMarket = _a.sent();
                    res.send({ ok: true, result: result, products: products });
                    return [3 /*break*/, 6];
                case 5: throw new Error("Something went wrong");
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.send({ error: error_5.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.updateTitle = updateTitle;
function updatePrice(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId, newPrice, result, resultMarket, products, productsMarket, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    productId = req.body.gameId;
                    newPrice = req.body.newPrice;
                    if (!{ productId: productId }) return [3 /*break*/, 5];
                    return [4 /*yield*/, userProductsModel_1["default"].updateOne({ _id: productId }, { price: newPrice })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].updateOne({ ownerId: productId }, { price: newPrice })];
                case 2:
                    resultMarket = _a.sent();
                    return [4 /*yield*/, userProductsModel_1["default"].find({})];
                case 3:
                    products = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 4:
                    productsMarket = _a.sent();
                    res.send({ ok: true, result: result, products: products });
                    return [3 /*break*/, 6];
                case 5: throw new Error("Something went wrong");
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_6 = _a.sent();
                    console.error(error_6);
                    res.send({ error: error_6.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.updatePrice = updatePrice;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, itemId, result, products, productsMarket, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    data = req.cookies.data;
                    itemId = req.body.itemId;
                    console.log(itemId);
                    if (!itemId) return [3 /*break*/, 4];
                    return [4 /*yield*/, userProductsModel_1["default"].deleteOne({ itemId: itemId })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, userProductsModel_1["default"].find({})];
                case 2:
                    products = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 3:
                    productsMarket = _a.sent();
                    res.send({ ok: true, productsMarket: productsMarket, products: products });
                    return [3 /*break*/, 5];
                case 4: throw new Error('product ID is missing');
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_7 = _a.sent();
                    console.error(error_7);
                    res.send({ error: error_7.message });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.deleteProduct = deleteProduct;
function filterByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var chosenCategory_1, products, filterd, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    chosenCategory_1 = req.body.chosenCategory;
                    if (!chosenCategory_1) return [3 /*break*/, 2];
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    if (chosenCategory_1 === "Show All") {
                        res.send({ products: products });
                    }
                    else {
                        filterd = products.filter(function (product) { return chosenCategory_1 === product.category; });
                        res.send({ ok: true, filterd: filterd });
                    }
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    res.send({ error: error_8.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.filterByCategory = filterByCategory;
function sortAscending(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var products, filterd, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    filterd = products.sort(function (a, b) { return (a.price - b.price); });
                    res.send({ ok: true, filterd: filterd });
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.error(error_9);
                    res.send({ error: error_9.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.sortAscending = sortAscending;
function sortDescending(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var products, filterd, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    filterd = products.sort(function (a, b) { return (b.price - a.price); });
                    res.send({ ok: true, filterd: filterd });
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _a.sent();
                    console.error(error_10);
                    res.send({ error: error_10.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.sortDescending = sortDescending;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userName, user, result, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password, userName = _a.userName;
                    user = new userModel_1["default"]({ email: email, password: password, userName: userName, login: false });
                    return [4 /*yield*/, user.save()];
                case 1:
                    result = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _b.sent();
                    console.error(error_11);
                    res.send({ error: error_11.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, products, error_12;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!(typeof email === 'string' && typeof password === 'string')) return [3 /*break*/, 3];
                    return [4 /*yield*/, userModel_1["default"].findOne({ email: email })];
                case 1:
                    user = _b.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 2:
                    products = _b.sent();
                    if (user) {
                        if (user.password === password) {
                            res.cookie("data", { id: user._id, userName: user.userName });
                            res.send({ ok: true, login: true, userName: user.userName, products: products });
                            return [2 /*return*/];
                        }
                        else {
                            res.send({ ok: false, products: products });
                        }
                    }
                    return [3 /*break*/, 4];
                case 3: throw new Error("Email or password are missing");
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_12 = _b.sent();
                    console.log(error_12.message);
                    res.send({ error: error_12.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
