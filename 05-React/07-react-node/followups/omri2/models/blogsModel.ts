import mongoose from "mongoose";
const BlogsSchema = new mongoose.Schema({title:'string', article:'string'});
export const BlogModel = mongoose.model('blogs',BlogsSchema);