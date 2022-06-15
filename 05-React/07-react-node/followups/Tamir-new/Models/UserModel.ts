import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ name:"string" });
export const UserModel = mongoose.model('newuser', UserSchema);

