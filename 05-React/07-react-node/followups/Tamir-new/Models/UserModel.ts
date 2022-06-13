import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ name: "sting" });
export const UserModel = mongoose.model("users", UserSchema);
