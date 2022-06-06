import jwt from 'jwt-simple';
import Post from "../model/postModel";
const secret = process.env.JWT_SECRET;



export const addPost = async (req, res) => {
    const newPost = new Post(req.body);
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);

    newPost.ownerId = userInfo.userId;
    const r = await newPost.save();
    if (newPost === r) res.send({ ok: true });
    else res.send({ ok: false });
}

export const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.send({ posts })

}
export const getPost = async (req, res) => {
    const { postId } = req.query
    const post = await Post.findOne({ _id: postId });
    res.send({ post })
}
export const getPostSearch = async (req, res) => {
    const { searchTerm } = req.query
    const posts = await Post.find({ text: { $regex: searchTerm, $options: 'i' } });
    res.send({ posts })
}

export const getUserPosts = async (req, res) => {
    let { userInfo } = req.cookies;
    let { userId } = req.query;
    if (userId) {
        const posts = await Post.find({ ownerId: userId });
        res.send({ posts })
    }
    else if (userInfo) {
        userInfo = jwt.decode(userInfo, secret);
        const posts = await Post.find({ ownerId: userInfo.userId });
        res.send({ posts })
    }

}