import User from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const addUser = async (req, res) => {
  try {
    let { firstName, lastName, email, password, gender, birthDate } = req.body;
    if (!firstName || !lastName)
      throw new Error("something missing on addUser - server side");

    const anEmail = await User.findOne({ email: email }).collation({
      locale: "en_US",
      strength: 1,
    });
    if (anEmail) {
      let registerData = {
        message: `${anEmail.email} is already registered under ${anEmail.username}`,
      };
      res.send({ registerData });
      return;
    }

    if (!anEmail) {
      const newUser = new User({
        firstName,
        lastName,

        email,
        password,

        gender,
        birthDate,
      });
      const result = await newUser.save();
      let registerData = {
        result: result,
        message: `${email} is now registered, you can proceed to login`,
      };
      res.send({ registerData });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    let userData = req.body;
    const { username, password } = userData;
    // what should i do so the user can log in with either their username or email?
    // if (username.includes("@")) {
    //   let email = username;
    //   const lookup = await user
    //     .findOne({ email: email })
    //     .collation({ locale: "en_US", strength: 1 });

    // }else{

    const emailLookup = await User.findOne({ email: username }).collation({
      locale: "en_US",
      strength: 2,
    });
    if (!emailLookup) {
      let loginData = {
        message: `found no user in emailLookup, loginUser -server side (userCont)`,
      };
      res.send({ loginData });
    }
    if (emailLookup) {
      let email = emailLookup.email;
      const verified = await User.findOne({ email: email, password: password });
      if (!verified) {
        let loginData = {
          message: `Welcome back ${emailLookup.username}, thats not the password`,
        };
        res.send({ loginData });
      }
      if (verified) {
        //FIXME can add different info types for different needs.
        const verifiedUserPersonalInfo = {
          firstName: verified.firstName,
          lastName: verified.lastName,
          ok: true,
        };

        const result = verified;
        let loginData = {
          result: result,
          verifiedUserPersonalInfo: verifiedUserPersonalInfo,
          message:
            "welcome back, get out of this modal and wander around your recent posts",
        };

        const payload = { loginData };
        const encryptedInfo = jwt.encode(payload, secret);
        res.cookie("currentUserInfo", encryptedInfo, {});
        res.send({ loginData });
        return;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export const searchUsers = async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const userSearchList = await User.find(
      { firstName: searchTerm } || { lastName: searchTerm } || {
          email: searchTerm,
        }
    ).collation({
      locale: "en_US",
      strength: 1,
    });
    const userSearchListIds = userSearchList.map((user) => {
      return user;
    });
    res.send(userSearchListIds);
  } catch (error) {
    console.log(error.message);
    res.send({ error: error.message });
  }
};
