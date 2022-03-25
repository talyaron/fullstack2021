import mongoose from 'mongoose';

const artSchema = new mongoose.Schema({
    udserName: String,
    email: String,
    password: String,
    url: String,
    fund: Number,
  });
  
  const User = mongoose.model('newUser', artSchema)
  export default User;