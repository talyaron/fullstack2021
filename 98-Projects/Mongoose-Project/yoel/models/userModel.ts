import mongoose from "mongoose"
<<<<<<< HEAD

const usernameSchema = new mongoose.Schema({
    name: {
        typeof: String,
        require: true
    },
    password: {
        typeof: String,
        require: true
    }
})
const User = mongoose.model('users', usernameSchema)
export default User;
=======
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  })
  
 export  const User = mongoose.model('users', UserSchema);
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84
