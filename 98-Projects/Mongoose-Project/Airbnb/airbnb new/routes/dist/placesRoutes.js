"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var placesCont_1 = require("../controler/placesCont");
var placesCont_2 = require("../controler/placesCont");
var placesCont_3 = require("../controler/placesCont");
var placesCont_4 = require("../controler/placesCont");
var placesCont_5 = require("../controler/placesCont");
var placesCont_6 = require("../controler/placesCont");
var placesCont_7 = require("../controler/placesCont");
router
    .get('/search', placesCont_7.search)
    .get('/getPlaces', placesCont_5.getPlaces)
    .get('/getFiltered', placesCont_6.getfilteredAirBNB)
    .post('/addPlaces', placesCont_1.addPlaces)
    .get('/getToPlace', placesCont_2.getToPlace)
    .get('/search-airbnb', placesCont_3.searchAirbnb)
    .post('/findPlaceMap', placesCont_4.findPlaceMap);
exports["default"] = router;
