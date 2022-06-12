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
        // console.log(titles)
        res.send(titles)
    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}

export async function getArticle(req, res) {
    try {
        const { articleId } = req.body;
        let article = [];
        if (!articleId) throw new Error('data not recived')
        else {
            const blogs = await BlogModel.find({});
            if(!blogs) throw new Error('no blogs recived');
            else{
                article = blogs.filter((blog) => blog.id === articleId);
            }
            res.send({ ok: true ,article})
        }
    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}