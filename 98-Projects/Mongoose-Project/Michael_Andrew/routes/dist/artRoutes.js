"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var artCont_1 = require("../conroler/artCont");
router
    .post("/add-art", artCont_1.addArtToUser)
    .get("/get-user-art", artCont_1.getMyArt);
exports["default"] = router;
