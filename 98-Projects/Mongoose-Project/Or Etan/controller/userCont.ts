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
    const verifiedUser:any = await user.find({
      email: userEmail,
      password: password,
    });
    const verifiedUser2:any = await user.findOne({
      email: userEmail,
      password: password,
    });


    if (users.length > 0) {
      if (verifiedUser.length === 1) {
        console.log(verifiedUser[0]._id);
        
        console.log(verifiedUser2._id);
        
        res.cookie('currentUser', {id: verifiedUser._id})
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
  console.log(userURL, requestedPage);

  const appURL = userURL.split("/")[2];
  const userId = userURL.slice(-24);
  const currentUser = await user.find({ _id: userId });
  const newURL = `/${requestedPage}.html?id=${userId}`;
  console.log(newURL);

  let { firstName, lastName, gender, role, email, password } = currentUser[0];

  if (requestedPage === "home") {
    try {
      res.send({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        role: role,
        newURL: newURL,
      });
    } catch (error) {
      console.log("error in renderPage: home");
      console.log(error.message);

      res.send({ error: error.message });
      // }
    }
    return;
  }

  if (requestedPage === "settings") {
    try {
      res.send({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        role: role,
        email: email,
        password: password,
        newURL: newURL,
      });
    } catch (error) {
      console.log("error in renderPage: settings");
      console.log(error.message);

      res.send({ error: error.message });
      // }
    }
    return;
  }

  if (requestedPage === "info") {
    try {
      res.send({
        newURL: newURL,
      });
    } catch (error) {
      console.log("error in renderPage: info");
      console.log(error.message);

      res.send({ error: error.message });
      // }
    }
    return;
  }

  if (requestedPage === "RecentlyCreated") {
    try {
      res.send({
        newURL: newURL,
      });
    } catch (error) {
      console.log("error in renderPage: RecentlyCreated");
      console.log(error.message);

      res.send({ error: error.message });
      // }
    }
    return;
  }
};

export const passwordCheck = async (req, res) => {
  try {
    const { password, userId } = req.body;
    console.log(password);
    const isRightPassword = await user.find({
      _id: userId,
      password: password,
    });
    res.send({ isRightPassword });
  } catch (error) {
    console.log("error in renderPage: RecentlyCreated");
    console.log(error.message);

    res.send({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      firstNameUpdate,
      lastNameUpdate,
      emailUpdate,
      genderUpdate,
      roleUpdate,
      passwordUpdate,
      passwordConfirmation,
      userId,
    } = req.body;
    

    const updateUser = await user.updateOne({_id: userId, password: passwordConfirmation}, {firstName:firstNameUpdate, lastName:lastNameUpdate, email:emailUpdate, gender:genderUpdate, role:roleUpdate, password:passwordUpdate})
const updateStatus = await updateUser.matchedCount
if (updateStatus === 1){
  const updatedUser = await user.find({_id: userId})
  console.log(updatedUser, updateStatus);
  
  res.send({updatedUser: updatedUser})
  return
}
if(updateStatus === 0) {
res.send({updateStatus: updateStatus})
}
  
  } catch (error) {
    console.log("error in updateUser");
    console.log(error.message);
    res.send({ error: error.message });
  }
};
