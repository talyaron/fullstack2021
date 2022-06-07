import { BlogModel } from "../models/blogsModel";

export async function addBlog(req, res) {
    try {
        const { title, article} = req.body;
        if(title && article){
            const newBlog = new BlogModel({title, article});
            await newBlog.save();
            console.log(title,article);
            res.send({ok:true})
        }
    } catch (error) {
        console.error(error);
        res.send({error:error.message})
    }
}