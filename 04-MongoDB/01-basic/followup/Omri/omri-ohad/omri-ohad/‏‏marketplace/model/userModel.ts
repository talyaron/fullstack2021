import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
  });

  const User = mongoose.model('userItems', productSchema);
  export default User;