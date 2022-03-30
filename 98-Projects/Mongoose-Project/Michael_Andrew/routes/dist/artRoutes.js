"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var artCont_1 = require("../conroler/artCont");
router
    .post("/add-art", artCont_1.addArtToUser)
    .get("/get-user-art", artCont_1.getMyArt)
    .patch("/putArtOnSale", artCont_1.putArtOnSale)
    .patch("/cancelSale", artCont_1.cancelSale);
exports["default"] = router;
