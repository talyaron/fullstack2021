import axios from 'axios'
import Blog from '../Models/blogsModel'

export async function deleteBlog(req,res){
    try {
       
       const {blog_id} = req.body
      const deletedBlog = await Blog.findOneAndDelete({blog_id})
      res.send({ok:true,deletedBlog})
      console.log(blog_id)

    }catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }
}
export async function addBlog(req, res) {

    try {
            const {newBlog} = req.body
            // console.log(newBlog);
            const newBlogg = new Blog(newBlog)
            await newBlogg.save()
                
            res.send({ ok: true});
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}

export const getBlogs = async (req, res) => {

    try {
        
        const data = await Blog.find({})
        res.send({ ok: true,data});
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}
export const getBlog = async (req, res) => {

    try {
        
        const {tempId} = req.body;
        console.log(tempId);
        

        const data = await Blog.find({_id:tempId})
        console.log(data);
        
        res.send({ ok: true,data});
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}
