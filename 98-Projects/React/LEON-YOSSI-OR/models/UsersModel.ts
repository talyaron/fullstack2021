import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    title:String,
    text:String,
    username:String,
    password:String,
    image:String,
    date:String
})

const User = mongoose.model('users', UserSchema)

export default User
