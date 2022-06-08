import axios from 'axios'
import Blog from '../Models/blogsModel'


export async function addBlog(req, res) {

    try {
            const {newBlog} = req.body
            console.log(newBlog);
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

        Blog.remove({})
        

        const data = await Blog.find({})
        
        res.send({ ok: true,data});
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}