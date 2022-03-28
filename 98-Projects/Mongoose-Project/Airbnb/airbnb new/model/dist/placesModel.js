"use strict";
exports.__esModule = true;
exports.users = void 0;
var mongoose_1 = require("mongoose");
var PlacesSchema = new mongoose_1["default"].Schema({
    name: String,
    summary: String,
    checkIn: String,
    checkOut: String,
    accommodates: Number,
    amenities: Array,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    price: Number,
    cancle: String,
    bathrooms: Number,
    images: String,
    host: Object,
    space: String,
    description: String,
    bed_type: String,
    reviews: Array,
    cancellation_policy: String,
    address: Object
}, {
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false
});
var Places = mongoose_1["default"].model("listingsandreviews", PlacesSchema);
exports["default"] = Places;
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String
});
var Users = mongoose_1["default"].model("users", userSchema);
exports.users = Users;
