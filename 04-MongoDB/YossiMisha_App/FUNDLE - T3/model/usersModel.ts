import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  played: Number,
  wins: Number,
  current_strike: Number,
  max_strike: Number,
  oneattempt: Number,
  twoattempts: Number,
  threeattempts: Number,
  fourattempts: Number,
  fiveattempts: Number,
  sixattempts: Number
})

const FundleUser = mongoose.model('FundleUsers', UserSchema)

export default FundleUser;
