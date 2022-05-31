import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  gender: String,
  birthDate: String,
});

const User = mongoose.model("users", UserSchema);
export default User;
