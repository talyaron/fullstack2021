import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    login: Boolean
  });

  const User = mongoose.model('users', UserSchema);
  export default User;