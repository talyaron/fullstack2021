import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
    ownerId:String
  });

  const ProductMain = mongoose.model('productsMain', productSchema);
  export default ProductMain;