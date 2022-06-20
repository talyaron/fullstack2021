import mongoose from "mongoose";
import { NameSchema } from "./userModel";

const UserSchema = new mongoose.Schema({
    userId: String,
    userName: NameSchema,
})


const MessageSchema = new mongoose.Schema({
  sender: UserSchema,
  recipients: [UserSchema],
  text: String,
  file: String,
});

const MessageModel = mongoose.model("messages", MessageSchema);
export default MessageModel;
