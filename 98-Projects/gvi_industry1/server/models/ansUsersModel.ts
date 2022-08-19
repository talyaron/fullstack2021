import mongoose from "mongoose";
import { UserSchema } from "./userModel";

const AnsUserSchema = new mongoose.Schema({
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

const AnsUsersModel = mongoose.model("requested-answereds", AnsUserSchema);

export default AnsUsersModel;
