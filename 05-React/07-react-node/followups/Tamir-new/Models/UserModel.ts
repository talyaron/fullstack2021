import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
export const UserModel = mongoose.model("users", UserSchema);
