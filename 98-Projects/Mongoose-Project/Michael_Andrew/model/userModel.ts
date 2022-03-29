import mongoose from 'mongoose';

//למה לא אקספורט

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  url: String,
  fund: Number,
});

const User = mongoose.model('newUser', userSchema)
export default User;

