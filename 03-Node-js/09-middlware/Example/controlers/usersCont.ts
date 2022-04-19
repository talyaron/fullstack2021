import jwt from "jwt-simple";
import User from "../model/usersModel";

const secret=process.env.JWT_SECRET

export async function getAllUsers(req, res) {
  try {
    //check if user role is admin
    console.log(`User id is ${req.id} and the role is ${req.role}`)
    const { userInfo } = req.cookies;
    console.log(userInfo);
   
    const decoded = jwt.decode(userInfo, secret);
    console.log(decoded)
    if (decoded && decoded.role === "admin") {
      const users = await User.find({});
      res.send({ ok: true, users });
      return;
    }
    throw new Error("user is not allowed");
  } catch (error) {
    console.log("Error on getAllUsers:", error.message);
    res.send({ error: error.message });
  }
}

export const addUser = async (req, res) => {
  try {
    console.log(`User with id: ${req.id} added a user`)
    let { username, password } = req.body;

    const newUser = new User({ username, password });
    const result = await newUser.save();

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId, role } = req.body;
    if (userId && role) {
      const users = await User.updateOne({ _id: userId }, { role: role });
      res.send({ ok: true, users });
    } else {
      throw new Error("userId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    if (userId) {
      const users = await User.deleteOne({ _id: userId });
      res.send({ ok: true, users });
    } else {
      throw new Error("userId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
   
    const { username, password } = req.body;
    console.log(username, password);
    if (typeof username === "string" && typeof password === "string") {
      const user = await User.findOne({ username });
      if (user) {
        //check if password equal

        if (user.password === password) {
          // res.cookie("userInfo", { username, id: user._id, role: user.role }, { maxAge: 120000 });
          const payload = { username, id: user._id, role: user.role };
          const token = jwt.encode(payload, secret);

          res.cookie(
            "userInfo",
            token,
            { maxAge: 360000, httpOnly:true}
          );

          res.send({ ok: true, login: true });
          return;
        }
      }
      throw new Error("username or password are inncorect");
    } else {
      throw new Error("user name or password are missing or role is missing");
    }
  } catch (error) {
    console.log(error.message);
    res.send({ error: error.message });
  }
};
