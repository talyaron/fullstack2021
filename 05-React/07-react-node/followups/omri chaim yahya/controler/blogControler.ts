import blogModel from "../models/blogModel";

export async function addBlog(req, res) {
  try {
    const { title, article } = req.body
    console.log(title, article);

 if (!title ||  !article) throw new Error("lffkfk");
     
    const newBlog = new blogModel({ title, article })
    await newBlog.save();
    res.send({ ok: true })

  } catch (error) {
    console.error(error.message)
    res.send({ok:false})
  }
}
