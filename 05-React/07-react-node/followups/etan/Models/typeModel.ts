import mongoose from "mongoose";
const TypeSchema = new mongoose.Schema({
  name:String,
  combinations:Array,
});

const Type = mongoose.model("types", TypeSchema);
export default Type;
