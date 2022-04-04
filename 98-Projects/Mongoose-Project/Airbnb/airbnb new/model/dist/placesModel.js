"use strict";
exports.__esModule = true;
exports.users = void 0;
var mongoose_1 = require("mongoose");
// const addressSchema= new mongoose.Schema({
//       country:String,
//       country_code:String
// })
var PlacesSchema = new mongoose_1["default"].Schema({
    id: String,
    accommodates: String,
    address: String,
    address_country: String,
    address_country_code: String,
    name: String,
    checkIn: String,
    checkOut: String,
    amenities: String,
    bedrooms: String,
    beds: String,
    number_of_reviews: String,
    price: String,
    cancle: String,
    bathrooms: String,
    images: String,
    host: String,
    description: String,
    bed_type: String,
    reviews: String,
    reviews_rating: String
});
var Places = mongoose_1["default"].model("airbnbLocations", PlacesSchema);
exports["default"] = Places;
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String
});
var Users = mongoose_1["default"].model("users", userSchema);
exports.users = Users;
