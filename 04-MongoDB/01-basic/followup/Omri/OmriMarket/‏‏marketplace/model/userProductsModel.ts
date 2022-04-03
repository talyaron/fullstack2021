import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
  });

  const UserProducts = mongoose.model('userItems', productSchema);
  export default UserProducts;