import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    role:String,
    firstName: String,
    lastName: String,
    birthday: String,
    country: String,
    password: String,
    email: String,
    gender: String,
  })
  const User = mongoose.model('User', userSchema);
  export default User;