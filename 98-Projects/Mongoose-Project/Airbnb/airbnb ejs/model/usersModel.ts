import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role:String,
    phone:String
  });
  const Users = mongoose.model("users", userSchema);
  export default Users;
  