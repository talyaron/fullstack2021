import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    name: String,
    body: String,
    image:String
  });
  
  const Blog = mongoose.model("blogs", BlogSchema);

  export default Blog 
  