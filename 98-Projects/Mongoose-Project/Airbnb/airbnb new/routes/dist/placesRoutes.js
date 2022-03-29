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
    .get('/getPlaces', placesCont_5.getPlaces)
    .post('/addPlaces', placesCont_1.addPlaces)
    .get('/getToPlace', placesCont_2.getToPlace)
    .get('/search-airbnb', placesCont_3.searchAirbnb)
    .post('/findPlaceMap', placesCont_4.findPlaceMap);
exports["default"] = router;
