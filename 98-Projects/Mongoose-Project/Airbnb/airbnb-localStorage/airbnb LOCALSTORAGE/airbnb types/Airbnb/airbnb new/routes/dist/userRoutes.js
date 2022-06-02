"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../controler/userCont");
var userCont_2 = require("../controler/userCont");
var userCont_3 = require("../controler/userCont");
var userCont_4 = require("../controler/userCont");
var userCont_5 = require("../controler/userCont");
router
    .get('getPlaces', userCont_5.getPlaces)
    .post('/addPlaces', userCont_1.addPlaces)
    .get('/getToPlace', userCont_2.getToPlace)
    .get('/search-airbnb', userCont_3.searchAirbnb)
    .post('/findPlaceMap', userCont_4.findPlaceMap);
exports["default"] = router;
