const secret = process.env.JWT_SECRET;
import UserModel from "../models/userModel";
import selectedUsersModel from "../models/selectedUsers";
import initiativeModel from "../models/initiativeModel";
import countryFlagModel from "../models/countryFlagModel";
import JWT from "jwt-simple";

export const getUser = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;
    console.log(id);

    const user = await UserModel.findOne({ _id: id });
    res.send({ user });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { currentUser } = req.body;
    if (Object.keys(currentUser).length === 0)
      throw new Error("no user connected");
    console.log("current", currentUser);
    if (currentUser.type === "mentee") {
      const users = await UserModel.find({ type: "mentor" });
      const filterUsers = users.filter(
        (mentor) => mentor.sector === currentUser.sector
      );
      res.send({ filterUsers, ok: true });
    } else if (currentUser.type === "mentor") {
      const users = await UserModel.find({ type: "mentee" });
      const filterUsers = users.filter(
        (mentee) => mentee.sector === currentUser.sector
      );
      res.send({ filterUsers, ok: true });
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};
export const getFilter = async (req, res) => {
  try {
    const allFiltered = await UserModel.find({}).select('sector').distinct('sector');
    
    res.json({ allFiltered, ok: true });
    console.log("filtered: " + allFiltered);

  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const getSearch = async (req, res) => {
  try {
    const { currentSearch } = req.body;
    if (!currentSearch) throw new Error('No search term')
    console.log(currentSearch)

    // let searchPattern = new RegExp(`${currentSearch}`,'i')
    // console.log(searchPattern);
    const regex = new RegExp(currentSearch, 'i')

    const allSearches = await UserModel.find({ country: regex });
    res.send({ allSearches, ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const selectUser = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const currentUserId = payload.id;

    const { selectedUserId } = req.body;
    const selectedUser = await UserModel.findById(selectedUserId);
    if (!selectedUser) throw new Error("couldnt find the user in the DB");

    const { email, name, image } = selectedUser;
    console.log("selectedUser", selectedUser);

    const searchSelecting = {
      "selectedUser.email": selectedUser.email,
      selectingUserId: currentUserId,
    };

    const selectingUser: any = await selectedUsersModel.findOne(
      searchSelecting
    );
    console.log("selectingUser", selectingUser);

    let newSelection: any;
    if (!selectingUser) {
      console.log("no record in DB - saving");
      const newSelectionDB = new selectedUsersModel({
        // bothId: `${id}-${selectedUser._id}`,
        selectingUserId: currentUserId,
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

    res.send({ success: true, selection: newSelection });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export async function getSelectingUser(req, res) {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;
    if (!id) throw new Error("id not found");
    const selectingUser = await UserModel.findById(id);
    if (!selectUser) throw new Error("User not found");
    res.send(selectingUser);
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getSelectedUser(req, res) {
  try {
    const { _id, type } = req.body;

    const selected = await selectedUsersModel.find({});
    const selectedUsers = selected.filter(
       (user) => user.selectingUserId === _id && user.selected === true);
    const selectedUesrModel = await UserModel.find({});
    const selectedUserInitiatives = await initiativeModel.find({});
    const flags = await countryFlagModel.find({});

    if (type === "mentee") {
      let selected = [];
      selectedUsers.forEach((selectedUser, i) => {
        const mentor = selectedUesrModel.filter(
          (selectedMentor) =>
            selectedMentor.email === selectedUser.selectedUser["email"]
        );
        const user = mentor[0];
        // const country = flags.filter((country) => country.countryName === user.country);
        console.log(flags);
        selected.push(user);
      });
      res.send({ ok: true, selected });
    } else if (type === "mentor") {
      let selected = [];
      selectedUsers.forEach((selectedUser) => {
        const mentee = selectedUesrModel.filter(
          (selectedMentee) =>
            selectedMentee.email === selectedUser.selectedUser["email"]
        );
        let user = mentee[0];
        const country = flags.filter(
          (country) => country.countryName === user.country
        );
        const flag = { countryFlag: `${country[0].countryFlag}` };
        Object.assign(user, flag);
        console.log(user);
        const menteeIntiative = selectedUserInitiatives.filter(
          (selectedMentee) => selectedMentee.ownerUserId === user.id
        );
        // const companyName = menteeIntiative[0].companyName;
        // const stage = menteeIntiative[0].stage;
        // console.log(companyName,stage);
        // console.log(companyName);
        selected.push(user);
      });
      res.send({ ok: true, selected });
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getAllRecipients(req, res) {
  try {
    const { userInfo } = req.cookies;
    const userDecodedInfo = JWT.decode(userInfo, secret);
    const { id } = userDecodedInfo;
    const currentUser = await UserModel.findOne({ _id: id });
    let allRecipients = [];
    // if (currentUser.type === 'mentee') {
    //     console.log('im a mentee');

    //     res.send({user:userDecodedInfo});
    //     return;
    // }
    if (currentUser.type === "mentor") {
      const allRecipientsIds = currentUser.mentees;
      let localArr: Array<any> = [];
      const getRecipientsList = async () => {
        for (let recipient of allRecipientsIds) {
          let rec = await UserModel.findOne(
            { _id: recipient },
            { password: 0 }
          );
          localArr.push(rec);
        }

        return localArr;
      };
      allRecipients = await getRecipientsList();
    }

    if (allRecipients === []) throw new Error("no Users were found");
    if (allRecipients !== []) {
      res.send({ allRecipients, user: userDecodedInfo });
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password, 'loggedIn');
    if (typeof email === "string" && typeof password === "string") {
      // console.log(email, 'loggedIn 2');

      const user = await UserModel.findOne({ email }).collation({
        locale: "en_US",
        strength: 1,
      });
      //collation strength 1 performs comparisons of the base characters only, ignoring other differences such as diacritics and case.
      console.log(user);
      if (user) {
        //checking if password is right for the email that was put
        if (user.password === password) {
          const payload = {
            email,
            id: user._id,
            loggedInUser: true,
            type: user.type,
            name: user.name,
          };
          const token = JWT.encode(payload, secret);
          //made that the cookie is coded and cant be hacked into
          //we put the secret in the .env so that cant be taken either
          res.cookie("userInfo", token, { httpOnly: true });
          res.send({ ok: true, login: true, user });
          return;
        }
      }
      throw new Error("email or password are incorrect");
    } else {
      throw new Error("email or password is missing");
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

   
    const userFound: any = await UserModel.findOne({ email: user.email });

    if (userFound) {
      res.send("Already exists");
    }
    // Already exists CHECK
    else {
      const newUser = new UserModel(user);
      const result = await newUser.save();
      console.log(newUser);
      const payload = {
        loggedInUser: true,
        type: newUser.type,
        id: newUser._id,
        name: user.name,
      };
      const token = JWT.encode(payload, secret);
      res.cookie("userInfo", token, { httpOnly: true });
      res.send({ result, ok: true, login: true });
      return;
    }
  } catch (err) {
    console.error(err);
    res.send({ error: err.message, ok: false });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await UserModel.findOne({ _id: id });

    res.send({ user, ok: true });
  } catch (err) {
    console.error(err);
    res.send({ error: err.message, ok: false });
  }
};
export const updateUserDetails = async (req, res) => {
  try {
    const { updatedDetails, userId } = req.body;

    const user = await UserModel.findOne({ _id: userId });

    if (updatedDetails.country) {
      user.country = updatedDetails.country;
    } else {
      user.country = user.country;
    }
    if (updatedDetails.city) {
      user.city = updatedDetails.city;
    } else {
      user.city = user.city;
    }
    if (updatedDetails.address) {
      user.address = updatedDetails.address;
    } else {
      user.address = user.address;
    }
    if (updatedDetails.email) {
      user.email = updatedDetails.email;
    } else {
      user.email = user.email;
    }
    if (updatedDetails.phone) {
      user.phone = updatedDetails.phone;
    } else {
      user.phone = user.phone;
    }
    if (updatedDetails.linkedInProfile) {
      user.linkedInProfile = updatedDetails.linkedInProfile;
    } else {
      user.linkedInProfile = user.linkedInProfile;
    }

    await UserModel.updateOne({ _id: userId }, user);

    res.send({ user, ok: true });
  } catch (err) {
    console.error(err);
    res.send({ error: err.message, ok: false });
  }
};

export const adminGetAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.send({ allUsers });
    console.log(allUsers);
    //   const allMentors = await UserModel.find({type:{theType} });
    //   res.send({ allMentors});
    //   console.log(allMentors,"mentors")
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export async function addFlags(req, res) {
  try {
    const { countryName, countryFlag } = req.body;
    const newCountry = new countryFlagModel({ countryName, countryFlag });
    await newCountry.save();
    res.send({ ok: true, newCountry });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getLoggedInProfile(req, res) {
  // get logged in user id from cookie,
  // insert it inside the find.
  // check if user type is mentor or mentee
  try {
    console.log(`hi im server start`);
    const { userInfo } = req.cookies;
    console.log(req.cookies);
    console.log(userInfo + "cookies check");
    const userDecodedInfo = JWT.decode(userInfo, secret);
    console.log(userDecodedInfo);
    const { id } = userDecodedInfo;
    const theCurrentUser = await UserModel.findOne({ _id: id });
    console.log(theCurrentUser);

    if (theCurrentUser === null) throw new Error("no Users were found");
    res.send({ theCurrentUser, ok: true });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}
