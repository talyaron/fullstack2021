import user from "../model/userModel";

export const addUser = async (req, res) => {

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

      const result = await newUser.save();
      res.send({ result });

    } else throw new Error(`You've missed something`);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const users = await user
      .find({ email: email })
      .collation({ locale: "en_US", strength: 1 });
    const userEmail = await users[0].email;
    const verifiedUser = await user.find({
      email: userEmail,
      password: password,
    });


    if (users.length > 0) {


      if (verifiedUser.length === 1) {
        res.send({ ok: true, users, verifiedUser });
        return;
      }
      res.send({ aUser: true });
      return;
    } else {
      res.send({ ok: false });
    }
  } catch (error) {
    console.log("error in login:");
    console.log(error.message);

    res.send({ error: error.message });
  }
};

export const renderUser = async (req, res) => {
  let userId = req.query.userId;
  const userInfo = await user.find({ _id: userId });

  res.send({ userInfo: userInfo });
};

export const renderPage = async (req, res) => {
  const { userURL, requestedPage } = req.body;

  const appURL = userURL.split("/")[2];
  const userId = userURL.slice(-24);
  const currentUser = await user.find({ _id: userId });

  const newURL = `${appURL}/${requestedPage}.html?id=${userId}`;



  let { firstName, lastName, gender, role } = currentUser[0];


  if (requestedPage === "home") {
    try {
      res.send({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        role: role,
      });
    } catch (error) {
      console.log("error in renderPage:");
      console.log(error.message);

      res.send({ error: error.message });
      // }
    }
    return;
  }
};