import mongoose from "mongoose";
import { UserSchema } from "./userModel";

const requestedUserSchema = new mongoose.Schema({
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

const requestedUsersModel = mongoose.model("requested-users", requestedUserSchema);

export default requestedUsersModel;
