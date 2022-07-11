import mongoose from "mongoose";
import { UserSchema } from "./userModel";

export const selectedUser = new mongoose.Schema({
  selelctingUserId: {
    type: String,
    unique: true,
    required: true,
  },
  selectedUsers: [UserSchema],
});
