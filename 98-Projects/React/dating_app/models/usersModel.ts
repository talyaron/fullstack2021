import mongoose from 'mongoose';



const UsersSchema= new mongoose.Schema({
    name:String,
    age:String,
    gender:String,
    profileImg:String,
    description:String,
    password:String,
    username:String,
    img1:String,
    img2:String
})

const Users=mongoose.model("users",UsersSchema);

export default Users

