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
exports.searchAirbnb = exports.findPlaceMap = exports.getToPlace = exports.addPlaces = exports.getPlaces = void 0;
var userModel_1 = require("../model/userModel");
exports.getPlaces = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var places, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1["default"].find({})];
            case 1:
                places = _a.sent();
                console.log(userModel_1["default"]);
                console.log(places);
                res.send({ ok: true, places: places });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.send({ error: "error in app.get/getPlaces" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
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
                newPlace = new userModel_1["default"]({
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
    var placeId, __id;
    return __generator(this, function (_a) {
        try {
            placeId = req.body.placeId;
            __id = req.body;
            if (__id == placeId) {
                res.send(placeId);
            }
            else {
                throw new Error("placeId is not the same as the __id");
            }
        }
        catch (error) {
            console.log(error.error);
            res.send({ error: error.massage });
        }
        return [2 /*return*/];
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
    var search, checkIn, checkOut, adults, children, infants, pets, foundLocation, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                search = req.query.search;
                checkIn = req.query.checkIn;
                checkOut = req.query.checkOut;
                adults = req.query.adults;
                children = req.query.children;
                infants = req.query.infants;
                pets = req.query.pets;
                return [4 /*yield*/, userModel_1["default"].find({ address: search })];
            case 1:
                foundLocation = _a.sent();
                console.log(foundLocation);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3.error);
                res.send({ error: error_3.massage });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
