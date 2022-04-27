import Room from "../model/roomModel";
import User from "../model/userModel";


export const addRoom = async (req, res) => {
    const newRoom = new Room();
    const { roomId } = req.body;
    const r = await Room.findOne({ roomCode: roomId });

    if (!r) {
        newRoom.roomCode = roomId;
        newRoom.players = 1;
        newRoom.lies = 0;
        newRoom.status = "lobby";
        await newRoom.save();
    }
    res.send({ ok: true })
}
export const joinRoom = async (req, res) => {
    const { roomId } = req.query
    const room = await Room.findOne({ roomCode: roomId, status: "lobby" })
    if (room) {
        res.send({ result: true })
    } else {
        res.send({ result: false })
    }
}

export const StartRoomGame = async (req, res) => {
    const { roomId } = req.body;
    await Room.findOneAndUpdate({ roomCode: roomId, status: "lobby" }, { status: "drawing" });
    res.send({ ok: true })
}

export const addLie = async (req, res) => {
    const roomId = req.body.roomId;
    await Room.findOneAndUpdate({ roomCode: roomId }, { $inc: { lies: 1 } });
    res.send({ ok: true })
}

export const updateAnswer = async (req, res) => {
    const newAnswer = req.body.answer;
    const roomId = req.body.roomCode;
    await Room.findOneAndUpdate({ roomCode: roomId }, { answer: newAnswer });
    res.send({ ok: true })
}

export const checkLie = async (req, res) => {
    const lie = req.query.lie;
    const roomId = req.query.roomId;

    const room = await Room.find({ roomCode: roomId, answer: lie });

    if (room) res.send({ result: true })
    else{
        await User.findOneAndUpdate({ word: lie }, {$inc:{points: 500}});
        res.send({ result: false })
    } 
}