import mongoose from "mongoose";
const BlogSchema= new mongoose.Schema({title: 'string', article:'string'})
export const blogModel= mongoose.model('blogs', BlogSchema)