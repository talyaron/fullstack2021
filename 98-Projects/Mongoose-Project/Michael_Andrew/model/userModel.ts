import mongoose from 'mongoose';

const artSchema = new mongoose.Schema({
  artName: String,
  url: String,
  author: String,

});

const Art = mongoose.model('newArt', artSchema)
export const art =  Art;

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  url: String,
  fund: Number,
  artCollection: [artSchema]
});

const User = mongoose.model('newUser', userSchema)
export default User;

