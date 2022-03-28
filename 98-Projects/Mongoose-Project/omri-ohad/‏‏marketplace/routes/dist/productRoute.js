"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var productCont_1 = require("../controlers/productCont");
router
    .get('/get-products', productCont_1.getAllProducts)
    .post("/add-product", productCont_1.addProduct)
    .patch("/update-product", productCont_1.updateproduct)["delete"]("/delete-product", productCont_1.deleteProduct);
exports["default"] = router;
