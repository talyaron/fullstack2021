import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
    text: String,
})
//create a collection 

const Text = mongoose.model('text', textSchema);
export default Text;