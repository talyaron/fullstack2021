import mongoose from "mongoose";
import { UserSchema } from "./userModel";

const selectedUserSchema = new mongoose.Schema({
  selectingUserId: {
    type: String,
    required: true,
  },
  selectedUser: {
    email: String,
    name: {
      first: String,
      last: String,
    },
    image: String,
  },
  selected: Boolean,
});

const selectedUsersModel = mongoose.model("selected-users", selectedUserSchema);

export default selectedUsersModel;
