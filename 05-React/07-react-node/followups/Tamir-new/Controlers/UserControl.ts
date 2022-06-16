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
    const name = req.body;

    const newUser = new UserModel({ name });
    await newUser.save();

    if (!name) throw new Error("no get name");

    res.send({ok:true});
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
