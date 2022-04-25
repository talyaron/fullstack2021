import bcrypt from "bcrypt"
import jwt from 'jwt-simple';
import { Buffer } from 'buffer';
import Drawing from "../model/drawModel";
import { type } from "os";
import User from "../model/userModel";
const secret = process.env.JWT_SECRET;

export const addDrawing = async (req, res) => {
    const secret = process.env.JWT_SECRET;
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);

    const drawing = new Drawing(req.body);
    drawing.ownerId = userInfo.userId
    drawing.ownerName = userInfo.username
    if (!drawing.type) {
        drawing.type = 'avatar';
    }

    await drawing.save()
    res.send({ ok: true })
};

export const getUserDrawings = async (req, res) => {
    const secret = process.env.JWT_SECRET;
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);
    // let avatars = await Drawing.find({ ownerId: userInfo.userId, type: 'avatar' });
    let avatars = await Drawing.find({ $or: [{ ownerId: userInfo.userId, type: 'avatar' }, { ownerId: userInfo.userId, type: 'currentAvatar' }] });
    avatars = BSONtoString(avatars);
    res.send({ avatars, user: userInfo.username });
}

export const setUserAvatar = async (req, res) => {
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);
    const { id } = req.body;
    await Drawing.findOneAndUpdate({ ownerId: userInfo.userId, type: "currentAvatar" }, { type: "avatar" })
    await Drawing.findOneAndUpdate({ _id: id }, { type: "currentAvatar" })
    res.send({ ok: true })
}
export const deleteAvatar = async (req, res) => {
    const { id } = req.body;
    await Drawing.findOneAndDelete({ _id: id })
    res.send({ ok: true })
}
export const getRoomDrawings = async (req, res) => {
    const roomCode = req.query.roomCode;
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);

    let drawings = await Drawing.find({ type: roomCode });
    let user:any = await User.find({ _id: userInfo.userId });
    drawings = BSONtoString(drawings);

    res.send({ drawings, id: userInfo.userId, answer: user.word});
}

function BSONtoString(arr) {
    arr.forEach(img => {
        if (img.imgData) {
            img.dataURL = 'data:image/jpeg;base64,' + Buffer.from(img.imgData).toString()
            img.imgData = 0;
        }
    });
    return arr;
}


