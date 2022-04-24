import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
    ownerId:String,
    itemId:String
  });

  const Market = mongoose.model('MarketItems', productSchema);
  export default Market;