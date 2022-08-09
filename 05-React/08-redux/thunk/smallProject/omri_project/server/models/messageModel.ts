import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
    text: String,
    img: String
});

const messageModel = mongoose.model('messages', messageSchema);
export default messageModel;