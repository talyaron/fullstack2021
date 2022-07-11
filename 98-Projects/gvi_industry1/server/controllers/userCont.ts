

const secret = process.env.JWT_SECRET;
import UserModel from "../models/userModel";
import selectedUsersModel from "../models/selectedUsers";
import JWT from "jwt-simple";

export const getMentors = async (req, res) => {
  try {
    const { currentUser } = req.body;
    console.log(currentUser);
    const allMentors = await UserModel.find({});
    //not showing the correct results
    const filterMentors = allMentors.filter(
      (mentor) => mentor.country === currentUser.country
    );
    res.send({ allMentors, ok: true });
    console.log(filterMentors);
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

export async function getSelectingUser(req, res) {
  try {
    const { userInfo } = req.cookies;
    const payload = JWT.decode(userInfo, secret);
    const { id } = payload;
    if (!id) throw new Error('id not found');
    const selectingUser = await UserModel.findById(id);
    if (!selectUser) throw new Error('User not found');
    res.send(selectingUser);
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getSelectedUserdata(req, res) {
  try {
    const { _id } = req.body;
    const users = await selectedUsersModel.find({})
    // console.log(users);
    const selectedUsers = users.filter((user) => user.selectingUserId === _id && user.selected === true);
    res.send({ ok: true, selectedUsers })
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getAllRecipients(req, res) {
    // get logged in user id from cookie,
    // insert it inside the find.
    // check if user type is mentor or mentee
    try {
        const {userInfo} = req.cookies;
        const userDecodedInfo = JWT.decode(userInfo, secret);
        const {id} = userDecodedInfo;
        const currentUser = await UserModel.findOne({_id: id});
        console.log(currentUser, 'userCont -47');
        let allUsers:Array<any> = [];
        if (currentUser.type === 'mentee') {
            // allUsers = currentUser.initiatives.mentors;
        }
        if (currentUser.type === 'mentor') {
            // allUsers = currentUser.mentees;
        }
        if (allUsers === []) throw new Error('no Users were found');
        res.send({allUsers, ok: true});
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password, 'loggedIn');
        if (typeof email === "string" && typeof password === "string") {
            console.log(email, 'loggedIn 2');

            const user = await UserModel.findOne({ email })
        // .collation({ locale: "en_US", strength: 1 });
            console.log(user);
            if (user) {

                //checking if password is right for the email that was put
                if (user.password === password) {
                    const payload = { email, id: user._id, loggedInUser: true, type: user.type }
                    const token = JWT.encode(payload, secret)
                    //made that the cookie is coded and cant be hacked into
                    //we put the secret in the .env so that cant be taken either
                    res.cookie('userInfo', token, { httpOnly: true })
                    res.send({ ok: true, login: true, user })
                    return
                }
            }
            throw new Error("email or password are incorrect")
        } else {
            throw new Error("email or password is missing")
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
        // Already exists CHECK
        const userFound: any = await UserModel.findOne({ email: user.email })

        if (userFound) {
            res.send('Already exists')
        }
        // Already exists CHECK
        else {
            let newUser = new UserModel(user)
            const result = await newUser.save()
            console.log(newUser)

            const payload = { id: newUser._id }
            const token = JWT.encode(payload, secret)
            res.cookie('newUserInfoId', token, { httpOnly: true })

            res.send({result, ok: true, login: true})
        }

    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}

