import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  public:{
    firstName: String,
    lastName: String,
    gender: String
  },
  email: String,
  password: String,
});

const User = mongoose.model("users", UserSchema);
export default User;
