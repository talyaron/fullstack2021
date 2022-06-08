import bcrypt from "bcrypt"
import User from "../model/userModel";
import jwt from 'jwt-simple';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer-neutral';
const secret = process.env.JWT_SECRET;


export const addUser = async (req, res) => {
    const newUser = new User(req.body);
    const svg = createAvatar(style, {
        seed: newUser.username
    });

    newUser.pic = svg
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const existing: any = await User.findOne({ username: newUser.username });

    if (!existing) {
        const r = await newUser.save()
        if (newUser === r) {
            const token = setUserCookie(newUser);
            res.cookie("userInfo", token, { maxAge: 3600000 })
            res.send({ ok: true });

        }
        else res.send({ ok: false });
    }
    else res.send({ ok: false })
}

export const getUser = async (req, res) => {
    const params = new User(req.body);
    const user = await User.findOne({ username: params.username });

    if (user) {
        const passwordCheck = await bcrypt.compare(params.password, user.password);
        if (passwordCheck) {
            const token = setUserCookie(user);
            res.cookie("userInfo", token, { maxAge: 3600000 })
            res.send({ ok: true })
        }
        else res.send({ ok: false })
    }
    else res.send({ ok: false })
}

export const getProfile = async (req, res) => {
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);
    const user = await User.findOne({ username: userInfo.username });
    if (user) {
        res.send({ user })
    }
    else res.send({ok:false})

}
export const getPostUser = async (req, res) => {
    let { userId } = req.query;
    const user = await User.findOne({ _id: userId });
    if (user) {
        res.send({ user })
    }
    else res.send({ok:false})
}

function setUserCookie(user) {
    const payload = { username: user.username, userId: user._id };
    const token = jwt.encode(payload, secret)
    return token;
}

