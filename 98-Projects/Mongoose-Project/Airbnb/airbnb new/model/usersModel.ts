import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
  });
  const Users = mongoose.model("users", userSchema);
  export default Users;
  