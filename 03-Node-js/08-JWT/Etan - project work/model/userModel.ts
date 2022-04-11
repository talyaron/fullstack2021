import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  firstName: String,
  lastName: String,
  gender: String,
});

const user = mongoose.model("users", UserSchema);
export default user;
