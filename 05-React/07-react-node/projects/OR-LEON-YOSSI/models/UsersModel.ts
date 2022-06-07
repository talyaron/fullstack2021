import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    occupation:String,
    username:String,
    password:String,
    image:String
})

const User = mongoose.model('user', UserSchema)

export default User
