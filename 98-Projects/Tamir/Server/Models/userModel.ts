import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:String,
  email: String,
  password: String,
});
export const UserModel = mongoose.model("users", UserSchema);
