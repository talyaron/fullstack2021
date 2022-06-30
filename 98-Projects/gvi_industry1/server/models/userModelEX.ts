import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName:String,
    description:String,
    country:String,
    linkedInProfile:String,
    type:String,
    fieldsOfKnowledge:String,
    sector:String
})

const UserModeEX = mongoose.model('users',UserSchema)

export default UserModeEX