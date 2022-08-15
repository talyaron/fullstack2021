import mongoose from "mongoose";

export const TextSchema= new mongoose.Schema({
    value:String,
    img:String

})
const Text = mongoose.model('texts', TextSchema);
export default Text;