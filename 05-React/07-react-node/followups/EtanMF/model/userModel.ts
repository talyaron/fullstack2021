import mongoose from "mongoose";
import { Types } from "mongoose"
const UserSchema = new mongoose.Schema({
  //_id: Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  position: String,
  workSpace: String,
});

const User = mongoose.model("users", UserSchema);
export default User;
