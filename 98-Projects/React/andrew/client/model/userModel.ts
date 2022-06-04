import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    pic: String
})

const User = mongoose.model('users',userSchema);
export default User;