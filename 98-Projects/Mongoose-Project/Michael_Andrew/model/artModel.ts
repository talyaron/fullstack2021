import mongoose from "mongoose";

const artSchema = new mongoose.Schema({
  artName: String,
  url: String,
  author: String,
  ownerId: String,
});

const Art = mongoose.model("newArt", artSchema);
export default Art;
