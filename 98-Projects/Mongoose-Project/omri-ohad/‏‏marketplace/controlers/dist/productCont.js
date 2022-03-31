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
exports.filterByCategory = exports.deleteProduct = exports.updateproduct = exports.addProduct = exports.getAllProducts = exports.getProductsMain = void 0;
var productModel_1 = require("../model/productModel");
var productMain_1 = require("../model/productMain");
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
        var products, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productModel_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    res.send({ products: products });
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
        var _a, pic, title, description, price, category, newProduct, result, ownerId, newProductMarket, resultMarket, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, pic = _a.pic, title = _a.title, description = _a.description, price = _a.price, category = _a.category;
                    newProduct = new productModel_1["default"]({ pic: pic, title: title, description: description, price: price, category: category });
                    return [4 /*yield*/, newProduct.save()];
                case 1:
                    result = _b.sent();
                    ownerId = newProduct._id;
                    newProductMarket = new productMain_1["default"]({ pic: pic, title: title, description: description, price: price, category: category, ownerId: ownerId });
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
function updateproduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId, newImg, newTitle, result, products, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    productId = req.body.gameId;
                    newImg = req.body.newImg;
                    newTitle = req.body.newTitle;
                    if (!{ productId: productId }) return [3 /*break*/, 3];
                    return [4 /*yield*/, productModel_1["default"].updateOne({ _id: productId }, { pic: newImg }, { title: newTitle })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, productModel_1["default"].find({})];
                case 2:
                    products = _a.sent();
                    res.send({ ok: true, result: result, products: products });
                    return [3 /*break*/, 4];
                case 3: throw new Error("Something went wrong");
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.send({ error: error_4.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updateproduct = updateproduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId, result, resultMarket, products, productsMarket, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    productId = req.body.productId;
                    if (!productId) return [3 /*break*/, 5];
                    return [4 /*yield*/, productModel_1["default"].deleteOne({ _id: productId })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].deleteOne({ ownerId: productId })];
                case 2:
                    resultMarket = _a.sent();
                    return [4 /*yield*/, productModel_1["default"].find({})];
                case 3:
                    products = _a.sent();
                    return [4 /*yield*/, productMain_1["default"].find({})];
                case 4:
                    productsMarket = _a.sent();
                    res.send({ ok: true, productsMarket: productsMarket, products: products });
                    return [3 /*break*/, 6];
                case 5: throw new Error('product ID is missing');
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
exports.deleteProduct = deleteProduct;
function filterByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var chosenCategory_1, products, filterd, error_6;
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
                    error_6 = _a.sent();
                    console.error(error_6);
                    res.send({ error: error_6.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.filterByCategory = filterByCategory;
