import { UserModel } from "../Models/userModel";

export async function getUser(req, res) {
  try {
    const newuser = await UserModel.find({});
    console.log({ newuser });
    if (!newuser) throw new Error("no new user");

    res.send({ newuser });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
