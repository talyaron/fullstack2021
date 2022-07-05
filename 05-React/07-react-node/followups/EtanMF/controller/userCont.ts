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
      id: verified._id
    };
    const encodedInformation = jwt.encode(userPublicInfo, secret);
    res.cookie("userInformation", encodedInformation);
    res.send({ ok: true, userId: verified._id });
     
    
  } catch (error) {
    console.error(error.message);
    res.send({ ok: false, error: error.message });
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
      id: userInformation._id
    };
    
    const encodedInformation = jwt.encode(newUserPublicInfo, secret);
    res.cookie("userInformation", encodedInformation);
    res.send({ ok: true });
  } catch (error) {
    console.error(error.message);
    res.send({ ok: false, error: error.message });
  }
}
export async function getUsers(req, res) {
  try {
    const { id } = req.body;
    
    if (!id) {
      const userList = await User.find({}, { password: 0 });
      if (!userList)
        throw new Error("did'nt find the user list in getUsers -userCont");
      res.send({ ok: true, userList: userList });
    }
    if (id) {

      const thisUser = await User.findById(id, { password: 0 })

      if (!thisUser) { throw new Error("did'nt find a user in getUsers -userCont"); }

      res.send({ ok: true, thisUser: thisUser });
    }
  } catch (error) {
    console.log(error);
    res.send({ ok: false, error: error.message });
  }
}
