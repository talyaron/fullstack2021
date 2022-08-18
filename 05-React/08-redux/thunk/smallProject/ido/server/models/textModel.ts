import mongoose from "mongoose";


const textSchema = new mongoose.Schema({
    text: String,
    id:String
  })
  
  const Text = mongoose.model('Text', textSchema);
  export default Text;