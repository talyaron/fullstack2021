import mongoose from "mongoose";
// const addressSchema= new mongoose.Schema({
//       country:String,
//       country_code:String
// })
const PlacesSchema = new mongoose.Schema(
  {
    id:String,
    accommodates: String,
    address:String,  
    address_country: String,
    address_country_code: String,
    name:String,
    checkIn:String,
    checkOut:String,
    amenities: String,
    bedrooms: String,
    beds: String,   
    number_of_reviews:String,
    price: String,
    cancle: String,
    bathrooms: String,
    images: String,
    host: String,   
    description: String,    
    bed_type: String,   
    reviews:String,
    reviews_rating:String
  },
  // {
  //   capped: { size: 1024 },
  //   bufferCommands: false,
  //   autoCreate: false,
  // }
);

const Places = mongoose.model("airbnbLocations", PlacesSchema);
export default Places;
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});
const Users = mongoose.model("users", userSchema);
export const users = Users;
