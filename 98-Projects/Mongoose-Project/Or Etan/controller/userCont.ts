import user from "../model/userModel";

export const addUser = async (req, res) => {
  console.log(req.body);
  try {
    let { firstName, lastName, email, password, role, gender } = req.body;
    if (firstName && lastName && email && password && role && gender) {
      const newUser = new user({
        firstName,
        lastName,
        email,
        password,
        role,
        gender,
      });
      console.log(newUser);
      const result = await newUser.save();
      res.send({ result });
      console.log(result);
    } else throw new Error(`You've missed something`);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
export const login = async (req, res) => {
  let { email, password } = req.body;

  console.log(email, password);

  try {
    const users = await user
      .find({ email: email })
      .collation({ locale: "en_US", strength: 1 });
    const verifiedUser = await user
      .find({ email: email, password: password })
      .collation({ locale: "en_US", strength: 1 });
    if (users.length > 0) {
        console.log(verifiedUser.length);
        
      if (verifiedUser.length === 1) {
        res.send({ ok: true, users, verifiedUser });
        return
      }
      res.send({ aUser: true });
    } else {
      res.send({ ok: false });
    }
  } catch (error) {
      console.log('error in login:');
      console.log(error.message);
      
    res.send({ error: error.message });
  }
};
