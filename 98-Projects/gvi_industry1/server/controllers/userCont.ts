const secret = process.env.JWT_SECRET;
import UserModel from '../models/userModel';
import selectedUsersModel from '../models/selectedUsers';
import JWT from 'jwt-simple';

export const getUsers = async (req, res) => {
  try {
    const { currentUser } = req.body;
    if (Object.keys(currentUser).length === 0) throw new Error("no user connected");
    console.log('current',currentUser);
    if (currentUser.type === 'mentee') {
      const users = await UserModel.find({ type: 'mentor' });
      //not showing the correct results
      const filterUsers = users.filter(
        (mentor) => mentor.sector === currentUser.sector
      );
      res.send({ filterUsers, ok: true });
    } else if (currentUser.type === 'mentor') {
      const users = await UserModel.find({ type: 'mentee' });
      //not showing the correct results
      const filterUsers = users.filter(
        (mentee) => mentee.sector === currentUser.sector
      );
      res.send({ filterUsers, ok: true });    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
};

export const getSearch = async (req, res) => {
  try {
    const { currentSearch } = req.body;
    console.log(currentSearch)

    let searchPattern = new RegExp(`${currentSearch}`, 'i')
    console.log(searchPattern);


    const allSearches = await UserModel.find({ country: 'Monaco' });
    res.send({ allSearches, ok: true });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });

  }
}

export const getUser = async (req: any, res: any) => {
    try {
        const {userInfo} = req.cookies;
        const payload = JWT.decode(userInfo, secret);
        const {id} = payload;
        console.log(id);

        const user = await UserModel.findOne({_id: id});
        res.send({user});
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
};

export const selectUser = async (req: any, res: any) => {
    try {
        const {userInfo} = req.cookies;
        const payload = JWT.decode(userInfo, secret);
        const currentUserId = payload.id;
        console.log('initial id',currentUserId)

        const {selectedUserId} = req.body;
        //add err check
        const selectedUser = await UserModel.findById(selectedUserId);

        //check if it exists
        if (!selectedUser) throw new Error('couldnt find the user in the DB');

        const {email, name, image} = selectedUser;
        console.log('selectedUser', selectedUser);

        const searchSelecting = {
            'selectedUser.email': selectedUser.email,
            'selectingUserId':currentUserId
        };

        const selectingUser: any = await selectedUsersModel.findOne(searchSelecting);
        console.log('selectingUser', selectingUser);

        let newSelection: any;
        if (!selectingUser) {
            console.log('no record in DB - saving');
            const newSelectionDB = new selectedUsersModel({
                // bothId: `${id}-${selectedUser._id}`,
                selectingUserId: currentUserId,
                selectedUser: {email, name, image},
                selected: true,
            });
            newSelection = await newSelectionDB.save();
        } else {
            if (selectingUser.selected === true) {
                console.log('a record in DB - turning off');
                newSelection = await selectedUsersModel.findOneAndUpdate(searchSelecting, {selected: false});
            } else {
                console.log('a record in DB - turning on');
                newSelection = await selectedUsersModel.findOneAndUpdate(searchSelecting, {selected: true});
            }
        }

        res.send({success: true, selection: newSelection});
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
};

export async function getSelectingUser(req, res) {
    try {
        const {userInfo} = req.cookies;
        const payload = JWT.decode(userInfo, secret);
        const {id} = payload;
        if (!id) throw new Error('id not found');
        const selectingUser = await UserModel.findById(id);
        if (!selectUser) throw new Error('User not found');
        res.send(selectingUser);
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
}

export async function getSelectedUserdata(req, res) {
    try {
        const {_id} = req.body;
        const users = await selectedUsersModel.find({});
        // console.log(users);
        const selectedUsers = users.filter((user) => user.selectingUserId === _id && user.selected === true);
        res.send({ok: true, selectedUsers});
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
}

export async function getAllRecipients(req, res) {
    try {
        const {userInfo} = req.cookies;
        const userDecodedInfo = JWT.decode(userInfo, secret);
        const {id} = userDecodedInfo;
        const currentUser = await UserModel.findOne({_id: id});
        let allRecipients = [];
        if (currentUser.type === 'mentee') {
            res.send(id);
            console.log('id was sent -120 userCont', id);
            
            return;
        }
        if (currentUser.type === 'mentor') {
            const allRecipientsIds = currentUser.mentees;
            let localArr: Array<any> = [];
            const getRecipientsList = async () => {
                for (let recipient of allRecipientsIds) {
                    let rec = await UserModel.findOne({_id: recipient}, {password: 0});
                    localArr.push(rec);
                }
                // allRecipientsIds.forEach(async (recipient) => {
                //     let rec = await UserModel.findById(recipient);
                //     localArr = [...localArr, rec];
                //     // console.log(rec, 'rec');
                //     // console.log(localArr, 'localArr');
                // });
                // console.log(localArr, 'localArr1');

                return localArr;
            };
            allRecipients = await getRecipientsList();
            // console.log(await getRecipientsList(), 'recipientsList');
        }

        if (allRecipients === []) throw new Error('no Users were found');
        if (allRecipients !== []) {
            res.send({allRecipients, ok: true});
        }
    if (currentUser.type === 'mentor') {
      // allUsers = currentUser.mentees;
    }
    if (allRecipients === []) throw new Error('no Users were found');
    res.send({ allRecipients, ok: true });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password, 'loggedIn');
        if (typeof email === 'string' && typeof password === 'string') {
            console.log(email, 'loggedIn 2');

            const user = await UserModel.findOne({email}).collation({locale: 'en_US', strength: 1});
            //collation strength 1 performs comparisons of the base characters only, ignoring other differences such as diacritics and case.
            console.log(user);
            if (user) {
                //checking if password is right for the email that was put
                if (user.password === password) {
                    const payload = {email, id: user._id, loggedInUser: true, type: user.type, name: user.name};
                    const token = JWT.encode(payload, secret);
                    //made that the cookie is coded and cant be hacked into
                    //we put the secret in the .env so that cant be taken either
                    res.cookie('userInfo', token, {httpOnly: true});
                    res.send({ok: true, login: true, user});
                    return;
                }
            }
            throw new Error('email or password are incorrect');
        } else {
            throw new Error('email or password is missing');
        }
    } catch (error) {
        console.error(error.message);
        res.send({error: error.message});
    }
};

export const addUser = async (req, res) => {
    try {
        const {user} = req.body;
        console.log(user);

        const newUser = new UserModel(user);
        // const result = await newUser.save();
        console.log(newUser);
        // res.send(result);
        // Already exists CHECK
        const userFound: any = await UserModel.findOne({email: user.email});

        if (userFound) {
            res.send('Already exists');
        }
        // Already exists CHECK
        else {
            const newUser = new UserModel(user);
            const result = await newUser.save();
            console.log(newUser);
            const payload = {loggedInUser: true, type: newUser.type, id: newUser._id, name: user.name};
            const token = JWT.encode(payload, secret);
            res.cookie('userInfo', token, {httpOnly: true});
            res.send({result, ok: true, login: true});
            return;
        }
    } catch (err) {
        console.error(err);
        res.send({error: err.message, ok: false});
    }
};
