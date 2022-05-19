import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  role: String,
  gender: String,
  birthDate: String,
});

const user = mongoose.model("users", UserSchema);
export default user;
