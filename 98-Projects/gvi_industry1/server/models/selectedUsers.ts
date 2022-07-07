import mongoose from "mongoose";
import {UserSchema} from "./userModel";

const selectedUserSchema = new mongoose.Schema({
  selectingUserId: {
    type: String,
    unique: true,
    required: true,
  },
  selectedUsers: [UserSchema]
});

const selectedUsersModel = mongoose.model('selectedUsers', selectedUserSchema);

export default selectedUsersModel;