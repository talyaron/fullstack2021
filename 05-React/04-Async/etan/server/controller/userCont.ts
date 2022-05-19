import user from "../model/userModel";
import jwt from "jwt-simple";

const secret = process.env.JWT_SECRET;

export const addUser = async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      username,
      email,
      password,
      role,
      gender,
      birthDate,
    } = req.body;
    if (!firstName || !lastName)
      throw new Error("something missing on addUser - server side");
    const aUser = await user
      .findOne({ username: username })
      .collation({ locale: "en_US", strength: 1 });
    const anEmail = await user
      .findOne({ email: email })
      .collation({ locale: "en_US", strength: 1 });
    if (anEmail) {
      let registerData = {
        message: `${anEmail.email} is already registered under ${anEmail.username}`,
      };
      res.send({ registerData });
      console.log("done anEmail");
      return;
    }
    if (aUser) {
      let registerData = {
        message: `Username: ${aUser.username} is already taken`,
      };

      res.send({ registerData });
      console.log("done aUser");
      return;
    }
    console.log(aUser, anEmail);

    if (!aUser && !anEmail) {
      const newUser = new user({
        firstName,
        lastName,
        username,
        email,
        password,
        role,
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
    const lookup = await user
      .findOne({ email: username })
      .collation({ locale: "en_US", strength: 2 });
    if (!lookup) {
      let loginData = {
        message: `found no user in lookup, loginUser -server side (userCont)`,
      };
      res.send({ loginData });
    }
    if (lookup) {
      let email = lookup.email;
      const verified = await user.findOne({ email: email, password: password });
      if (!verified) {
        let loginData = {
          message: `Welcome back ${lookup.username}, thats not the password`,
        };
        res.send({ loginData });
      }
      if (verified) {
        //FIXME can add different info types for different needs.
        const verifiedUserPersonalInfo = {
          firstName: verified.firstName,
          lastName: verified.lastName,
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
