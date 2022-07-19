import mongoose from 'mongoose';
import {NameSchema} from './userModel';

const UserMessageSchema = new mongoose.Schema({
    userId: String,
    name: {first: String, last: String},
});

const MessageSchema = new mongoose.Schema({
    room: String,
    sender: UserMessageSchema,
    recipient: UserMessageSchema,
    text: String,
    file: String,
    // time: String,
});

const MessageModel = mongoose.model('messages', MessageSchema);
export default MessageModel;
