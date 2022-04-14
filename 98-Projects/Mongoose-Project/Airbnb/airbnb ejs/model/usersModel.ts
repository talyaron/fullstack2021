import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    role:String,
    phone:String
  });
  const Users = mongoose.model("users", userSchema);
  export default Users;
  