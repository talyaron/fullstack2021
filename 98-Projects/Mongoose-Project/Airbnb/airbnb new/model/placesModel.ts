import mongoose from "mongoose";
// const addressSchema= new mongoose.Schema({
//       country:String,
//       country_code:String
// })
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
    cancellation_policy: String,
  },
  // {
  //   capped: { size: 1024 },
  //   bufferCommands: false,
  //   autoCreate: false,
  // }
);

const Places = mongoose.model("listingsAndReviews", PlacesSchema);
export default Places;
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});
const Users = mongoose.model("users", userSchema);
export const users = Users;
