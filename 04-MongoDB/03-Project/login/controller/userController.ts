import User from '../model/userModel';

export async function getAllUsers(req, res) {
    try {
      //check if user role is admin
      console.log(req.cookies);
      const { userInfo } = req.cookies;
  
      if (userInfo && userInfo.role === "admin") {
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
  
  export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      if (typeof username === "string" && typeof password === "string") {
        const user = await User.findOne({ username });
        if (user) {
          //check if password equal
  
          if (user.password === password) {
            res.cookie(
              "userInfo",
              { username, id: user._id, role: user.role },
              { maxAge: 120000 }
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
  

 

