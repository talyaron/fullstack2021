import { BlogModel } from "../models/blogsModel";

export async function addBlog(req, res) {
    try {
        const { title, article } = req.body;
        if (title && article) {
            const newBlog = new BlogModel({ title, article });
            await newBlog.save();
            res.send({ ok: true })
        }
    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}

export async function getTitles(req, res) {
    try {
        const titles = await BlogModel.find({});
        if (!titles) { throw new Error('no data recived') }

        else {
            //console.log(titles)
            res.send(titles)
        }
        
    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}