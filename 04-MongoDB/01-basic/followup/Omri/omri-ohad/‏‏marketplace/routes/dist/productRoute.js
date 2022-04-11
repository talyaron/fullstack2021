"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var productCont_1 = require("../controlers/productCont");
router
    .get('/get-products', productCont_1.getAllProducts)
    .get('/get-products-to-main', productCont_1.getProductsMain)
    .post('/get-by-category', productCont_1.filterByCategory)
    .post("/add-product", productCont_1.addProduct)
    .post("/register", productCont_1.register)
    .post("/login", productCont_1.login)
    .patch("/update-picture", productCont_1.updatePic)
    .patch("/update-title", productCont_1.updateTitle)
    .patch("/update-price", productCont_1.updatePrice)["delete"]("/delete-product", productCont_1.deleteProduct)
    .post('/sort-by-Ascending', productCont_1.sortAscending)
    .post('/sort-by-Descending', productCont_1.sortDescending);
exports["default"] = router;
