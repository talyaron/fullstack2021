"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var placesCont_1 = require("../controler/placesCont");
var placesCont_2 = require("../controler/placesCont");
var placesCont_3 = require("../controler/placesCont");
var placesCont_4 = require("../controler/placesCont");
var placesCont_5 = require("../controler/placesCont");
router
    .get('/getFiltered', placesCont_5.getfilteredAirBNB)
    .get('/getToPlace/:placeId', placesCont_1.getToPlace)
    .get('/search-airbnb', placesCont_2.searchAirbnb)
    .post('/search-city', placesCont_3.searchAirbnbByCity)
    .post('/findPlaceMap', placesCont_4.findPlaceMap);
exports["default"] = router;
