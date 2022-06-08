import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    text:String,
    username:String,
    password:String,
    image:String
})

const User = mongoose.model('users', UserSchema)

export default User
