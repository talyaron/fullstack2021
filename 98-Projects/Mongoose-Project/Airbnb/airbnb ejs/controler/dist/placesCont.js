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
exports.searchAirbnbByCity = exports.searchAirbnb = exports.findPlaceMap = exports.getToPlace = exports.addPlaces = exports.getfilteredAirBNB = void 0;
var placesModel_1 = require("../model/placesModel");
// export const getPlaces = async (req, res) => {
//   try {
//     const places = await Places.find({});
//     // .limit(20);
//     console.log(Places);
//     console.log(places);
//     res.send({ ok: true, places });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: "error in app.get/getPlaces" });
//   }
// };
exports.getfilteredAirBNB = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var price1, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                price1 = req.body;
                if (!price1) return [3 /*break*/, 2];
                return [4 /*yield*/, placesModel_1["default"].find({ price: price1 })];
            case 1:
                result = _a.sent();
                res.send({ ok: true, result: result });
                console.log(result);
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                res.send({ error: "error in app.get/getPlaces" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addPlaces = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, summary, checkIn, checkOut, accommodates, amenities, bedrooms, beds, number_of_reviews, price, cancle, bathrooms, images, host, space, description, bed_type, reviews, cancellation_policy, address, newPlace, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, summary = _a.summary, checkIn = _a.checkIn, checkOut = _a.checkOut, accommodates = _a.accommodates, amenities = _a.amenities, bedrooms = _a.bedrooms, beds = _a.beds, number_of_reviews = _a.number_of_reviews, price = _a.price, cancle = _a.cancle, bathrooms = _a.bathrooms, images = _a.images, host = _a.host, space = _a.space, description = _a.description, bed_type = _a.bed_type, reviews = _a.reviews, cancellation_policy = _a.cancellation_policy, address = _a.address;
                newPlace = new placesModel_1["default"]({
                    name: name,
                    summary: summary,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    accommodates: accommodates,
                    amenities: amenities,
                    bedrooms: bedrooms,
                    beds: beds,
                    number_of_reviews: number_of_reviews,
                    price: price,
                    cancle: cancle,
                    bathrooms: bathrooms,
                    images: images,
                    host: host,
                    space: space,
                    description: description,
                    bed_type: bed_type,
                    reviews: reviews,
                    cancellation_policy: cancellation_policy,
                    address: address
                });
                return [4 /*yield*/, newPlace.save()];
            case 1:
                result = _b.sent();
                res.send({ ok: true, result: result });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.massage });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getToPlace = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var placeId, __id, placesId, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                placeId = req.query.placeId;
                __id = req.query;
                if (!(placeId == __id)) return [3 /*break*/, 2];
                return [4 /*yield*/, placesModel_1["default"].findOne({ __id: placeId }).limit(10)
                    //  res.send(placeId);
                ];
            case 1:
                placesId = _a.sent();
                //  res.send(placeId);
                res.render('place', {
                    title: "The Place",
                    placesId: placesId
                });
                return [3 /*break*/, 3];
            case 2: throw new Error("placeId is not the same as the __id");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                console.log(error_3.error);
                res.send({ error: error_3.massage });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.findPlaceMap = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var coordinates;
    return __generator(this, function (_a) {
        try {
            coordinates = req.body;
            //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
            // initMap(center)
            res.send(coordinates);
        }
        catch (error) {
            console.log(error.error);
            res.send({ error: error.massage });
        }
        return [2 /*return*/];
    });
}); };
exports.searchAirbnb = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchLocation, checkIn, checkOut, adults, children, infants, pets, accommodates, sum, dateOfCheckIn, dateOfCheckOut, differenceInTime, differenceInDays, getplaces, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, searchLocation = _a.searchLocation, checkIn = _a.checkIn, checkOut = _a.checkOut, adults = _a.adults, children = _a.children, infants = _a.infants, pets = _a.pets, accommodates = _a.accommodates;
                console.log(/*search*/ searchLocation, checkIn, checkOut, adults, children, infants, pets);
                sum = Number(adults) + Number(children) + Number(infants) + Number(pets);
                console.log("the number of guests:" + sum);
                dateOfCheckIn = new Date("" + checkIn);
                dateOfCheckOut = new Date("" + checkOut);
                differenceInTime = dateOfCheckOut.getTime() - dateOfCheckIn.getTime();
                differenceInDays = differenceInTime / (1000 * 3600 * 24);
                console.log("the days between checkIn checkOut is:" + differenceInDays);
                return [4 /*yield*/, placesModel_1["default"].find({ address_country: "" + searchLocation, accommodates: sum }).limit(3)];
            case 1:
                getplaces = _b.sent();
                console.log(getplaces);
                // res.send({ ok: true, places });
                res.render('places', {
                    title: "Search",
                    getplaces: getplaces
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.log(error_4.error);
                res.send({ error: error_4.massage });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchAirbnbByCity = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var TelAviv, Eilat, Jerusalem, HareiYehuda, getplaces, getplaces, getplaces, getplaces;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                TelAviv = "Tel Aviv";
                Eilat = "Eilat";
                Jerusalem = "Jerusalem";
                HareiYehuda = "Harei Yehuda";
                console.log(req.query);
                console.log(Object.keys(req.query).includes('Eilat.x'));
                console.log(Object.keys(req.query).includes('TelAviv.x'));
                console.log(Object.keys(req.query).includes('Jerusalem.x'));
                console.log(Object.keys(req.query).includes('HareiYehuda.x'));
                if (!Object.keys(req.query).includes('Eilat.x')) return [3 /*break*/, 2];
                return [4 /*yield*/, placesModel_1["default"].find({ address_country: Eilat }).limit(10)];
            case 1:
                getplaces = _a.sent();
                res.render("places", {
                    title: "Search",
                    getplaces: getplaces
                });
                return [3 /*break*/, 8];
            case 2:
                if (!Object.keys(req.query).includes('TelAviv.x')) return [3 /*break*/, 4];
                return [4 /*yield*/, placesModel_1["default"].find({ address_country: TelAviv }).limit(10)];
            case 3:
                getplaces = _a.sent();
                res.render("places", {
                    title: "Search",
                    getplaces: getplaces
                });
                return [3 /*break*/, 8];
            case 4:
                if (!Object.keys(req.query).includes('Jerusalem.x')) return [3 /*break*/, 6];
                return [4 /*yield*/, placesModel_1["default"].find({ address_country: Jerusalem }).limit(10)];
            case 5:
                getplaces = _a.sent();
                res.render("places", {
                    title: "Search",
                    getplaces: getplaces
                });
                return [3 /*break*/, 8];
            case 6:
                if (!Object.keys(req.query).includes('HareiYehuda.x')) return [3 /*break*/, 8];
                return [4 /*yield*/, placesModel_1["default"].find({ address_country: HareiYehuda }).limit(10)];
            case 7:
                getplaces = _a.sent();
                res.render("places", {
                    title: "Search",
                    getplaces: getplaces
                });
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
