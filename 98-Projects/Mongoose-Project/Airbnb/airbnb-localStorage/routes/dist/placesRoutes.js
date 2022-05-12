"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var placesCont_1 = require("../controler/placesCont");
var placesCont_2 = require("../controler/placesCont");
var placesCont_3 = require("../controler/placesCont");
var placesCont_4 = require("../controler/placesCont");
router
    .get('/getFiltered', placesCont_4.getfilteredAirBNB)
    .get('/getToPlace/:placeId', placesCont_1.getToPlace)
    //gettoplace is req.param cause it goes according to its parameter given which here is the id to go to specfic page info
    .get('/search-airbnb', placesCont_2.searchAirbnb)
    .post('/search-city', placesCont_3.searchAirbnbByCity);
exports["default"] = router;
