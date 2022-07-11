import UserModel from '../models/userModel';
import JWT from 'jwt-simple';
const secret = process.env.JWT_SECRET;

export const getMentors = async (req, res) => {
    try {
        const {selectedUser} = req.body;
        const allMentors = await UserModel.find({type: 'mentor'});
        const filterMentors = allMentors.filter((mentor) => mentor.sector === selectedUser.sector || mentor.country === selectedUser.country);
        // console.log(filterMentors)
        res.send({filterMentors, ok: true});
    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
}
export const getUser = async (req: any, res: any) => {
    try {
        const { userInfo } = req.cookies
        const payload = JWT.decode(userInfo, secret)
        const { id } = payload
        console.log(id)

        const user = await UserModel.find({ _id: id })
        res.send({ user })

    } catch (error) {
        console.log(error.error);
        res.send({error: error.message});
    }
};

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
        let allUsers = [];
        if (currentUser.type === 'mentee') {
            allUsers = currentUser.initiatives.mentors;
        }
        if (currentUser.type === 'mentor') {
            allUsers = currentUser.mentees;
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

}



export const addUser = async (req, res) => {
    try {
        const { user } = req.body;
        console.log('user.sector:',user.sector);


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

