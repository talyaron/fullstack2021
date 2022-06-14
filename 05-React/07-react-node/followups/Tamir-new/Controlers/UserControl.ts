import { UserModel } from "../Models/userModel";


export async function getUser(req, res) {
  try {
    const users = await UserModel.find({});
    res.send({ users });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
