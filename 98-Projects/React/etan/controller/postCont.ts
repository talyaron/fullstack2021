import Post from "../model/postModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const getPostsList = async (req, res) => {
  try {
    const rest = req.cookies["currentUserInfo"];
    const userInfo = jwt.decode(rest, secret);
    const userId = userInfo.loginData.result._id;
    if (userId) {
      let currentUsersPostsList = await Post.find({ ownerId: userId });
      res.send(currentUsersPostsList);
      // const decoded = jwt.decode(userId, secret)
      // const {userId, role} = decoded;
    } else {
      throw new Error("no userId yet");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getOthersPostsList = async (req, res) => {
  try {
    const data = req.body;
    const { profileId } = data;
    console.log(profileId);

    const rest = req.cookies["currentUserInfo"];
    const userInfo = jwt.decode(rest, secret);
    const userId = userInfo.loginData.result._id;
    if (userId) {
      let otherUsersPostsList = await Post.find({ ownerId: profileId });
      console.log(otherUsersPostsList);

      res.send(otherUsersPostsList);
      // const decoded = jwt.decode(userId, secret)
      // const {userId, role} = decoded;
    } else {
      throw new Error("no userId yet");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (req, res) => {
  try {
    const rest = req.cookies["currentUserInfo"];
    const cookies = jwt.decode(rest, secret);
    console.log(cookies);

    const newPostInfo = req.body;
    const newPostOwnerInfo = jwt.decode(req.cookies["currentUserInfo"], secret)
      .loginData.result;
    const { firstName, lastName } = newPostOwnerInfo;
    const { ownerId, content, time } = newPostInfo;
    if (!ownerId || !content || !time || !firstName || !lastName)
      throw new Error(
        `missing something in createNewPost -server side (postCont)`
      );
    const newPost = new Post({
      ownerId,
      content,
      time,
      ownerFirstName: firstName,
      ownerLastName: lastName,
    });
    await newPost.save();

    res.send({ newPost });
  } catch (error) {
    console.log(error);
  }
};

export const searchPosts = async (req, res) => {
  try {
    const { searchTerm } = req.body;
    if (!searchTerm)
      throw new Error(`Search term not found in searchPosts -postCont.ts`);
    const postSearchList = await Post.find(
      { ownerFirstName: searchTerm } || {
          ownerLastName: searchTerm,
        } || { content: searchTerm } || {
          time: searchTerm,
        }
    ).collation({
      locale: "en_US",
      strength: 1,
    });
    const postSearchListIds = postSearchList.map((post) => {
      return post._id;
    });
    res.send(postSearchListIds);
  } catch (error) {
    console.log(error.message);
    res.send({ error: error.message });
  }
};
