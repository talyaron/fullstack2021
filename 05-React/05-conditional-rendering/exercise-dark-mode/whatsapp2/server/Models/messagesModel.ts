import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    messageId: String,
    ownerName: String,
    content: String,
    date: String,
    ownerId: String,
});

const Message = mongoose.model("messages", MessageSchema);

export default Message;