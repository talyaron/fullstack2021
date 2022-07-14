import UserModel from "../models/userModel";
import selectedUsersModel from "../models/selectedUsers";
import JWT from "jwt-simple";

export const getMentors = async (req, res) => {
  try {
    const { currentUser } = req.body;
    console.log(currentUser);
    // if (currentUser.type === 'mentee') {                 
      const allMentors = await UserModel.find({});
      //not showing the correct results
      const filterMentors = allMentors.filter(
        (mentor) => mentor.country === currentUser.country
      );
      res.send({ allMentors, ok: true });
      console.log(filterMentors);
    // }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};
export const getUser = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;
    console.log(id);

    const user = await UserModel.find({ _id: id });
    res.send({ user });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const selectUser = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;

    const { selectedUserId } = req.body;
    //add err check
    const selectedUser = await UserModel.findById(selectedUserId);

    //check if it exists
    if (!selectedUser) throw new Error("couldnt find the user in the DB");

    const { email, name, image } = selectedUser;
    console.log('selectedUser', selectedUser)
    const searchSelecting = {
      selectedUser: { email: selectedUser.email }
    };
    const selectingUser: any = await selectedUsersModel.findOne(
      searchSelecting
    );
    console.log("selectingUser", selectingUser);

    let newSelection: any;
    if (!selectingUser) {
      console.log("no record in DB - saving");
      const newSelectionDB = new selectedUsersModel({
        bothId: `${id}-${selectedUser._id}`,
        selectingUserId: id,
        selectedUser: { email, name, image },
        selected: true,
      });
      newSelection = await newSelectionDB.save();
    } else {
      if (selectingUser.selected === true) {
        console.log("a record in DB - turning off");
        newSelection = await selectedUsersModel.findOneAndUpdate(
          searchSelecting,
          { selected: false }
        );
      } else {
        console.log("a record in DB - turning on");
        newSelection = await selectedUsersModel.findOneAndUpdate(
          searchSelecting,
          { selected: true }
        );
      }
    }

    res.send({ succes: true, selection: newSelection });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export async function getAllRecipients(req, res) {
  try {
    const allUsers = await UserModel.find({});
    if (!allUsers) throw new Error("no Users were found");
    res.send({ allUsers, ok: true });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

const secret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password, "loggedIn");
    if (typeof username === "string" && typeof password === "string") {
      console.log(username, "loggedIn 2");

      const user = await UserModel.findOne({ email: username });
      console.log(user);
      if (user) {
        //checking if password is right for the username that was put
        if (user.password === password) {
          const payload = {
            username,
            id: user._id,
            loggedInUser: true,
            type: user.type,
          };
          const token = JWT.encode(payload, secret);
          //made that the cookie is coded and cant be hacked into
          //we put the secret in the .env so that cant be taken either
          res.cookie("userInfo", token, { httpOnly: true });
          res.send({ ok: true, login: true, user });
          return;
        }
      }
      throw new Error("username or password are incorrect");
    } else {
      throw new Error("username or password is missing");
    }
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);

    let newUser = new UserModel(user);
    const result = await newUser.save();
    console.log(newUser);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send({ error: err.message, ok: false });
  }
};
