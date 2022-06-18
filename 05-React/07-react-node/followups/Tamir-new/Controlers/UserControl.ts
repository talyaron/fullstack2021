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
    const  {name}  = req.body;
    if (!name && typeof name !=='string') throw new Error("no get name");
    const newUser = new UserModel({ name });
    await newUser.save();

    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
