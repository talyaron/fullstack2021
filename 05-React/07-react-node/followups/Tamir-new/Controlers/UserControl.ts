import { UserModel } from "../Models/userModel";

export async function getUser(req, res) {
  try {
    const newuser = await UserModel.find({});

    if (!newuser) throw new Error("no new user");

    res.send({ newuser });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
export async function addUser(req, res) {
  try {
    const { email, password } = req.body;
    // if (!name && typeof name !== "string") throw new Error("no get name");
    const newUser = new UserModel({ email, password });
    await newUser.save();

    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;
    if (typeof password === "string" && typeof email === "string") {
      const user = await UserModel.findOne({ email });
      console.log(user);
      
      if (user) {
        if (user.password === password) {
          res.cookie('userInfo',{email},{maxAge:50000})
          res.send({ ok: true, login: true });
        } else {
          console.log("you out");
        }
      }

      return;
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
