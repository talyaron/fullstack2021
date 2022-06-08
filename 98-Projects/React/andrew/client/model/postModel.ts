import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    ownerId: String,
    title: String,
    text: String,
})

const Post = mongoose.model('posts', postSchema);
export default Post;