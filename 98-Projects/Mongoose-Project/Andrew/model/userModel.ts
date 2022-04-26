import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    inRoom: String,
    word: String,
    lie: String,
    points: Number
});

const User = mongoose.model('users', userSchema);
export default User;