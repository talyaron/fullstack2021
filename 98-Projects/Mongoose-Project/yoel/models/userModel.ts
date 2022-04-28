import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    }
  })
  
 export const User = mongoose.model('users', UserSchema);
