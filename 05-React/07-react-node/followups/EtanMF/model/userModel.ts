import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  position: String,
  workSpace: String,
});

const User = mongoose.model("users", UserSchema);
export default User;
