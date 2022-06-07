import { blogModel } from "../models/blogModel";

export async function addBlog(req, res){
    try {
      const  {title, article}= req.body
      if (title&& article){
        const newBlog= new blogModel({title, article})
        await newBlog.save();  
      }
      
        
    } catch (error) {
        console.error(error)
    }
}