import mongoose from "mongoose";

const PlacesSchema = new mongoose.Schema(
  {
    _id: String,
    access: String,
    accommodates: String,
    address: {
      country:String,
      country_code:String
    
    },   
    name: String,
    summary: String,
    checkIn: String,
    checkOut: String,
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
  },

);

const Places = mongoose.model("airbnbLocations", PlacesSchema);
export default Places;
