import User from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isAUser = await User.findOne({ email }).collation({
      locale: "en_US",
      strength: 2,
    });
    if (!isAUser)
      throw new Error("this user does not exist, create an account");
    const verified = await User.findOne({ email, password });
    if (!verified) throw new Error("this is the wrong password");
    const userPublicInfo = {
      firstName: verified.firstName,
      lastName: verified.lastName,
      email: verified.email,
      position: verified.position,
      workSpace: verified.workSpace,
    };
    const encodedInformation = jwt.encode(userPublicInfo, secret);
    res.cookie("userInformation", encodedInformation);
    res.send({ ok: true });
  } catch (error) {
    console.error(error.message);
    res.send({ ok:false, error: error.message });
  }
};

export async function create(req, res) {
  try {
    const { email, password, firstName, lastName, position, workSpace } =
      req.body;
    const newUserInformation = {
      email,
      password,
      firstName,
      lastName,
      position,
      workSpace,
    };
    if (!newUserInformation) throw new Error("no newUser in create - userCont");
    const isAUser = await User.findOne({ email }).collation({
      locale: "en_US",
      strength: 2,
    });
    if (isAUser) throw new Error(`a user under ${email} already exists`);
    const newUser = new User(newUserInformation);
    const userInformation = await newUser.save();
    const newUserPublicInfo = {
      email,
      firstName,
      lastName,
      position,
      workSpace,
    };
    const encodedInformation = jwt.encode(newUserPublicInfo, secret);
    res.cookie("userInformation", encodedInformation);
    res.send({ ok: true });
  } catch (error) {
    console.error(error.message);
    res.send({ ok: false, error: error.message });
  }
}
