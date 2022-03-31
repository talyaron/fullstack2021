"use strict";
exports.__esModule = true;
exports.users = void 0;
var mongoose_1 = require("mongoose");
// const addressSchema= new mongoose.Schema({
//       country:String,
//       country_code:String
// })
var PlacesSchema = new mongoose_1["default"].Schema({
    _id: String,
    access: String,
    accommodates: String,
    address: {
        country: String,
        country_code: String
    },
    name: String,
    summary: String,
    // checkIn: String,
    // checkOut: String,
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
    cancellation_policy: String
});
var Places = mongoose_1["default"].model("listingsAndReviews", PlacesSchema);
exports["default"] = Places;
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String
});
var Users = mongoose_1["default"].model("users", userSchema);
exports.users = Users;
