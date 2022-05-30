import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
  ownerId: String,
  content: String,
  time: String,
  ownerFirstName: String,
  ownerLastName: String,
});

const Post = mongoose.model("posts", PostSchema);
export default Post;
