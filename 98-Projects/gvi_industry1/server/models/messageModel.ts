import mongoose from 'mongoose';
import {NameSchema} from './userModel';

const UserMessageSchema = new mongoose.Schema({
    userId: String,
    userName: {first: String, last: String},
});

const MessageSchema = new mongoose.Schema({
    room: String,
    sender: UserMessageSchema,
    recipients: [UserMessageSchema],
    text: String,
    file: String,
    // time: String,
});

const MessageModel = mongoose.model('messages', MessageSchema);
export default MessageModel;
