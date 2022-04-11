import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  profileUrl: String,
  url: [String],
  email: String,
  password: String,
})
const Images = mongoose.model('images', imageSchema);
export default Images;