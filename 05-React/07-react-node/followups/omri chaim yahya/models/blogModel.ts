import mongoose from "mongoose";
const BlogSchema= new mongoose.Schema({title: 'string', article:'string'})
 const blogModel= mongoose.model('blogs', BlogSchema)

 export default blogModel