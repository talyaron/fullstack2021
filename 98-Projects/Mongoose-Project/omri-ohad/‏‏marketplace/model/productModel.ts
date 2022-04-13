import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
  })
 
  const ProductUser = mongoose.model('productsUser', productSchema);
  export default ProductUser;
