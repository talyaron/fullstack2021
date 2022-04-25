import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomCode: String,
    ownerId: String,
    players: Number,
    answer: String,
    lies: Number,
    status: String
});

const Room = mongoose.model('rooms', roomSchema);
export default Room;