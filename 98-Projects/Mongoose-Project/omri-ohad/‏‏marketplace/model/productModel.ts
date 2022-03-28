import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
  })
 
  const Product = mongoose.model('products', productSchema);
  export default Product;
