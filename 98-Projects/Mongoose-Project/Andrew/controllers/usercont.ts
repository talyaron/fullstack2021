import bcrypt from "bcrypt"
import User from '../model/userModel'
import jwt from 'jwt-simple';
import { ok } from "assert";
const secret = process.env.JWT_SECRET;


// export const updateUser = async (req, res) => {

//     const { user } = req.body;
//     await User.updateOne({ _id: user._id }, user);
// }
export const addUser = async (req, res) => {

    const newUser = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const existing: any = await User.find({ $or: [{ username: newUser.username }, { email: newUser.email }] }, 'username')
    if (!existing.length) {
        const r = await newUser.save()
        if (newUser == r) res.send({ result: 'user created' });
        else res.send({ result: 'DB error' });
    }
    else {
        if (existing[0].username == newUser.username) res.send({ result: 'username already exists' });
        else res.send({ result: 'email already exists' })
    }
}

export const logUser = async (req, res) => {

    const params = req.body;
    const user = await User.findOne({ email: params.email });
    if (user) {
        const v = await bcrypt.compare(params.password, user.password);
        if (v) {
            const token = setUserCookie(user);
            res.cookie("userInfo", token, { maxAge: 3600000 })

            res.send({ result: 'authorized' })
        }
        else res.send({ result: 'wrong password' })
    }
    else res.send({ result: 'user not found' })
}


export const addUserToRoom = async (req, res) => {
    const { roomId } = req.body;
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);

    const user = await User.findOneAndUpdate({ _id: userInfo.userId }, { inRoom: roomId });

    res.send({ pk: true });
}
export const addLie = async (req, res) => {
    const lie = req.body.lie
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);
    await User.findOneAndUpdate({ _id: userInfo.userId }, { lie: lie });
    res.send({ ok: true });
}

export const getLies = async (req, res) => {
    const { roomId } = req.query
    const users = await User.find({ inRoom: roomId });
    const lies = [];
    for (const user of users) {
        lies.push(user.lie);
    }
    res.send(lies);
}

export const addPoints = async (req, res) => {
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);
    const lie = req.body.lie;

    await User.findOneAndUpdate({ _id: userInfo.userId }, { $inc: { points: 1000 } });
    await User.findOneAndUpdate({ word: lie }, { $inc: { points: 1000 } });
    res.send({ ok: true })
}

function setUserCookie(user) {
    const payload = { username: user.username, userId: user._id };
    const token = jwt.encode(payload, secret)
    return token;
}