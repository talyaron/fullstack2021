const secret = process.env.JWT_SECRET;
import UserModel from "../models/userModel";
import selectedUsersModel from "../models/selectedUsers";
import initiativeModel from "../models/initiativeModel";
import countryFlagModel from "../models/countryFlagModel";
import JWT from "jwt-simple";
import requestsUsersModel from "../models/requestedModel";
const cloudinary = require('./uploads/cloudinary')

export const getUser = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;
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
export const getSector = async (req, res) => {
  try {
    const allFiltered = await UserModel.find({}).select('sector')
    const filterArray = new Set()
    const result = allFiltered.filter(item => {
      const isDuplicate = filterArray.has(item.sector);
      filterArray.add(item.sector)
      if (!isDuplicate) {
        return true
      }
      return false
    })
    // console.log("server:" + result)

    res.json({ result });
    // console.log("filtered: " + result);


  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const getField = async (req, res) => {
  try {
    const allFiltered = await UserModel.find({}).select('fieldsOfKnowledge')
    const filterArray = new Set()
    const result = allFiltered.filter(item => {
      const isDuplicate = filterArray.has(item.fieldsOfKnowledge);
      filterArray.add(item.fieldsOfKnowledge)
      if (!isDuplicate) {
        return true
      }
      return false
    })
    console.log("server:" + result)

    res.json({ result });
    console.log("filtered: " + result);


  } catch (error) {
    
    res.send({ error: error.message });
  }
};



/////////////// filter function based on checkedField/ClickedField
export const getCheckedSector = async (req, res) => {
  try {
    const {checkedField,checked} = req.body;

    

    const allChecked = await UserModel.find({ sector: checkedField })
    
    
    res.send({ allChecked, ok: true })


  } catch (error) {
    res.send({ error: error.message });
  }
}



export const getCheckedField = async (req, res) => {
  try {
    const {checkedField,checked} = req.body;

    

    const allChecked = await UserModel.find({ fieldsOfKnowledge: checkedField })
    
    
    res.send({ allChecked, ok: true })


  } catch (error) {
    res.send({ error: error.message });
  }
}












export const getSearch = async (req, res) => {
  try {
    const { currentSearch } = req.body;
    if (!currentSearch) throw new Error('No search term')
    console.log(currentSearch)

    let searchPattern = new RegExp(`${currentSearch}`,'i')
    console.log(searchPattern);
    const regex = new RegExp(currentSearch, 'i')

    const allSearches = await UserModel.find({ "name.first": regex }||{"name.last": regex});
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

    const searchSelecting = {
      "selectedUser.email": selectedUser.email,
      selectingUserId: currentUserId,
    };

    const selectingUser: any = await selectedUsersModel.findOne(
      searchSelecting
    );
    let newSelection: any;
    if (!selectingUser) {
      console.log("no record in DB - saving");
      const newSelectionDB = new selectedUsersModel({
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

    if (!selectingUser) throw new Error("User not found");
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
      let chosen = [];
      selectedUsers.forEach((selectedUser, i) => {
        const mentor = selectedUesrModel.filter(
          (selectedMentor) =>
            selectedMentor.email === selectedUser.selectedUser["email"]
        );
        let user = mentor[0];
        const country = flags.filter(
          (country) => country.countryName === user.country
        );
        if (country.length > 0) {
          user['country'] = `${country[0].countryFlag}`;
        };
        chosen.push(user);
      });
      res.send({ ok: true, chosen });
    }

    else if (type === "mentor") {
      let chosen = [];
      selectedUsers.forEach((selectedUser, i) => {
        const mentee = selectedUesrModel.filter(
          (selectedMentee) =>
            selectedMentee.email === selectedUser.selectedUser["email"]
        );
        let user = mentee[0];
        const country = flags.filter(
          (country) => country.countryName === user.country
        );
        if (country.length > 0) {
          user['country'] = `${country[0].countryFlag}`;
        };
        const menteeIntiative = selectedUserInitiatives.filter(
          (selectedMentee) => selectedMentee.ownerUserId === user.id
        );
        if (menteeIntiative.length > 0) {
          user['fieldsOfKnowledge'] = `${menteeIntiative[0].companyName}`
          user['sector'] = `${menteeIntiative[0].stage}`
        }
        console.log(menteeIntiative);
        chosen.push(user);
      });
      res.send({ ok: true, chosen });
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
    if (currentUser.type === 'mentee') {
      res.send({ user: userDecodedInfo });
      return;
    }
    if (currentUser.type === "mentor") {
      const allRecipientsIds = currentUser.mentees;
      let localArr: Array<any> = [];
      const getRecipientsList = async () => {
        for (let recipient of allRecipientsIds) {
          console.log(recipient, 'mentor');

          let rec = await UserModel.findOne(
            { _id: recipient },
            { password: 0 }
          );

          let readyRec = { userId: rec._id, name: rec.name }
          localArr.push(readyRec);
        }
        return localArr;

      };
      allRecipients = await getRecipientsList();
    }

    if (allRecipients === []) throw new Error("no Users were found");
    if (allRecipients.length > 0) {
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
      // console.log(user);
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
    // console.log(user);


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
        email: newUser.email,
        loggedInUser: true,
        type: newUser.type,
        id: newUser._id,
        name: newUser.name,
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

    const { userId } = req.body;

    const user = await UserModel.findOne({ _id: userId });

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

//======================================================================================

export const request = async (req: any, res: any) => {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const currentUserId = payload.id;

    const { selectedUserId } = req.body;
    const selectedUser = await UserModel.findById(selectedUserId);
    if (!selectedUser) throw new Error("couldnt find the user in the DB");

    const { email, name, image } = selectedUser;

    const searchSelecting = {
      "selectedUser.email": selectedUser.email,
      selectingUserId: currentUserId,
    };

    const selectingUser: any = await requestsUsersModel.findOne(
      searchSelecting
    );
    let newSelection: any;
    if (!selectingUser) {
      console.log("no record in DB - saving");
      const newSelectionDB = new requestsUsersModel({
        userSendingRequestId: currentUserId,
        userSendingRequestDetails: { email, name, image },
        userRecievingRequestId: "........",
        userRecievingRequestDetails: { email, name, image },
        requestText: ".........",
        sendingTheRequest: true,
        recievigTheRequest: false,

      });
      newSelection = await newSelectionDB.save();
    } else {
      if (selectingUser.sendingTheRequest === true) {
        console.log("a record in DB - turning off");
        newSelection = await requestsUsersModel.findOneAndUpdate(
          searchSelecting,
          { sendingTheRequest: false }
        );
      } else {
        console.log("a record in DB - turning on");
        newSelection = await requestsUsersModel.findOneAndUpdate(
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




//======================================================================================