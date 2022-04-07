import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String
  });

  const User = mongoose.model('users', UserSchema);
  export default User;