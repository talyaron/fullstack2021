import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:String , 
    password:String
})
const User = mongoose.model('users ' , userSchema);
// const newUser = new User({username , password}) // after we have the schema and colletion and model ("User") we can save the data
export default User;